import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedTextBlock } from '@/components/ui/AnimatedSection';

export default function Privacy() {
  return (
    <Layout>
      <section 
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="privacy-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 
              id="privacy-heading"
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Privacy Policy
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Last Updated: January 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <AnimatedTextBlock delay={100}>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nexalight Virtual Solutions ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={200}>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Full legal name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Country/region of residence</li>
                <li>Information about your work experience</li>
                <li>Equipment and technical specifications (computer type, internet speed)</li>
              </ul>
              <h3 className="text-xl font-semibold text-foreground mb-2">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
              </ul>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={300}>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Process your pre-screening application</li>
                <li>Communicate with you about opportunities</li>
                <li>Provide information about the Arise registration process</li>
                <li>Respond to your inquiries and requests</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={400}>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Arise Platform:</strong> As part of the registration and onboarding process for work opportunities</li>
                <li><strong>Service Providers:</strong> Third parties who help us operate our website and services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={500}>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={600}>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={700}>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion of your information</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={800}>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our website.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={900}>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our website may contain links to third-party websites, including the Arise platform. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={1000}>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete that information.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={1100}>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={1200}>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
                <li><strong>Nexalight Virtual Solutions</strong></li>
                <li><strong>Email:</strong> azharisworking@gmail.com</li>
                <li><strong>Phone:</strong> 317-572-5034</li>
              </ul>
            </AnimatedTextBlock>
          </div>
        </div>
      </section>
    </Layout>
  );
}
