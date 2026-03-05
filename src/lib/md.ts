import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export type PostMeta = {
  slug: string
  title: string
  date: string
  category?: string
  excerpt?: string
}

export async function getAllPosts(): Promise<PostMeta[]> {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))
  const posts = files.map(file => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
    const { data } = matter(raw)
    const slug = file.replace(/\.md$/, '')
    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      category: data.category || 'General',
      excerpt: data.excerpt || ''
    } as PostMeta
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  const set = new Set<string>()
  posts.forEach(p => set.add(p.category || 'General'))
  return Array.from(set).sort()
}

export async function getPost(slug: string) {
  const full = path.join(BLOG_DIR, `${slug}.md`)
  const raw = fs.readFileSync(full, 'utf8')
  const { data, content } = matter(raw)
  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content)
  return {
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      category: data.category || 'General',
      excerpt: data.excerpt || ''
    },
    html: processed.toString()
  }
}
