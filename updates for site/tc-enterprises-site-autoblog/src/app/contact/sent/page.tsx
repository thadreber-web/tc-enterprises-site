import Link from 'next/link'

export default function ContactSent() {
  return (
    <section className="min-h-[50vh] grid place-items-center text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary dark:text-white">Thanks — we got your message!</h1>
        <p className="opacity-80">We typically reply within 1 business day.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="btn-secondary">Back to Home</Link>
          <Link href="/blog" className="btn-primary">Read the Blog</Link>
        </div>
      </div>
    </section>
  )
}
