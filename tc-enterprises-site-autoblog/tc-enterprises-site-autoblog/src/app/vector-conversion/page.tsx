import Link from 'next/link'
import ProcessSteps from '@/components/ProcessSteps'
import GuaranteeSection from '@/components/GuaranteeSection'
import TrustBar from '@/components/TrustBar'

export const metadata = {
  title: 'Vector Conversion for Engraving | EPS & PLT Files | T&C Enterprises',
  description: 'Production-ready vector files for Gravograph engraving equipment. Single-line EPS for laser, PLT with fill patterns for rotary. 13 years, 26,000+ proven files. $40-55 per file.',
}

export default function VectorConversionPage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
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
          <a href="#pricing" className="btn-secondary text-center text-lg px-8 py-3">
            See Pricing
          </a>
        </div>
      </section>

      <TrustBar />

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground dark:text-foreground-dark">
          How It Works
        </h2>
        <p className="text-lg text-muted dark:text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          From file upload to production-ready delivery in 5 simple steps
        </p>
        <ProcessSteps />
      </section>

      {/* WHAT YOU GET - FILE SPECS */}
      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">
          Complete File Specifications
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
                <span>100% money-back guarantee if not production-ready</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground dark:text-foreground-dark">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-muted dark:text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          No hidden fees. No surprises. Just production-ready vector files at fair, consistent prices.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {/* Simple */}
          <div className="card hover:shadow-lg transition-shadow text-center">
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">Simple Logos</h3>
              <div className="text-4xl font-bold text-primary">$40</div>
              <p className="text-sm text-muted dark:text-muted-foreground">Basic shapes, minimal detail</p>
              <p className="text-xs text-muted dark:text-muted-foreground">24-48 hour turnaround</p>
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
              <p className="text-xs text-muted dark:text-muted-foreground">24-48 hour turnaround</p>
            </div>
          </div>

          {/* Complex */}
          <div className="card hover:shadow-lg transition-shadow text-center">
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">Complex Artwork</h3>
              <div className="text-4xl font-bold text-primary">$55+</div>
              <p className="text-sm text-muted dark:text-muted-foreground">Photos, intricate designs</p>
              <p className="text-xs text-muted dark:text-muted-foreground">24-48 hour turnaround</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 mb-12">
          <p className="text-sm text-muted dark:text-muted-foreground">
            <strong className="text-foreground dark:text-foreground-dark">Includes:</strong> Both EPS & PLT formats | Unlimited revisions | Volume discounts available
          </p>
          <div className="card bg-accent/5 border-accent/20 inline-block">
            <div className="p-4 text-sm">
              <strong className="text-foreground dark:text-foreground-dark">Rush Options:</strong>{' '}
              <span className="text-muted dark:text-muted-foreground">12-hour rush: $60-75 | Same-day emergency: $90-100</span>
            </div>
          </div>
        </div>

        <div className="card bg-muted/5 max-w-3xl mx-auto mb-8">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground dark:text-foreground-dark">Volume Discounts</h3>
            <ul className="space-y-2 text-sm text-muted dark:text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary">•</span><span>10-25 files: 10% off</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span><span>25-50 files: 15% off</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span><span>50+ files: 20% off</span></li>
            </ul>
            <p className="text-sm text-muted dark:text-muted-foreground mt-3">
              Monthly retainer packages available for ongoing needs. <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to discuss.
            </p>
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
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span><span>Gravograph laser systems</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span><span>Gravostyle software (all versions)</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span><span>EPS format optimized for laser marking</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span><span>Single-line outlines, clean paths</span></li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">Rotary Engraving</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span><span>Mechanical engraving systems</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span><span>EngraveLab-compatible PLT format</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span><span>7 fill pattern options available</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span><span>Proper tool path generation</span></li>
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
              Contact us with your machine model and software version. We'll confirm compatibility and recommend the best file format.
            </p>
            <Link href="/contact" className="btn-secondary inline-block">
              Ask About Your Equipment
            </Link>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <GuaranteeSection />

      {/* FAQ */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">What file formats do you accept?</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                We accept any format: JPG, PNG, GIF, PDF, AI, PSD, EPS, TIFF, BMP, and more. Even low-resolution or damaged files can be converted.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">What do I receive?</h3>
              <p className="text-sm text-muted dark:text-muted-foreground mb-3">You receive production-ready files in the format(s) you need:</p>
              <ul className="text-sm text-muted dark:text-muted-foreground space-y-2">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong>EPS format</strong> for laser engraving (Gravostyle) - single-line outlines, outlined text, compound paths</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong>PLT format</strong> for rotary engraving (EngraveLab) - with your choice of 7 fill patterns</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Both formats included at no extra charge if you need them</span></li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">How fast can you turn it around?</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">Standard delivery is 24-48 hours from payment approval. Rush services: 12-hour rush ($60-75) or same-day emergency ($90-100). We respond to quote requests within 2 hours during business hours.</p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">Can you handle complex artwork or photos?</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">Absolutely. We've processed 26,000+ files over 13 years, including complex logos, photographs, signatures, hand-drawn artwork, and intricate designs. If you can see it, we can convert it.</p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">What if the file doesn't work in my equipment?</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">100% money-back guarantee. If the file isn't production-ready, we'll revise it for free or provide a full refund. This has never happened in 26,000+ files, but the guarantee stands.</p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">Do you offer volume discounts?</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">Yes! 10-25 files: 10% off. 25-50 files: 15% off. 50+ files: 20% off. Monthly retainer packages available for ongoing needs.</p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">Do you work with Gravograph equipment specifically?</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">Yes! We specialize in files for Gravograph laser and rotary engraving systems with Gravostyle software. However, our files work with most engraving systems. Tell us your equipment model and we'll confirm compatibility.</p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">Can I get both EPS and PLT formats?</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">Yes! We provide both formats at no additional charge. Many shops have both laser and rotary equipment and need files in both formats.</p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">Do you do full-color graphic design?</h3>
              <p className="text-sm text-muted dark:text-muted-foreground">No. We specialize exclusively in single-line vector outlines for engraving equipment. We don't do multi-color design, screen printing artwork, or embroidery digitizing. This specialization is why our files work perfectly the first time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-background dark:bg-background-dark">
            <div className="p-8">
              <blockquote className="text-lg italic text-foreground dark:text-foreground-dark mb-6">
                "Thank you for all your efforts on digitizing logos for our clients. You have been a great help and do an amazing job with quick turnaround times. You do a great job of communicating with us if you have questions or if a resolution is needed, and always offer a helping hand... We are continuously satisfied with your performance and deliverables."
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
          Ready to Get Started?
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
          Questions? We typically respond within 2 hours during business hours.
        </p>
      </section>
    </div>
  )
}
