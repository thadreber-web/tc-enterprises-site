import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

export const viewport = {
  themeColor: '#1B2A4E',
}

import houseBefore from '@/app/portfolio/logos/plt-hpgl/house/prework.png'
import houseAfter from '@/app/portfolio/logos/plt-hpgl/house/post-work.png'
import hlBefore from '@/app/portfolio/logos/plt-hpgl/HL/HL-pre.jpg'
import hlAfter from '@/app/portfolio/logos/plt-hpgl/HL/HL-finished.png'
import roseAfter from '@/app/portfolio/logos/plt-hpgl/rose/rose-finished.png'
import fillSettings from '@/app/portfolio/logos/plt-hpgl/fill_settings.png'

import hebrewBefore from '@/app/portfolio/logos/eps/Hebrew_saying/original.png'
import hebrewAfter from '@/app/portfolio/logos/eps/Hebrew_saying/Artboard 1.png'
import ladybugBefore from '@/app/portfolio/logos/eps/ladybug/pre-work.png'
import ladybugAfter from '@/app/portfolio/logos/eps/ladybug/engrave-ready.png'
import snakeBefore from '@/app/portfolio/logos/eps/snakehead/22809932_1822969377732184_1212774006_n.jpg'
import snakeAfter from '@/app/portfolio/logos/eps/snakehead/Artboard 1.png'

type PltExample = {
  title: string
  before?: StaticImageData
  after: StaticImageData
  summary: string
  engravingNotes: string
}

const pltExamples: PltExample[] = [
  {
    title: 'Sunrise Homes Logo',
    before: houseBefore,
    after: houseAfter,
    summary:
      'Gradient-heavy raster cleaned into stroke-only PLT file with interior window knockouts preserved.',
    engravingNotes:
      'Optimized for 0.020" engraver with S-Sweep fill, eliminating double-burn hotspots around the tree canopy.'
  },
  {
    title: 'HL Monogram Seal',
    before: hlBefore,
    after: hlAfter,
    summary:
      'Low-resolution badge rebuilt with concentric rings and scalloped border for diamond-drag machines.',
    engravingNotes:
      'Uniform line spacing ensures even depth on brass stock; serif counters widened to avoid merge artifacts.'
  },
  {
    title: 'Rose Outline',
    after: roseAfter,
    summary:
      'Detailed rose converted into sweep-ready vectors for script monograms and memorial plates.',
    engravingNotes:
      'Contours arranged into a single toolpath sequence—no manual cleanup needed at the machine.'
  }
]

const epsExamples = [
  {
    title: 'Heritage Inscription',
    before: hebrewBefore,
    after: hebrewAfter,
    summary:
      'Original raster inscription cleaned into crisp line-art with balanced stroke weights.'
  },
  {
    title: 'Ladybug Monogram',
    before: ladybugBefore,
    after: ladybugAfter,
    summary:
      'Blurred catalog PNG redrawn into engraving-safe EPS with interior fill and outline passes.'
  },
  {
    title: 'Snakehead Badge',
    before: snakeBefore,
    after: snakeAfter,
    summary:
      'Phone snapshot turned into a vector badge ready for small-scale diamond-drag work.'
  }
]

const faq = [
  {
    question: 'What file formats do you deliver?',
    answer:
      'For logos you receive EPS, AI, and plot-ready PLT/HPGL. Preview PNGs are included so your team can review without design software.'
  },
  {
    question: 'How fast can I get an engraving-ready file?',
    answer:
      'Standard turnaround is 48 hours from acceptance. Need it tomorrow? Add the $25 rush option and we deliver next-day whenever production capacity allows.'
  },
  {
    question: 'Can you match my machine settings?',
    answer:
      'Yes. Share your preferred tool, feed, and fill strategy. We prep vectors to match—no more tinkering with offsets at the engraver.'
  },
  {
    question: 'Will you store my artwork for future orders?',
    answer:
      'Absolutely. Finished assets live on redundant offline drives. Email us anytime and we can resend approved files without recreating them from scratch.'
  }
]

