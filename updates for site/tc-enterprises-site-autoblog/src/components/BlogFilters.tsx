'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { toSlug } from '@/lib/slug'

interface BlogFiltersProps {
  categories: string[];
  onCategoryChange?: (category: string) => void;
}

export default function BlogFilters({ categories, onCategoryChange }: BlogFiltersProps) {
  const router = useRouter()
  const params = useSearchParams()
  const active = params.get('category') || 'All'

  const cats = ['All', ...categories]

  function setCategory(c: string) {
    if (onCategoryChange) {
      // Client-side filtering mode
      onCategoryChange(c === 'All' ? '' : c)
    } else {
      // Router navigation mode (original behavior)
      if (c === 'All') {
        router.push('/blog')
      } else {
        router.push(`/blog/category/${toSlug(c)}`)
      }
    }
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center my-4">
      {cats.map(c => (
        <button key={c}
          onClick={() => setCategory(c)}
          className={`px-3 py-1 rounded-full text-sm border transition-all duration-200 hover:scale-105 ${
            (onCategoryChange ? (c === 'All' ? active === 'All' : c === active) : active === c)
            ? 'bg-primary text-white border-primary shadow-md'
            : 'border-black/10 dark:border-secondary/20 hover:bg-primary/10 hover:border-primary/30'
          }`}>
          {c}
        </button>
      ))}
    </div>
  )
}