import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeScript from '@/components/ThemeScript'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  title: 'Vector Conversion for Engraving | Gravostyle EPS & PLT Files | T&C Enterprises',
  description: 'Production-ready vector files for Gravograph engraving equipment. Single-line EPS for laser, PLT with fill patterns for rotary. 13 years, 26,000+ proven files. Same-day available.',
  metadataBase: new URL('https://tc-enterprises.com'),
  keywords: ['vector conversion', 'gravostyle files', 'gravograph engraving', 'laser engraving files', 'rotary engraving', 'PLT files', 'EPS files', 'trophy engraving', 'promotional products artwork', 'engraving file preparation'],
  openGraph: {
    title: 'Vector Conversion for Engraving | T&C Enterprises',
    description: 'Production-ready vector files for Gravograph engraving. 13 years, 26,000+ files. Same-day available.',
    url: 'https://tc-enterprises.com',
    siteName: 'T&C Enterprises',
    images: [{ url: '/og-default.svg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vector Conversion for Engraving | T&C Enterprises',
    description: 'Production-ready vector files for Gravograph engraving. 13 years, 26,000+ files.',
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
