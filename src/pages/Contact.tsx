import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Mail, Phone, MapPin, ArrowRight, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - just show success state
    setIsSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Questions? We're here to help. Reach out anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-32 bg-background">
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

              <div className="space-y-6">
                <a
                  href="mailto:info@nexalightvs.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface hover:bg-surface/80 transition-colors duration-150 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
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
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface hover:bg-surface/80 transition-colors duration-150 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      317-572-5034
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium text-foreground">
                      Remote — Work From Anywhere
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={100}>
              {isSubmitted ? (
                <div className="bg-card border border-primary/30 rounded-xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
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
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
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
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-150 ease-human hover:bg-primary/90 press-effect focus-ring group"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 transition-transform duration-150 ease-human group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
