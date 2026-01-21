import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { LifestyleSection } from '@/components/home/LifestyleSection';
import { WhoWeAreSection } from '@/components/home/WhoWeAreSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <LifestyleSection />
      <WhoWeAreSection />
    </Layout>
  );
};

export default Index;
