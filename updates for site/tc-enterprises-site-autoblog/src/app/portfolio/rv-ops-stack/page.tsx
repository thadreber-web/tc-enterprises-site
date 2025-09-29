import Link from 'next/link';

export default function RVOpsStackPage() {
  return (
    <div className="space-y-12">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">RV Ops Stack</h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-text-muted">
          A comprehensive system for asset management, maintenance scheduling, and financial analysis for mobile service fleets.
        </p>
      </header>

      <div className="bg-bg-surface dark:bg-bg-surface-dark rounded-lg p-8">
        <h2 className="text-3xl font-bold text-text-main dark:text-white mb-6">Implemented Improvements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-bold text-primary">Frontend</h3>
            <ul className="mt-2 list-disc list-inside text-text-muted">
              <li>Error Boundaries & Loading States</li>
              <li>Interactive Charts with Recharts</li>
              <li>Unit Tests for React Components</li>
              <li>Enhanced Accessibility (A11y)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">Backend</h3>
            <ul className="mt-2 list-disc list-inside text-text-muted">
              <li>Input Validation with Pydantic</li>
              <li>Rate Limiting for Public Endpoints</li>
              <li>Comprehensive Logging & Monitoring</li>
              <li>Unit Tests for Business Logic</li>
              <li>Enhanced Security Headers & CORS</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">API & Database</h3>
            <ul className="mt-2 list-disc list-inside text-text-muted">
              <li>Consistent Error Response Formatting</li>
              <li>API Versioning for Future Compatibility</li>
              <li>Proper Pagination for List Endpoints</li>
              <li>Performance-Tuned SQL Queries</li>
              <li>Database Backup Procedures</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}