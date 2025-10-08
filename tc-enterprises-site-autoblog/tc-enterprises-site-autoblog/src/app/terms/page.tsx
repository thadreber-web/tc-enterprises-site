import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | T & C Enterprises',
  description: 'Engagement policies for T & C Enterprises design, automation, and consulting services.',
}

export default function TermsOfServicePage() {
  return (
    <section className="max-w-4xl mx-auto py-12 space-y-10">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Terms of Service</p>
        <h1 className="text-4xl font-bold text-foreground dark:text-foreground-dark">T &amp; C Enterprises Terms of Service</h1>
        <p className="text-muted dark:text-muted-foreground">
          Effective date: {/* Update when terms change */}October 7, 2025
        </p>
      </header>

      <div className="space-y-6 text-base leading-relaxed text-muted dark:text-muted-foreground">
        <p>
          These Terms of Service ("Terms") govern projects between T &amp; C Enterprises ("we", "us", "our") and
          any client ("you") engaging us for artwork, digitizing, automation, or consulting services. By
          approving a project scope or submitting a purchase request, you agree to these Terms.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">1. Services</h2>
          <p>
            We provide engraving-ready logo digitizing, artwork cleanup, automation support, and related
            consulting. Each engagement specifies the deliverables, formats, and acceptance criteria in writing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">2. Project Acceptance &amp; Turnaround</h2>
          <p>
            Work begins after we confirm availability and accept your request via email or written message.
            Standard logo digitizing projects are delivered within 48 hours of acceptance. Rush service for
            next-day delivery may be available for an additional $25 fee. Timelines for automation or software
            projects are set in the project estimate or statement of work.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">3. Revisions &amp; Approval</h2>
          <p>
            Each project includes one revision round after initial delivery. Additional revisions or change
            requests are billed at our current hourly or per-project rates, which we will quote before
            proceeding. Final approval confirms acceptance and completes the project.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">4. Deliverables &amp; Ownership</h2>
          <p>
            Final files are delivered in the formats agreed upon for the project (for example EPS, PLT/HPGL, AI,
            or PNG). Upon full payment, you receive ownership of the delivered artwork or documentation. We
            retain ownership of underlying tools, templates, and processes used to create the deliverables and
            may showcase sanitized versions of completed work in our portfolio unless you opt out in writing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">5. Payment &amp; Refunds</h2>
          <p>
            Invoices are issued when deliverables are provided. Payment is due upon receipt. Fees for rush
            services or additional revisions are billed separately. Because artwork cannot be returned, payments
            are non-refundable once you approve the deliverables, except where required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">6. Client Responsibilities</h2>
          <p>
            You are responsible for supplying accurate source files, instructions, and any permissions required
            to use third-party materials. Delays in providing assets or feedback may extend delivery timelines
            beyond our standard targets.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">7. Confidentiality</h2>
          <p>
            We treat all client assets and correspondence as confidential. Files are stored on offline,
            redundant drives and are not shared with subcontractors without your consent. Sanitized portfolio
            examples exclude identifiable client information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">8. Warranty &amp; Liability</h2>
          <p>
            We warrant that delivered artwork meets the engraver-ready specifications defined in the project
            scope. Apart from this warranty, all work is provided "as-is". Our total liability for any claim is
            limited to the amount you paid for the project. We are not liable for indirect, incidental, or
            consequential damages, including production delays or lost profits.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">9. Termination</h2>
          <p>
            Either party may end a project before final approval by providing written notice. You agree to pay
            for work completed up to the termination date, including any rush fees already incurred.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Washington, without regard to its conflicts of
            law rules. Any disputes will be resolved in the state or federal courts located in Washington State.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">11. Updates</h2>
          <p>
            We may update these Terms as our services evolve or when our business structure changes. The
            updated version will be posted on this page with a revised effective date. Continued engagement after
            an update constitutes acceptance of the new Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">12. Contact</h2>
          <p>
            Questions about these Terms? Email us at{' '}
            <Link href="mailto:contact@tc-enterprises.com" className="link-primary">contact@tc-enterprises.com</Link>.
          </p>
        </section>
      </div>
    </section>
  )
}
