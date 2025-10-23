import Link from 'next/link'
import ProcessSteps from '@/components/ProcessSteps'
import GuaranteeSection from '@/components/GuaranteeSection'

export const metadata = {
  title: 'How It Works | Vector Conversion Process | T&C Enterprises',
  description: 'Our 5-step process for delivering production-ready engraving files. Learn what you receive, equipment compatibility, and our guarantee.',
}

export default function HowItWorksPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground-dark">
          How It Works
        </h1>
        <p className="text-xl text-muted dark:text-muted-foreground max-w-3xl mx-auto">
          From file upload to production-ready delivery in 5 simple steps
        </p>
      </section>

      {/* 5-Step Process */}
      <ProcessSteps />

      {/* DETAILED WHAT YOU GET SECTION */}
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

      {/* GUARANTEE SECTION */}
      <GuaranteeSection />

      {/* TESTIMONIAL */}
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

      {/* FINAL CTA */}
      <section className="py-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-foreground-dark">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-muted dark:text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get your first file conversion free. See the quality before you commit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-center">
            Start Free Trial
          </Link>
          <Link href="/pricing" className="btn-secondary text-center">
            View Pricing
          </Link>
        </div>
      </section>
    </div>
  )
}
