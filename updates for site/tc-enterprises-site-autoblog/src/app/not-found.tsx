import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[50vh] grid place-items-center text-center">
      <div>
        <h1 className="text-5xl font-bold text-primary dark:text-white">404</h1>
        <p className="mt-2 opacity-80">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="btn-primary mt-6 inline-flex">Go Home</Link>
      </div>
    </section>
  )
}