import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent/10 rounded-full blur-md animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>

      <div className="relative section-spacing">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-text-main dark:text-white leading-tight animate-slide-in-left">
              Smart Tools. <span className="text-primary">Real Results.</span>
            </h1>
            <p className="text-xl text-text-muted dark:text-gray-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              We turn complex workflows into simple, reliable solutions — from engraving artwork prep to full-fledged AI platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Link href="/services" className="btn-primary text-center">Explore Services</Link>
              <Link href="/contact" className="btn-secondary text-center">Request a Quote</Link>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <Image
                  src="/hero-image.svg"
                  alt="Abstract graphic showing complexity turning into clarity"
                  width={400}
                  height={320}
                  className="w-full h-auto"
                  priority
                />
                {/* Floating tech icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                  AI
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
                  ⚡
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            { title: 'Engraving-Ready Artwork', text: 'Clean logos, consistent formatting, zero hassle.', icon: '🎨', href: '/services' },
            { title: 'Hybrid Logo Catalog', text: 'Searchable, visual hub for reps and clients.', icon: '📁', href: '/portfolio' },
            { title: 'AI & SaaS Platforms', text: 'RealtyGenius, CraftCart, and more.', icon: '🤖', href: '/portfolio' }
          ].map((c, index) => (
            <Link 
              key={c.title} 
              href={c.href}
              className="card text-center hover:scale-105 transition-all duration-300 animate-fade-in-up group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg" 
              style={{animationDelay: `${0.6 + index * 0.1}s`}}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{c.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">{c.title}</h3>
              <p className="text-text-muted dark:text-gray-300 group-hover:text-text-main dark:group-hover:text-gray-200 transition-colors">{c.text}</p>
              <div className="mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="py-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-text-main dark:text-white">Explore Our Services</h2>
          <p className="text-text-muted dark:text-gray-300">Jump to what interests you most</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: 'View Portfolio', href: '/portfolio', icon: '📁' },
            { label: 'Read Our Blog', href: '/blog', icon: '📝' },
            { label: 'Learn About Us', href: '/about', icon: '👥' },
            { label: 'Get Started', href: '/contact', icon: '🚀' }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="btn-secondary flex items-center gap-2 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-main dark:text-white">Trusted by Industry Professionals</h2>
          <p className="text-text-muted dark:text-gray-300 mt-2">See what our clients say about working with T&C Enterprises</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="card md:col-span-2 lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">👩‍💼</span>
              </div>
              <div>
                <blockquote className="text-lg italic text-text-main dark:text-white mb-4">
                  "Thank you for all your efforts on digitizing logos for our clients. You have been a great help and do an amazing job with quick turnaround times. You do a great job of communicating with us if you have questions or if a resolution is needed, and always offer a helping hand... We are continuously satisfied with your performance and deliverables."
                </blockquote>
                <figcaption>
                  <div className="font-bold text-primary">Marina, Chief Operating Officer</div>
                  <div className="text-text-muted dark:text-gray-300 text-sm">Branding Tools, Inc.</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-text-muted dark:text-gray-300 text-sm">13+ years of service</span>
                  </div>
                </figcaption>
              </div>
            </div>
          </div>

          {/* Additional Testimonials */}
          <div className="card">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <blockquote className="text-sm italic text-text-main dark:text-white mb-3">
                "Reliable artwork processing that our engraving team can count on every time."
              </blockquote>
              <div className="font-semibold text-primary text-sm">Manufacturing Operations Lead</div>
              <div className="text-text-muted dark:text-gray-300 text-xs">Industrial Engraving Company</div>
            </div>
          </div>

          <div className="card">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <blockquote className="text-sm italic text-text-main dark:text-white mb-3">
                "Quick turnaround and professional results. Exactly what we needed for our production workflow."
              </blockquote>
              <div className="font-semibold text-primary text-sm">Operations Manager</div>
              <div className="text-text-muted dark:text-gray-300 text-xs">Custom Manufacturing</div>
            </div>
          </div>

          <div className="card">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <blockquote className="text-sm italic text-text-main dark:text-white mb-3">
                "Consistent quality and attention to detail. Our go-to partner for engraving preparation."
              </blockquote>
              <div className="font-semibold text-primary text-sm">Production Supervisor</div>
              <div className="text-text-muted dark:text-gray-300 text-xs">Signage & Engraving</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Signals & Certifications */}
      <div className="py-12 bg-bg-surface dark:bg-bg-surface-dark rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-main dark:text-white">Certified & Trusted</h2>
          <p className="text-text-muted dark:text-gray-300">Industry credentials and security standards</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="card text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-lg font-bold text-primary mb-2">CompTIA A+ Certified</h3>
            <p className="text-text-muted dark:text-gray-300 text-sm">Industry-recognized IT certification for hardware and software expertise</p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-lg font-bold text-primary mb-2">Secure Processing</h3>
            <p className="text-text-muted dark:text-gray-300 text-sm">All data handled with industry-standard security practices</p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-bold text-primary mb-2">25,000+ Files Processed</h3>
            <p className="text-text-muted dark:text-gray-300 text-sm">13+ years of proven track record in engraving artwork preparation</p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-lg font-bold text-primary mb-2">Client-First Approach</h3>
            <p className="text-text-muted dark:text-gray-300 text-sm">Dedicated support with clear communication and reliable delivery</p>
          </div>
        </div>
      {/* Client Partnership Showcase */}
      <div className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-main dark:text-white">Long-Term Partnership</h2>
          <p className="text-text-muted dark:text-gray-300">13+ years serving industry leaders</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card text-center">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Branding Tools, Inc.</h3>
                <p className="text-text-muted dark:text-gray-300 mb-4">Leading provider of branding solutions for engraving and signage companies</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-primary">📅</span>
                    <span>13+ Years of Partnership</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-primary">📊</span>
                    <span>25,000+ Logos Processed</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-primary">⭐</span>
                    <span>100% Satisfaction Rate</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-text-main dark:text-white">Partnership Highlights</h4>
                <ul className="space-y-2 text-left text-text-muted dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reliable weekly delivery schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Consistent quality standards maintained</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Direct communication and quick issue resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Scalable service as their business grew</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="md:flex items-center justify-between gap-6">
          <div className="text-2xl font-semibold">Have a project in mind? Let’s make it happen.</div>
          <Link href="/contact" className="btn-secondary bg-white text-primary border-white dark:bg-bg-surface dark:text-primary mt-4 md:mt-0">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}