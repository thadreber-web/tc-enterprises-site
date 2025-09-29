import { getAllPosts, getCategories } from '@/lib/md'
import BlogCard from '@/components/BlogCard'
import BlogFilters from '@/components/BlogFilters'
import Link from 'next/link'

export const revalidate = 60

export const metadata = {
  title: 'Blog | T&C Enterprises - AI, SaaS, and Innovation Insights',
  description: 'Stay updated with the latest insights on AI automation, SaaS development, engraving technology, and business innovation. Expert analysis and practical solutions.',
  keywords: 'AI automation, SaaS development, engraving technology, business innovation, software development, tech insights',
  openGraph: {
    title: 'Blog | T&C Enterprises',
    description: 'Expert insights on AI, SaaS, and business innovation',
    type: 'website',
  },
}

export default async function BlogPage({ searchParams }: { searchParams: { category?: string } }) {
  const [posts, categories] = await Promise.all([getAllPosts(), getCategories()])
  const active = searchParams?.category
  const filtered = active ? posts.filter(p => p.category === active) : posts

  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">Expert Insights & Innovation</h1>
        <p className="mt-4 text-xl text-text-muted dark:text-gray-300 max-w-3xl mx-auto">
          Stay ahead with AI-assisted analysis on automation, SaaS development, engraving technology, and business innovation. Every post is human-approved for accuracy and value.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/rss.xml" className="btn-secondary text-sm">
            📡 Subscribe to RSS
          </Link>
          <Link href="#posts" className="btn-secondary text-sm">
            📚 Browse Posts
          </Link>
        </div>
      </header>

      {/* Author Bio Section */}
      <div className="card max-w-4xl mx-auto">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">👨‍💻</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">Written by the Founder</h3>
            <p className="text-text-muted dark:text-gray-300 mb-3">
              Self-taught developer with CompTIA A+ certification and 13+ years in engraving operations. Combining technical expertise with practical business insights to deliver actionable content for operations teams and developers.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">AI & Automation</span>
              <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full">Software Development</span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded-full">Engraving Technology</span>
            </div>
          </div>
        </div>
      </div>

      <div id="posts">
        <BlogFilters categories={categories} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => <BlogCard key={p.slug} post={p} />)}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-text-main dark:text-white mb-2">No posts found</h3>
            <p className="text-text-muted dark:text-gray-300">Try selecting a different category or check back soon for new content.</p>
          </div>
        )}
      </div>

      {/* Newsletter/Subscription CTA */}
      <div className="card text-center max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-primary mb-3">Stay Updated</h3>
        <p className="text-text-muted dark:text-gray-300 mb-4">
          Get notified when new posts are published. We cover practical insights for operations teams, developers, and business leaders.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/rss.xml" className="btn-primary">
            📡 RSS Feed
          </Link>
          <Link href="/contact" className="btn-secondary">
            💬 Contact for Updates
          </Link>
        </div>
      </div>
    </section>
  )
}