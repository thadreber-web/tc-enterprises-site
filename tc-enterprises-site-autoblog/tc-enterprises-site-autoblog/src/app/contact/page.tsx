'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  // Vector conversion fields
  equipment?: string;
  turnaround?: string;
  fileCount?: string;
  // Software fields
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
}

type ServiceType = 'vector' | 'software';

export default function ContactPage() {
  const [serviceType, setServiceType] = useState<ServiceType>('vector');
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    // Vector conversion fields
    equipment: '',
    turnaround: '',
    fileCount: '',
    // Software fields
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleServiceTypeChange = (type: ServiceType) => {
    setServiceType(type);
    setErrors({});
    // Reset form data when switching
    setFormData({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      equipment: '',
      turnaround: '',
      fileCount: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: formData.message
    });
  };

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

    if (serviceType === 'software') {
      if (!formData.projectType) {
        newErrors.projectType = 'Please select a project type';
      }
      if (!formData.budget) {
        newErrors.budget = 'Please select a budget range';
      }
      if (!formData.timeline) {
        newErrors.timeline = 'Please select a timeline';
      }
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
      const submitData = {
        ...formData,
        serviceType,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      const json = await res.json();
      if (res.ok && json.ok) {
        setIsSuccess(true);
        setStatus(serviceType === 'vector'
          ? 'Thanks! We will send you a quote within 2 hours during business hours.'
          : 'Thanks! We will reply shortly to discuss your project.');
        setFormData({
          name: '', email: '', company: '',
          equipment: '', turnaround: '', fileCount: '',
          projectType: '', budget: '', timeline: '', message: ''
        });
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
        <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground-dark">Get in Touch</h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-muted dark:text-muted-foreground">
          {serviceType === 'vector'
            ? 'Request a quote for vector conversion or start your free trial. We respond within 2 hours during business hours.'
            : 'Tell us about your software, automation, or IT project. We\'ll discuss your needs and provide a custom proposal.'}
        </p>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl">
          {/* Service Type Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-4">
              What are you interested in? *
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleServiceTypeChange('vector')}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  serviceType === 'vector'
                    ? 'border-primary bg-primary/5'
                    : 'border-muted/20 hover:border-primary/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                    serviceType === 'vector' ? 'border-primary bg-primary' : 'border-muted'
                  }`}>
                    {serviceType === 'vector' && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground dark:text-foreground-dark mb-1">
                      Vector Conversion for Engraving
                    </h3>
                    <p className="text-sm text-muted dark:text-muted-foreground">
                      EPS & PLT files • $40-55 per file • Free trial available
                    </p>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleServiceTypeChange('software')}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  serviceType === 'software'
                    ? 'border-primary bg-primary/5'
                    : 'border-muted/20 hover:border-primary/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                    serviceType === 'software' ? 'border-primary bg-primary' : 'border-muted'
                  }`}>
                    {serviceType === 'software' && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground dark:text-foreground-dark mb-1">
                      Software Development & IT
                    </h3>
                    <p className="text-sm text-muted dark:text-muted-foreground">
                      Custom development • Automation • Consulting
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`card ${isSuccess ? 'ring-2 ring-green-500/50 bg-green-50/50 dark:bg-green-900/10' : ''} transition-all duration-300`}>
            <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark mb-6">
              {isSuccess ? 'Message Sent! 🎉' : serviceType === 'vector' ? 'Request a Quote' : 'Tell Us About Your Project'}
            </h2>

            {isSuccess ? (
              <div className="space-y-4 animate-scale-in">
                <div className="text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <p className="text-lg text-muted dark:text-muted-foreground mb-4">
                    {status}
                  </p>
                  <Link href="/" className="btn-primary">
                    Back to Home
                  </Link>
                </div>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Common Fields */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
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
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
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
                  <label htmlFor="contact-company" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
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

                {/* Vector Conversion Specific Fields */}
                {serviceType === 'vector' && (
                  <>
                    <div>
                      <label htmlFor="contact-equipment" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                        Your Engraving Equipment (if known)
                      </label>
                      <input
                        id="contact-equipment"
                        name="equipment"
                        type="text"
                        value={formData.equipment}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="e.g., Gravograph M20, Gravostyle 7"
                        disabled={isSubmitting}
                      />
                      <p className="mt-1 text-xs text-muted dark:text-muted-foreground">
                        Optional - helps us provide the right file format
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-turnaround" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                          Turnaround Needed
                        </label>
                        <select
                          id="contact-turnaround"
                          name="turnaround"
                          value={formData.turnaround}
                          onChange={handleInputChange}
                          className="form-input"
                          disabled={isSubmitting}
                        >
                          <option value="">Select...</option>
                          <option value="standard">Standard (24-48 hours)</option>
                          <option value="rush-12">Rush (12 hours) - $60-75</option>
                          <option value="same-day">Same-Day Emergency - $90-100</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-file-count" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                          Number of Files
                        </label>
                        <select
                          id="contact-file-count"
                          name="fileCount"
                          value={formData.fileCount}
                          onChange={handleInputChange}
                          className="form-input"
                          disabled={isSubmitting}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 file</option>
                          <option value="2-5">2-5 files</option>
                          <option value="6-10">6-10 files (10% off)</option>
                          <option value="11-25">11-25 files (10% off)</option>
                          <option value="26-50">26-50 files (15% off)</option>
                          <option value="50-plus">50+ files (20% off)</option>
                          <option value="retainer">Monthly retainer</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Software Development Specific Fields */}
                {serviceType === 'software' && (
                  <>
                    <div>
                      <label htmlFor="contact-project-type" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
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
                        <option value="ai-automation">AI Automation & Chat</option>
                        <option value="custom-software">Custom Software Development</option>
                        <option value="industry-solution">Industry Solution (Real Estate, RV, Crafts)</option>
                        <option value="it-consulting">IT Consulting & Support</option>
                        <option value="consulting">Consulting & Strategy</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.projectType && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.projectType}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-budget" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
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
                        <label htmlFor="contact-timeline" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
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
                  </>
                )}

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`form-textarea ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''}`}
                    placeholder={serviceType === 'vector'
                      ? 'Describe your files or include any special requirements...'
                      : 'Tell us about your project, automation needs, or IT requirements...'}
                    disabled={isSubmitting}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message && (
                      <p className="text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                    <p className="text-sm text-muted dark:text-muted-foreground ml-auto">
                      {formData.message.length}/1000
                    </p>
                  </div>
                </div>

                {/* File Upload Note for Vector Conversion */}
                {serviceType === 'vector' && (
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-600 dark:text-yellow-400 text-lg">📎</span>
                      <div>
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Sending Files</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                          After submitting, send your files to <a href="mailto:contact@tc-enterprises.com" className="underline font-semibold">contact@tc-enterprises.com</a> and reference this quote request.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

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
                      serviceType === 'vector' ? 'Request Quote' : 'Send Message'
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

          {/* Additional Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark mb-2">
                Response Times
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                {serviceType === 'vector'
                  ? 'We respond to quote requests within 2 hours during business hours (Monday-Friday, 9am-5pm Pacific).'
                  : 'Monday through Friday, 9am-5pm Pacific. We typically respond within one business day.'}
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark mb-2">
                Need Help Faster?
              </h3>
              <p className="text-sm text-muted dark:text-muted-foreground">
                Email <a href="mailto:contact@tc-enterprises.com" className="text-primary hover:underline">contact@tc-enterprises.com</a> directly for the fastest response.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
