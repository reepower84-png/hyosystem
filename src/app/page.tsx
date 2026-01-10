import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import KakaoFloatingButton from '@/components/KakaoFloatingButton';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
      <KakaoFloatingButton />
    </main>
  );
}
