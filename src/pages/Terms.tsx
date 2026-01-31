import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedTextBlock } from '@/components/ui/AnimatedSection';

export default function Terms() {
  return (
    <Layout>
      <section 
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="terms-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 
              id="terms-heading"
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Terms & Conditions
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                By accessing or using the Nexalight Virtual Solutions website (the "Site"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Site.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={200}>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nexalight Virtual Solutions provides information about remote customer service opportunities through our partnership with the Arise platform. We offer pre-screening services to connect qualified individuals with potential work opportunities. We do not guarantee employment or income.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={300}>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Arise Platform Partnership</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nexalight Virtual Solutions operates as an Independent Business Owner (IBO) through the Arise platform. By submitting information through our Site, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Arise is a separate third-party platform with its own terms and conditions</li>
                <li>Any work opportunities are facilitated through Arise, not directly through Nexalight</li>
                <li>Registration with Arise is required to pursue opportunities</li>
                <li>Nexalight does not control hiring decisions made by Arise or their clients</li>
              </ul>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={400}>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using our Site and services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Provide accurate and truthful information</li>
                <li>Be at least 18 years of age</li>
                <li>Not use the Site for any unlawful purpose</li>
                <li>Not attempt to gain unauthorized access to any part of the Site</li>
                <li>Not interfere with the proper functioning of the Site</li>
              </ul>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={500}>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. No Employment Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Submission of a pre-screening form or any other information through our Site does not guarantee employment, income, or acceptance into any program. All opportunities are subject to additional screening, training requirements, and availability through the Arise platform.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={600}>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All content on this Site, including text, graphics, logos, and images, is the property of Nexalight Virtual Solutions or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without prior written permission.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={700}>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                THE SITE AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEXALIGHT VIRTUAL SOLUTIONS DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={800}>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXALIGHT VIRTUAL SOLUTIONS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE OR SERVICES.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={900}>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after changes are posted constitutes acceptance of the modified terms.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={1000}>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These Terms and Conditions are governed by and construed in accordance with the laws of the State of Indiana, without regard to its conflict of law provisions.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={1100}>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
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
