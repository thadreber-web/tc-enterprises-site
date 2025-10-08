import Link from 'next/link'

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt?: string;
    category?: string;
    date: string;
    readingTime?: number;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const readingTime = typeof post.readingTime === 'number' && post.readingTime > 0 ? post.readingTime : null;

  return (
    <article className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wide font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
          {post.category || 'General'}
        </span>
        {readingTime !== null && (
          <span className="text-xs text-muted dark:text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {readingTime} min read
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-foreground-dark group-hover:text-primary transition-colors">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>

      <p className="text-muted dark:text-muted-foreground leading-relaxed mb-4 line-clamp-3">
        {post.excerpt || 'No description available.'}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-sm">👨‍💻</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-foreground dark:text-foreground-dark">T&C Enterprises Founder</div>
          <div className="text-xs text-muted dark:text-muted-foreground">CompTIA A+ Certified • 13+ Years Experience</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-muted dark:text-muted-foreground">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <Link
          href={`/blog/${post.slug}`}
          className="text-primary hover:text-primary/80 font-medium transition-colors group-hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}
