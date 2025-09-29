'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
}

export default function ContactPage() {
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company/Organization is required';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatus('');
    setIsError(false);
    setIsSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (res.ok && json.ok) {
        setIsSuccess(true);
        setStatus('Thanks! We will reply shortly.');
        setFormData({ name: '', email: '', company: '', projectType: '', budget: '', timeline: '', message: '' });
      } else {
        setStatus(json.error || 'Something went wrong.');
        setIsError(true);
      }
    } catch (err) {
      setStatus('Network error. Please try again.');
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16">
      <section className="text-center py-12">
        <p className="text-sm font-bold uppercase text-primary tracking-widest">Contact</p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-main mt-2">Let us know what needs to run next</h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-text-muted">
          Send the artwork, automation idea, or support request. We reply within one business day and move fast when you mark it urgent.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <a href="mailto:contact@tc-enterprises.com" className="btn-primary">Email Directly</a>
          <a href="#contact-form" className="btn-secondary">Use The Form</a>
          <a href="https://discord.com/channels/1420218161319645186/1420218161986408500" target="_blank" rel="noopener" className="btn-secondary">Chat on Discord</a>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Form */}
            <div className={`card ${isSuccess ? 'ring-2 ring-green-500/50 bg-green-50/50 dark:bg-green-900/10' : ''} transition-all duration-300`}>
              <h2 className="text-3xl font-bold text-text-main dark:text-white mb-6">
                {isSuccess ? 'Message Sent! 🎉' : 'Send a message'}
              </h2>

              {isSuccess ? (
                <div className="space-y-4 animate-scale-in">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✅</div>
                    <p className="text-lg text-text-muted dark:text-gray-300 mb-4">
                      We've received your message and will get back to you within one business day.
                    </p>
                    <Link href="/" className="btn-primary">
                      Back to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-text-main dark:text-gray-200 mb-2">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''}`}
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-text-main dark:text-gray-200 mb-2">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''}`}
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-text-main dark:text-gray-200 mb-2">
                      Company/Organization *
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`form-input ${errors.company ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''}`}
                      placeholder="Your company or organization name"
                      disabled={isSubmitting}
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-project-type" className="block text-sm font-medium text-text-main dark:text-gray-200 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={`form-input ${errors.projectType ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''}`}
                      disabled={isSubmitting}
                    >
                      <option value="">Select project type...</option>
                      <option value="artwork-engraving">Artwork & Engraving Prep</option>
                      <option value="ai-automation">AI Automation & Chat</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="industry-solution">Industry Solution (Real Estate, RV, Crafts)</option>
                      <option value="consulting">Consulting & Strategy</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.projectType}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-budget" className="block text-sm font-medium text-text-main dark:text-gray-200 mb-2">
                        Budget Range *
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={`form-input ${errors.budget ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''}`}
                        disabled={isSubmitting}
                      >
                        <option value="">Select budget...</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                      {errors.budget && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.budget}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-timeline" className="block text-sm font-medium text-text-main dark:text-gray-200 mb-2">
                        Timeline *
                      </label>
                      <select
                        id="contact-timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className={`form-input ${errors.timeline ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''}`}
                        disabled={isSubmitting}
                      >
                        <option value="">Select timeline...</option>
                        <option value="asap">ASAP / Rush</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-months-plus">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                      {errors.timeline && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.timeline}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-text-main dark:text-gray-200 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`form-textarea ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''}`}
                      placeholder="Tell us about your project, artwork needs, or automation requirements..."
                      disabled={isSubmitting}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message && (
                        <p className="text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                      )}
                      <p className="text-sm text-text-muted dark:text-gray-400 ml-auto">
                        {formData.message.length}/1000
                      </p>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''} transition-all duration-200`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>

                  {status && !isSuccess && (
                    <div className={`p-4 rounded-lg ${isError ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800' : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'}`}>
                      <p className={`text-sm text-center ${isError ? 'text-red-700 dark:text-red-300' : 'text-blue-700 dark:text-blue-300'}`}>
                        {status}
                      </p>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Right Column: Info */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-3">Response times</h3>
                <p className="text-text-muted dark:text-gray-300">
                  Monday through Friday, 9am-5pm Pacific. Rush and after-hours work are available when you note it in the request.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-3">File Upload Instructions</h3>
                <div className="space-y-3">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-600 dark:text-yellow-400 text-lg">📎</span>
                      <div>
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Artwork & Files</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                          <strong>Don't upload here.</strong> Send artwork via email to <a href="mailto:contact@tc-enterprises.com" className="link-primary underline">contact@tc-enterprises.com</a> or share on our <a href="https://discord.com/channels/1420218161319645186/1420218161986408500" target="_blank" rel="noopener" className="link-primary underline">Discord server</a>.
                        </p>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                          We prioritize your data security and never store files on our servers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-text-muted dark:text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Send high-resolution images, vectors, or source files</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Include reference to this contact form submission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Discord sharing is fastest for large files</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-3">Need a person now?</h3>
                <p className="text-text-muted dark:text-gray-300">
                  Email <a href="mailto:contact@tc-enterprises.com" className="link-primary">contact@tc-enterprises.com</a> or for a faster response, join us on <a href="https://discord.com/channels/1420218161319645186/1420218161986408500" target="_blank" rel="noopener" className="link-primary">Discord</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}