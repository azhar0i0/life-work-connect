import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedTextBlock, AnimatedBenefit } from '@/components/ui/AnimatedSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ClipboardCheck, GraduationCap, Home, ArrowRight, Check, MessageSquare, Headphones, BookOpen, ChevronDown } from 'lucide-react';
import { LiveRegion } from '@/components/ui/LiveRegion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Apply',
    description: "Complete our application to see if you're a good fit for our remote team.",
  },
  {
    icon: GraduationCap,
    number: '02',
    title: 'Certification & Training',
    description: 'Required training and certification are paid. Learn at your own pace.',
  },
  {
    icon: Home,
    number: '03',
    title: 'Start Working From Home',
    description: "Once certified, you'll begin supporting established brands—all remotely.",
  },
];

const whatWeOffer = [
  {
    icon: BookOpen,
    title: 'Transparent onboarding',
    description: "No surprises. You'll know exactly what to expect at each stage.",
  },
  {
    icon: GraduationCap,
    title: 'Paid preparation',
    description: 'Your time is valuable from the start. Training is compensated.',
  },
  {
    icon: Headphones,
    title: 'Ongoing support',
    description: "Questions? Challenges? We're here to help you succeed.",
  },
  {
    icon: MessageSquare,
    title: 'Clear communication',
    description: 'Regular updates and straightforward expectations.',
  },
];

const whatWeExpect = [
  'Professional communication in all interactions',
  'Reliability and follow-through on commitments',
  'Willingness to learn and improve',
  'A quiet, dedicated workspace',
  'Stable internet connection',
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLLIElement>({ threshold: 0.3 });
  const Icon = step.icon;
  const delay = index * 150;

  return (
    <li
      ref={ref}
      className="relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, 
                     transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      <article className="bg-card border border-border rounded-3xl p-8 h-full relative overflow-hidden group hover:border-primary/30 transition-colors duration-300 focus-within:ring-2 focus-within:ring-primary">
        {/* Step number - decorative */}
        <span className="absolute top-6 right-6 text-6xl font-bold text-primary/10" aria-hidden="true">
          {step.number}
        </span>
        
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: `opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay + 200}ms`,
          }}
          aria-hidden="true"
        >
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          <span className="sr-only">Step {step.number}: </span>
          {step.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </article>

      {/* Connector line (not on last item) - decorative */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" aria-hidden="true" />
      )}
    </li>
  );
}

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    availability: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setAnnouncement('Your application has been submitted successfully. We will review it and get back to you soon.');
  };

  return (
    <Layout>
      {/* Live region for form announcements */}
      <LiveRegion message={announcement} politeness="polite" />

      {/* Hero */}
      <section 
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="getstarted-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span 
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
              aria-hidden="true"
            >
              Get Started
            </span>
            <h1 
              id="getstarted-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance"
            >
              How the Process Works
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Clear, linear, honest. Here's exactly how to get started with Nexalight.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section 
        className="py-20 md:py-32 bg-background"
        aria-labelledby="steps-heading"
      >
        <div className="container mx-auto px-6">
          <h2 id="steps-heading" className="sr-only">Application Steps</h2>
          <ol 
            className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3"
            aria-label="Three-step application process"
          >
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </ol>
        </div>
      </section>

      {/* What to Expect From Us */}
      <section 
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="our-commitment-heading"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span 
                className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
                aria-hidden="true"
              >
                Our Commitment
              </span>
              <h2 
                id="our-commitment-heading"
                className="text-3xl md:text-4xl font-bold text-foreground"
              >
                What to Expect From Us
              </h2>
            </AnimatedSection>

            <ul className="grid gap-6 md:grid-cols-2" aria-label="What we offer">
              {whatWeOffer.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <AnimatedBenefit index={index}>
                      <article className="flex gap-4 py-2">
                        <div 
                          className="flex-shrink-0 w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    </AnimatedBenefit>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* What We Expect From You */}
      <section 
        className="py-20 md:py-32 bg-background"
        aria-labelledby="your-commitment-heading"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <span 
                className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
                aria-hidden="true"
              >
                Your Commitment
              </span>
              <h2 
                id="your-commitment-heading"
                className="text-3xl md:text-4xl font-bold text-foreground"
              >
                What We Expect From You
              </h2>
              <p className="mt-4 text-muted-foreground">
                Being upfront removes uncertainty. Here's what success looks like.
              </p>
            </AnimatedSection>

            <AnimatedTextBlock>
              <div className="bg-card border border-border rounded-3xl p-8">
                <ul className="space-y-4" aria-label="Requirements for success">
                  {whatWeExpect.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedTextBlock>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section 
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="apply-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 
                id="apply-heading"
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                Ready to Apply?
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll be in touch.
              </p>
            </div>

            {isSubmitted ? (
              <div 
                className="bg-card border border-primary/30 rounded-3xl p-12 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Application Received!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for your interest. We'll review your application and get back to you soon.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="bg-card border border-border rounded-3xl p-8 space-y-6"
                aria-label="Job application form"
                noValidate
              >
                <div>
                  <label htmlFor="apply-name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-destructive" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="apply-name"
                    name="name"
                    required
                    aria-required="true"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-3xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="apply-email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-destructive" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="email"
                    id="apply-email"
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
                  <label htmlFor="apply-phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="apply-phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-3xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="apply-experience" className="block text-sm font-medium text-foreground mb-2">
                    Do you have call center experience?
                  </label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData({ ...formData, experience: value })}
                  >
                    <SelectTrigger 
                      id="apply-experience"
                      className="w-full px-4 py-3 h-auto rounded-3xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all duration-150"
                    >
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border border-border bg-popover shadow-lg">
                      <SelectItem value="yes" className="rounded-xl cursor-pointer focus:bg-primary/10 focus:text-foreground">
                        Yes, I have experience
                      </SelectItem>
                      <SelectItem value="some" className="rounded-xl cursor-pointer focus:bg-primary/10 focus:text-foreground">
                        Some experience
                      </SelectItem>
                      <SelectItem value="no" className="rounded-xl cursor-pointer focus:bg-primary/10 focus:text-foreground">
                        No, but I'm eager to learn
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="apply-availability" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Schedule
                  </label>
                  <Select
                    value={formData.availability}
                    onValueChange={(value) => setFormData({ ...formData, availability: value })}
                  >
                    <SelectTrigger 
                      id="apply-availability"
                      className="w-full px-4 py-3 h-auto rounded-3xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all duration-150"
                    >
                      <SelectValue placeholder="Select your preference" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border border-border bg-popover shadow-lg">
                      <SelectItem value="full-time" className="rounded-xl cursor-pointer focus:bg-primary/10 focus:text-foreground">
                        Full-time
                      </SelectItem>
                      <SelectItem value="part-time" className="rounded-xl cursor-pointer focus:bg-primary/10 focus:text-foreground">
                        Part-time
                      </SelectItem>
                      <SelectItem value="flexible" className="rounded-xl cursor-pointer focus:bg-primary/10 focus:text-foreground">
                        Flexible / Varies
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-3xl transition-all duration-150 ease-human hover:bg-transparent hover:text-primary border-2 border-primary press-effect focus-ring group"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5 transition-transform duration-150 ease-human group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
