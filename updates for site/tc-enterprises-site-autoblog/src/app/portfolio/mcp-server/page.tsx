import Link from 'next/link';

export default function MCPServerPage() {
  return (
    <div className="space-y-12">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">All-Assistants Orchestration Hub</h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-muted">
          A comprehensive system for coordinating AI assistants with file locking, diff computation, and model suggestions.
        </p>
      </header>

      <div className="bg-background dark:bg-background-dark rounded-lg p-8">
        <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark mb-6">Core Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div>
            <h3 className="text-xl font-bold text-primary">MCP Server Tools</h3>
            <ul className="mt-2 list-disc list-inside text-muted">
              <li>File Locking to prevent concurrent modifications</li>
              <li>Diff Computation between file versions</li>
              <li>AI Model Suggestions based on task types</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">VS Code Extension</h3>
            <ul className="mt-2 list-disc list-inside text-muted">
              <li>Interactive "Suggest Tool" command workflow</li>
              <li>Risk Assessment before applying code changes</li>
              <li>Diff Preview to visualize changes</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-foreground dark:text-foreground-dark">Supported Task Types</h3>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-muted">
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">Architecture</span>
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">Backend Logic</span>
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">Frontend Components</span>
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">Refactor</span>
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">Tests</span>
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">Docs</span>
          <span className="bg-background dark:bg-background-dark rounded-full px-4 py-2">Infra</span>
        </div>
      </div>

    </div>
  );
}
