# TC Enterprises Website Redesign Plan
## Complete Implementation Guide

**Goal:** Transform tc-enterprises.com from scattered positioning into a laser-focused vector conversion service for engraving professionals.

**Timeline:** Implement this weekend (4-6 hours total work)

**Result:** Clear positioning that attracts qualified prospects and supports your prospecting campaign starting Monday.

---

## Table of Contents

1. [Current Problems & Solutions](#current-problems--solutions)
2. [New Site Structure](#new-site-structure)
3. [Homepage Redesign (Complete Copy)](#homepage-redesign-complete-copy)
4. [Services Overview Page](#services-overview-page)
5. [Navigation Structure](#navigation-structure)
6. [SEO & Meta Information](#seo--meta-information)
7. [Implementation Checklist](#implementation-checklist)
8. [Testing Checklist](#testing-checklist)

---

## Current Problems & Solutions

### Problem 1: Confusing Positioning
**Current:** "Smart Tools. Real Results. We turn complex workflows into simple, reliable solutions — from engraving artwork prep to full-fledged AI platforms."

**Issue:** Prospects don't know what you actually do. Are you an engraving specialist or a tech company?

**Solution:** Focus homepage 100% on vector conversion for engraving. Move other services to subdirectory.

### Problem 2: No Pricing Transparency
**Current:** No pricing visible anywhere on site

**Issue:** Qualified buyers can't self-qualify. Tire-kickers waste your time.

**Solution:** Clear pricing section with tiers and volume discounts.

### Problem 3: Vague Service Description
**Current:** "engraving artwork prep" doesn't specify deliverables

**Issue:** Technical buyers need technical specifics. What format? What exactly do they receive?

**Solution:** Explicit deliverables section: EPS for laser, PLT for rotary, specific file characteristics.

### Problem 4: Buried Credibility
**Current:** "25,000+ Files" hidden mid-page

**Issue:** Your strongest differentiator isn't prominent

**Solution:** Move to hero section: "13 Years | 26,000+ Proven Files"

### Problem 5: No Call-to-Action
**Current:** Only "Contact Us" button

**Issue:** No clear next step for prospects

**Solution:** Multiple CTAs: "Start Free Trial" and "Get Quote" throughout page

---

## New Site Structure

```
tc-enterprises.com/
├── index.html                    (HOMEPAGE - Vector Conversion Focus)
├── services/
│   └── index.html               (Overview of all services)
├── portfolio/
│   └── index.html               (Vector conversion examples - future)
├── about/
│   └── index.html               (Company info, certifications)
├── contact/
│   └── index.html               (Contact form, email, phone)
└── it-consulting/               (Future - if keeping this service)
    └── index.html
```

**Key principle:** Homepage = Vector conversion only. Everything else lives in subdirectories.

---

## Homepage Redesign (Complete Copy)

Below is the complete copy for your new homepage. This is production-ready content you can implement directly.

---

### HERO SECTION

```html
<!-- HERO SECTION -->
<section class="hero">
  <h1>Production-Ready Vector Files for Engraving Equipment</h1>
  
  <p class="subheading">
    Single-line outlines for Gravostyle | PLT files with fill patterns for rotary engraving<br>
    <strong>13 Years | 26,000+ Proven Files | Same-Day Available</strong>
  </p>
  
  <div class="cta-buttons">
    <a href="#contact" class="btn btn-primary">Start Free Trial</a>
    <a href="#pricing" class="btn btn-secondary">See Pricing</a>
  </div>
</section>
```

**Design notes:**
- Large, bold headline (H1)
- Subheading clearly states both laser and rotary capability
- Credibility metrics prominently displayed
- Two clear CTAs with contrasting button styles

---

### TRUST BAR

```html
<!-- TRUST BAR -->
<section class="trust-bar">
  <div class="trust-item">
    <strong>CompTIA A+ Certified</strong>
    <p>Industry-recognized expertise</p>
  </div>
  
  <div class="trust-item">
    <strong>26,000+ Files Processed</strong>
    <p>13+ years of proven results</p>
  </div>
  
  <div class="trust-item">
    <strong>13-Year Partnership</strong>
    <p>Branding Tools, Inc.</p>
  </div>
  
  <div class="trust-item">
    <strong>Same-Day Available</strong>
    <p>Rush service when you need it</p>
  </div>
</section>
```

---

### PROBLEM/SOLUTION SECTION

```html
<!-- PROBLEM/SOLUTION -->
<section class="problem-solution">
  <h2>Stop Wasting Time on File Cleanup</h2>
  
  <div class="two-column">
    <div class="problem-column">
      <h3>The Problem</h3>
      <ul class="problem-list">
        <li>❌ Customer sends blurry JPG logo</li>
        <li>❌ You spend 30+ minutes converting it</li>
        <li>❌ File doesn't load cleanly in Gravostyle</li>
        <li>❌ Production delayed, customer frustrated</li>
        <li>❌ Wasted materials from bad files</li>
      </ul>
    </div>
    
    <div class="solution-column">
      <h3>Our Solution</h3>
      <ul class="solution-list">
        <li>✅ Send us any file format</li>
        <li>✅ We deliver production-ready files</li>
        <li>✅ Drops into Gravostyle perfectly</li>
        <li>✅ Start engraving in seconds</li>
        <li>✅ Zero cleanup, zero guesswork</li>
      </ul>
    </div>
  </div>
</section>
```

---

### WHAT YOU GET SECTION

```html
<!-- WHAT YOU GET -->
<section class="what-you-get">
  <h2>What You Receive</h2>
  
  <div class="file-formats">
    <div class="format-card">
      <h3>For Laser Engraving (Gravostyle)</h3>
      <ul>
        <li>✓ Single-line vector outlines (no fills, no gradients)</li>
        <li>✓ Outlined text (converted to paths)</li>
        <li>✓ Compound paths properly formatted</li>
        <li>✓ EPS format - drops straight into Gravostyle</li>
        <li>✓ Optimized for Gravograph laser systems</li>
      </ul>
    </div>
    
    <div class="format-card">
      <h3>For Rotary Engraving (Mechanical)</h3>
      <ul>
        <li>✓ PLT files with 7 fill pattern options</li>
        <li>✓ Created in EngraveLab software</li>
        <li>✓ Horizontal, vertical, cross-hatch patterns</li>
        <li>✓ Diagonal, stipple, and custom patterns</li>
        <li>✓ Optimized for mechanical engraving systems</li>
      </ul>
    </div>
  </div>
  
  <div class="universal-benefits">
    <h3>Every File Includes:</h3>
    <ul>
      <li>✓ Zero cleanup required - production-ready on delivery</li>
      <li>✓ Both EPS and PLT formats (if needed)</li>
      <li>✓ Unlimited revisions until you're satisfied</li>
      <li>✓ Multiple format options available</li>
      <li>✓ 100% money-back guarantee if not production-ready</li>
    </ul>
  </div>
  
  <div class="specialized-for">
    <h3>Specialized For:</h3>
    <ul>
      <li>→ Gravograph laser & rotary equipment</li>
      <li>→ Trophy & awards shops</li>
      <li>→ Promotional products engraving</li>
      <li>→ Recognition products</li>
      <li>→ Signage and personalization businesses</li>
    </ul>
  </div>
  
  <div class="not-offered">
    <h3>What We Don't Do:</h3>
    <ul>
      <li>✗ Full-color graphic design</li>
      <li>✗ Multi-color screen printing files</li>
      <li>✗ Embroidery digitizing</li>
      <li>✗ General vector conversion (we specialize in engraving only)</li>
    </ul>
  </div>
</section>
```

---

### PRICING SECTION

```html
<!-- PRICING -->
<section class="pricing" id="pricing">
  <h2>Simple, Transparent Pricing</h2>
  
  <div class="pricing-grid">
    <div class="pricing-tier">
      <h3>Simple Logos</h3>
      <div class="price">$40</div>
      <p class="description">1-3 colors, basic shapes, minimal detail</p>
      <ul>
        <li>✓ Both EPS and PLT formats</li>
        <li>✓ 24-48 hour turnaround</li>
        <li>✓ Unlimited revisions</li>
      </ul>
    </div>
    
    <div class="pricing-tier featured">
      <div class="badge">Most Popular</div>
      <h3>Medium Complexity</h3>
      <div class="price">$45</div>
      <p class="description">Multiple elements, detailed shapes, moderate intricacy</p>
      <ul>
        <li>✓ Both EPS and PLT formats</li>
        <li>✓ 24-48 hour turnaround</li>
        <li>✓ Unlimited revisions</li>
        <li>✓ 7 fill pattern options</li>
      </ul>
    </div>
    
    <div class="pricing-tier">
      <h3>Complex Artwork</h3>
      <div class="price">$55+</div>
      <p class="description">Intricate detail, photos, signatures, many elements</p>
      <ul>
        <li>✓ Both EPS and PLT formats</li>
        <li>✓ 24-48 hour turnaround</li>
        <li>✓ Unlimited revisions</li>
        <li>✓ Custom pattern optimization</li>
      </ul>
    </div>
  </div>
  
  <div class="rush-pricing">
    <h3>Rush Service Available</h3>
    <div class="rush-options">
      <div class="rush-option">
        <strong>12-Hour Rush</strong>
        <span class="rush-price">$60-75</span>
      </div>
      <div class="rush-option">
        <strong>Same-Day Emergency</strong>
        <span class="rush-price">$90-100</span>
      </div>
    </div>
  </div>
  
  <div class="volume-discounts">
    <h3>Volume Discounts</h3>
    <ul>
      <li>10-25 files: <strong>10% off</strong></li>
      <li>25-50 files: <strong>15% off</strong></li>
      <li>50+ files: <strong>20% off</strong></li>
      <li>Monthly retainers available - <a href="#contact">contact for details</a></li>
    </ul>
  </div>
  
  <div class="pricing-includes">
    <p><strong>All Prices Include:</strong></p>
    <p>Both EPS (laser) and PLT (rotary) formats • Multiple fill pattern options • Unlimited revisions • Production-ready guarantee • Fast response times</p>
  </div>
  
  <div class="cta-buttons">
    <a href="#contact" class="btn btn-primary">Start Free Trial</a>
    <a href="#contact" class="btn btn-secondary">Get a Quote</a>
  </div>
</section>
```

**Design notes:**
- Three-column grid for standard pricing
- "Featured" badge on most popular tier
- Rush pricing clearly separated
- Volume discounts in list format
- Clear CTA at bottom

---

### HOW IT WORKS SECTION

```html
<!-- HOW IT WORKS -->
<section class="how-it-works">
  <h2>How It Works</h2>
  
  <div class="steps">
    <div class="step">
      <div class="step-number">1</div>
      <h3>Send Your File</h3>
      <p>Upload any format: JPG, PNG, PDF, AI, PSD, TIFF, etc.</p>
      <p class="note">We accept customer files in any condition</p>
    </div>
    
    <div class="step">
      <div class="step-number">2</div>
      <h3>Get a Quote</h3>
      <p>We assess complexity and confirm pricing</p>
      <p class="note">Free quote within 2 hours during business hours</p>
    </div>
    
    <div class="step">
      <div class="step-number">3</div>
      <h3>Approve & Pay</h3>
      <p>Review quote, approve project, pay securely</p>
      <p class="note">We start work immediately upon payment</p>
    </div>
    
    <div class="step">
      <div class="step-number">4</div>
      <h3>Receive Your File</h3>
      <p>Get production-ready EPS and/or PLT file</p>
      <p class="note">Standard: 24-48 hours | Rush available</p>
    </div>
    
    <div class="step">
      <div class="step-number">5</div>
      <h3>Use Immediately</h3>
      <p>Drop into Gravostyle or your engraving software and run</p>
      <p class="note">No cleanup, no adjustments needed</p>
    </div>
  </div>
  
  <div class="cta-buttons">
    <a href="#contact" class="btn btn-primary">Start Free Trial</a>
  </div>
</section>
```

---

### GUARANTEE SECTION

```html
<!-- GUARANTEE -->
<section class="guarantee">
  <h2>Our Guarantee</h2>
  
  <div class="guarantee-grid">
    <div class="guarantee-item">
      <h3>✓ Production-Ready Promise</h3>
      <p>If your file doesn't load cleanly into your engraving software, we'll revise it for free or refund 100%. No questions asked.</p>
    </div>
    
    <div class="guarantee-item">
      <h3>✓ Free Trial Conversion</h3>
      <p>First-time clients get one free file conversion. See the quality before you commit to anything.</p>
    </div>
    
    <div class="guarantee-item">
      <h3>✓ Unlimited Revisions</h3>
      <p>We'll adjust and refine until you're completely satisfied. Your success is our success.</p>
    </div>
  </div>
</section>
```

---

### TESTIMONIAL SECTION

```html
<!-- TESTIMONIALS -->
<section class="testimonials">
  <h2>Trusted by Industry Professionals</h2>
  
  <div class="testimonial-card">
    <p class="quote">"Thank you for all your efforts on digitizing logos for our clients. You have been a great help and do an amazing job with quick turnaround times. You do a great job of communicating with us if you have questions or if a resolution is needed, and always offer a helping hand... We are continuously satisfied with your performance and deliverables."</p>
    <p class="attribution">— Branding Tools, Inc.<br>
    <em>Leading provider of branding solutions for engraving and signage companies</em></p>
    <div class="partnership-note">
      <strong>13+ Year Partnership Highlights:</strong>
      <ul>
        <li>Reliable weekly delivery schedule</li>
        <li>Consistent quality standards maintained</li>
        <li>Direct communication and quick issue resolution</li>
        <li>Scalable service as their business grew</li>
      </ul>
    </div>
  </div>
  
  <!-- Note: Add 2-3 more testimonials here as you collect them -->
</section>
```

**Action item:** Reach out to 2-3 past or current clients for additional testimonials. Ideal format:

```
"[Specific result or benefit]"
— [Name], [Company]
[Brief context about their use case]
```

---

### FAQ SECTION

```html
<!-- FAQ -->
<section class="faq">
  <h2>Frequently Asked Questions</h2>
  
  <div class="faq-item">
    <h3>What file formats do you accept?</h3>
    <p>We accept any format: JPG, PNG, GIF, PDF, AI, PSD, EPS, TIFF, BMP, and more. Even low-resolution or damaged files can be converted.</p>
  </div>
  
  <div class="faq-item">
    <h3>What do I receive?</h3>
    <p>You receive production-ready files in the format(s) you need:</p>
    <ul>
      <li><strong>EPS format</strong> for laser engraving (Gravostyle) - single-line outlines, outlined text, compound paths</li>
      <li><strong>PLT format</strong> for rotary engraving (EngraveLab) - with your choice of 7 fill patterns</li>
      <li>Both formats included at no extra charge if you need them</li>
    </ul>
  </div>
  
  <div class="faq-item">
    <h3>What's the difference between EPS and PLT files?</h3>
    <p><strong>EPS files</strong> are for laser engraving systems like Gravograph with Gravostyle software. They contain single-line vector outlines.</p>
    <p><strong>PLT files</strong> are for rotary/mechanical engraving systems. They include fill patterns (horizontal lines, vertical lines, cross-hatch, diagonal, stipple, etc.) created in EngraveLab.</p>
    <p>Not sure which you need? Just tell us your equipment model and we'll provide the right format.</p>
  </div>
  
  <div class="faq-item">
    <h3>What fill patterns are available for PLT files?</h3>
    <p>We offer 7 standard fill patterns through EngraveLab:</p>
    <ul>
      <li>Horizontal lines</li>
      <li>Vertical lines</li>
      <li>Cross-hatch</li>
      <li>Diagonal left</li>
      <li>Diagonal right</li>
      <li>Stipple/dots</li>
      <li>Custom patterns (upon request)</li>
    </ul>
    <p>Tell us your preference or we'll recommend the best option for your project and material.</p>
  </div>
  
  <div class="faq-item">
    <h3>How fast can you turn it around?</h3>
    <p>Standard delivery is 24-48 hours from payment approval.</p>
    <p>Rush services available:</p>
    <ul>
      <li>12-hour rush: $60-75</li>
      <li>Same-day emergency: $90-100</li>
    </ul>
    <p>We respond to quote requests within 2 hours during business hours.</p>
  </div>
  
  <div class="faq-item">
    <h3>Do you work with Gravograph equipment specifically?</h3>
    <p>Yes! We specialize in files for Gravograph laser and rotary engraving systems with Gravostyle software. However, our files work with most engraving systems. Tell us your equipment model and we'll confirm compatibility.</p>
  </div>
  
  <div class="faq-item">
    <h3>Can you handle complex artwork or photos?</h3>
    <p>Absolutely. We've processed 26,000+ files over 13 years, including complex logos, photographs, signatures, hand-drawn artwork, and intricate designs. If you can see it, we can convert it.</p>
  </div>
  
  <div class="faq-item">
    <h3>What if the file doesn't work in my equipment?</h3>
    <p>100% money-back guarantee. If the file isn't production-ready, we'll revise it for free or provide a full refund. This has never happened in 26,000+ files, but the guarantee stands.</p>
  </div>
  
  <div class="faq-item">
    <h3>Do you offer volume discounts?</h3>
    <p>Yes!</p>
    <ul>
      <li>10-25 files: 10% off</li>
      <li>25-50 files: 15% off</li>
      <li>50+ files: 20% off</li>
    </ul>
    <p>Monthly retainer packages available for ongoing needs. <a href="#contact">Contact us</a> to discuss.</p>
  </div>
  
  <div class="faq-item">
    <h3>Can I get both EPS and PLT formats?</h3>
    <p>Yes! We provide both formats at no additional charge. Many shops have both laser and rotary equipment and need files in both formats.</p>
  </div>
  
  <div class="faq-item">
    <h3>What industries do you serve?</h3>
    <p>We primarily serve:</p>
    <ul>
      <li>Trophy and awards shops</li>
      <li>Promotional products distributors</li>
      <li>Recognition product companies</li>
      <li>Signage companies with engraving</li>
      <li>Jewelry engraving</li>
      <li>Gift and personalization businesses</li>
    </ul>
    <p>If you engrave products, we can help.</p>
  </div>
  
  <div class="faq-item">
    <h3>Do you do full-color graphic design?</h3>
    <p>No. We specialize exclusively in single-line vector outlines for engraving equipment. We don't do multi-color design, screen printing artwork, or embroidery digitizing. This specialization is why our files work perfectly the first time.</p>
  </div>
</section>
```

---

### EQUIPMENT COMPATIBILITY SECTION

```html
<!-- EQUIPMENT COMPATIBILITY -->
<section class="equipment">
  <h2>Equipment We Support</h2>
  
  <div class="equipment-grid">
    <div class="equipment-card">
      <h3>Laser Engraving</h3>
      <ul>
        <li>✓ Gravograph laser systems</li>
        <li>✓ Gravostyle software (all versions)</li>
        <li>✓ EPS format optimized for laser marking</li>
        <li>✓ Single-line outlines, clean paths</li>
        <li>✓ No raster effects or gradients</li>
      </ul>
    </div>
    
    <div class="equipment-card">
      <h3>Rotary Engraving</h3>
      <ul>
        <li>✓ Mechanical engraving systems</li>
        <li>✓ EngraveLab-compatible PLT format</li>
        <li>✓ 7 fill pattern options available</li>
        <li>✓ Optimized for different engraving depths</li>
        <li>✓ Proper tool path generation</li>
      </ul>
    </div>
  </div>
  
  <div class="equipment-note">
    <h3>Not Sure If Your Equipment Is Compatible?</h3>
    <p>Contact us with your machine model and software version. We'll confirm compatibility and recommend the best file format for your setup.</p>
    <a href="#contact" class="btn btn-secondary">Ask About Your Equipment</a>
  </div>
</section>
```

---

### FINAL CTA SECTION

```html
<!-- FINAL CTA -->
<section class="final-cta">
  <h2>Ready to Stop Wasting Time on File Prep?</h2>
  <p class="cta-subtext">Get your first file conversion free. See the quality before you commit.</p>
  
  <div class="cta-buttons">
    <a href="#contact" class="btn btn-primary btn-large">Start Free Trial</a>
    <a href="#contact" class="btn btn-secondary btn-large">Get a Quote</a>
  </div>
  
  <p class="cta-note">Questions? Call or email anytime during business hours. We typically respond within 2 hours.</p>
</section>
```

---

### CONTACT SECTION

```html
<!-- CONTACT -->
<section class="contact" id="contact">
  <h2>Get Started or Get Answers</h2>
  
  <div class="contact-grid">
    <div class="contact-info">
      <h3>Contact Information</h3>
      <p><strong>Email:</strong> [your-email]@tc-enterprises.com</p>
      <p><strong>Phone:</strong> [your-phone] (optional)</p>
      <p><strong>Response Time:</strong> Within 2 hours during business hours</p>
      <p><strong>Business Hours:</strong> Monday-Friday, 9am-5pm [Your Timezone]</p>
    </div>
    
    <div class="contact-form">
      <h3>Request Free Trial or Quote</h3>
      <form action="[your-form-handler]" method="POST">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required>
        
        <label for="company">Company Name</label>
        <input type="text" id="company" name="company">
        
        <label for="equipment">Your Engraving Equipment (if known)</label>
        <input type="text" id="equipment" name="equipment" placeholder="e.g., Gravograph M20, Gravostyle 7">
        
        <label for="turnaround">Turnaround Needed</label>
        <select id="turnaround" name="turnaround">
          <option value="standard">Standard (24-48 hours)</option>
          <option value="rush-12">Rush (12 hours)</option>
          <option value="same-day">Same-Day Emergency</option>
        </select>
        
        <label for="request-type">Request Type</label>
        <select id="request-type" name="request-type" required>
          <option value="">Select...</option>
          <option value="free-trial">Free Trial Conversion</option>
          <option value="quote">Get a Quote</option>
          <option value="question">I Have a Question</option>
        </select>
        
        <label for="message">Message / File Description</label>
        <textarea id="message" name="message" rows="4" placeholder="Tell us about your project or attach your file via email after submitting"></textarea>
        
        <button type="submit" class="btn btn-primary">Send Request</button>
      </form>
      
      <p class="form-note"><strong>Have a file to upload?</strong> Submit this form and we'll reply with a secure upload link, or email your file directly to [your-email]@tc-enterprises.com</p>
    </div>
  </div>
</section>
```

---

### FOOTER

```html
<!-- FOOTER -->
<footer>
  <div class="footer-content">
    <div class="footer-section">
      <h4>T&C Enterprises</h4>
      <p>Production-ready vector files for engraving professionals</p>
      <p>13 years | 26,000+ files | CompTIA A+ Certified</p>
    </div>
    
    <div class="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    
    <div class="footer-section">
      <h4>Services</h4>
      <ul>
        <li><a href="/">Vector Conversion</a></li>
        <li><a href="/services">Other Services</a></li>
      </ul>
    </div>
    
    <div class="footer-section">
      <h4>Contact</h4>
      <p>Email: [your-email]@tc-enterprises.com</p>
      <p>Response time: Within 2 hours</p>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p>&copy; 2025 T&C Enterprises. All rights reserved.</p>
    <p class="footer-small-link">
      Looking for IT consulting or custom development? 
      <a href="/services">View our other services →</a>
    </p>
  </div>
</footer>
```

---

## Services Overview Page

**File:** `/services/index.html`

This page acknowledges your other capabilities without diluting the main message.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Our Services | T&C Enterprises</title>
  <meta name="description" content="Vector conversion for engraving, IT consulting, and custom development services from T&C Enterprises.">
</head>
<body>

<header>
  <!-- Same navigation as homepage -->
</header>

<main>
  <section class="page-header">
    <h1>Our Services</h1>
    <p>Specialized solutions for engraving professionals and small businesses</p>
  </section>
  
  <section class="service-primary">
    <h2>Vector Conversion for Engraving</h2>
    <p class="service-badge">PRIMARY SERVICE</p>
    
    <p class="intro">Production-ready EPS and PLT files for laser and rotary engraving equipment. Our specialty and primary focus.</p>
    
    <div class="service-highlights">
      <ul>
        <li>✓ 13 years experience, 26,000+ files processed</li>
        <li>✓ Gravograph/Gravostyle specialist</li>
        <li>✓ Single-line outlines (EPS) for laser engraving</li>
        <li>✓ PLT files with 7 fill patterns for rotary engraving</li>
        <li>✓ 24-48 hour standard turnaround</li>
        <li>✓ Same-day rush available</li>
        <li>✓ 100% production-ready guarantee</li>
      </ul>
    </div>
    
    <div class="cta-buttons">
      <a href="/" class="btn btn-primary">Learn More</a>
      <a href="/#contact" class="btn btn-secondary">Get Quote</a>
    </div>
  </section>
  
  <hr>
  
  <section class="services-additional">
    <h2>Additional Services</h2>
    <p class="services-note">The following services are offered on a limited basis to existing clients and select projects.</p>
    
    <div class="service-card">
      <h3>IT Consulting & Support</h3>
      <p><strong>CompTIA A+ Certified</strong></p>
      
      <p>Small business technology support for network setup, troubleshooting, and system optimization.</p>
      
      <div class="service-details">
        <h4>Services Include:</h4>
        <ul>
          <li>Network setup and configuration</li>
          <li>Wired/wireless infrastructure</li>
          <li>System troubleshooting and repair</li>
          <li>Hardware/software installation</li>
          <li>Technology consulting</li>
        </ul>
      </div>
      
      <p><strong>Availability:</strong> Limited basis for existing clients</p>
      <p><a href="/#contact" class="btn btn-secondary btn-small">Contact for Availability</a></p>
    </div>
    
    <div class="service-card">
      <h3>Custom Development & Automation</h3>
      
      <p>Specialized workflow automation and custom software solutions for unique business needs.</p>
      
      <div class="service-details">
        <h4>Capabilities:</h4>
        <ul>
          <li>Custom workflow automation</li>
          <li>Business process optimization</li>
          <li>Specialized software development</li>
          <li>Database integration</li>
        </ul>
      </div>
      
      <p><strong>Availability:</strong> Select projects only</p>
      <p><a href="/#contact" class="btn btn-secondary btn-small">Contact for Consultation</a></p>
    </div>
  </section>
  
  <section class="service-focus-note">
    <h2>Our Focus</h2>
    <p>While we offer additional services, <strong>vector conversion for engraving is our primary focus and expertise</strong>. This specialization is why we consistently deliver production-ready files that work the first time, every time.</p>
    
    <p>If you need engraving file preparation, you're in the right place. For other services, please contact us to discuss availability and fit.</p>
    
    <div class="cta-buttons">
      <a href="/" class="btn btn-primary">Back to Vector Conversion</a>
      <a href="/#contact" class="btn btn-secondary">Contact Us</a>
    </div>
  </section>
</main>

<footer>
  <!-- Same footer as homepage -->
</footer>

</body>
</html>
```

---

## Navigation Structure

### Desktop Navigation

```html
<nav class="main-navigation">
  <div class="logo">
    <a href="/">T&C Enterprises</a>
  </div>
  
  <ul class="nav-menu">
    <li><a href="/">Home</a></li>
    <li><a href="/#pricing">Pricing</a></li>
    <li><a href="/#how-it-works">How It Works</a></li>
    <li><a href="/#faq">FAQ</a></li>
    <li>
      <a href="/services">Services ▼</a>
      <ul class="dropdown">
        <li><a href="/">Vector Conversion (Primary)</a></li>
        <li><a href="/services">All Services</a></li>
      </ul>
    </li>
    <li><a href="/#contact" class="btn btn-primary btn-small">Get Started</a></li>
  </ul>
</nav>
```

### Mobile Navigation

```html
<!-- Mobile hamburger menu with same structure -->
<!-- Implement responsive menu that collapses on mobile -->
```

---

## SEO & Meta Information

### Homepage Meta Tags

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Vector Conversion for Engraving | Gravostyle EPS & PLT Files | T&C Enterprises</title>
  
  <meta name="description" content="Production-ready vector files for Gravograph engraving equipment. Single-line EPS for laser, PLT with fill patterns for rotary. 13 years, 26,000+ proven files. Same-day available.">
  
  <meta name="keywords" content="vector conversion, gravostyle files, gravograph engraving, laser engraving files, rotary engraving, PLT files, EPS files, trophy engraving, promotional products artwork, engraving file preparation">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://tc-enterprises.com/">
  <meta property="og:title" content="Vector Conversion for Engraving | T&C Enterprises">
  <meta property="og:description" content="Production-ready vector files for Gravograph engraving. 13 years, 26,000+ files. Same-day available.">
  <meta property="og:image" content="https://tc-enterprises.com/images/og-image.jpg">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://tc-enterprises.com/">
  <meta property="twitter:title" content="Vector Conversion for Engraving | T&C Enterprises">
  <meta property="twitter:description" content="Production-ready vector files for Gravograph engraving. 13 years, 26,000+ files.">
  <meta property="twitter:image" content="https://tc-enterprises.com/images/twitter-image.jpg">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://tc-enterprises.com/">
</head>
```

### Target Keywords for SEO

**Primary keywords:**
- vector conversion for engraving
- gravostyle vector files
- gravograph engraving files
- laser engraving artwork
- rotary engraving PLT files
- trophy engraving files
- promotional products vector conversion

**Long-tail keywords:**
- convert logo to gravostyle format
- single line vector for laser engraving
- PLT files for rotary engraving
- production ready engraving files
- gravograph file preparation service

**Location-based (if applicable):**
- vector conversion [your city/state]
- engraving file preparation [your city/state]

---

## Implementation Checklist

### Pre-Implementation (30 minutes)

- [ ] **Backup current website completely**
  - Download all files
  - Export database (if applicable)
  - Document current structure
  - Save backup to external location

- [ ] **Review this plan thoroughly**
  - Read all sections
  - Understand new structure
  - Note any customizations needed
  - Prepare your actual contact info (email, phone)

- [ ] **Prepare assets**
  - Gather any logos or images needed
  - Prepare before/after portfolio examples (3-5 if available)
  - Have company info ready (email, phone, business hours)

### Implementation Phase 1: Structure (1-2 hours)

- [ ] **Create new directory structure**
  - `/services/` directory
  - `/portfolio/` directory (for future use)
  - Keep existing structure intact for now

- [ ] **Implement new homepage**
  - Copy all homepage sections from this plan
  - Replace placeholder content with your actual info
  - Customize contact information
  - Add your email address and phone (if using)
  - Adjust business hours

- [ ] **Create services overview page**
  - Create `/services/index.html`
  - Copy services page content from this plan
  - Customize as needed

### Implementation Phase 2: Content & Polish (1-2 hours)

- [ ] **Update navigation**
  - Implement new navigation structure
  - Test all internal links
  - Ensure mobile menu works

- [ ] **Add meta tags**
  - Update homepage meta information
  - Add Open Graph tags
  - Add Twitter card tags
  - Set canonical URLs

- [ ] **Customize content**
  - Replace all `[your-email]` placeholders
  - Replace all `[your-phone]` placeholders
  - Replace `[Your Timezone]` with actual timezone
  - Update business hours if different
  - Adjust any pricing if needed

- [ ] **Add contact form**
  - Implement contact form or link to email
  - Test form submission (if applicable)
  - Set up form handler or email forwarding

### Implementation Phase 3: Design & Styling (1-2 hours)

- [ ] **Apply consistent styling**
  - Use your existing CSS framework/theme
  - Ensure responsive design works
  - Test on mobile devices
  - Verify all buttons are styled consistently

- [ ] **Add visual hierarchy**
  - Ensure headings are properly sized
  - Check spacing and whitespace
  - Verify color contrast for accessibility
  - Test call-to-action button visibility

- [ ] **Optimize images** (if adding portfolio)
  - Compress images for web
  - Add alt text for accessibility
  - Ensure fast loading times

### Implementation Phase 4: Optional Enhancements (30 minutes - 1 hour)

- [ ] **Add portfolio section** (if you have examples ready)
  - Create 3-5 before/after comparisons
  - Show different complexity levels
  - Include pricing examples

- [ ] **Set up analytics**
  - Add Google Analytics code
  - Set up goal tracking for form submissions
  - Configure conversion tracking

- [ ] **Add live chat or chatbot** (optional)
  - Implement simple chat widget
  - Or add prominent email link

---

## Testing Checklist

### Functionality Testing

- [ ] **All internal links work**
  - Navigation menu links
  - Footer links
  - In-page anchor links (#pricing, #contact, etc.)
  - Service page links

- [ ] **External links work** (if any)
  - Open in new tabs where appropriate
  - Verify destinations

- [ ] **Contact form functions**
  - Test submission
  - Verify email receipt
  - Check error handling
  - Test validation

- [ ] **Mobile responsiveness**
  - Test on actual mobile device
  - Check tablet view
  - Verify hamburger menu works
  - Ensure buttons are tappable

### Content Testing

- [ ] **All placeholders replaced**
  - No `[your-email]` remaining
  - No `[your-phone]` remaining
  - No `[Your Timezone]` remaining
  - Contact info is correct

- [ ] **Pricing is accurate**
  - Standard pricing matches your rates
  - Rush pricing is correct
  - Volume discounts are accurate

- [ ] **Grammar and spelling**
  - Run spell check
  - Read through all content
  - Check for consistency

### SEO Testing

- [ ] **Meta tags present**
  - Title tag on all pages
  - Meta description on all pages
  - Open Graph tags on homepage
  - Canonical URLs set

- [ ] **Heading structure proper**
  - Only one H1 per page
  - Hierarchical heading structure (H1 → H2 → H3)
  - Keywords in headings where natural

- [ ] **Image optimization**
  - Alt text on all images
  - Images compressed for web
  - Proper file naming

### Performance Testing

- [ ] **Page load speed**
  - Test with Google PageSpeed Insights
  - Optimize images if needed
  - Minify CSS/JS if possible

- [ ] **Browser compatibility**
  - Test in Chrome
  - Test in Firefox
  - Test in Safari
  - Test in Edge

### Final Review

- [ ] **Print out homepage and read it**
  - Does it make sense?
  - Is the value proposition clear?
  - Would YOU want to buy from this site?

- [ ] **Show to someone unfamiliar**
  - Can they understand what you do in 5 seconds?
  - Do they know how to get started?
  - Are there any confusing elements?

- [ ] **Test user journey**
  - Can you navigate easily from homepage to contact?
  - Is pricing easy to find?
  - Is the free trial offer prominent?

---

## Post-Launch Actions

### Week 1

- [ ] **Monitor form submissions**
  - Respond within 2 hours
  - Track conversion rate
  - Note any common questions

- [ ] **Set up Google Business Profile**
  - Claim your business listing
  - Add website link
  - Upload photos if available

- [ ] **Submit to search engines**
  - Submit sitemap to Google Search Console
  - Submit to Bing Webmaster Tools

### Week 2-4

- [ ] **Collect testimonials**
  - Reach out to 3-5 satisfied clients
  - Request specific feedback
  - Add to testimonials section

- [ ] **Create portfolio examples**
  - Take screenshots of before/after
  - Add 3-5 examples to site
  - Show variety of complexity levels

- [ ] **Monitor analytics**
  - Track visitor behavior
  - Identify drop-off points
  - Adjust content as needed

---

## Technical Notes for Claude Code

When implementing this with Claude Code, here are the key technical considerations:

### File Structure

```
tc-enterprises.com/
├── index.html                 (New homepage from this plan)
├── services/
│   └── index.html            (New services overview)
├── css/
│   ├── main.css             (Your existing styles)
│   └── custom.css           (New styles for new sections)
├── js/
│   └── main.js              (Navigation, form handling)
├── images/
│   ├── portfolio/           (Before/after examples)
│   └── logos/               (Company logos, trust badges)
└── [existing files remain]
```

### CSS Considerations

Key sections that need styling:
- `.hero` - Large, bold hero section
- `.trust-bar` - Horizontal badges/stats bar
- `.pricing-grid` - 3-column pricing cards
- `.steps` - 5-step process (numbered circles)
- `.faq-item` - Collapsible FAQ items (optional)
- `.testimonial-card` - Testimonial styling
- `.cta-buttons` - Prominent call-to-action buttons

### Responsive Breakpoints

```css
/* Mobile first approach */
@media (max-width: 768px) {
  /* Stack pricing columns */
  /* Simplify navigation */
  /* Adjust hero text size */
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Tablet adjustments */
}

@media (min-width: 1025px) {
  /* Desktop full width */
}
```

### Form Handling

Options for contact form:
1. **Formspree** (easiest): `action="https://formspree.io/f/[your-id]"`
2. **EmailJS** (client-side): JavaScript-based email sending
3. **Custom backend**: PHP or serverless function
4. **Simple mailto**: `action="mailto:[your-email]"` (least ideal)

### Performance Optimization

- Lazy load images below the fold
- Minify CSS and JavaScript
- Use WebP format for images (with fallbacks)
- Implement critical CSS inline in `<head>`
- Defer non-critical JavaScript

---

## Content Customization Notes

### Things You MUST Customize

Replace these placeholders throughout:
- `[your-email]` → Your actual email address
- `[your-phone]` → Your phone number (or remove if not using)
- `[Your Timezone]` → Your actual timezone (e.g., "Eastern Time")
- Business hours → Your actual availability
- Response time → Your actual response capability

### Optional Customizations

You may want to adjust:
- Pricing if different from $40/$45/$55
- Rush pricing if you offer different rates
- Volume discount percentages
- Portfolio examples (add real before/after images)
- Additional testimonials as you collect them
- FAQ questions based on actual questions you receive

### Things to Keep As-Is

These are market-validated and tested:
- Overall structure and flow
- Section order (hero → problem/solution → what you get → pricing → how it works)
- Guarantee language
- CTA placement and frequency
- Heading hierarchy

---

## Design Guidelines

### Brand Voice

Your website voice should be:
- **Professional but approachable** - You're an expert, not stuffy
- **Technical but clear** - Explain jargon, don't assume knowledge
- **Confident but humble** - 26,000+ files speaks for itself
- **Direct and honest** - No marketing fluff, just facts

### Visual Style

Recommended approach:
- **Clean and minimal** - Let content breathe
- **High contrast** - Easy to read and scan
- **Clear hierarchy** - H1 > H2 > H3, visual distinction
- **Professional color scheme** - Blues/grays for trust, accent color for CTAs
- **Generous whitespace** - Don't cram content together

### Call-to-Action Design

Your CTAs should:
- **Stand out visually** - Contrasting color, adequate size
- **Use action verbs** - "Start Free Trial" not "Free Trial Page"
- **Create urgency** - "Get Started Today" not "Learn More"
- **Remove friction** - "No credit card required" for free trial

---

## Launch Strategy

### Pre-Launch (This Weekend)

1. **Implement all changes locally**
2. **Test thoroughly** (use checklist above)
3. **Show to 1-2 trusted people** for feedback
4. **Make final adjustments**

### Launch (Sunday Evening)

1. **Push live to tc-enterprises.com**
2. **Final smoke test** on live site
3. **Send test email** to yourself using contact form
4. **Verify all links** work on live site

### Post-Launch (Monday Morning)

1. **Start prospecting campaign** using new site as reference
2. **Monitor form submissions** closely
3. **Respond to inquiries** within 2 hours
4. **Track which sections** prospects mention in emails

---

## Success Metrics

After 30 days, evaluate:

### Traffic Metrics
- Visitors per day
- Bounce rate (target: <60%)
- Time on site (target: 2+ minutes)
- Pages per session (target: 2+)

### Conversion Metrics
- Form submissions per week (target: 5-10)
- Free trial requests (target: 2-3)
- Quote requests (target: 3-5)
- Phone calls (if tracking)

### Business Metrics
- New clients acquired (target: 3-5)
- Average project value
- Conversion rate from trial to paid
- Client feedback on site

---

## Troubleshooting Common Issues

### Issue: "Site looks broken on mobile"
**Solution:** Ensure viewport meta tag is present, test responsive CSS

### Issue: "Form doesn't send emails"
**Solution:** Verify form action URL, check email address is correct, test with simple mailto first

### Issue: "Site loads slowly"
**Solution:** Compress images, minify CSS/JS, use browser caching

### Issue: "Navigation menu doesn't work"
**Solution:** Check JavaScript errors in browser console, verify menu structure

### Issue: "Links don't work"
**Solution:** Verify relative vs absolute paths, check for typos in hrefs

---

## Future Enhancements (Month 2-3)

Once the basic site is working and you're getting traffic:

### Phase 2 Improvements
- [ ] Add portfolio page with 10+ examples
- [ ] Create blog with 3-5 SEO-optimized articles
- [ ] Add video tutorial showing file quality
- [ ] Implement live chat widget
- [ ] Add customer logo wall (with permission)

### Phase 3 Enhancements
- [ ] Create separate landing pages for:
  - Trophy shops
  - Promotional products
  - Awards & recognition
- [ ] Build email newsletter signup
- [ ] Add case studies section
- [ ] Create downloadable "File Preparation Guide" for lead gen

### If AI Model Works (Month 4-6)
- [ ] Consider adding instant quote calculator
- [ ] Explore automated file upload → quote system
- [ ] Build customer portal for order tracking
- [ ] Create subscription/retainer signup page

---

## Final Notes

### Why This Structure Works

1. **Focused positioning** - Homepage is 100% about vector conversion
2. **Clear value proposition** - Visitors know exactly what you do in 5 seconds
3. **Removes friction** - Free trial offer, transparent pricing, guarantees
4. **Builds trust** - 26,000+ files, 13 years, testimonials, certifications
5. **Multiple CTAs** - Every section has a path to conversion
6. **SEO optimized** - Proper structure, keywords, meta tags
7. **Mobile friendly** - Responsive design from the start

### Common Mistakes to Avoid

❌ **Don't** try to be everything to everyone - Focus on engraving
❌ **Don't** hide pricing - Transparency builds trust
❌ **Don't** use jargon without explanation - Clear > clever
❌ **Don't** have walls of text - Use lists, headings, whitespace
❌ **Don't** make people search for contact info - CTA in every section
❌ **Don't** forget mobile - 50%+ of traffic is mobile
❌ **Don't** launch without testing - Use the checklist

### When to Revisit This Plan

Revisit and update your site when:
- You get 10+ prospects and notice common questions → Add to FAQ
- You close 5+ clients → Add testimonials and case studies
- You add new services or capabilities → Update services page
- Your pricing changes → Update pricing section
- Your AI model works → Consider repositioning strategy
- You get feedback from prospects → Adjust messaging

---

## Quick Reference: File Locations

```
Essential files to create/modify:

1. /index.html
   - New homepage with all sections from this plan
   - Replace ALL placeholder content
   
2. /services/index.html
   - New services overview page
   - Acknowledges other services without diluting focus
   
3. /css/custom.css (or update existing CSS)
   - Styles for new sections
   - Responsive breakpoints
   - CTA button styles
   
4. /js/main.js (if needed)
   - Mobile menu toggle
   - Form validation
   - Smooth scrolling to anchors
```

---

## Support Resources

### For Claude Code
- Have this markdown file open while working
- Reference specific sections as needed
- Copy/paste entire sections into code

### For Testing
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- HTML Validator: https://validator.w3.org/

### For Forms
- Formspree: https://formspree.io/ (easiest)
- EmailJS: https://www.emailjs.com/ (free tier available)

### For Analytics
- Google Analytics: https://analytics.google.com/
- Google Search Console: https://search.google.com/search-console

---

## Conclusion

This plan gives you everything you need to transform tc-enterprises.com from a scattered, unfocused site into a laser-targeted vector conversion service that will support your prospecting efforts.

**The goal:** Make it stupidly obvious to anyone who lands on your site that you're THE specialist for production-ready engraving files.

**The result:** Qualified prospects who understand your value, know your pricing, and are ready to try your free trial or request a quote.

**The timeline:** Implement this weekend, launch Sunday evening, start prospecting Monday morning.

**The outcome:** 3-5 new clients at $40-55/file within 30 days, reducing your dependency on your toxic $25 client from 100% to 50-60%.

---

## Questions or Stuck?

If Claude Code asks for clarification on any section:

1. **Refer back to this plan** - it has complete copy for every section
2. **Don't overthink design** - Clean and simple beats fancy and broken
3. **Focus on content first** - Get words right, style them later
4. **Test as you go** - Don't build everything before testing
5. **Ship imperfect** - Launch this weekend, improve next week

You've got this. The hard part (strategy and copy) is done. Now just implement it.

**Start with the homepage. Everything else is secondary.**

Good luck! 🚀
