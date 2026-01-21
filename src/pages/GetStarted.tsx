import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ClipboardCheck, GraduationCap, Home, ArrowRight, Check } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Apply',
    description: 'Complete our application to see if you\'re a good fit for our remote team.',
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
    description: 'Once certified, you\'ll begin supporting established brands—all remotely.',
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const Icon = step.icon;
  const delay = index * 150;

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, 
                     transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      <div className="bg-card border border-border rounded-xl p-8 h-full relative overflow-hidden group hover:border-primary/30 transition-colors duration-300">
        {/* Step number */}
        <span className="absolute top-6 right-6 text-6xl font-bold text-primary/10">
          {step.number}
        </span>
        
        {/* Icon with stroke draw effect */}
        <div
          className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: `opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay + 200}ms`,
          }}
        >
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          {step.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Connector line (not on last item) */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
      )}
    </div>
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
              Get Started
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              How It Works
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to start your remote career with Nexalight.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Apply?
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll be in touch.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-card border border-primary/30 rounded-xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
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
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                    placeholder="Your full name"
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
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                    Do you have call center experience?
                  </label>
                  <select
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes, I have experience</option>
                    <option value="some">Some experience</option>
                    <option value="no">No, but I'm eager to learn</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Schedule
                  </label>
                  <select
                    id="availability"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                  >
                    <option value="">Select your preference</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="flexible">Flexible / Varies</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-150 ease-human hover:bg-primary/90 press-effect focus-ring group"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5 transition-transform duration-150 ease-human group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
