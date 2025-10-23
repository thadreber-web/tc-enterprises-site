import Link from 'next/link'

export const metadata = {
  title: 'Our Services | T&C Enterprises',
  description: 'Vector conversion for engraving professionals (primary service), plus limited IT consulting and custom software development for select clients.',
}

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground-dark">
          Our Services
        </h1>
        <p className="text-xl text-muted dark:text-muted-foreground max-w-3xl mx-auto">
          Specialized solutions for engraving professionals and small businesses
        </p>
      </section>

      {/* Primary Service - Vector Conversion */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              PRIMARY SERVICE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark">
              Vector Conversion for Engraving
            </h2>
            <p className="text-lg text-muted dark:text-muted-foreground mt-4 max-w-3xl mx-auto">
              Production-ready EPS and PLT files for laser and rotary engraving equipment. Our specialty and primary focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card bg-background dark:bg-background-dark">
              <div className="p-6 space-y-3">
                <div className="text-3xl text-primary">✓</div>
                <h3 className="font-semibold text-foreground dark:text-foreground-dark">13 Years Experience</h3>
                <p className="text-sm text-muted dark:text-muted-foreground">26,000+ files processed with proven quality</p>
              </div>
            </div>

            <div className="card bg-background dark:bg-background-dark">
              <div className="p-6 space-y-3">
                <div className="text-3xl text-primary">✓</div>
                <h3 className="font-semibold text-foreground dark:text-foreground-dark">Gravostyle Specialist</h3>
                <p className="text-sm text-muted dark:text-muted-foreground">Optimized for Gravograph laser and rotary systems</p>
              </div>
            </div>

            <div className="card bg-background dark:bg-background-dark">
              <div className="p-6 space-y-3">
                <div className="text-3xl text-primary">✓</div>
                <h3 className="font-semibold text-foreground dark:text-foreground-dark">Dual Format Delivery</h3>
                <p className="text-sm text-muted dark:text-muted-foreground">EPS for laser + PLT with 7 fill patterns for rotary</p>
              </div>
            </div>

            <div className="card bg-background dark:bg-background-dark">
              <div className="p-6 space-y-3">
                <div className="text-3xl text-primary">✓</div>
                <h3 className="font-semibold text-foreground dark:text-foreground-dark">Fast Turnaround</h3>
                <p className="text-sm text-muted dark:text-muted-foreground">24-48 hours standard, same-day rush available</p>
              </div>
            </div>
          </div>

          <div className="card max-w-4xl mx-auto bg-background dark:bg-background-dark">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground dark:text-foreground-dark">What You Get:</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted dark:text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Single-line outlines (EPS) for laser engraving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>PLT files with fill patterns for rotary engraving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>100% production-ready guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Unlimited revisions until satisfied</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Both formats included at no extra charge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Volume discounts available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/" className="btn-primary text-center">
              Learn More About Vector Conversion
            </Link>
            <Link href="/pricing" className="btn-secondary text-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-muted/20"></div>

      {/* Additional Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark mb-4">
            Additional Services
          </h2>
          <p className="text-muted dark:text-muted-foreground max-w-3xl mx-auto">
            The following services are offered on a <strong>limited basis</strong> to existing clients and select projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* IT Consulting */}
          <div className="card">
            <div className="p-8 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-foreground dark:text-foreground-dark">IT Consulting & Support</h3>
                <div className="bg-secondary/20 text-secondary px-3 py-1 rounded text-xs font-semibold">LIMITED</div>
              </div>

              <p className="text-sm text-muted dark:text-muted-foreground">
                <strong className="text-foreground dark:text-foreground-dark">CompTIA A+ Certified</strong>
              </p>

              <p className="text-muted dark:text-muted-foreground">
                Small business technology support for network setup, troubleshooting, and system optimization.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground dark:text-foreground-dark">Services Include:</h4>
                <ul className="space-y-2 text-sm text-muted dark:text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Network setup and configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Wired/wireless infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>System troubleshooting and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Hardware/software installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Technology consulting</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-muted/20">
                <p className="text-sm font-semibold text-foreground dark:text-foreground-dark">Availability:</p>
                <p className="text-sm text-muted dark:text-muted-foreground">Limited basis for existing clients</p>
              </div>

              <Link href="/contact" className="btn-secondary w-full text-center block">
                Contact for Availability
              </Link>
            </div>
          </div>

          {/* Custom Development */}
          <div className="card">
            <div className="p-8 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-foreground dark:text-foreground-dark">Custom Development & Automation</h3>
                <div className="bg-secondary/20 text-secondary px-3 py-1 rounded text-xs font-semibold">SELECT PROJECTS</div>
              </div>

              <p className="text-muted dark:text-muted-foreground">
                Specialized workflow automation and custom software solutions for unique business needs.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground dark:text-foreground-dark">Capabilities:</h4>
                <ul className="space-y-2 text-sm text-muted dark:text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Custom workflow automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Business process optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Specialized software development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Database integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>AI-assisted workflows</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-muted/20">
                <p className="text-sm font-semibold text-foreground dark:text-foreground-dark">Availability:</p>
                <p className="text-sm text-muted dark:text-muted-foreground">Select projects only</p>
              </div>

              <Link href="/contact" className="btn-secondary w-full text-center block">
                Contact for Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Statement */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg text-center">
        <div className="max-w-3xl mx-auto space-y-6 px-6">
          <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark">
            Our Focus
          </h2>
          <p className="text-lg text-muted dark:text-muted-foreground leading-relaxed">
            While we offer additional services, <strong className="text-foreground dark:text-foreground-dark">vector conversion for engraving is our primary focus and expertise</strong>. This specialization is why we consistently deliver production-ready files that work the first time, every time.
          </p>
          <p className="text-muted dark:text-muted-foreground">
            If you need engraving file preparation, you're in the right place. For other services, please contact us to discuss availability and fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/" className="btn-primary text-center">
              Back to Vector Conversion
            </Link>
            <Link href="/contact" className="btn-secondary text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
