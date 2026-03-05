import Link from 'next/link'

export default function Footer() {
  return (
  <footer className="bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark mt-16">
      <div className="container section-spacing">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/tc-logo.svg"
                alt="T & C Enterprises Logo"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Smart Tools. Real Results. We turn complex workflows into simple, reliable solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">Artwork & Engraving</Link></li>
              <li><Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">AI Automation & Chat</Link></li>
              <li><Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">Custom Software Development</Link></li>
              <li><Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">Industry Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link href="/portfolio" className="opacity-80 hover:opacity-100 transition-opacity">Portfolio</Link></li>
              <li><Link href="/blog" className="opacity-80 hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="opacity-90">
                <a href="mailto:contact@tc-enterprises.com" className="hover:text-primary transition-colors">
                  contact@tc-enterprises.com
                </a>
              </p>
              <p className="opacity-80">Mon–Fri, 9AM–5PM PT</p>
            </div>

            {/* Developer/SEO resources hidden from main footer */}
          </div>
        </div>
      </div>

  <div className="border-t border-gray-200 dark:border-white/10">
        <div className="container-spacing py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs opacity-70 text-center md:text-left">
              © {new Date().getFullYear()} T & C Enterprises. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs opacity-70">
              <span>Built with ❤️ for creators</span>
            </div>
          </div>
          {/* Hidden developer/SEO resources */}
          <div className="mt-4 text-xs opacity-40 text-center select-none">
            <span className="mr-2"><Link href="/sitemap.xml">Sitemap</Link></span>
            <span className="mr-2"><Link href="/robots.txt">Robots</Link></span>
            <span><Link href="/rss.xml">RSS Feed</Link></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
