import Link from 'next/link';

export default function RealtyGeniusPage() {
  return (
    <div className="space-y-12">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">RealtyGenius</h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-muted">
          A comprehensive AI-powered real estate CRM and marketing platform designed for modern realtors.
        </p>
      </header>

      <div className="bg-background dark:bg-background-dark rounded-lg p-8">
        <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark mb-6">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-bold text-primary">CRM</h3>
            <ul className="mt-2 list-disc list-inside text-muted">
              <li>Property Management</li>
              <li>Lead Management & Nurturing</li>
              <li>Contact Management</li>
              <li>Visual Deal Pipeline</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">AI-Powered Tools</h3>
            <ul className="mt-2 list-disc list-inside text-muted">
              <li>AI Content Generation</li>
              <li>Automated Marketing Kits</li>
              <li>AI Price Recommendations</li>
              <li>Automated Lead Qualification</li>
              <li>Fair Housing Compliance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">Marketing & Media</h3>
            <ul className="mt-2 list-disc list-inside text-muted">
              <li>Image Processing & Watermarking</li>
              <li>Open House QR Code Sign-ins</li>
              <li>Automated Tour Planning</li>
              <li>AI-Generated Neighborhood Reports</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">Rental Management</h3>
            <ul className="mt-2 list-disc list-inside text-muted">
              <li>Specialized Rental Lead Tracking</li>
              <li>Automated Tenant Screening</li>
              <li>Market-Based Rental Valuation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">Analytics</h3>
            <ul className="mt-2 list-disc list-inside text-muted">
              <li>Performance Dashboards</li>
              <li>Branded CSV & PDF Exports</li>
              <li>Business Intelligence</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">Security</h3>
            <ul className="mt-2 list-disc list-inside text-muted">
              <li>Enterprise-Grade Security</li>
              <li>XSS Prevention</li>
              <li>Path Traversal Protection</li>
              <li>Event Monitoring & Logging</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-foreground dark:text-foreground-dark">Technology Stack</h3>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-muted">
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">Django</span>
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">Python</span>
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">PostgreSQL</span>
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">Google Gemini</span>
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">Docker</span>
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">Tailwind CSS</span>
        </div>
      </div>

    </div>
  );
}
