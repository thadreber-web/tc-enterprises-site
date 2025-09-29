import Link from 'next/link';

export default function LogoCatalogPage() {
  return (
    <div className="space-y-12">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Hybrid Logo Catalog</h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-text-muted">
          A secure, scalable, and searchable catalog for managing over 15,000 EPS logo files with safe previews.
        </p>
      </header>

      <div className="bg-bg-surface dark:bg-bg-surface-dark rounded-lg p-8">
        <h2 className="text-3xl font-bold text-text-main dark:text-white mb-6">Key Problems Solved</h2>
        <div className="grid md:grid-cols-1 gap-8">
          
          <div>
            <h3 className="text-xl font-bold text-primary">From Chaos to Control</h3>
            <p className="mt-2 text-text-muted">Replaced a chaotic system of shared folders with an organized, searchable, and secure library, eliminating the risk of exposing raw vector files.</p>
          </div>

        </div>
      </div>

      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-text-main dark:text-white">Features & Scale</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-bg-surface dark:bg-bg-surface-dark rounded-lg p-4">
                <p className="text-3xl font-bold text-primary">15,000+</p>
                <p className="text-text-muted dark:text-gray-300">EPS Files Managed</p>
            </div>
            <div className="bg-bg-surface dark:bg-bg-surface-dark rounded-lg p-4">
                <p className="text-3xl font-bold text-primary">FTS</p>
                <p className="text-text-muted dark:text-gray-300">Fast, Full-Text Search</p>
            </div>
            <div className="bg-bg-surface dark:bg-bg-surface-dark rounded-lg p-4">
                <p className="text-3xl font-bold text-primary">SSO</p>
                <p className="text-text-muted dark:text-gray-300">Google/Apple Authentication</p>
            </div>
        </div>
      </div>

    </div>
  );
}