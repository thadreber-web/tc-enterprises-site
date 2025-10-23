export default function TrustBar() {
  return (
    <section className="py-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="space-y-1">
          <div className="text-3xl font-bold text-primary">CompTIA A+</div>
          <p className="text-sm text-muted dark:text-muted-foreground">Certified Professional</p>
        </div>

        <div className="space-y-1">
          <div className="text-3xl font-bold text-primary">26,000+</div>
          <p className="text-sm text-muted dark:text-muted-foreground">Files Processed</p>
        </div>

        <div className="space-y-1">
          <div className="text-3xl font-bold text-primary">13 Years</div>
          <p className="text-sm text-muted dark:text-muted-foreground">Partnership with Branding Tools</p>
        </div>

        <div className="space-y-1">
          <div className="text-3xl font-bold text-primary">Same-Day</div>
          <p className="text-sm text-muted dark:text-muted-foreground">Rush Available</p>
        </div>
      </div>
    </section>
  )
}
