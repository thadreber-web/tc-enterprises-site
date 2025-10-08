import Link from 'next/link'

export const metadata = {
  title: 'Software & Automation Services | T & C Enterprises',
  description: 'Discovery-to-production software and automation projects tailored for small teams and engravers.',
}

const discoverySteps = [
  {
    title: 'Discovery',
    detail: 'We map the workflow, identify the manual choke points, and agree on success metrics. Fixed-price consultation so you know the effort before coding starts.',
  },
  {
    title: 'Prototype',
    detail: 'Lightweight builds that prove the concept. We validate integrations, permissions, and operator UX without derailing daily work.',
  },
  {
    title: 'Pilot',
    detail: 'Real data, real users. We instrument the pilot for feedback so tweaks happen before full rollout.',
  },
  {
    title: 'Production',
    detail: 'Hardening, training, and handoff with clear maintenance notes. We stick around for ongoing support or documentation-only turnover.',
  },
]

const buildExamples = [
  'Artwork approval portals with email or Discord notifications',
  'Inventory and asset catalogs with role-based access',
  'Internal chatbots grounded in your SOPs and pricing policies',
  'Production dashboards that surface exceptions before they become delays',
]

export default function SoftwareServicesPage() {
  return (
    <div className="space-y-24">
      <section className="container-spacing space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] font-semibold text-primary">Software & Automation</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground-dark">
          Practical Automation, Built for Small Teams
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted dark:text-muted-foreground">
          We specialize in projects that shave minutes off repeat work—approval portals, hybrid logo catalogs,
          intelligent notifications, and tailored GPT workflows. No bloated roadmaps; just focused tools that pay for
          themselves in throughput and fewer late-night fixes.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Start Discovery</Link>
          <Link href="/pricing#software" className="btn-secondary">View Consulting Rates</Link>
        </div>
      </section>

      <section className="container grid gap-8 md:grid-cols-2" id="process">
        <div className="card p-6 space-y-3">
          <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark">How We Work</h2>
          <p className="text-sm text-muted dark:text-muted-foreground">
            Every engagement follows a transparent, iterative path so you always know what comes next and what it costs.
          </p>
          <div className="space-y-4">
            {discoverySteps.map(step => (
              <div key={step.title} className="p-4 rounded-lg border border-primary/20 bg-primary/5 dark:bg-primary/10">
                <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">{step.title}</h3>
                <p className="text-sm text-muted dark:text-muted-foreground">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6 space-y-4" id="build">
          <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark">What We Build</h2>
          <p className="text-sm text-muted dark:text-muted-foreground">
            From engraver production shops to custom real estate analytics tools, each solution is scoped to fit small
            teams that juggle multiple hats.
          </p>
          <ul className="space-y-2 text-sm text-muted dark:text-muted-foreground list-disc pl-6">
            {buildExamples.map(example => (
              <li key={example}>{example}</li>
            ))}
          </ul>
          <div className="rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-accent">
            Discovery is a fixed $199 engagement. Prototype and production phases are quoted per scope, with consulting
            from $120/hr and retainers available for monitoring or roadmap adjustments.
          </div>
        </div>
      </section>

      <section className="container-spacing space-y-4 bg-primary/5 dark:bg-primary/10 rounded-3xl py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark">Ready to Surface the Next Bottleneck?</h2>
        <p className="max-w-3xl mx-auto text-muted dark:text-muted-foreground">
          Bring the messy process notes and we will turn them into a scoped roadmap. Most wins launch within 6–8 weeks,
          keeping your team shipping while we handle the automation plumbing.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Book Discovery</Link>
          <Link href="/artwork" className="btn-secondary">Need Artwork Instead?</Link>
        </div>
      </section>
    </div>
  )
}
