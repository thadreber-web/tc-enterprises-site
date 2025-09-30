
import fs from 'fs/promises';
import path from 'path';
import Parser from 'rss-parser';

// This script now has to be run from the root of the Next.js project.
// We will add a script to the root package.json to handle this.
const CWD = 'updates-for-site/tc-enterprises-site-autoblog';
const IDEAS_FILE_PATH = path.join(CWD, 'ideas.md');
const OUTPUT_DIR = path.join(CWD, 'content/blog');
const STAGING_DIR = path.join(CWD, 'content/blog/staging');
const API_ENDPOINT = 'http://localhost:3011/api/chat';
const RSS_CONFIG_PATH = path.join(process.cwd(), 'rss-config.json');

// Initialize RSS parser
const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'media:content'],
      ['media:thumbnail', 'media:thumbnail'],
      ['content:encoded', 'content:encoded']
    ]
  }
});


/**
 * Parses command line arguments to determine the task.
 */
function getTask() {
  const args = process.argv.slice(2);

  if (args.includes('--list')) {
    return { type: 'list', value: null };
  }

  if (args.includes('--approve')) {
    const fileArg = args.find(arg => arg.startsWith('--file='));
    if (fileArg) {
      return { type: 'approve', value: fileArg.split('=')[1] };
    }
    console.error('Error: --approve requires --file=filename');
    process.exit(1);
  }

  if (args.includes('--reject')) {
    const fileArg = args.find(arg => arg.startsWith('--file='));
    if (fileArg) {
      return { type: 'reject', value: fileArg.split('=')[1] };
    }
    console.error('Error: --reject requires --file=filename');
    process.exit(1);
  }

  const fileArg = args.find(arg => arg.startsWith('--file='));
  if (fileArg) {
    return { type: 'file', value: fileArg.split('=')[1] };
  }

  const topicArg = args.find(arg => !arg.startsWith('--'));
  if (topicArg) {
    return { type: 'topic', value: topicArg };
  }

  // Default to generate mode (discovery)
  return { type: 'generate', value: null };
}

/**
 * Loads RSS configuration from file.
 */
async function loadRSSConfig() {
  try {
    const configData = await fs.readFile(RSS_CONFIG_PATH, 'utf8');
    return JSON.parse(configData);
  } catch (error) {
    console.error('Error loading RSS config:', error);
    return null;
  }
}

/**
 * Fetches articles from RSS feeds and filters for relevance.
 */
async function fetchRSSArticles() {
  const config = await loadRSSConfig();
  if (!config) return [];

  const allArticles = [];
  const keywords = config.keywords || [];
  const excludeKeywords = config.excludeKeywords || [];

  console.log('Fetching articles from RSS feeds...');

  for (const feed of config.feeds) {
    try {
      console.log(`Fetching from ${feed.name}...`);
      const feedData = await parser.parseURL(feed.url);

      if (!feedData.items || feedData.items.length === 0) {
        console.log(`No items found in ${feed.name}`);
        continue;
      }

      let relevantCount = 0;
      for (const item of feedData.items.slice(0, 10)) { // Get latest 10 from each feed
        const title = item.title || '';
        const description = item.contentSnippet || item.content || '';
        const content = item['content:encoded'] || description;

        // Check if article is relevant based on keywords
        const textToCheck = `${title} ${description}`.toLowerCase();
        const hasRelevantKeyword = keywords.some(keyword =>
          textToCheck.includes(keyword.toLowerCase())
        );
        const hasExcludedKeyword = excludeKeywords.some(keyword =>
          textToCheck.includes(keyword.toLowerCase())
        );

        if (hasRelevantKeyword && !hasExcludedKeyword) {
          allArticles.push({
            title,
            description,
            content,
            link: item.link,
            pubDate: item.pubDate,
            feedName: feed.name,
            categories: feed.categories
          });
          relevantCount++;
        }
      }

      console.log(`Found ${relevantCount} relevant articles from ${feed.name}`);

    } catch (error) {
      console.warn(`Error fetching from ${feed.name}:`, error.message);
      // Continue with other feeds instead of failing completely
    }
  }

  console.log(`Total relevant articles found: ${allArticles.length}`);

  // Sort by publication date (newest first) and return top results
  return allArticles
    .sort((a, b) => new Date(b.pubDate || 0) - new Date(a.pubDate || 0))
    .slice(0, 20); // Return top 20 most recent relevant articles
}

/**
 * Discovers a new article from RSS feeds and generates a post from it.
 */
async function discoverAndGenerate() {
  console.log('Entering RSS discovery mode...');

  const articles = await fetchRSSArticles();

  if (articles.length === 0) {
    console.error('No relevant articles found from RSS feeds.');
    return null;
  }

  // Select a random article from the top results
  const selectedArticle = articles[Math.floor(Math.random() * Math.min(articles.length, 5))];

  console.log(`Selected article: "${selectedArticle.title}" from ${selectedArticle.feedName}`);
  console.log(`Source: ${selectedArticle.link}`);

  const prompt = `
    You are a tech blogger for T & C Enterprises, an expert in automation, AI, and custom software development.
    Your task is to write a short, insightful commentary (2-3 paragraphs) on the following article. Explain its relevance to small business owners, developers, or manufacturers who might benefit from automation and AI tools.

    Focus on practical applications and how this technology could help businesses like custom fabrication shops, software development firms, or small manufacturers improve their workflows.

    Your response must include:
    1. A new, compelling title for our blog post that incorporates our expertise in automation and AI.
    2. The body of your commentary (2-3 paragraphs).
    3. End with a call-to-action mentioning T & C Enterprises' services.

    IMPORTANT: Your entire response will be saved directly to a markdown file.
    Your response MUST start with the title as a level 1 heading (e.g., '# My Post Title').

    --- ARTICLE DETAILS ---
    Title: ${selectedArticle.title}
    Description: ${selectedArticle.description}
    Content Preview: ${selectedArticle.content.substring(0, 1000)}...
    --- END ARTICLE ---

    Original Source: ${selectedArticle.link}
    Published: ${selectedArticle.pubDate}
  `;

  return callAI(prompt);
}


