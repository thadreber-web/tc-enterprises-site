import Link from 'next/link'

export default function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: 'Send Your File',
      description: 'Upload any format: JPG, PNG, PDF, AI, PSD, TIFF, etc.',
      note: 'We accept customer files in any condition'
    },
    {
      number: 2,
      title: 'Get a Quote',
      description: 'We assess complexity and confirm pricing',
      note: 'Free quote within 2 hours during business hours'
    },
    {
      number: 3,
      title: 'Approve & Pay',
      description: 'Review quote, approve project, pay securely',
      note: 'We start work immediately upon payment'
    },
    {
      number: 4,
      title: 'Receive Your File',
      description: 'Get production-ready EPS and/or PLT file',
      note: 'Standard: 24-48 hours | Rush available'
    },
    {
      number: 5,
      title: 'Use Immediately',
      description: 'Drop into Gravostyle or your engraving software and run',
      note: 'No cleanup, no adjustments needed'
    }
  ]

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">
        How It Works
      </h2>

      <div className="grid md:grid-cols-5 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            {/* Connecting line (except for last item) */}
            {step.number < 5 && (
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 -z-10" />
            )}

            <div className="text-center space-y-3">
              {/* Step number circle */}
              <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                {step.number}
              </div>

              {/* Step content */}
              <h3 className="font-semibold text-lg text-foreground dark:text-foreground-dark">
                {step.title}
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                {step.description}
              </p>
              <p className="text-xs text-primary font-medium">
                {step.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/contact" className="btn-primary text-center">
          Start Free Trial
        </Link>
      </div>
    </section>
  )
}
