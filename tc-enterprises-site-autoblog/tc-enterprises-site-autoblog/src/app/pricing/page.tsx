import Link from 'next/link'
import PricingTiers from '@/components/PricingTiers'

export const metadata = {
  title: 'Pricing | Vector Conversion for Engraving | T&C Enterprises',
  description: 'Transparent pricing for production-ready engraving files. $40-55 per file, volume discounts available. Both EPS and PLT formats included. Same-day rush available.',
}

export default function PricingPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground-dark">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted dark:text-muted-foreground max-w-3xl mx-auto">
          No hidden fees. No surprises. Just production-ready vector files at fair, consistent prices.
        </p>
      </section>

      {/* Main Pricing Component */}
      <PricingTiers />

      {/* FAQ Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                What file formats do you accept?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                We accept any format: JPG, PNG, GIF, PDF, AI, PSD, EPS, TIFF, BMP, and more. Even low-resolution or damaged files can be converted.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                What do I receive?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground mb-3">
                You receive production-ready files in the format(s) you need:
              </p>
              <ul className="text-sm text-muted dark:text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>EPS format</strong> for laser engraving (Gravostyle) - single-line outlines, outlined text, compound paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>PLT format</strong> for rotary engraving (EngraveLab) - with your choice of 7 fill patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Both formats included at no extra charge if you need them</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                What's the difference between EPS and PLT files?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                <strong>EPS files</strong> are for laser engraving systems like Gravograph with Gravostyle software. They contain single-line vector outlines.
              </p>
              <p className="text-sm text-muted dark:text-muted-foreground">
                <strong>PLT files</strong> are for rotary/mechanical engraving systems. They include fill patterns (horizontal lines, vertical lines, cross-hatch, diagonal, stipple, etc.) created in EngraveLab.
              </p>
              <p className="text-sm text-muted dark:text-muted-foreground">
                Not sure which you need? Just tell us your equipment model and we'll provide the right format.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                What fill patterns are available for PLT files?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground mb-3">
                We offer 7 standard fill patterns through EngraveLab:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted dark:text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Horizontal lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Vertical lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Cross-hatch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Diagonal left</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Diagonal right</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Stipple/dots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Custom patterns (upon request)</span>
                </li>
              </ul>
              <p className="text-sm text-muted dark:text-muted-foreground mt-3">
                Tell us your preference or we'll recommend the best option for your project and material.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                How fast can you turn it around?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                Standard delivery is 24-48 hours from payment approval.
              </p>
              <p className="text-sm text-muted dark:text-muted-foreground">
                Rush services available:
              </p>
              <ul className="text-sm text-muted dark:text-muted-foreground space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>12-hour rush: $60-75</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Same-day emergency: $90-100</span>
                </li>
              </ul>
              <p className="text-sm text-muted dark:text-muted-foreground mt-2">
                We respond to quote requests within 2 hours during business hours.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                Do you work with Gravograph equipment specifically?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                Yes! We specialize in files for Gravograph laser and rotary engraving systems with Gravostyle software. However, our files work with most engraving systems. Tell us your equipment model and we'll confirm compatibility.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                Can you handle complex artwork or photos?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                Absolutely. We've processed 26,000+ files over 13 years, including complex logos, photographs, signatures, hand-drawn artwork, and intricate designs. If you can see it, we can convert it.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                What if the file doesn't work in my equipment?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                100% money-back guarantee. If the file isn't production-ready, we'll revise it for free or provide a full refund. This has never happened in 26,000+ files, but the guarantee stands.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                Do you offer volume discounts?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground mb-3">
                Yes!
              </p>
              <ul className="text-sm text-muted dark:text-muted-foreground space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>10-25 files: 10% off</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>25-50 files: 15% off</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>50+ files: 20% off</span>
                </li>
              </ul>
              <p className="text-sm text-muted dark:text-muted-foreground mt-2">
                Monthly retainer packages available for ongoing needs. <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to discuss.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                Can I get both EPS and PLT formats?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                Yes! We provide both formats at no additional charge. Many shops have both laser and rotary equipment and need files in both formats.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                What industries do you serve?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground mb-3">
                We primarily serve:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted dark:text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Trophy and awards shops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Promotional products distributors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Recognition product companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Signage companies with engraving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Jewelry engraving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Gift and personalization businesses</span>
                </li>
              </ul>
              <p className="text-sm text-muted dark:text-muted-foreground mt-3">
                If you engrave products, we can help.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
                Do you do full-color graphic design?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                No. We specialize exclusively in single-line vector outlines for engraving equipment. We don't do multi-color design, screen printing artwork, or embroidery digitizing. This specialization is why our files work perfectly the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
          <Link href="/" className="btn-secondary text-center">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  )
}
