'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ThemeToggle'
import { useState, useEffect, useRef } from 'react'

const nav = [
  {
    label: 'Solutions',
    href: null,
    dropdown: [
      { href: '/services', label: 'Artwork & Engraving', description: 'Laser-ready EPS files and engraving prep' },
      { href: '/services', label: 'AI Automation & Chat', description: 'Grounded agents and intelligent automation' },
      { href: '/services', label: 'Custom Software Development', description: 'Tailored solutions for your business' },
      { href: '/services', label: 'Industry Solutions', description: 'Real Estate, RV, and Craft operations' }
    ]
  },
  {
    label: 'Resources',
    href: null,
    dropdown: [
      { href: '/portfolio', label: 'Portfolio', description: 'Case studies and project examples' },
      { href: '/blog', label: 'Blog', description: 'Insights and industry updates' },
      { href: '/about', label: 'About', description: 'Our story and expertise' }
    ]
  },
  { href: '/contact', label: 'Contact' }
]

export default function Header() {
  const path = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <header className="sticky top-0 z-30 bg-background/90 dark:bg-background-dark/80 backdrop-blur border-b border-black/5 dark:border-white/10">
        <div className="container max-w-6xl flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <img 
              src="/tc-logo.svg" 
              alt="T & C Enterprises Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden gap-6 md:flex relative" ref={dropdownRef} role="navigation" aria-label="Main navigation">
            {nav.map(n => {
              if (n.dropdown) {
                return (
                  <div key={n.label} className="relative">
                    <button
                      onMouseEnter={() => setOpenDropdown(n.label)}
                      onClick={() => setOpenDropdown(openDropdown === n.label ? null : n.label)}
                      className={`hover:text-primary flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-2 py-1 ${openDropdown === n.label ? 'text-primary' : 'text-foreground dark:text-foreground-dark'}`}
                      aria-expanded={openDropdown === n.label}
                      aria-haspopup="true"
                      aria-label={`${n.label} menu`}
                    >
                      {n.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === n.label && (
                      <div 
                        className="absolute top-full left-0 w-80 bg-background dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-50"
                        onMouseEnter={() => setOpenDropdown(n.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                        role="menu"
                        aria-label={`${n.label} submenu`}
                      >
                        <div className="grid gap-3">
                          {n.dropdown.map(item => (
                            <Link 
                              key={item.href} 
                              href={item.href}
                              className="block p-3 rounded-lg hover:bg-muted/10 dark:hover:bg-muted/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                              role="menuitem"
                            >
                              <div className="font-semibold text-foreground dark:text-foreground-dark">{item.label}</div>
                              <div className="text-sm text-muted dark:text-muted-foreground mt-1">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link key={n.href} href={n.href!}
                  className={`hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-2 py-1 ${path === n.href ? 'text-primary font-semibold' : 'text-foreground dark:text-foreground-dark'}`}>
                  {n.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="btn-primary text-sm hidden sm:block">Request a Quote</Link>
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
                {nav.map(n => {
                  if (n.dropdown) {
                    return (
                      <div key={n.label}>
                        <div className="font-semibold text-foreground dark:text-foreground-dark mb-3">{n.label}</div>
                        <div className="space-y-2 pl-4">
                          {n.dropdown.map(item => (
                            <Link 
                              key={item.href} 
                              href={item.href}
                              className="block py-2 text-muted dark:text-muted-foreground hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  }
                  return (
                    <Link 
                      key={n.href} 
                      href={n.href!}
                      className={`block py-2 hover:text-primary ${path === n.href ? 'text-primary font-semibold' : 'text-foreground dark:text-foreground-dark'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {n.label}
                    </Link>
                  )
                })}
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Link 
                    href="/contact" 
                    className="btn-primary w-full text-center block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Request a Quote
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
