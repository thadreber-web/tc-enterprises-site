#!/usr/bin/env node

/**
 * Reliable Blog Post Generator
 * Uses proven methods and direct API calls
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs/promises';
import path from 'path';
import Parser from 'rss-parser';

// Configuration
const CONFIG = {
  stagingDir: 'content/blog/staging',
  rssConfig: 'rss-config.json',
  geminiApiKey: process.env.GEMINI_API_KEY,
  geminiModel: 'gemini-2.5-flash'
};

// Initialize RSS parser
const parser = new Parser();

console.log('🚀 Starting reliable blog post generation...\n');

/**
 * Load RSS configuration
 */
async function loadRSSConfig() {
  try {
    console.log('Loading RSS config from:', CONFIG.rssConfig);
    const data = await fs.readFile(CONFIG.rssConfig, 'utf8');
    const config = JSON.parse(data);
    console.log(`Loaded config with ${config.feeds?.length || 0} feeds`);
    return config;
  } catch (error) {
    console.error('Failed to load RSS config:', error.message);
    return null;
  }
}

/**
 * Fetch articles from a single RSS feed
 */
async function fetchFromFeed(feed) {
  try {
    console.log(`Fetching from ${feed.name}...`);
    const feedData = await parser.parseURL(feed.url);

    if (!feedData.items) {
      console.log('No items in feed');
      return [];
    }

    console.log(`Feed has ${feedData.items.length} items`);

    const articles = [];
    for (const item of feedData.items.slice(0, 5)) { // Limit to 5 per feed
      const title = item.title || '';
      const description = item.contentSnippet || item.content || '';
      const content = item['content:encoded'] || description;

      // Check relevance - be less strict
      const text = `${title} ${description}`.toLowerCase();
      const hasKeywords = [
        'automation', 'ai', 'workflow', 'software', 'development',
        'business', 'productivity', 'technology', 'startup', 'tech'
      ].some(keyword => text.includes(keyword));

      if (hasKeywords) {
        articles.push({
          title,
          description,
          content: content.substring(0, 1000), // Limit content length
          link: item.link,
          pubDate: item.pubDate,
          source: feed.name
        });
      }
    }

    console.log(`Found ${articles.length} articles from ${feed.name}`);
    return articles;
  } catch (error) {
    console.warn(`Failed to fetch from ${feed.name}:`, error.message);
    return [];
  }
}

/**
 * Fetch articles from all RSS feeds
 */
async function fetchArticles() {
  const config = await loadRSSConfig();
  if (!config) return [];

  console.log('Starting RSS article discovery...');

  const allArticles = [];
  for (const feed of config.feeds.slice(0, 3)) { // Use first 3 feeds for reliability
    const articles = await fetchFromFeed(feed);
    allArticles.push(...articles);

    // Small delay to be respectful to RSS providers
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log(`Total articles found: ${allArticles.length}`);

  // Sort by date and return top 5
  return allArticles
    .sort((a, b) => new Date(b.pubDate || 0) - new Date(a.pubDate || 0))
    .slice(0, 5);
}

/**
 * Call Gemini API using official SDK
 */
async function callGeminiAPI(prompt) {
  if (!CONFIG.geminiApiKey) {
    throw new Error('GEMINI_API_KEY environment variable not set');
  }

  const genAI = new GoogleGenerativeAI(CONFIG.geminiApiKey);
  const model = genAI.getGenerativeModel({ model: CONFIG.geminiModel });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  if (!text) {
    throw new Error('Empty response from Gemini API');
  }

  return text;
}

/**
 * Generate blog post content
 */
async function generatePost(article) {
  const prompt = `You are a professional blog writer for T&C Enterprises, a company specializing in automation, AI, and custom software development.

Write a 300-400 word blog post about this article. Focus on practical applications for small businesses and developers.

Article Title: ${article.title}
Article Summary: ${article.description}
Source: ${article.link}

Your post should:
1. Start with a compelling title (just the title, no markdown)
2. Explain the technology and its benefits
3. Discuss how it applies to small businesses and developers
4. Include a call-to-action mentioning T&C Enterprises' services
5. Be written in an engaging, professional tone

Return only the blog post content, starting with the title.`;

  return await callGeminiAPI(prompt);
}

/**
 * Save post to staging directory
 */
async function savePost(content, article) {
  // Extract title from first line
  const lines = content.split('\n');
  const title = lines[0].replace(/^#+\s*/, '').trim();

  // Create filename
  const date = new Date().toISOString().split('T')[0];
  const slug = title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
  const filename = `${date}-${slug}.md`;

  // Ensure staging directory exists
  await fs.mkdir(CONFIG.stagingDir, { recursive: true });

  const fileContent = `---
title: "${title}"
date: ${date}
tags: posts
source: "${article.link}"
---

${content.replace(/^.*?\n\n/, '')} <!-- Remove title from body -->

---

*This post was inspired by an article from ${article.source}. [Read the original](${article.link})*

*Ready for review! Use \`npm run blog:list\` to see all staged posts, then \`npm run blog:approve -- --file=${filename}\` to publish.*`;

  const filepath = path.join(CONFIG.stagingDir, filename);
  await fs.writeFile(filepath, fileContent, 'utf8');

  return { filename, title };
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🚀 Starting reliable blog post generation...\n');

    // Check environment
    console.log('🔍 Checking environment...');
    if (!CONFIG.geminiApiKey) {
      throw new Error('GEMINI_API_KEY environment variable not set');
    }
    console.log('✅ API key found\n');

    // Step 1: Fetch articles
    console.log('📡 Step 1: Discovering articles from RSS feeds...');
    const articles = await fetchArticles();

    if (articles.length === 0) {
      console.log('❌ No relevant articles found. Try again later.');
      return;
    }

    console.log(`✅ Found ${articles.length} relevant articles\n`);

    // Step 2: Select best article
    const selectedArticle = articles[0];
    console.log('🎯 Step 2: Selected article:');
    console.log(`   "${selectedArticle.title}"`);
    console.log(`   From: ${selectedArticle.source}`);
    console.log(`   URL: ${selectedArticle.link}\n`);

    // Step 3: Generate content
    console.log('🤖 Step 3: Generating blog post content...');
    const postContent = await generatePost(selectedArticle);
    console.log('✅ Content generated successfully\n');

    // Step 4: Save to staging
    console.log('💾 Step 4: Saving to staging directory...');
    const { filename, title } = await savePost(postContent, selectedArticle);

    console.log('🎉 SUCCESS! Blog post created:');
    console.log(`   Title: "${title}"`);
    console.log(`   File: ${filename}`);
    console.log(`   Location: ${CONFIG.stagingDir}/${filename}\n`);

    console.log('📋 Next steps:');
    console.log(`   • Review: npm run blog:list`);
    console.log(`   • Approve: npm run blog:approve -- --file=${filename}`);
    console.log(`   • Reject: npm run blog:reject -- --file=${filename}`);

  } catch (error) {
    console.error('❌ ERROR:', error.message);
    console.error('Stack:', error.stack);
    process.exit(1);
  }
}

// Run if called directly
main().catch(error => {
  console.error('Unhandled error:', error);
  process.exit(1);
});