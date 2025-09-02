import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import OurValuesSection from '@/components/OurValuesSection';
import WhoWeServeSection from '@/components/WhoWeServeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <OurValuesSection />
      <WhoWeServeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
