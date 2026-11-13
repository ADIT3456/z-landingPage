import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/sections/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { PricingSection } from './components/sections/PricingSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
