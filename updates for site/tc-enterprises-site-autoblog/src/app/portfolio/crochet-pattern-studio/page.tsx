import Link from 'next/link';

export default function CrochetPage() {
  return (
    <div className="space-y-12">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Crochet Pattern Studio</h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-text-muted">
          A complete crochet pattern management system with a beautiful React frontend, FastAPI backend, and comprehensive pattern validation.
        </p>
      </header>

      <div className="bg-bg-surface dark:bg-bg-surface-dark rounded-lg p-8">
        <h2 className="text-3xl font-bold text-text-main dark:text-white mb-6">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-bold text-primary">React Frontend</h3>
            <ul className="mt-2 list-disc list-inside text-text-muted">
              <li>Custom Purple-Themed UI</li>
              <li>Secure Password Protection</li>
              <li>Advanced Pattern Editor</li>
              <li>Pattern Library Management</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">FastAPI Backend</h3>
            <ul className="mt-2 list-disc list-inside text-text-muted">
              <li>Comprehensive Pattern Validation</li>
              <li>Text & PDF Compilation</li>
              <li>Full Database Integration</li>
              <li>Background Job Queue System</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">PostgreSQL Database</h3>
            <ul className="mt-2 list-disc list-inside text-text-muted">
              <li>Full Pattern & Metadata Storage</li>
              <li>Pattern Version Control</li>
              <li>Efficient Search & Filtering</li>
              <li>Data Integrity with Transactions</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-text-main dark:text-white">Technology Stack</h3>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-text-muted">
          <span className="bg-bg-surface dark:bg-bg-surface-dark rounded-full px-4 py-2">React (Vite)</span>
          <span className="bg-bg-surface dark:bg-bg-surface-dark rounded-full px-4 py-2">FastAPI</span>
          <span className="bg-bg-surface dark:bg-bg-surface-dark rounded-full px-4 py-2">Python</span>
          <span className="bg-bg-surface dark:bg-bg-surface-dark rounded-full px-4 py-2">PostgreSQL</span>
          <span className="bg-bg-surface dark:bg-bg-surface-dark rounded-full px-4 py-2">Docker</span>
          <span className="bg-bg-surface dark:bg-bg-surface-dark rounded-full px-4 py-2">Tailwind CSS</span>
        </div>
      </div>

    </div>
  );
}