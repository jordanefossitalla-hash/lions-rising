import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { StrengthsSection } from '@/components/sections/StrengthsSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { TalentSection } from '@/components/sections/TalentSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { CTASection } from '@/components/sections/CTASection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProgramsSection />
        <StrengthsSection />
        <TalentSection />
        <VideoSection />
        <GallerySection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
