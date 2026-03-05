#!/usr/bin/env node

/**
 * Weekly Blog Post Scheduler
 * This script can be run on a schedule (e.g., via cron job) to generate new blog content
 */

import { execSync } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

const LOG_FILE = 'blog-scheduler.log';
const MAX_STAGED_POSTS = 3; // Don't generate if more than 3 posts are waiting for approval

async function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(message);

  try {
    await fs.appendFile(LOG_FILE, logMessage);
  } catch (error) {
    console.error('Failed to write to log file:', error);
  }
}

async function countStagedPosts() {
  try {
    const stagingDir = 'content/blog/staging';
    const files = await fs.readdir(stagingDir);
    return files.filter(file => file.endsWith('.md')).length;
  } catch (error) {
    return 0;
  }
}

async function generateWeeklyPost() {
  try {
    log('Starting weekly blog post generation...');

    // Check how many posts are already staged
    const stagedCount = await countStagedPosts();
    if (stagedCount >= MAX_STAGED_POSTS) {
      log(`Skipping generation: ${stagedCount} posts already staged for approval`);
      return;
    }

    log(`Found ${stagedCount} staged posts. Generating new content...`);

    // Run the blog generation script
    const result = execSync('npm run blog:generate:reliable', {
      encoding: 'utf8',
      stdio: 'pipe'
    });

    log('Blog post generation completed successfully');
    log('Output: ' + result);

  } catch (error) {
    log(`Error generating blog post: ${error.message}`);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateWeeklyPost();
}

export { generateWeeklyPost };