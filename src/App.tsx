import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CostEstimator } from './components/CostEstimator';
import { Portfolio } from './components/Portfolio';
import { EngineeringAdvisor } from './components/EngineeringAdvisor';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DomainSetupModal } from './components/DomainSetupModal';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('concrete-slab');
  const [advisorProject, setAdvisorProject] = useState<{ type: string; area: number; ground: string } | null>(null);
  const [isDomainModalOpen, setIsDomainModalOpen] = useState(false);
  
  // State passed to Contact Section
  const [quoteDetails, setQuoteDetails] = useState<{
    service?: string;
    area?: number;
    notes?: string;
  }>({});

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForEstimator = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToSection('estimator');
  };

  const handleSelectProjectForAdvisor = (project: { type: string; area: number; ground: string }) => {
    setAdvisorProject(project);
    scrollToSection('advisor');
  };

  const handlePopulateQuoteForm = (details: { service: string; area: number; notes: string }) => {
    setQuoteDetails(details);
    scrollToSection('contact');
  };

  const handleOpenQuoteModal = (serviceName: string) => {
    setQuoteDetails({ service: serviceName });
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#0F1722] text-slate-100 font-sans selection:bg-[#FF5722] selection:text-white flex flex-col">
      {/* Fixed Navigation Header */}
      <Navbar 
        onOpenEstimator={() => scrollToSection('estimator')}
        onOpenAdvisor={() => scrollToSection('advisor')}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onScrollToEstimator={() => scrollToSection('estimator')}
          onScrollToContact={() => scrollToSection('contact')}
        />

        {/* 6 Key Civil Services */}
        <Services 
          onSelectServiceForEstimator={handleSelectServiceForEstimator}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Dynamic Project Cost Estimator */}
        <CostEstimator 
          selectedServiceId={selectedServiceId}
          onSelectProjectForAdvisor={handleSelectProjectForAdvisor}
          onPopulateQuoteForm={handlePopulateQuoteForm}
        />

        {/* Case Studies & Portfolio Gallery */}
        <Portfolio />

        {/* High-Thinking Civil Engineering AI Advisor */}
        <EngineeringAdvisor 
          initialProject={advisorProject}
        />

        {/* Why Choose Us & Structural Guarantee */}
        <WhyChooseUs />

        {/* Contact, Phone & Quote Request Form */}
        <ContactSection 
          initialService={quoteDetails.service}
          initialArea={quoteDetails.area}
          initialNotes={quoteDetails.notes}
        />
      </main>

      {/* Footer */}
      <Footer onOpenDomainModal={() => setIsDomainModalOpen(true)} />

      {/* Domain Setup Assistant Modal */}
      <DomainSetupModal 
        isOpen={isDomainModalOpen} 
        onClose={() => setIsDomainModalOpen(false)} 
      />

      {/* Floating Speed Contact Bar for Mobile Devices */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 sm:hidden">
        <a
          href="https://wa.me/27815296428?text=Hello%20JBM%20Infracivils,%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp JBM Infracivils"
          className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-transform active:scale-95 flex items-center justify-center border-2 border-[#15202E]"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        <a
          href="tel:0815296428"
          aria-label="Call 081 529 6428"
          className="p-3 bg-[#FF5722] hover:bg-[#E64A19] text-white rounded-full shadow-2xl transition-transform active:scale-95 flex items-center justify-center border-2 border-[#15202E]"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
