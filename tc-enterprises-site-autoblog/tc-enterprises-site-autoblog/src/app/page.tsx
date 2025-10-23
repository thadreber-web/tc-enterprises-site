import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import PricingTiers from '@/components/PricingTiers'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO SECTION */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-foreground-dark leading-tight">
          Production-Ready Vector Files for{' '}
          <span className="text-primary">Engraving Equipment</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted dark:text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Single-line outlines for Gravostyle | PLT files with fill patterns for rotary engraving
        </p>

        <p className="text-lg font-semibold text-foreground dark:text-foreground-dark">
          <strong className="text-primary">13 Years</strong> |{' '}
          <strong className="text-primary">26,000+ Proven Files</strong> |{' '}
          <strong className="text-primary">Same-Day Available</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/contact" className="btn-primary text-center text-lg px-8 py-3">
            Start Free Trial
          </Link>
          <Link href="/pricing" className="btn-secondary text-center text-lg px-8 py-3">
            See Pricing
          </Link>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* PROBLEM/SOLUTION SECTION */}
      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">
          Stop Wasting Time on File Cleanup
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem Column */}
          <div className="card bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/30">
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-red-700 dark:text-red-400">The Problem</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-foreground dark:text-foreground-dark">Customer sends blurry JPG logo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-foreground dark:text-foreground-dark">You spend 30+ minutes converting it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-foreground dark:text-foreground-dark">File doesn't load cleanly in Gravostyle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-foreground dark:text-foreground-dark">Production delayed, customer frustrated</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution Column */}
          <div className="card bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/30">
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-green-700 dark:text-green-400">Our Solution</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <span className="text-foreground dark:text-foreground-dark">Send us any file format</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <span className="text-foreground dark:text-foreground-dark">We deliver production-ready files</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <span className="text-foreground dark:text-foreground-dark">Drops into Gravostyle perfectly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <span className="text-foreground dark:text-foreground-dark">Zero cleanup, zero guesswork</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET - PREVIEW */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark mb-4">
            What You Get
          </h2>
          <p className="text-lg text-muted dark:text-muted-foreground max-w-3xl mx-auto">
            Production-ready files optimized for your engraving equipment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Laser Engraving */}
          <div className="card bg-background dark:bg-background-dark">
            <div className="p-6 space-y-4">
              <div className="text-3xl text-primary">🔷</div>
              <h3 className="text-xl font-semibold text-primary">For Laser Engraving</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                Single-line vector outlines in EPS format, optimized for Gravograph laser systems with Gravostyle software
              </p>
              <ul className="space-y-2 text-sm text-muted dark:text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>No fills, no gradients - clean paths only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Text outlined and converted to paths</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Rotary Engraving */}
          <div className="card bg-background dark:bg-background-dark">
            <div className="p-6 space-y-4">
              <div className="text-3xl text-primary">⚙️</div>
              <h3 className="text-xl font-semibold text-primary">For Rotary Engraving</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                PLT files with 7 fill pattern options, created in EngraveLab for mechanical engraving systems
              </p>
              <ul className="space-y-2 text-sm text-muted dark:text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Horizontal, vertical, cross-hatch patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Diagonal, stipple, and custom options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/how-it-works" className="btn-secondary inline-block">
            See Complete Details & Process →
          </Link>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground dark:text-foreground-dark">
          Simple, Transparent Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {/* Simple */}
          <div className="card hover:shadow-lg transition-shadow text-center">
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">Simple Logos</h3>
              <div className="text-4xl font-bold text-primary">$40</div>
              <p className="text-sm text-muted dark:text-muted-foreground">Basic shapes, minimal detail</p>
            </div>
          </div>

          {/* Medium - Featured */}
          <div className="card hover:shadow-lg transition-shadow border-2 border-primary relative text-center">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">Medium Complexity</h3>
              <div className="text-4xl font-bold text-primary">$45</div>
              <p className="text-sm text-muted dark:text-muted-foreground">Detailed shapes, multiple elements</p>
            </div>
          </div>

          {/* Complex */}
          <div className="card hover:shadow-lg transition-shadow text-center">
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">Complex Artwork</h3>
              <div className="text-4xl font-bold text-primary">$55+</div>
              <p className="text-sm text-muted dark:text-muted-foreground">Photos, intricate designs</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-muted dark:text-muted-foreground">
            <strong className="text-foreground dark:text-foreground-dark">Includes:</strong> Both EPS & PLT formats • Unlimited revisions • 24-48 hour turnaround • Volume discounts available
          </p>
          <Link href="/pricing" className="btn-primary inline-block">
            View Full Pricing & Details →
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
                  13+ year partnership • 26,000+ files processed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-foreground-dark">
          Ready to Stop Wasting Time on File Prep?
        </h2>
        <p className="text-xl text-muted dark:text-muted-foreground mb-8">
          Get your first file conversion free. See the quality before you commit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link href="/contact" className="btn-primary text-center text-lg px-8 py-3">
            Start Free Trial
          </Link>
          <Link href="/how-it-works" className="btn-secondary text-center text-lg px-8 py-3">
            Learn How It Works
          </Link>
        </div>

        <p className="text-sm text-muted dark:text-muted-foreground">
          Questions? We typically respond within 2 hours during business hours.
        </p>
      </section>
    </div>
  )
}
