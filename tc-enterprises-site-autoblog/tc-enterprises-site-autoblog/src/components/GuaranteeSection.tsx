export default function GuaranteeSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground dark:text-foreground-dark">
        Our Guarantee
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card bg-background dark:bg-background-dark">
          <div className="p-6 space-y-3">
            <div className="text-3xl text-primary">✓</div>
            <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
              Production-Ready Promise
            </h3>
            <p className="text-sm text-muted dark:text-muted-foreground">
              If your file doesn't load cleanly into your engraving software, we'll revise it for free or refund 100%. No questions asked.
            </p>
          </div>
        </div>

        <div className="card bg-background dark:bg-background-dark">
          <div className="p-6 space-y-3">
            <div className="text-3xl text-primary">✓</div>
            <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
              Free Trial Conversion
            </h3>
            <p className="text-sm text-muted dark:text-muted-foreground">
              First-time clients get one free file conversion. See the quality before you commit to anything.
            </p>
          </div>
        </div>

        <div className="card bg-background dark:bg-background-dark">
          <div className="p-6 space-y-3">
            <div className="text-3xl text-primary">✓</div>
            <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
              Unlimited Revisions
            </h3>
            <p className="text-sm text-muted dark:text-muted-foreground">
              We'll adjust and refine until you're completely satisfied. Your success is our success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
