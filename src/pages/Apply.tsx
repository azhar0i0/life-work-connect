import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, StaggerContainer, StaggerItem, AnimatedCard } from '@/components/ui/AnimatedSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, ArrowRight, AlertCircle, Laptop, Wifi, User, Globe, Clock, Headphones } from 'lucide-react';
import { LiveRegion } from '@/components/ui/LiveRegion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { z } from 'zod';

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters').max(100, 'Full name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  country: z.string().min(1, 'Please select your country'),
  ageConfirmed: z.boolean().refine(val => val === true, 'You must confirm you are 18 or older'),
  experience: z.string().min(1, 'Please select your experience level'),
  computerType: z.string().min(1, 'Please select your computer type'),
  internetSpeed: z.string().min(1, 'Please select your internet speed'),
});

type FormData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Philippines',
  'India',
  'Jamaica',
  'Trinidad and Tobago',
  'Other',
];

const computerTypes = [
  { value: 'desktop', label: 'Desktop Computer' },
  { value: 'laptop', label: 'Laptop Computer' },
  { value: 'both', label: 'Both Desktop and Laptop' },
];

const internetSpeeds = [
  { value: 'under-10', label: 'Under 10 Mbps' },
  { value: '10-25', label: '10-25 Mbps' },
  { value: '25-50', label: '25-50 Mbps' },
  { value: '50-100', label: '50-100 Mbps' },
  { value: 'over-100', label: 'Over 100 Mbps' },
  { value: 'unsure', label: "I'm not sure" },
];

const experienceLevels = [
  { value: 'yes', label: 'Yes, I have customer service experience' },
  { value: 'some', label: 'Some experience (less than 1 year)' },
  { value: 'no', label: 'No, but I am eager to learn' },
];

const requirements = [
  { icon: Laptop, text: 'Desktop or laptop computer (no tablets)' },
  { icon: Wifi, text: 'Reliable high-speed internet connection' },
  { icon: Headphones, text: 'USB headset with microphone' },
  { icon: Clock, text: 'Quiet, dedicated workspace' },
];

