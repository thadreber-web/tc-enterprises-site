import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-16">
        <p className="text-sm font-bold uppercase text-primary tracking-widest mb-4">Services</p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground dark:text-foreground-dark mb-6 leading-tight">
          From stroke-only logos to <span className="text-primary">grounded automation</span>
        </h1>
        <p className="max-w-4xl mx-auto text-xl text-muted dark:text-muted-foreground leading-relaxed">
          We help engraving, real estate, and specialty operations teams keep work moving. Artwork stays clean, catalogs stay organized, and automation projects launch with clear guardrails.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="btn-primary text-center">Start a project</Link>
          <a href="#pricing" className="btn-secondary text-center">View pricing</a>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground dark:text-foreground-dark mb-12">Core focus areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div id="artwork" className="card group hover:border-primary/80 hover:shadow-xl transition-all duration-300 scroll-mt-24">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-primary mb-3">Artwork prep</h3>
              <p className="text-muted dark:text-gray-300 leading-relaxed">
                Send the rough input, get back laser-ready EPS. We keep editable AI files on hand so revisions are fast.
              </p>
            </div>
            <div className="card group hover:border-primary/80 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-primary mb-3">Hybrid logo catalog</h3>
              <p className="text-muted dark:text-gray-300 leading-relaxed">
                A searchable, permission-aware library that links proofs, approvals, and download history.
              </p>
            </div>
            <div id="automation" className="card group hover:border-primary/80 hover:shadow-xl transition-all duration-300 scroll-mt-24">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-primary mb-3">Automation & chat</h3>
              <p className="text-muted dark:text-gray-300 leading-relaxed">
                Grounded agents that answer FAQs, quote pricing anchors, and hand off to humans through Discord when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark mb-4">Every logo is different. Send yours for a free quote.</h2>
            <p className="text-xl text-muted dark:text-gray-300 max-w-2xl mx-auto">
              Email your image and we&apos;ll reply with a quote — usually within a few hours during business hours.
            </p>
          </div>

          <div className="card hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">How it works</h3>
                <ol className="space-y-3 text-muted dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-3 mt-0.5">1.</span>
                    <span>Email your logo or artwork to <a href="mailto:contact@tc-enterprises.com" className="text-primary font-medium hover:underline">contact@tc-enterprises.com</a> — an image attachment is required for a quote.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-3 mt-0.5">2.</span>
                    <span>We review and reply with a price, usually within a few hours during business hours.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-3 mt-0.5">3.</span>
                    <span>Once accepted, expect your finished file within 48 business hours.</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">What you get</h3>
                <ul className="space-y-2 text-muted dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">&#10003;</span>
                    Delivered in EPS, PLT, and other formats on request
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">&#10003;</span>
                    Fixes for provider-caused errors are always free
                  </li>
                </ul>
              </div>

              <div className="text-center pt-4">
                <a
                  href="mailto:contact@tc-enterprises.com"
                  className="inline-block bg-primary text-white py-3 px-8 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Send your logo for a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software & Automation */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground dark:text-foreground-dark mb-12">Software and automation anchors</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted dark:text-gray-300 leading-relaxed">
                Custom builds start with a scoped discovery sprint. Once we understand your workflow we map milestones, integrations, and budget.
              </p>

              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">Pricing Structure</h3>
                <ul className="space-y-3 text-muted dark:text-gray-300">
                  <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span>Discovery and technical plan</span>
                    <span className="font-semibold text-primary">from $300</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span>Prototype (single workflow)</span>
                    <span className="font-semibold text-primary">from $1,500</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span>Pilot (two to four features)</span>
                    <span className="font-semibold text-primary">from $4,000</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span>Production modules</span>
                    <span className="font-semibold text-primary">from $2,500 each</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span>Support retainers</span>
                    <span className="font-semibold text-primary">from $500/month</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span>SaaS access (where offered)</span>
                    <span className="font-semibold text-primary">$49-$199 per tenant</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-primary mb-6">Current pilots & projects</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/5 border border-secondary/10">
                  <span className="text-2xl">🏠</span>
                  <div>
                    <h4 className="font-semibold text-foreground dark:text-foreground-dark">RealtyGenius</h4>
                    <p className="text-sm text-muted dark:text-gray-300">Transaction workflows for real estate teams</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/5 border border-secondary/10">
                  <span className="text-2xl">🧶</span>
                  <div>
                    <h4 className="font-semibold text-foreground dark:text-foreground-dark">Crochet Pattern Studio</h4>
                    <p className="text-sm text-muted dark:text-gray-300">Pattern generation with guardrails</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/5 border border-secondary/10">
                  <span className="text-2xl">🛒</span>
                  <div>
                    <h4 className="font-semibold text-foreground dark:text-foreground-dark">CraftCart</h4>
                    <p className="text-sm text-muted dark:text-gray-300">Storefront tooling with automated proofs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/5 border border-secondary/10">
                  <span className="text-2xl">🚐</span>
                  <div>
                    <h4 className="font-semibold text-foreground dark:text-foreground-dark">RV Ops Stack</h4>
                    <p className="text-sm text-muted dark:text-gray-300">Scheduling and maintenance for mobile service fleets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
