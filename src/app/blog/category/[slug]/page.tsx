import { getAllPosts, getCategories } from '@/lib/md'
import BlogCard from '@/components/BlogCard'
import { toSlug, fromSlug } from '@/lib/slug'

export async function generateStaticParams() {
  const cats = await getCategories()
  return cats.map(c => ({ slug: toSlug(c) }))
}

export default async function BlogCategoryPage({ params }: { params: { slug: string } }) {
  const catName = fromSlug(params.slug)
  const posts = await getAllPosts()
  const filtered = posts.filter(p => (p.category || 'General').toLowerCase() === catName.toLowerCase())

  return (
    <section className="space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-primary dark:text-white">{catName}</h1>
        <p className="mt-2 opacity-80">Posts in this category.</p>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(p => <BlogCard key={p.slug} post={p} />)}
      </div>
      {filtered.length === 0 && <p className="opacity-70 text-center">No posts yet in {catName}.</p>}
    </section>
  )
}