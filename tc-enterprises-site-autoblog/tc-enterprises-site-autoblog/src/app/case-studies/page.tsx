import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies (Coming Soon) | T & C Enterprises',
  description: 'Placeholder for future detailed case studies from T & C Enterprises.',
  robots: {
    index: false,
    follow: false,
  },
}

const upcoming = [
  {
    title: 'Hybrid Logo Catalog Rollout',
    summary: 'Asset indexing and engraver-ready previews for a multi-location awards team.',
  },
  {
    title: 'RealtyGenius Market Intelligence',
    summary: 'Automated reporting stack that surfaces local market insights for brokers.',
  },
  {
    title: 'Engraving Ops Automation Suite',
    summary: 'Job intake, proof approvals, and production scheduling tailored to a high-volume engraver.',
  },
]

export default function CaseStudiesPage() {
  return (
    <section className="container-spacing space-y-12">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] font-semibold text-primary">Case Studies</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground-dark">Case Studies Coming Soon</h1>
        <p className="max-w-2xl mx-auto text-muted dark:text-muted-foreground">
          Detailed breakdowns of in-progress and recent projects are being prepared. Until then, explore the live
          portfolio or reach out for a walkthrough of the solutions we deliver.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/portfolio" className="btn-primary">View Portfolio</Link>
          <Link href="/contact" className="btn-secondary">Request a Walkthrough</Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {upcoming.map(item => (
          <div key={item.title} className="card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-foreground dark:text-foreground-dark">{item.title}</h2>
            <p className="text-sm text-muted dark:text-muted-foreground">{item.summary}</p>
            <span className="inline-flex items-center text-xs uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full">
              In development
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
