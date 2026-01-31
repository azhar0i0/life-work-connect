import { useState } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { Mail, Phone, MapPin, ArrowRight, Check, Clock, MessageSquare, HelpCircle } from 'lucide-react';
import { LiveRegion } from '@/components/ui/LiveRegion';

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

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

const formVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setAnnouncement('Your message has been sent successfully. We will get back to you soon.');
  };

  return (
    <Layout>
      {/* Live region for form announcements */}
      <LiveRegion message={announcement} politeness="polite" />

      {/* Hero */}
      <section 
        className="py-20 md:py-32 bg-surface overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <motion.span 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
              aria-hidden="true"
            >
              Contact
            </motion.span>
            <motion.h1 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
              id="contact-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Questions? We're here to help. Reach out anytime.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section 
        className="py-20 md:py-32 bg-background overflow-hidden"
        aria-label="Contact information and form"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: customEase }}
            >
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
                <AnimatedCard hoverScale={1.02} hoverY={-2}>
                  <a
                    href="mailto:azharisworking@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-surface hover:bg-surface/80 transition-colors duration-200 group focus-ring"
                    aria-label="Email us at azharisworking@gmail.com"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center" aria-hidden="true">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        azharisworking@gmail.com
                      </div>
                    </div>
                  </a>
                </AnimatedCard>

                <AnimatedCard hoverScale={1.02} hoverY={-2}>
                  <a
                    href="tel:317-572-5034"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-surface hover:bg-surface/80 transition-colors duration-200 group focus-ring"
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
                </AnimatedCard>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface">
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
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
            >
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card border border-primary/30 rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center"
                  role="status"
                  aria-live="polite"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2, type: 'spring' }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </motion.div>
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
                      className="w-full px-4 py-3 rounded-2xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
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
                      className="w-full px-4 py-3 rounded-2xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
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
                      className="w-full px-4 py-3 rounded-2xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
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
                      className="w-full px-4 py-3 rounded-2xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl transition-all duration-150 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed focus-ring group"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to Reach Out */}
      <section 
        className="py-20 md:py-32 bg-surface overflow-hidden"
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

            <StaggerContainer className="grid gap-6 md:grid-cols-3">
              {contactReasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <StaggerItem key={index}>
                    <AnimatedCard 
                      className="bg-card border border-border rounded-2xl p-6 text-center h-full hover:border-primary/30 transition-colors duration-300"
                      hoverScale={1.02}
                      hoverY={-4}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {reason.description}
                      </p>
                    </AnimatedCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Response Commitment */}
      <section 
        className="py-16 bg-background overflow-hidden"
        aria-labelledby="response-commitment-heading"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
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
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
