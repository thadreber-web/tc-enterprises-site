'use client'

import { useState } from 'react'
import StatusBadge from '@/components/StatusBadge'
import Link from 'next/link'

const categories = ['All', 'Engraving', 'Software', 'AI'] as const
type Category = typeof categories[number]

const projects = [
  {
    title: 'Artwork Prep Service',
    status: 'Live',
    href: '/vector-conversion',
    category: 'Engraving' as Category,
    problem: 'Engraving shops waste hours converting customer artwork into machine-ready files, delaying production.',
    solution: 'Built a specialized vector conversion service delivering production-ready EPS and PLT files within 24-48 hours.',
    outcome: '26,000+ files processed over 13 years with zero production failures. 100% money-back guarantee.',
    tech: ['Vector Graphics', 'Gravostyle', 'EngraveLab', 'EPS/PLT'],
    icon: '✨'
  },
  {
    title: 'Hybrid Logo Catalog',
    status: 'In Development',
    href: '/projects/hybrid-logo-catalog',
    category: 'Engraving' as Category,
    problem: 'Engraving companies manage thousands of logo files across scattered folders with no search or version tracking.',
    solution: 'Building a searchable, permission-controlled catalog that links proofs, approvals, and production files in one place.',
    outcome: 'In active development. Designed for shops processing 50+ unique logos per month.',
    tech: ['Next.js', 'Vector Graphics', 'Database Design', 'File Processing'],
    icon: '🎨'
  },
  {
    title: 'RealtyGenius',
    status: 'Private Beta',
    href: '/projects/realtygenius',
    category: 'Software' as Category,
    problem: 'Real estate professionals spend hours manually analyzing market data across multiple disconnected sources.',
    solution: 'Built an AI-assisted analytics platform that aggregates data and surfaces actionable insights automatically.',
    outcome: 'Currently in closed beta with internal stakeholders. Validates complex data pipeline architecture.',
    tech: ['React', 'Data Analytics', 'API Integration', 'Real-time'],
    icon: '🏠'
  },
  {
    title: 'Crochet Pattern Studio',
    status: 'MVP',
    href: '/projects/crochet-pattern-studio',
    category: 'Software' as Category,
    problem: 'Crochet designers lack digital tools for creating, visualizing, and sharing patterns interactively.',
    solution: 'Developed an interactive pattern design platform with real-time visualization using WebGL and Canvas API.',
    outcome: 'MVP complete. Demonstrates expertise in creative tooling and visual interface design.',
    tech: ['WebGL', 'Canvas API', 'Pattern Generation', 'PWA'],
    icon: '🧶'
  },
  {
    title: 'CraftCart',
    status: 'In Dev',
    href: '/projects/craftcart',
    category: 'Software' as Category,
    problem: 'Handmade crafters need e-commerce that understands one-of-a-kind inventory and maker workflows.',
    solution: 'Building a specialized e-commerce platform with integrated inventory, sales analytics, and maker-friendly UX.',
    outcome: 'In active development. Focused on the unique needs of small-batch and handmade product sellers.',
    tech: ['E-commerce', 'Inventory Mgmt', 'Analytics', 'Payment Integration'],
    icon: '🛒'
  },
  {
    title: 'RV Ops Stack',
    status: 'In Dev',
    href: '/projects/rv-ops-stack',
    category: 'Software' as Category,
    problem: 'RV dealerships manage service, inventory, and customer relationships across fragmented legacy systems.',
    solution: 'Designing a comprehensive operations platform that unifies service scheduling, parts inventory, and CRM.',
    outcome: 'In development. Applies manufacturing operations expertise to the RV industry.',
    tech: ['Operations Mgmt', 'Inventory', 'CRM', 'Reporting'],
    icon: '🚐'
  },
  {
    title: 'All-Assistants Orchestration Hub',
    status: 'In Dev',
    href: '/projects/mcp-server',
    category: 'AI' as Category,
    problem: 'Multiple AI assistants working independently create fragmented workflows with no coordination or shared context.',
    solution: 'Building an MCP server architecture that coordinates multiple AI assistants with shared context and task routing.',
    outcome: 'In development. Exploring practical AI orchestration patterns for real-world development workflows.',
    tech: ['MCP Protocol', 'AI Orchestration', 'Microservices', 'DevOps'],
    icon: '🤖'
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="space-y-12">
      <header className="text-center py-8">
        <p className="text-sm font-bold uppercase text-primary tracking-widest mb-2">Projects</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground-dark mb-4">
          Problems Solved, Solutions Built
        </h1>
        <p className="text-xl text-muted dark:text-muted-foreground max-w-3xl mx-auto">
          Every project starts with a real problem. Here's how I've approached them — from engraving workflows to AI orchestration.
        </p>
      </header>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? 'bg-primary text-white shadow-md'
                : 'bg-muted/10 text-muted dark:text-muted-foreground hover:bg-muted/20 border border-muted/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map(p => {
          const card = (
            <div className="card h-full group hover:border-primary/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{p.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-xs text-muted dark:text-muted-foreground">{p.category}</span>
                  </div>
                </div>
                <StatusBadge status={p.status} />
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-red-500 dark:text-red-400 mb-1">Problem</p>
                  <p className="text-sm text-muted dark:text-muted-foreground">{p.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-green-600 dark:text-green-400 mb-1">Solution</p>
                  <p className="text-sm text-muted dark:text-muted-foreground">{p.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">Outcome</p>
                  <p className="text-sm text-muted dark:text-muted-foreground">{p.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary text-xs font-medium rounded-full border border-secondary/20 dark:border-secondary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <div className="text-sm text-primary font-medium group-hover:underline">
                  {p.href.startsWith('/vector') ? 'View Service →' : 'View Details →'}
                </div>
              </div>
            </div>
          )

          return (
            <Link href={p.href} key={p.title} className="block h-full">
              {card}
            </Link>
          )
        })}
      </div>

      {/* CTA */}
      <section className="py-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-foreground-dark">
          Have a Problem That Needs Solving?
        </h2>
        <p className="text-lg text-muted dark:text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether it's vector conversion, custom software, or AI automation — every project starts with a conversation.
        </p>
        <Link href="/contact" className="btn-primary text-center">
          Start a Conversation
        </Link>
      </section>
    </section>
  )
}
