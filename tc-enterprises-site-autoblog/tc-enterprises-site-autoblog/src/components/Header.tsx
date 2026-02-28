'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ThemeToggle'
import { useState } from 'react'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/vector-conversion', label: 'Vector Conversion' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export default function Header() {
  const path = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isActive = (href: string) => {
    if (!path) return false
    if (href === '/') return path === '/'
    return path.startsWith(href)
  }

  return (
    <>
      <header className="sticky top-0 z-30 bg-background/90 dark:bg-background-dark/80 backdrop-blur border-b border-black/5 dark:border-white/10">
        <div className="container max-w-6xl flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-2xl tracking-tight text-primary">T &amp; C Enterprises</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden gap-6 md:flex" role="navigation" aria-label="Main navigation">
            {nav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-2 py-1 ${isActive(item.href) ? 'text-primary font-semibold' : 'text-foreground dark:text-foreground-dark'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="btn-primary text-sm hidden sm:block">Get a Quote</Link>
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted/10 dark:hover:bg-muted/20"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-80 bg-background dark:bg-background-dark shadow-xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg text-foreground dark:text-foreground-dark">Menu</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted/10 dark:hover:bg-muted/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="space-y-6">
                {nav.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-2 hover:text-primary ${isActive(item.href) ? 'text-primary font-semibold' : 'text-foreground dark:text-foreground-dark'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
