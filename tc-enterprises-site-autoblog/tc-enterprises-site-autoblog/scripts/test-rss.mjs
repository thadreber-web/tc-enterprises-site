#!/usr/bin/env node

import Parser from 'rss-parser';

const parser = new Parser();

async function testRSS() {
  try {
    console.log('Testing RSS feed...');
    const feed = await parser.parseURL('https://techcrunch.com/feed/');
    console.log(`Success! Found ${feed.items?.length || 0} items`);
    if (feed.items?.[0]) {
      console.log(`First item: ${feed.items[0].title}`);
    }
  } catch (error) {
    console.error('RSS test failed:', error.message);
  }
}

testRSS();