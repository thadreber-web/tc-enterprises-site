import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <p className="text-sm font-bold uppercase text-primary tracking-widest">About</p>
        <h1 className="text-4xl md:text-5xl font-bold text-main mt-2">Meet the Founder</h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-muted">
          Self-taught developer, CompTIA A+ certified technician, and the driving force behind T&C Enterprises.
        </p>
      </section>

      {/* Founder Story */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Founder Photo/Info */}
            <div className="md:col-span-1">
              <div className="card text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Founder & CEO</h3>
                <p className="text-muted dark:text-gray-300 mb-4">Self-taught developer with 13+ years in engraving operations</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-primary">🎓</span>
                    <span>CompTIA A+ Certified</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-primary">⚡</span>
                    <span>26,000+ Logos Processed</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-primary">🚀</span>
                    <span>Full-Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-main dark:text-white mb-4">The Journey: From Novice to Enterprise</h2>
                <div className="space-y-4 text-muted dark:text-gray-300 leading-relaxed">
                  <p>
                    <strong>"I started by converting raster images to vector engrave-ready artwork."</strong> Working for an engraving company, I saw a major bottleneck in our workflow—the artwork conversion process often took up to 2 weeks to get files back from external providers. This slow turnaround was hurting our productivity and my ability to focus on my core responsibilities.
                  </p>

                  <p>
                    Determined to improve the process, I taught myself how to convert raster images into diamond drag ready PLT files. This wasn't just about learning a new skill—it was about making the business run more efficiently so I could focus on my day job and help the company serve clients better.
                  </p>

                  <p>
                    Over the next 13 years, as my customer switched engraving platforms and moved from diamond drag to laser engraving, I continuously adapted and expanded my skills. I also implemented several key process improvements at the company: setting up a wired network, central server infrastructure, a large network switch for traffic management, and web-accessible CCTV recording systems. All of these changes were made with the goal of improving business operations so I could work more effectively.
                  </p>

                  <p>
                    <strong>The CompTIA A+ certification was a turning point.</strong> In 2021 I completed the credential, gaining the foundational IT knowledge I needed to understand hardware, networking, and system administration. This certification wasn't just about passing a test—it fundamentally changed how I approached technical problems and gave me the confidence to tackle complex software projects.
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-3">Key Milestones</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">1</div>
                    <div>
                      <strong className="text-main dark:text-white">2011:</strong>
                      <span className="text-muted dark:text-gray-300 ml-2">Started in engraving operations, identified artwork conversion bottleneck (2+ week turnaround)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">2</div>
                    <div>
                      <strong className="text-main dark:text-white">2011-2016:</strong>
                      <span className="text-muted dark:text-gray-300 ml-2">Self-taught raster-to-vector conversion, implemented process improvements (network, server, CCTV)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">3</div>
                    <div>
                      <strong className="text-main dark:text-white">2021:</strong>
                      <span className="text-muted dark:text-gray-300 ml-2">Earned CompTIA A+ certification and doubled down on software engineering foundations</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">4</div>
                    <div>
                      <strong className="text-main dark:text-white">2021:</strong>
                      <span className="text-muted dark:text-gray-300 ml-2">Launched T&C Enterprises, began processing engraving artwork professionally</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">5</div>
                    <div>
                      <strong className="text-main dark:text-white">2021-Present:</strong>
                      <span className="text-muted dark:text-gray-300 ml-2">Adapted to laser engraving platforms, expanded into AI automation and custom software</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Skills */}
      <section className="py-12 bg-bg-surface dark:bg-bg-surface-dark rounded-lg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-main dark:text-white mb-8">Areas of Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-primary mb-2">Artwork Preparation</h3>
              <p className="text-muted dark:text-gray-300 text-sm">
                13+ years processing engraving artwork. Expert in vector optimization, stroke-only EPS files, and machine-specific formatting.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-xl font-bold text-primary mb-2">System Administration</h3>
              <p className="text-muted dark:text-gray-300 text-sm">
                CompTIA A+ certified with experience in hardware troubleshooting, network configuration, and system optimization.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-xl font-bold text-primary mb-2">AI & Automation</h3>
              <p className="text-muted dark:text-gray-300 text-sm">
                Self-taught in machine learning, API integration, and intelligent automation. Focus on practical, production-ready solutions.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-xl font-bold text-primary mb-2">Full-Stack Development</h3>
              <p className="text-muted dark:text-gray-300 text-sm">
                Proficient in modern web technologies, databases, and cloud platforms. Built production systems from the ground up.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="text-xl font-bold text-primary mb-2">Operations & Workflow</h3>
              <p className="text-muted dark:text-gray-300 text-sm">
                Deep understanding of manufacturing operations, quality control, and process optimization across multiple industries.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold text-primary mb-2">Problem Solving</h3>
              <p className="text-muted dark:text-gray-300 text-sm">
                Self-taught approach means I excel at breaking down complex problems and finding practical, implementable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-main dark:text-white mb-8">Why I Started T&C Enterprises</h2>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold text-primary mb-3">The Problem I Saw</h3>
              <p className="text-muted dark:text-gray-300">
                For years, I watched engraving shops struggle with the same issues: inconsistent artwork files, communication breakdowns, and inefficient workflows. These weren't technical problems—they were process problems that no one had solved comprehensively.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-primary mb-3">The Self-Taught Journey</h3>
              <p className="text-muted dark:text-gray-300">
                I didn't come from a traditional tech background. Every skill I have, I taught myself through documentation, online resources, and hands-on problem-solving. This approach gives me a unique perspective—I understand both the technical complexity and the operational reality.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-primary mb-3">The Solution I Built</h3>
              <p className="text-muted dark:text-gray-300">
                T&C Enterprises bridges the gap between operations teams and technology. We don't just deliver code—we deliver working solutions that integrate seamlessly into existing workflows. Every project starts with understanding your processes, not just your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Credibility */}
      <section className="py-12 bg-primary/5 dark:bg-primary/10 rounded-lg">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-main dark:text-white mb-6">Certifications & Credentials</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-primary mb-2">CompTIA A+ Certified</h3>
              <p className="text-muted dark:text-gray-300 text-sm">
                Industry-recognized certification demonstrating expertise in hardware, software, and network troubleshooting.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-primary mb-2">26,000+ Logos Processed</h3>
              <p className="text-muted dark:text-gray-300 text-sm">
                Over 13 years of hands-on experience preparing engraving artwork for production across multiple industries.
              </p>
            </div>

            <a href="https://github.com/thadreber-web" target="_blank" rel="noopener noreferrer" className="card hover:border-primary/80 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-3">
                <svg className="w-10 h-10 inline-block text-foreground dark:text-foreground-dark group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Open Source & AI Research</h3>
              <p className="text-muted dark:text-gray-300 text-sm">
                Public repositories featuring AI research, automation tools, and development experiments. See the code behind the work.
              </p>
              <p className="text-sm text-primary font-medium mt-3 group-hover:underline">View on GitHub →</p>
            </a>
          </div>

          <div className="mt-8 p-6 bg-white/50 dark:bg-bg-surface-dark/50 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-3">Self-Taught, Battle-Tested</h3>
            <p className="text-muted dark:text-gray-300">
              While I don't have traditional computer science degrees, my practical experience and self-directed learning have equipped me to solve real-world problems that academic approaches often miss. Every solution I build has been tested in production environments.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-main dark:text-white">Ready to Work Together?</h2>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-muted dark:text-gray-300">
          Whether you need engraving artwork prepared, AI automation built, or custom software developed, I bring the same hands-on, problem-solving approach to every project.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/contact" className="btn-primary">Start a Project</Link>
          <Link href="/projects" className="btn-secondary">View My Work</Link>
        </div>
      </section>
    </div>
  );
}
