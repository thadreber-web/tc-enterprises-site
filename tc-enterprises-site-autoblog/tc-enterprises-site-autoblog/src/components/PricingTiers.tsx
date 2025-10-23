import Link from 'next/link'

export default function PricingTiers() {
  return (
    <section className="py-12" id="pricing">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground dark:text-foreground-dark">
        Simple, Transparent Pricing
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Simple Logos */}
        <div className="card hover:shadow-lg transition-shadow">
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">Simple Logos</h3>
            <div className="text-4xl font-bold text-primary">$40</div>
            <p className="text-sm text-muted dark:text-muted-foreground">1-3 colors, basic shapes, minimal detail</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Both EPS and PLT formats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>24-48 hour turnaround</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Unlimited revisions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Medium Complexity - Featured */}
        <div className="card hover:shadow-lg transition-shadow border-2 border-primary relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">Medium Complexity</h3>
            <div className="text-4xl font-bold text-primary">$45</div>
            <p className="text-sm text-muted dark:text-muted-foreground">Multiple elements, detailed shapes, moderate intricacy</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Both EPS and PLT formats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>24-48 hour turnaround</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Unlimited revisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>7 fill pattern options</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Complex Artwork */}
        <div className="card hover:shadow-lg transition-shadow">
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">Complex Artwork</h3>
            <div className="text-4xl font-bold text-primary">$55+</div>
            <p className="text-sm text-muted dark:text-muted-foreground">Intricate detail, photos, signatures, many elements</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Both EPS and PLT formats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>24-48 hour turnaround</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Unlimited revisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Custom pattern optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rush Pricing */}
      <div className="card bg-accent/5 border-accent/20 mb-6">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground dark:text-foreground-dark">Rush Service Available</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">12-Hour Rush</span>
              <span className="text-primary font-bold">$60-75</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Same-Day Emergency</span>
              <span className="text-primary font-bold">$90-100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Volume Discounts */}
      <div className="card">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground dark:text-foreground-dark">Volume Discounts</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-primary font-bold">10-25 files:</span>
              <span>10% off</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary font-bold">25-50 files:</span>
              <span>15% off</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary font-bold">50+ files:</span>
              <span>20% off</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary font-bold">Monthly retainers:</span>
              <Link href="/contact" className="text-primary hover:underline">Contact for details</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* What's Included */}
      <div className="text-center mt-6 text-sm text-muted dark:text-muted-foreground">
        <p className="mb-2"><strong className="text-foreground dark:text-foreground-dark">All Prices Include:</strong></p>
        <p>Both EPS (laser) and PLT (rotary) formats • Multiple fill pattern options • Unlimited revisions • Production-ready guarantee • Fast response times</p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Link href="/contact" className="btn-primary text-center">
          Start Free Trial
        </Link>
        <Link href="/contact" className="btn-secondary text-center">
          Get a Quote
        </Link>
      </div>
    </section>
  )
}
