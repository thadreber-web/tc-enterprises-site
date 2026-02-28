import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeScript from '@/components/ThemeScript'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  title: 'T&C Enterprises | Vector Conversion, Software & AI Solutions',
  description: '13 years turning complex problems into clean solutions. Production-ready vector files for engraving, custom software development, and AI automation.',
  metadataBase: new URL('https://tc-enterprises.com'),
  keywords: ['vector conversion', 'engraving files', 'gravostyle', 'gravograph', 'PLT files', 'EPS files', 'custom software', 'AI automation', 'T&C Enterprises'],
  openGraph: {
    title: 'T&C Enterprises | Vector Conversion, Software & AI Solutions',
    description: '13 years turning complex problems into clean solutions. Vector conversion for engraving, custom software, and AI research.',
    url: 'https://tc-enterprises.com',
    siteName: 'T&C Enterprises',
    images: [{ url: '/og-default.svg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'T&C Enterprises | Vector Conversion, Software & AI Solutions',
    description: '13 years turning complex problems into clean solutions. Vector conversion, software, and AI.',
    images: ['/og-default.svg']
  },
  alternates: {
    canonical: 'https://tc-enterprises.com'
  },
  icons: {
    icon: '/favicon.svg'
  },
  manifest: '/manifest.webmanifest'
}

export const viewport: Viewport = {
  themeColor: '#1B2A4E'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeScript />
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="container max-w-6xl py-8" role="main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
