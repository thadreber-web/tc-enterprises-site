import { getAllPosts, getPost } from '@/lib/md'
import type { Metadata } from 'next'
import BlogPostContent from '@/components/BlogPostContent'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  const title = post.meta.title
  const desc = post.meta.excerpt || 'Expert insights on AI automation, SaaS development, and business innovation from T&C Enterprises.'
  const url = `https://tc-enterprises.com/blog/${post.meta.slug}`
  const keywords = `${post.meta.category || 'General'}, AI automation, SaaS development, engraving technology, business innovation, software development`

  return {
    title: `${title} | T&C Enterprises Blog`,
    description: desc,
    keywords,
    authors: [{ name: 'T&C Enterprises Founder', url: 'https://tc-enterprises.com/about' }],
    creator: 'T&C Enterprises Founder',
    publisher: 'T&C Enterprises',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: `${title} | T&C Enterprises`,
      description: desc,
      url,
      siteName: 'T&C Enterprises',
      images: [
        {
          url: '/og-default.svg',
          width: 1200,
          height: 630,
          alt: `${title} - T&C Enterprises Blog`
        }
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.meta.date,
      modifiedTime: post.meta.date,
      authors: ['T&C Enterprises Founder'],
      tags: [post.meta.category || 'General'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | T&C Enterprises`,
      description: desc,
      images: ['/og-default.svg'],
      creator: '@tc_enterprises',
      site: '@tc_enterprises',
    },
    alternates: {
      canonical: url,
      types: {
        'application/rss+xml': 'https://tc-enterprises.com/rss.xml',
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  return <BlogPostContent post={post} />
}