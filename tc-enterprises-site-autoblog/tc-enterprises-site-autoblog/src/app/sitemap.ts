import type { MetadataRoute } from 'next'
import { getAllPosts, getCategories } from '@/lib/md'
import { toSlug } from '@/lib/slug'

const site = 'https://tc-enterprises.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, cats] = await Promise.all([getAllPosts(), getCategories()])

  const staticRoutes: MetadataRoute.Sitemap = [
    '', '/about', '/services', '/portfolio', '/blog', '/contact'
  ].map((p) => ({
    url: site + p,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.7
  }))

  const blogRoutes: MetadataRoute.Sitemap = posts.map(p => ({
    url: `${site}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6
  }))

  const catRoutes: MetadataRoute.Sitemap = cats.map(c => ({
    url: `${site}/blog/category/${toSlug(c)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5
  }))

  return [...staticRoutes, ...blogRoutes, ...catRoutes]
}