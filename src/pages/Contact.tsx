import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedTextBlock } from '@/components/ui/AnimatedSection';
import { Mail, Phone, MapPin, ArrowRight, Check, Clock, MessageSquare, HelpCircle } from 'lucide-react';
import { LiveRegion } from '@/components/ui/LiveRegion';

const contactReasons = [
  {
    icon: HelpCircle,
    title: 'General Inquiries',
    description: 'Questions about the company or opportunities.',
  },
  {
    icon: MessageSquare,
    title: 'Application Status',
    description: 'Check on a submitted application.',
  },
  {
    icon: Clock,
    title: 'Technical Support',
    description: 'Issues during onboarding or training.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setAnnouncement('Your message has been sent successfully. We will get back to you soon.');
  };

  return (
    <Layout>
      {/* Live region for form announcements */}
      <LiveRegion message={announcement} politeness="polite" />

      {/* Hero */}
      <section 
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span 
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
              aria-hidden="true"
            >
              Contact
            </span>
            <h1 
              id="contact-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance"
            >
              Get in Touch
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Questions? We're here to help. Reach out anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section 
        className="py-20 md:py-32 bg-background"
        aria-label="Contact information and form"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <AnimatedSection className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions about working with Nexalight Virtual Solutions? 
                  We'd love to hear from you.
                </p>
              </div>

              <address className="space-y-4 not-italic">
                <a
                  href="mailto:info@nexalightvs.com"
                  className="flex items-center gap-4 p-4 rounded-3xl bg-surface hover:bg-surface/80 transition-colors duration-150 group focus-ring"
                  aria-label="Email us at info@nexalightvs.com"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center" aria-hidden="true">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      info@nexalightvs.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:317-572-5034"
                  className="flex items-center gap-4 p-4 rounded-3xl bg-surface hover:bg-surface/80 transition-colors duration-150 group focus-ring"
                  aria-label="Call us at 317-572-5034"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center" aria-hidden="true">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      317-572-5034
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-3xl bg-surface">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center" aria-hidden="true">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium text-foreground">
                      Remote — Work From Anywhere
                    </div>
                  </div>
                </div>
              </address>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={100}>
              {isSubmitted ? (
                <div 
                  className="bg-card border border-primary/30 rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="bg-card border border-border rounded-3xl p-8 space-y-6"
                  aria-label="Contact form"
                  noValidate
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name <span className="text-destructive" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-required="true"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-3xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address <span className="text-destructive" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-3xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      autoComplete="off"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-3xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message <span className="text-destructive" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      aria-required="true"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-3xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-3xl transition-all duration-150 ease-human hover:bg-transparent hover:text-primary border-2 border-primary press-effect focus-ring group"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 transition-transform duration-150 ease-human group-hover:translate-x-0.5" aria-hidden="true" />
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* When to Reach Out */}
      <section 
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="when-to-reach-heading"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 
                id="when-to-reach-heading"
                className="text-2xl md:text-3xl font-bold text-foreground"
              >
                When to Reach Out
              </h2>
              <p className="mt-4 text-muted-foreground">
                We're here for specific questions. Here's when to contact us.
              </p>
            </AnimatedSection>

            <ul className="grid gap-6 md:grid-cols-3" aria-label="Reasons to contact us">
              {contactReasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <li key={index}>
                    <AnimatedTextBlock delay={index * 100}>
                      <article className="bg-card border border-border rounded-3xl p-6 text-center h-full">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {reason.description}
                        </p>
                      </article>
                    </AnimatedTextBlock>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Response Commitment */}
      <section 
        className="py-16 bg-background"
        aria-labelledby="response-commitment-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <article className="bg-card border border-border rounded-3xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 
                id="response-commitment-heading"
                className="text-xl font-semibold text-foreground mb-3"
              >
                Our Response Commitment
              </h3>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within <span className="text-foreground font-medium">1-2 business days</span>. 
                For urgent matters, please call us directly.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
