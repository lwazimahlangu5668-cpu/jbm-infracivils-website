import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator?: () => void;
  onOpenAdvisor?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onOpenAdvisor }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneDisplay = '081 529 6428';
  const phoneHref = 'tel:0815296428';
  const whatsappHref = 'https://wa.me/27815296428?text=Hello%20JBM%20Infracivils,%20I%20would%20like%20to%20inquire%20about%20your%20civil%20engineering%20and%20construction%20services.';

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#15202E]/95 backdrop-blur-md border-b border-[#2A3A4E] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark & Official Logo */}
          <a href="#" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
            <div className="w-11 h-11 rounded-lg overflow-hidden border border-[#2A3A4E] bg-[#1E2A38] shadow-inner flex items-center justify-center p-0.5 group-hover:border-[#FF5722] transition-colors">
              <img
                src="/assets/aistudio/image_2711ad07.png"
                alt="JBM Infracivils Logo"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-slate-100 transition-colors">
                  JBM <span className="text-[#FF5722]">INFRACIVILS</span>
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#8A99AD] uppercase tracking-wider hidden sm:block">
                Civil Engineering & Construction
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#8A99AD]">
            <a href="#services" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#estimator" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Cost Estimator
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Projects
            </a>
            <a href="#advisor" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              AI Civil Advisor
            </a>
            <a href="#why-us" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Why Choose Us
            </a>
            <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action & Quick Contact */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp JBM Infracivils"
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/60 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#FF5722] hover:bg-[#E64A19] active:bg-[#D84315] rounded-md shadow-sm transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={phoneHref}
              aria-label="Call Now"
              className="p-2 text-white bg-[#FF5722] rounded-md sm:hidden"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-300 hover:text-white bg-[#1E2A38] border border-[#2A3A4E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#2A3A4E] bg-[#111A24] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2">
            <a
              href="#services"
              onClick={handleLinkClick}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-[#1E2A38] transition-colors"
            >
              Services (6 Key Divisions)
            </a>
            <a
              href="#estimator"
              onClick={handleLinkClick}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-[#1E2A38] transition-colors"
            >
              Project Cost Estimator
            </a>
            <a
              href="#portfolio"
              onClick={handleLinkClick}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-[#1E2A38] transition-colors"
            >
              Project Portfolio & Gallery
            </a>
            <a
              href="#advisor"
              onClick={handleLinkClick}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-[#1E2A38] transition-colors"
            >
              Civil Engineering AI Advisor
            </a>
            <a
              href="#why-us"
              onClick={handleLinkClick}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-[#1E2A38] transition-colors"
            >
              Why Choose JBM Infracivils
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-[#1E2A38] transition-colors"
            >
              Contact & Quote Request
            </a>
          </nav>

          <div className="pt-3 border-t border-[#2A3A4E] flex flex-col gap-2">
            <a
              href={phoneHref}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-bold text-white bg-[#FF5722] hover:bg-[#E64A19] rounded-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Call: 081 529 6428</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-700/60 rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us: 081 529 6428</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