export default function Apply() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    ageConfirmed: false,
    experience: '',
    computerType: '',
    internetSpeed: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const validateForm = (): boolean => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
        setAnnouncement('Please fix the form errors and try again.');
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission (frontend only for now)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setAnnouncement('Your application has been submitted successfully! Please check your email for next steps.');
  };

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when field is updated
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Layout>
      <LiveRegion message={announcement} politeness="polite" />

      {/* Hero */}
      <section 
        className="py-20 md:py-28 bg-surface overflow-hidden"
        aria-labelledby="apply-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
            >
              Pre-Screening Application
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="apply-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance"
            >
              Start Your Journey with Nexalight
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Complete this pre-screening form to see if you qualify for remote customer service opportunities through our partnership with Arise.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="requirements-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 id="requirements-heading" className="text-2xl md:text-3xl font-bold text-foreground">
                Basic Requirements
              </h2>
              <p className="mt-4 text-muted-foreground">
                Before applying, make sure you meet these basic requirements:
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid gap-4 md:grid-cols-2">
              {requirements.map((req, index) => {
                const Icon = req.icon;
                return (
                  <StaggerItem key={index}>
                    <AnimatedCard className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{req.text}</span>
                    </AnimatedCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section 
        className="py-20 md:py-28 bg-surface"
        aria-labelledby="form-heading"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 id="form-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pre-Screening Form
              </h2>
              <p className="text-muted-foreground">
                All fields marked with <span className="text-destructive">*</span> are required.
              </p>
            </AnimatedSection>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-primary/30 rounded-3xl p-12 text-center"
                role="status"
                aria-live="polite"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2, type: 'spring' }}
                  className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Application Received!
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Thank you for your interest in Nexalight Virtual Solutions. We'll review your application and send you an email with next steps, including how to register with Arise.
                </p>
                <div className="bg-surface border border-border rounded-2xl p-6 text-left">
                  <h4 className="font-semibold text-foreground mb-3">What's Next?</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-4">
                    <li>Check your email for a welcome message from Nexalight</li>
                    <li>Register at <a href="https://register.arise.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">register.arise.com</a></li>
                    <li>Use our IBO ID: <strong className="text-foreground">1221827</strong> when registering</li>
                    <li>Complete the Arise onboarding process</li>
                  </ol>
                </div>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit} 
                className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-8"
                aria-label="Pre-screening application form"
                noValidate
              >
                {/* Full Legal Name */}
                <div>
                  <Label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Legal Name <span className="text-destructive">*</span>
                  </Label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className="w-full px-4 py-3 rounded-2xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                    placeholder="Enter your full legal name"
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                      <AlertCircle className="w-4 h-4" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full px-4 py-3 rounded-2xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone (Optional) */}
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number <span className="text-muted-foreground">(Optional)</span>
                  </Label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Country / Region */}
                <div>
                  <Label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
                    Country / Region <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => updateField('country', value)}
                  >
                    <SelectTrigger 
                      id="country"
                      aria-invalid={!!errors.country}
                      className="w-full px-4 py-3 h-auto rounded-2xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all duration-150"
                    >
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                        <SelectValue placeholder="Select your country" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border border-border bg-popover shadow-lg">
                      {countries.map((country) => (
                        <SelectItem key={country} value={country} className="rounded-xl cursor-pointer focus:bg-primary/10">
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.country && (
                    <p className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                      <AlertCircle className="w-4 h-4" />
                      {errors.country}
                    </p>
                  )}
                </div>

                {/* Age Confirmation */}
                <div className="flex items-start gap-3 p-4 bg-surface rounded-2xl border border-border">
                  <Checkbox
                    id="ageConfirmed"
                    checked={formData.ageConfirmed}
                    onCheckedChange={(checked) => updateField('ageConfirmed', checked === true)}
                    aria-invalid={!!errors.ageConfirmed}
                    className="mt-0.5"
                  />
                  <div className="flex-1">
                    <Label htmlFor="ageConfirmed" className="text-foreground cursor-pointer">
                      I confirm that I am 18 years of age or older <span className="text-destructive">*</span>
                    </Label>
                    {errors.ageConfirmed && (
                      <p className="mt-1 text-sm text-destructive flex items-center gap-1" role="alert">
                        <AlertCircle className="w-4 h-4" />
                        {errors.ageConfirmed}
                      </p>
                    )}
                  </div>
                </div>

                {/* Previous Customer Service Experience */}
                <div>
                  <Label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                    Do you have previous customer service experience? <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => updateField('experience', value)}
                  >
                    <SelectTrigger 
                      id="experience"
                      aria-invalid={!!errors.experience}
                      className="w-full px-4 py-3 h-auto rounded-2xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all duration-150"
                    >
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <SelectValue placeholder="Select your experience level" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border border-border bg-popover shadow-lg">
                      {experienceLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value} className="rounded-xl cursor-pointer focus:bg-primary/10">
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.experience && (
                    <p className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                      <AlertCircle className="w-4 h-4" />
                      {errors.experience}
                    </p>
                  )}
                </div>

                {/* Computer Type */}
                <div>
                  <Label htmlFor="computerType" className="block text-sm font-medium text-foreground mb-2">
                    What type of computer do you have? <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.computerType}
                    onValueChange={(value) => updateField('computerType', value)}
                  >
                    <SelectTrigger 
                      id="computerType"
                      aria-invalid={!!errors.computerType}
                      className="w-full px-4 py-3 h-auto rounded-2xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all duration-150"
                    >
                      <div className="flex items-center gap-2">
                        <Laptop className="w-4 h-4 text-muted-foreground" />
                        <SelectValue placeholder="Select your computer type" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border border-border bg-popover shadow-lg">
                      {computerTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="rounded-xl cursor-pointer focus:bg-primary/10">
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.computerType && (
                    <p className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                      <AlertCircle className="w-4 h-4" />
                      {errors.computerType}
                    </p>
                  )}
                </div>

                {/* Internet Speed */}
                <div>
                  <Label htmlFor="internetSpeed" className="block text-sm font-medium text-foreground mb-2">
                    Estimated internet speed <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.internetSpeed}
                    onValueChange={(value) => updateField('internetSpeed', value)}
                  >
                    <SelectTrigger 
                      id="internetSpeed"
                      aria-invalid={!!errors.internetSpeed}
                      className="w-full px-4 py-3 h-auto rounded-2xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all duration-150"
                    >
                      <div className="flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-muted-foreground" />
                        <SelectValue placeholder="Select your internet speed" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border border-border bg-popover shadow-lg">
                      {internetSpeeds.map((speed) => (
                        <SelectItem key={speed.value} value={speed.value} className="rounded-xl cursor-pointer focus:bg-primary/10">
                          {speed.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.internetSpeed && (
                    <p className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                      <AlertCircle className="w-4 h-4" />
                      {errors.internetSpeed}
                    </p>
                  )}
                </div>

                {/* Disclaimer */}
                <div className="p-4 bg-surface/50 border border-border rounded-2xl text-sm text-muted-foreground">
                  <p className="mb-2">
                    <strong className="text-foreground">Important:</strong> Nexalight Virtual Solutions partners with the Arise platform for remote customer service opportunities.
                  </p>
                  <p>
                    Submitting this form does not guarantee employment. All opportunities are subject to availability and Arise's requirements.
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl transition-all duration-150 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed focus-ring group"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
