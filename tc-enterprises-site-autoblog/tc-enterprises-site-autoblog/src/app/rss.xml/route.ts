import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/md'

export async function GET() {
  const site = 'https://tc-enterprises.com'
  const posts = await getAllPosts()
  const items = posts.map(p => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${site}/blog/${p.slug}</link>
      <guid>${site}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.excerpt || ''}]]></description>
      <author>founder@tc-enterprises.com (T&C Enterprises Founder)</author>
      <category><![CDATA[${p.category || 'General'}]]></category>
    </item>
  `).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>T&C Enterprises Blog - AI, SaaS & Innovation Insights</title>
      <link>${site}</link>
      <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
      <description>Expert insights on AI automation, SaaS development, engraving technology, and business innovation. Written by a CompTIA A+ certified developer with 13+ years of practical experience.</description>
      <language>en-us</language>
      <managingEditor>founder@tc-enterprises.com (T&C Enterprises Founder)</managingEditor>
      <webMaster>founder@tc-enterprises.com (T&C Enterprises Founder)</webMaster>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <generator>T&C Enterprises Custom Blog System</generator>
      ${items}
    </channel>
  </rss>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  })
}