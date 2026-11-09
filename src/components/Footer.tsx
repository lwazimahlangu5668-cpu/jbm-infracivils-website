import React from 'react';
import { Phone, MessageSquare, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenDomainModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDomainModal }) => {
  const phoneDisplay = '081 529 6428';
  const phoneHref = 'tel:0815296428';
  const whatsappHref = 'https://wa.me/27815296428';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1017] border-t border-[#2A3A4E] text-[#8A99AD] text-xs">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#2A3A4E] bg-[#1E2A38] p-0.5">
                <img
                  src="/assets/aistudio/image_2711ad07.png"
                  alt="JBM Infracivils"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  JBM <span className="text-[#FF5722]">INFRACIVILS</span>
                </span>
                <div className="text-[11px] font-semibold text-[#8A99AD] uppercase tracking-wider">
                  Civil Engineering & Construction
                </div>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              Leading South African civil engineering and construction contractor delivering certified structural rebar fixing, monolithic concrete slab foundations, Terraforce earth retaining walls, and civil stormwater infrastructure.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1E2A38] text-white hover:text-[#FF5722] border border-[#2A3A4E] font-mono font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>{phoneDisplay}</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-950/50 text-emerald-400 hover:text-emerald-300 border border-emerald-800/60 font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:info@jbminfracivils.co.za"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#15202E] text-slate-300 hover:text-white border border-[#2A3A4E] font-mono transition-colors"
              >
                <span>info@jbminfracivils.co.za</span>
              </a>
            </div>
          </div>

          {/* Column 2: The 6 Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Core Civil Disciplines
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Structural Rebar & Steelwork Framing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Modern Residential & Commercial Building
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Retaining Walls & Terraforce Earthworks
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Concrete Slab Foundation & DPM
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Civil Drainage & Underground Pipe Installation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Paving, Site Clearance & Landscaping
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Fast Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">
                  Project Cost Estimator
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#advisor" className="hover:text-white transition-colors">
                  AI Civil Technical Advisor
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Quality Guarantee
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Request an On-Site Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Standards & Compliance */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Compliance & Safety
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              All civil earthworks and building operations are performed in compliance with SANS 10400 (The Application of the National Building Regulations) and NHBRC technical guidelines.
            </p>
            <div className="p-3 rounded-lg bg-[#15202E] border border-[#2A3A4E] space-y-1 text-[11px]">
              <div className="text-white font-semibold">Gauteng Headquarters & Operations:</div>
              <div className="text-slate-400">Centurion · Midrand · Johannesburg · Pretoria</div>
              <div className="text-[#FF5722] font-mono pt-1">Tel: 081 529 6428</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#2A3A4E]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} JBM Infracivils (Pty) Ltd. Civil Engineering & Construction. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            {onOpenDomainModal && (
              <button
                onClick={onOpenDomainModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1E2A38] hover:bg-[#28384B] border border-[#2A3A4E] text-[#FF5722] hover:text-white transition-colors"
              >
                <span>Domain Setup Guide</span>
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#15202E] hover:bg-[#1E2A38] border border-[#2A3A4E] text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
