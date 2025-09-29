import Link from 'next/link'

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt?: string;
    category?: string;
    date: string;
    content?: string;
  };
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export default function BlogCard({ post }: BlogCardProps) {
  const readingTime = post.content ? calculateReadingTime(post.content) : 3;

  return (
    <article className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wide font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
          {post.category || 'General'}
        </span>
        <span className="text-xs text-text-muted dark:text-gray-400 flex items-center">
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {readingTime} min read
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-text-main dark:text-white group-hover:text-primary transition-colors">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>

      <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
        {post.excerpt || 'No description available.'}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-sm">👨‍💻</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-text-main dark:text-white">T&C Enterprises Founder</div>
          <div className="text-xs text-text-muted dark:text-gray-400">CompTIA A+ Certified • 13+ Years Experience</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-text-muted dark:text-gray-400">
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