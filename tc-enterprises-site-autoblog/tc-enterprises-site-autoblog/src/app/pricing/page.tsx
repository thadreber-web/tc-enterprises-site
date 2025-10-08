import Link from 'next/link'

export const viewport = {
  themeColor: '#1B2A4E',
}

export const metadata = {
  title: 'Pricing | T & C Enterprises',
  description: 'Transparent pricing for logo digitizing and software & automation consulting services.',
}

const logoPackages = [
  {
    name: 'Light Redraw',
    price: '$65',
    description: 'Clean source art with simple wordmarks or basic shapes that translate directly to line art.',
    includes: ['Stroke-only EPS, AI, PLT/HPGL outputs', 'Preview PNG for quick approvals', '1 minor revision included'],
  },
  {
    name: 'Typical Redraw',
    price: '$95',
    description: 'Moderate detail logos with layered elements that require careful translation to engraver-ready strokes.',
    includes: ['EPS, AI, PLT/HPGL outputs', '1 minor revision included', 'Naming conventions for archive systems'],
    featured: true,
  },
  {
    name: 'Complex Emblem / Seal',
    price: '$160+',
    description: 'Highly detailed crests, mascots, or low-resolution scans that demand redraw, contour balance, and multi-toolpath planning.',
    includes: ['Consultation on machine settings', 'Layered exports (fill + outline)', 'Timeline quoted per scope'],
  },
]

const rushAddOn = {
  title: 'Rush Add-On',
  price: '+$30',
  detail: 'Next-business-day delivery if accepted before 12:00 pm PT and capacity allows.',
}

const extras = [
  {
    title: 'Additional revisions',
    price: '$20 each',
  },
  {
    title: 'Vector pack (EPS + SVG + PDF)',
    price: '+$15',
  },
]

const softwareHighlights = [
  {
    title: 'Discovery Session',
    price: '$199 fixed',
    description: 'Deep dive into your workflow, pain points, and metrics. Includes prioritized roadmap and implementation options.',
  },
  {
    title: 'Consulting & Build',
    price: '$120/hr',
    description: 'Hands-on implementation, integrations, and automation support. Quoted per milestone with transparent burn-down.',
  },
  {
    title: 'Pilot & Production',
    price: 'Quoted per scope',
    description: 'Rollout plans, training, instrumentation, and post-launch support tailored to your team size.',
  },
]

export default function PricingPage() {
  return (
    <div className="space-y-24">
      <section className="container-spacing text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] font-semibold text-primary">Pricing</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground-dark">Straightforward Pricing, Trusted Delivery</h1>
        <p className="max-w-3xl mx-auto text-lg text-muted dark:text-muted-foreground">
          Choose the service tier that fits your project. Every engagement includes clear communication, offline asset
          storage, and fast follow-ups when you need files resent.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Book a Project</Link>
          <Link href="/artwork" className="btn-secondary">See Artwork Examples</Link>
        </div>
      </section>

      <section className="container space-y-10" id="logos">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark">Logo Redraw — Engraver-Ready Line Art</h2>
            <p className="text-muted dark:text-muted-foreground">
              Raster-to-vector conversions engineered for rotary, diamond-drag, and laser engraving. Standard delivery is
              1–2 business days from acceptance, and each package includes one minor revision.
            </p>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10 p-4 text-sm text-primary font-medium">
            Need it sooner? Add the <strong>Rush add-on (+$30)</strong> for next-business-day delivery when submitted before 12:00 pm PT and our schedule allows.
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {logoPackages.map(pkg => (
            <div
              key={pkg.name}
              className={`card h-full p-6 space-y-4 border ${pkg.featured ? 'border-primary shadow-lg shadow-primary/20' : 'border-transparent'}`}
            >
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary">{pkg.price}</div>
              </div>
              <p className="text-sm text-muted dark:text-muted-foreground">{pkg.description}</p>
              <ul className="space-y-2 text-sm text-muted dark:text-muted-foreground list-disc pl-5">
                {pkg.includes.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="card p-6 bg-secondary/10 dark:bg-secondary/20 border border-secondary/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-secondary dark:text-secondary">{rushAddOn.title}</h3>
            <p className="text-sm text-muted dark:text-muted-foreground">{rushAddOn.detail}</p>
          </div>
          <div className="text-2xl font-bold text-secondary dark:text-secondary">{rushAddOn.price}</div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {extras.map(extra => (
            <div key={extra.title} className="card p-6 space-y-2">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">{extra.title}</h3>
              <p className="text-sm text-primary font-medium">{extra.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-10" id="software">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark">Software & Automation Consulting</h2>
          <p className="text-muted dark:text-muted-foreground max-w-3xl">
            Engage us for targeted automation wins—from hybrid logo catalogs and approval portals to custom AI-assisted workflows.
            Each phase is scoped with budget transparency and measurable outcomes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {softwareHighlights.map(item => (
            <div key={item.title} className="card h-full p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">{item.title}</h3>
              <div className="text-3xl font-bold text-foreground dark:text-foreground-dark">{item.price}</div>
              <p className="text-sm text-muted dark:text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="card p-6 space-y-3 bg-primary/5 dark:bg-primary/10 border border-primary/20">
          <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">Ready for a proposal?</h3>
          <p className="text-sm text-muted dark:text-muted-foreground">
            Most pilots wrap in 6–8 weeks with incremental releases. Book a discovery call to align scope, budget, and timeline.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/contact" className="btn-primary">Schedule Discovery</Link>
            <Link href="/services/software" className="btn-secondary">Learn about our process</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
