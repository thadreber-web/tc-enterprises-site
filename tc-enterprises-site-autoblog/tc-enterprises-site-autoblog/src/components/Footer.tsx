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
              13 years turning complex problems into clean solutions. Vector conversion, software, and AI.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vector-conversion" className="opacity-80 hover:opacity-100 transition-opacity">Vector Conversion</Link></li>
              <li><Link href="/vector-conversion#pricing" className="opacity-80 hover:opacity-100 transition-opacity">Pricing</Link></li>
              <li><Link href="/vector-conversion#how-it-works" className="opacity-80 hover:opacity-100 transition-opacity">How It Works</Link></li>
              <li><Link href="/projects" className="opacity-80 hover:opacity-100 transition-opacity">Projects</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link href="/blog" className="opacity-80 hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link href="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link href="/terms" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</Link></li>
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
              <p className="opacity-90 pt-2">
                <a
                  href="https://github.com/thadreber-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </p>
            </div>
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
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
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
