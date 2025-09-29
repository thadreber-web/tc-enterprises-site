'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogPostContentProps {
  post: any;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const readingTime = calculateReadingTime(post.html);

  return (
    <>
      <ReadingProgress />
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm uppercase tracking-wide font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.meta.category}
            </span>
            <span className="text-sm text-text-muted dark:text-gray-400 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readingTime} min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white leading-tight mb-4">
            {post.meta.title}
          </h1>

          <div className="flex items-center justify-between text-sm text-text-muted dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-6">
            <time dateTime={post.meta.date}>
              {new Date(post.meta.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <Link
              href="/blog"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </header>

        {/* Author Bio */}
        <div className="card mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-lg">👨‍💻</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-text-main dark:text-white mb-1">T&C Enterprises Founder</h3>
              <p className="text-sm text-text-muted dark:text-gray-300 mb-2">
                Self-taught developer with CompTIA A+ certification and 13+ years in engraving operations. Combining technical expertise with practical business insights.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">AI & Automation</span>
                <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full">Software Development</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded-full">Engraving Technology</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-text-main dark:prose-headings:text-white prose-p:text-text-muted dark:prose-p:text-gray-300 prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-text-main dark:prose-strong:text-white prose-code:text-primary prose-pre:bg-bg-surface dark:prose-pre:bg-bg-surface-dark prose-blockquote:border-primary prose-blockquote:text-text-muted dark:prose-blockquote:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-text-muted dark:text-gray-400">
              Published on {new Date(post.meta.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <Link
              href="/blog"
              className="btn-secondary"
            >
              Read More Articles
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}