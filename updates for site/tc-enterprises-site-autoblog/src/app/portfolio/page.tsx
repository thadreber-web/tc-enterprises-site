'use client';

import { useState, useEffect, Suspense } from 'react';
import StatusBadge from '@/components/StatusBadge'
import Link from 'next/link'
import { PortfolioCardSkeleton } from '@/components/SkeletonLoader'

export default function Portfolio() {
  const [loading, setLoading] = useState(true)
  const [projects] = useState([
    {
      title: 'Hybrid Logo Catalog',
      status: 'In Development',
      href: '/portfolio/hybrid-logo-catalog',
      description: 'Logo catalog management system with vector optimization for engraving. Currently in active development.',
      tech: ['Next.js', 'Vector Graphics', 'Database Design', 'File Processing'],
      icon: '🎨'
    },
    {
      title: 'RealtyGenius',
      status: 'Live',
      href: '/portfolio/realtygenius',
      description: 'Intelligent real estate analytics platform with market insights and property valuation tools.',
      tech: ['React', 'Data Analytics', 'API Integration', 'Real-time'],
      icon: '🏠'
    },
    {
      title: 'Crochet Pattern Studio',
      status: 'MVP',
      href: '/portfolio/crochet-pattern-studio',
      description: 'Digital pattern design platform for crochet enthusiasts with interactive pattern visualization.',
      tech: ['WebGL', 'Canvas API', 'Pattern Generation', 'PWA'],
      icon: '🧶'
    },
    {
      title: 'CraftCart',
      status: 'In Dev',
      href: '/portfolio/craftcart',
      description: 'E-commerce platform specialized for handmade crafts with integrated inventory and sales analytics.',
      tech: ['E-commerce', 'Inventory Mgmt', 'Analytics', 'Payment Integration'],
      icon: '🛒'
    },
    {
      title: 'All-Assistants Orchestration Hub',
      status: 'In Dev',
      href: '/portfolio/mcp-server',
      description: 'MCP server architecture for coordinating multiple AI assistants in development workflows.',
      tech: ['MCP Protocol', 'AI Orchestration', 'Microservices', 'DevOps'],
      icon: '🤖'
    },
    {
      title: 'RV Ops Stack',
      status: 'In Dev',
      href: '/portfolio/rv-ops-stack',
      description: 'Comprehensive operations management system for RV dealerships and service centers.',
      tech: ['Operations Mgmt', 'Inventory', 'CRM', 'Reporting'],
      icon: '🚐'
    },
    {
      title: 'Artwork Prep Service',
      status: 'Live',
      href: null,
      description: 'Professional artwork preparation and optimization service for print and engraving applications.',
      tech: ['Vector Art', 'File Optimization', 'Print Prep', 'Quality Assurance'],
      icon: '✨'
    }
  ])

  useEffect(() => {
    // Simulate loading delay for demo purposes
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-primary dark:text-white mb-4">Our Portfolio & Case Studies</h1>
        <p className="text-xl text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
          Proof that innovation delivers results. Explore our successful projects and see how we transform ideas into reality.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(p => {
          const card = (
            <div className="card h-full group hover:border-primary/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{p.icon}</div>
                <StatusBadge status={p.status} />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-text-main dark:text-white group-hover:text-primary transition-colors">
                {p.title}
              </h3>

              <p className="text-text-muted dark:text-gray-300 mb-4 leading-relaxed">
                {p.description}
              </p>

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
                  {p.href ? 'View Case Study →' : 'Coming Soon'}
                </div>
              </div>
            </div>
          );

          if (p.href) {
            return (
              <Link href={p.href} key={p.title} className="block h-full">
                {card}
              </Link>
            );
          }
          return <div key={p.title} className="block h-full">{card}</div>;
        })}
      </div>
    </section>
  )
}