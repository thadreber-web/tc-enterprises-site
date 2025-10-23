import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import PricingTiers from '@/components/PricingTiers'
import ProcessSteps from '@/components/ProcessSteps'
import GuaranteeSection from '@/components/GuaranteeSection'

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
          <Link href="#pricing" className="btn-secondary text-center text-lg px-8 py-3">
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

        <div className="grid md:grid-cols-2 gap-8">
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
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-foreground dark:text-foreground-dark">Wasted materials from bad files</span>
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
                  <span className="text-foreground dark:text-foreground-dark">Start engraving in seconds</span>
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

      {/* WHAT YOU GET SECTION */}
      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">
          What You Receive
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Laser Engraving */}
          <div className="card">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">For Laser Engraving (Gravostyle)</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Single-line vector outlines (no fills, no gradients)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Outlined text (converted to paths)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Compound paths properly formatted</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>EPS format - drops straight into Gravostyle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Optimized for Gravograph laser systems</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Rotary Engraving */}
          <div className="card">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">For Rotary Engraving (Mechanical)</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>PLT files with 7 fill pattern options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Created in EngraveLab software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Horizontal, vertical, cross-hatch patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Diagonal, stipple, and custom patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Optimized for mechanical engraving systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Universal Benefits */}
        <div className="card bg-primary/5 border-primary/20 mb-6">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground dark:text-foreground-dark">Every File Includes:</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Zero cleanup required - production-ready on delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Both EPS and PLT formats (if needed)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Unlimited revisions until you're satisfied</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Multiple format options available</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>100% money-back guarantee if not production-ready</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Specialized For */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground dark:text-foreground-dark">Specialized For:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Gravograph laser & rotary equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Trophy & awards shops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Promotional products engraving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Recognition products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Signage and personalization businesses</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-muted/10">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground dark:text-foreground-dark">What We Don't Do:</h3>
              <ul className="space-y-2 text-sm text-muted dark:text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>✗</span>
                  <span>Full-color graphic design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✗</span>
                  <span>Multi-color screen printing files</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✗</span>
                  <span>Embroidery digitizing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✗</span>
                  <span>General vector conversion (we specialize in engraving only)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <PricingTiers />

      {/* HOW IT WORKS */}
      <ProcessSteps />

      {/* GUARANTEE SECTION */}
      <GuaranteeSection />

      {/* TESTIMONIAL SECTION */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground dark:text-foreground-dark">
          Trusted by Industry Professionals
        </h2>

        <div className="max-w-4xl mx-auto card">
          <div className="p-8">
            <blockquote className="text-lg italic text-foreground dark:text-foreground-dark mb-6">
              "Thank you for all your efforts on digitizing logos for our clients. You have been a great help and do an amazing job with quick turnaround times. You do a great job of communicating with us if you have questions or if a resolution is needed, and always offer a helping hand... We are continuously satisfied with your performance and deliverables."
            </blockquote>
            <div className="space-y-2">
              <div className="font-bold text-primary">— Branding Tools, Inc.</div>
              <div className="text-sm text-muted dark:text-muted-foreground">
                Leading provider of branding solutions for engraving and signage companies
              </div>
              <div className="pt-4 border-t border-muted/20 mt-4">
                <h4 className="font-semibold mb-3 text-foreground dark:text-foreground-dark">13+ Year Partnership Highlights:</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted dark:text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Reliable weekly delivery schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Consistent quality standards maintained</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Direct communication and quick issue resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Scalable service as their business grew</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT COMPATIBILITY */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground dark:text-foreground-dark">
          Equipment We Support
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="card">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">Laser Engraving</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Gravograph laser systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Gravostyle software (all versions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>EPS format optimized for laser marking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Single-line outlines, clean paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>No raster effects or gradients</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">Rotary Engraving</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mechanical engraving systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>EngraveLab-compatible PLT format</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>7 fill pattern options available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Optimized for different engraving depths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Proper tool path generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card bg-accent/5 border-accent/20 text-center">
          <div className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
              Not Sure If Your Equipment Is Compatible?
            </h3>
            <p className="text-muted dark:text-muted-foreground">
              Contact us with your machine model and software version. We'll confirm compatibility and recommend the best file format for your setup.
            </p>
            <Link href="/contact" className="btn-secondary inline-block">
              Ask About Your Equipment
            </Link>
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
          <Link href="/contact" className="btn-secondary text-center text-lg px-8 py-3">
            Get a Quote
          </Link>
        </div>

        <p className="text-sm text-muted dark:text-muted-foreground">
          Questions? Call or email anytime during business hours. We typically respond within 2 hours.
        </p>
      </section>
    </div>
  )
}
