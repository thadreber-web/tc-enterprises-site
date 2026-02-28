import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[50vh] grid place-items-center text-center">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-primary dark:text-white">404</h1>
        <p className="text-lg text-muted dark:text-muted-foreground">The page you're looking for doesn't exist.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex">Go Home</Link>
          <Link href="/vector-conversion" className="btn-secondary inline-flex">Vector Conversion</Link>
          <Link href="/contact" className="btn-secondary inline-flex">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