/**
 * Lists all staged posts for approval.
 */
async function listStagedPosts() {
  try {
    const files = await fs.readdir(STAGING_DIR);
    const mdFiles = files.filter(file => file.endsWith('.md'));

    if (mdFiles.length === 0) {
      console.log('No staged posts to review.');
      return;
    }

    console.log('\n📝 Staged Posts for Review:\n');
    console.log('=' .repeat(50));

    for (const file of mdFiles) {
      const filePath = path.join(STAGING_DIR, file);
      const content = await fs.readFile(filePath, 'utf8');
      const lines = content.split('\n');
      const titleLine = lines.find(line => line.startsWith('title:'));
      const title = titleLine ? titleLine.replace('title:', '').replace(/"/g, '').trim() : 'Untitled';

      console.log(`📄 ${file}`);
      console.log(`   Title: ${title}`);
      console.log(`   Command: npm run generate-post -- --approve --file=${file}`);
      console.log(`   Reject:  npm run generate-post -- --reject --file=${file}`);
      console.log('');
    }
  } catch (error) {
    console.error('Error listing staged posts:', error);
  }
}

/**
 * Approves a staged post by moving it to the published directory.
 */
async function approvePost(filename) {
  const stagingPath = path.join(STAGING_DIR, filename);
  const publishPath = path.join(OUTPUT_DIR, filename);

  try {
    // Check if staging file exists
    await fs.access(stagingPath);

    // Move file to published directory
    await fs.rename(stagingPath, publishPath);

    console.log(`✅ Post "${filename}" has been approved and published!`);
    console.log(`📍 Published to: ${publishPath}`);
  } catch (error) {
    console.error(`Error approving post "${filename}":`, error.message);
  }
}

/**
 * Rejects a staged post by deleting it.
 */
async function rejectPost(filename) {
  const stagingPath = path.join(STAGING_DIR, filename);

  try {
    await fs.unlink(stagingPath);
    console.log(`❌ Post "${filename}" has been rejected and deleted.`);
  } catch (error) {
    console.error(`Error rejecting post "${filename}":`, error.message);
  }
}
async function generateFromFile(filePath) {
  console.log(`Generating post from file: "${filePath}"...`);
  let fileContent;
  try {
    fileContent = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading file at ${filePath}:`, error);
    return null;
  }

  const prompt = `
    You are an expert tech blogger... Rewrite the following technical documentation into an engaging blog post of about 200-300 words...
    Here is the technical documentation to rewrite:
    --- DOCUMENTATION ---
    ${fileContent}
    --- END DOCUMENTATION ---
  `; // Abridged for brevity

  return callAI(prompt);
}

/**
 * Calls the AI API with a given prompt.
 */
async function callAI(prompt) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: prompt }),
    });
    if (!response.ok) {
      throw new Error(`API request failed: ${await response.text()}`);
    }
    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error('Error calling AI generation API:', error);
    return null;
  }
}

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/--+/g, '-');
}

/**
 * Main execution function.
 */
async function main() {
  const task = getTask();
  let postContent;
  let initialTopic = 'New Blog Post';
  let targetDir = STAGING_DIR;

  switch (task.type) {
    case 'list':
      await listStagedPosts();
      return;

    case 'approve':
      await approvePost(task.value);
      return;

    case 'reject':
      await rejectPost(task.value);
      return;

    case 'file':
      postContent = await generateFromFile(task.value);
      initialTopic = path.basename(task.value, '.md');
      targetDir = STAGING_DIR;
      break;

    case 'topic':
      // This mode is now deprecated in favor of discovery, but kept for direct use.
      initialTopic = task.value;
      postContent = await generateFromFile(initialTopic); // Simplified to use the file-based generation for topics too.
      targetDir = STAGING_DIR;
      break;

    case 'generate':
    default:
      postContent = await discoverAndGenerate();
      initialTopic = 'New Discovery';
      targetDir = STAGING_DIR;
      break;
  }

  if (!postContent) {
    console.log('Failed to generate post content. Exiting.');
    return;
  }

  const lines = postContent.split('\n');
  const titleLine = lines.find(line => line.startsWith('# '));
  const title = titleLine ? titleLine.replace('# ', '').trim() : initialTopic;

  const today = new Date();
  const dateStamp = today.toISOString().split('T')[0];
  const slug = slugify(title);
  const fileName = `${dateStamp}-${slug}.md`;
  const filePath = path.join(process.cwd(), targetDir, fileName);

  const fileContent = `---
title: "${title}"
date: ${dateStamp}
tags: posts
---

${postContent.replace(/^# .+\n/, '')}
`;

  try {
    await fs.writeFile(filePath, fileContent, 'utf8');
    console.log(`\n🎉 Successfully generated blog post: "${title}"`);
    console.log(`📁 Saved to staging: ${filePath}`);
    console.log(`\n📋 Next steps:`);
    console.log(`   • Review: npm run generate-post -- --list`);
    console.log(`   • Approve: npm run generate-post -- --approve --file=${fileName}`);
    console.log(`   • Reject: npm run generate-post -- --reject --file=${fileName}`);
  } catch (error) {
    console.error(`Error writing post file to ${filePath}:`, error);
  }
}

main();
