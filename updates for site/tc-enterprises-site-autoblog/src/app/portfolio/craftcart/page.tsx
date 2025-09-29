import Link from 'next/link';

export default function CraftCartPage() {
  return (
    <div className="space-y-12">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">CraftCart – Seller Toolkit</h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-text-muted">
          A complete, runnable starter for a SaaS that streamlines small‑seller workflows like listings, inventory, and orders.
        </p>
      </header>

      <div className="bg-bg-surface dark:bg-bg-surface-dark rounded-lg p-8">
        <h2 className="text-3xl font-bold text-text-main dark:text-white mb-6">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-bold text-primary">Core APIs</h3>
            <ul className="mt-2 list-disc list-inside text-text-muted">
              <li>Email/Password Auth with JWT</li>
              <li>Products, Orders, Listings APIs</li>
              <li>Prisma + PostgreSQL</li>
              <li>Simple Listing Generator</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">React Frontend</h3>
            <ul className="mt-2 list-disc list-inside text-text-muted">
              <li>Vite + React Dashboard</li>
              <li>Login &amp; User Settings</li>
              <li>Product &amp; Order Management</li>
              <li>ESLint, Prettier, Jest</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">Integrations</h3>
            <ul className="mt-2 list-disc list-inside text-text-muted">
              <li>Optional MinIO/S3 Storage</li>
              <li>Scheduled Jobs (Cron)</li>
              <li>Dockerized Dev Stack</li>
              <li>MCP Tools for AI-Assistance</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-text-main dark:text-white">Technology Stack</h3>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-text-muted">
          <span className="bg-bg-surface dark:bg-bg-surface-dark rounded-full px-4 py-2">React (Vite)</span>
          <span className="bg-bg-surface dark:bg-bg-surface-dark rounded-full px-4 py-2">Express</span>
          <span className="bg-bg-surface dark:bg-bg-surface-dark rounded-full px-4 py-2">TypeScript</span>
          <span className="bg-bg-surface dark:bg-bg-surface-dark rounded-full px-4 py-2">Prisma</span>
          <span className="bg-bg-surface dark:bg-bg-surface-dark rounded-full px-4 py-2">PostgreSQL</span>
          <span className="bg-bg-surface dark:bg-bg-surface-dark rounded-full px-4 py-2">Docker</span>
        </div>
      </div>

    </div>
  );
}