import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | T & C Enterprises',
  description: 'Learn how T & C Enterprises collects, stores, and protects client information.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 space-y-10">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Privacy Policy</p>
        <h1 className="text-4xl font-bold text-foreground dark:text-foreground-dark">T &amp; C Enterprises Privacy Policy</h1>
        <p className="text-muted dark:text-muted-foreground">
          Effective date: {/* Update when policy changes */}October 7, 2025
        </p>
      </header>

      <div className="space-y-6 text-base leading-relaxed text-muted dark:text-muted-foreground">
        <p>
          T &amp; C Enterprises ("we", "us", or "our") takes privacy seriously. This policy explains what
          information we collect, how we use it, and the choices you have. The services described here are
          intended for business clients seeking engraving-ready artwork, automation support, and related
          consulting.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">Information We Collect</h2>
          <p>
            We collect information that you voluntarily share when you contact us, including your name,
            email address, project instructions, reference files, and any supporting artwork you send. We do
            not track visitors for marketing purposes, use analytics cookies, or collect information from
            children under 16.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">How We Use Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responding to inquiries and confirming project scope.</li>
            <li>Producing engraver-ready artwork and related deliverables.</li>
            <li>Resending or updating archived assets at your request.</li>
            <li>Maintaining records necessary for accounting or legal compliance.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">Storage &amp; Security</h2>
          <p>
            Inbound emails are routed through Cloudflare Email Routing to our business inbox. Contact form
            submissions are delivered via Resend, a transactional email service. Project artwork and delivered
            files are stored offline on redundant external drives located in Washington State. We do not share
            your files with subcontractors or third-party services unless you provide written permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">Retention</h2>
          <p>
            We keep client correspondence and project files so we can support future requests, resend artwork,
            or document the services provided. If you would like copies of your data or want us to delete it,
            contact us at <Link href="mailto:contact@tc-enterprises.com" className="link-primary">contact@tc-enterprises.com</Link>.
            We may request verification before fulfilling a request and may retain information when required by
            law or needed to resolve disputes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">Your Choices</h2>
          <p>
            You can update project instructions at any time and may request copies, corrections, or deletion of
            archived assets. We aim to respond within a reasonable timeframe and will confirm once your request
            has been completed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">Policy Updates</h2>
          <p>
            We will update this policy when our business structure or storage practices change. The latest
            version will always be available on this page with an updated effective date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">Contact</h2>
          <p>
            For questions about this policy, contact us at{' '}
            <Link href="mailto:contact@tc-enterprises.com" className="link-primary">contact@tc-enterprises.com</Link>.
          </p>
        </section>
      </div>
    </section>
  )
}
