import Link from 'next/link';

export default function ServicesPage() {
  const pricingTiers = [
    {
      name: 'Simple',
      price: '$30',
      description: 'Clean source or geometric art',
      turnaround: '1 business day',
      features: ['Vector optimization', 'Basic cleanup', 'Format conversion'],
      popular: false
    },
    {
      name: 'Standard',
      price: '$55',
      description: 'Moderate cleanup or redraw',
      turnaround: '1 business day',
      features: ['Advanced cleanup', 'Color correction', 'Layer organization'],
      popular: true
    },
    {
      name: 'Complex',
      price: '$95',
      description: 'Detailed redraw or rough reference',
      turnaround: '1-3 business days',
      features: ['Complete redraw', 'Style matching', 'Multiple revisions'],
      popular: false
    },
    {
      name: 'Extra-complex',
      price: 'from $150',
      description: 'Heavy reconstruction or poor source',
      turnaround: 'Quoted',
      features: ['Full reconstruction', 'Creative interpretation', 'Extensive revisions'],
      popular: false
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-16">
        <p className="text-sm font-bold uppercase text-primary tracking-widest mb-4">Services</p>
        <h1 className="text-4xl md:text-6xl font-bold text-text-main dark:text-white mb-6 leading-tight">
          From stroke-only logos to <span className="text-primary">grounded automation</span>
        </h1>
        <p className="max-w-4xl mx-auto text-xl text-text-muted dark:text-gray-300 leading-relaxed">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text-main dark:text-white mb-12">Core focus areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group hover:border-primary/80 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-primary mb-3">Artwork prep</h3>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                Send the rough input, get back laser-ready EPS. We keep editable AI files on hand so revisions are fast.
              </p>
            </div>
            <div className="card group hover:border-primary/80 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-primary mb-3">Hybrid logo catalog</h3>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                A searchable, permission-aware library that links proofs, approvals, and download history.
              </p>
            </div>
            <div className="card group hover:border-primary/80 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-primary mb-3">Automation & chat</h3>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                Grounded agents that answer FAQs, quote pricing anchors, and hand off to humans through Discord when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">Engrave-ready artwork pricing</h2>
            <p className="text-xl text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              Choose the tier that matches complexity. When in doubt, we round up so production stays on schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`card relative group hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-primary border-primary' : 'hover:border-primary/80'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{tier.price}</div>
                  <p className="text-sm text-text-muted dark:text-gray-400">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium text-text-main dark:text-white mb-2">Turnaround: {tier.turnaround}</div>
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-text-muted dark:text-gray-300">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                    tier.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
              *Provider-caused fixes are free within three business days. Updates after approval are priced as new work.
            </p>
          </div>
        </div>
      </section>

      {/* Software & Automation */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text-main dark:text-white mb-12">Software and automation anchors</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                Custom builds start with a scoped discovery sprint. Once we understand your workflow we map milestones, integrations, and budget.
              </p>

              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">Pricing Structure</h3>
                <ul className="space-y-3 text-text-muted dark:text-gray-300">
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
                    <h4 className="font-semibold text-text-main dark:text-white">RealtyGenius</h4>
                    <p className="text-sm text-text-muted dark:text-gray-300">Transaction workflows for real estate teams</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/5 border border-secondary/10">
                  <span className="text-2xl">🧶</span>
                  <div>
                    <h4 className="font-semibold text-text-main dark:text-white">Crochet Pattern Studio</h4>
                    <p className="text-sm text-text-muted dark:text-gray-300">Pattern generation with guardrails</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/5 border border-secondary/10">
                  <span className="text-2xl">🛒</span>
                  <div>
                    <h4 className="font-semibold text-text-main dark:text-white">CraftCart</h4>
                    <p className="text-sm text-text-muted dark:text-gray-300">Storefront tooling with automated proofs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/5 border border-secondary/10">
                  <span className="text-2xl">🚐</span>
                  <div>
                    <h4 className="font-semibold text-text-main dark:text-white">RV Ops Stack</h4>
                    <p className="text-sm text-text-muted dark:text-gray-300">Scheduling and maintenance for mobile service fleets</p>
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