import Link from 'next/link'
import TrustBar from '@/components/TrustBar'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO SECTION — Founder-Forward */}
      <section className="text-center space-y-6 py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-foreground-dark leading-tight">
          13 Years of Turning Complex Problems{' '}
          <span className="text-primary">into Clean Solutions</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted dark:text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          What started as converting raster images for engraving equipment grew into a full-stack
          development practice and AI research lab. The through-line? Solving real problems with practical tools.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/contact" className="btn-primary text-center text-lg px-8 py-3">
            Get a Quote
          </Link>
          <Link href="/projects" className="btn-secondary text-center text-lg px-8 py-3">
            See My Work
          </Link>
        </div>
      </section>

      {/* FLAGSHIP SERVICE — Vector Conversion */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
        <div className="text-center mb-8">
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            FLAGSHIP SERVICE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark">
            Vector Conversion for Engraving
          </h2>
          <p className="text-lg text-muted dark:text-muted-foreground mt-4 max-w-3xl mx-auto">
            Production-ready EPS and PLT files for laser and rotary engraving equipment. My bread and butter for over a decade.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
          <div className="card bg-background dark:bg-background-dark text-center">
            <div className="p-5 space-y-2">
              <div className="text-3xl font-bold text-primary">26K+</div>
              <p className="text-sm text-muted dark:text-muted-foreground">Files Processed</p>
            </div>
          </div>
          <div className="card bg-background dark:bg-background-dark text-center">
            <div className="p-5 space-y-2">
              <div className="text-3xl font-bold text-primary">13</div>
              <p className="text-sm text-muted dark:text-muted-foreground">Years Experience</p>
            </div>
          </div>
          <div className="card bg-background dark:bg-background-dark text-center">
            <div className="p-5 space-y-2">
              <div className="text-3xl font-bold text-primary">$40</div>
              <p className="text-sm text-muted dark:text-muted-foreground">Starting Price</p>
            </div>
          </div>
          <div className="card bg-background dark:bg-background-dark text-center">
            <div className="p-5 space-y-2">
              <div className="text-3xl font-bold text-primary">24h</div>
              <p className="text-sm text-muted dark:text-muted-foreground">Turnaround</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          <div className="card bg-background dark:bg-background-dark">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-primary">For Laser Engraving</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                Single-line vector outlines in EPS format, optimized for Gravograph laser systems with Gravostyle software.
              </p>
            </div>
          </div>
          <div className="card bg-background dark:bg-background-dark">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-primary">For Rotary Engraving</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                PLT files with 7 fill pattern options, created in EngraveLab for mechanical engraving systems.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/vector-conversion" className="btn-primary inline-block">
            Learn More & See Pricing →
          </Link>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* ALSO BUILT — Software & AI Credibility */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark mb-4">
            Also Built
          </h2>
          <p className="text-lg text-muted dark:text-muted-foreground max-w-3xl mx-auto">
            The same problem-solving approach applied to software development and AI research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="card hover:shadow-lg transition-shadow">
            <div className="p-6 space-y-3">
              <div className="text-3xl">💻</div>
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">Custom Software</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                Full-stack web applications, e-commerce platforms, and workflow automation tools built with Next.js, React, and TypeScript.
              </p>
              <p className="text-xs text-muted dark:text-muted-foreground">
                Active projects: RealtyGenius, CraftCart, Crochet Pattern Studio
              </p>
            </div>
          </div>

          <div className="card hover:shadow-lg transition-shadow">
            <div className="p-6 space-y-3">
              <div className="text-3xl">🤖</div>
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">AI & Automation</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                Chatbots, AI orchestration, and intelligent automation. This site's chatbot (Cole) is a working example — try it.
              </p>
              <p className="text-xs text-muted dark:text-muted-foreground">
                Research: MCP Server architecture, multi-agent coordination
              </p>
            </div>
          </div>

          <div className="card hover:shadow-lg transition-shadow">
            <div className="p-6 space-y-3">
              <div className="text-3xl">⚙️</div>
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">IT & Infrastructure</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                CompTIA A+ certified. Network setup, system administration, and self-hosted infrastructure for small businesses.
              </p>
              <p className="text-xs text-muted dark:text-muted-foreground">
                Experience: Server deployment, VPN, CCTV systems, Nginx
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/projects" className="btn-secondary inline-block">
            View All Projects →
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark">
              Trusted by Industry Professionals
            </h2>
          </div>

          <div className="card bg-background dark:bg-background-dark">
            <div className="p-8">
              <blockquote className="text-lg italic text-foreground dark:text-foreground-dark mb-6">
                "Thank you for all your efforts on digitizing logos for our clients. You have been a great help and do an amazing job with quick turnaround times... We are continuously satisfied with your performance and deliverables."
              </blockquote>
              <div className="space-y-2">
                <div className="font-bold text-primary">— Branding Tools, Inc.</div>
                <div className="text-sm text-muted dark:text-muted-foreground">
                  13+ year partnership | 26,000+ files processed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-foreground-dark">
          Have a Project in Mind?
        </h2>
        <p className="text-xl text-muted dark:text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether it's vector conversion, custom software, or something else entirely — let's talk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link href="/contact" className="btn-primary text-center text-lg px-8 py-3">
            Get a Quote
          </Link>
          <Link href="/about" className="btn-secondary text-center text-lg px-8 py-3">
            Learn My Story
          </Link>
        </div>

        <p className="text-sm text-muted dark:text-muted-foreground">
          Questions? We typically respond within 2 hours during business hours.
        </p>
      </section>
    </div>
  )
}