export default function ArtworkPage() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="container-spacing text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] font-semibold text-primary">
          Vector Artwork for Engraving
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground-dark">
          Vector Logo Redraw — Engraver-Ready Line Art
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted dark:text-muted-foreground">
          Core deliverable: clean EPS line art (no color) rebuilt from your raster or scan. Typical
          projects involve full redraws tuned for rotary, diamond-drag, and laser machines with
          standard turnaround of 1–2 business days. Rush delivery is available next business day if
          accepted before 12:00 pm PT. No same-day or 4-hour rush windows.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">
            Start a Logo
          </Link>
          <Link href="/pricing#logos" className="btn-secondary">
            View Pricing
          </Link>
        </div>
      </section>

      {/* EPS Gallery */}
      <section className="container space-y-10" id="eps-gallery">
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark">
            EPS Cleanups
          </h2>
          <p className="text-muted dark:text-muted-foreground">
            Raster images and low-res scans rebuilt into scalable EPS files with stroke consistency
            and simplified nodes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {epsExamples.map((example) => (
            <div key={example.title} className="card p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">
                {example.title}
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground">{example.summary}</p>
              <div className="space-y-3">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-muted dark:text-muted-foreground">
                    Before
                  </span>
                  <div className="rounded-lg border border-dashed border-muted/60 bg-background dark:bg-background-dark">
                    <Image
                      src={example.before as StaticImageData}
                      alt={`${example.title} original artwork`}
                      className="w-full rounded-md"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-muted dark:text-muted-foreground">
                    EPS Output
                  </span>
                  <div className="rounded-lg border border-primary/20 dark:border-primary/40 bg-slate-100 dark:bg-slate-300 p-4 flex items-center justify-center shadow">
                    <Image
                      src={example.after}
                      alt={`${example.title} eps output`}
                      className="w-full rounded-md object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLT / HPGL Gallery */}
      <section className="container space-y-10" id="plt-gallery">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark">
              PLT / HPGL Examples
            </h2>
            <p className="text-muted dark:text-muted-foreground">
              Each file is plotted, cleaned, and reviewed in production software before delivery.
              Swipe through the transformations below to see how noisy artwork becomes machine-ready
              vectors.
            </p>
          </div>
          <Image
            src={fillSettings}
            alt="Preferred engraving fill settings"
            className="w-full max-w-xs rounded-lg border border-primary/20"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {pltExamples.map((example) => (
            <div key={example.title} className="card overflow-hidden">
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">
                  {example.title}
                </h3>
                <p className="text-sm text-muted dark:text-muted-foreground">{example.summary}</p>
              </div>

              <div className="grid grid-cols-1 gap-6 px-6 pb-6">
                {example.before && (
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-wider text-muted dark:text-muted-foreground">
                      Before
                    </span>
                    <div className="rounded-lg border border-dashed border-muted/60 bg-background dark:bg-background-dark">
                      <Image
                        src={example.before}
                        alt={`${example.title} before cleanup`}
                        className="w-full rounded-md"
                      />
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-muted dark:text-muted-foreground">
                    Ready to Engrave
                  </span>
                  <div className="rounded-lg border border-primary/20 dark:border-primary/40 bg-slate-100 dark:bg-slate-300 p-4 flex items-center justify-center shadow">
                    <Image
                      src={example.after}
                      alt={`${example.title} engraving-ready output`}
                      className="w-full rounded-md object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <p className="text-xs text-muted dark:text-muted-foreground bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-md p-3">
                  {example.engravingNotes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-spacing text-center space-y-6">
        <p className="max-w-3xl mx-auto text-lg text-muted dark:text-muted-foreground">
          Start your next engraving-ready logo with our simple{' '}
          <Link href="/contact" className="link-primary">
            contact form
          </Link>
          . We handle everything so you can jump straight to engraving.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">
            Book a Project
          </Link>
          <Link href="/pricing#logos" className="btn-secondary">
            See Logo Pricing
          </Link>
        </div>
      </section>
    </div>
  )
}
