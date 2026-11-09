import React from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { ArrowRight, Calculator, Check, MessageSquare, Wrench } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForEstimator: (serviceId: string) => void;
  onOpenQuoteModal: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectServiceForEstimator,
  onOpenQuoteModal,
}) => {
  return (
    <section id="services" className="py-20 bg-[#111A24] border-b border-[#2A3A4E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-bold text-[#FF5722] uppercase tracking-wider">
            Engineered Capabilities & Construction Divisions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Civil & Structural Solutions
          </h2>
          <p className="text-base sm:text-lg text-[#8A99AD] leading-relaxed">
            Every project executed by JBM Infracivils adheres to SANS 10400 standards, NHBRC specifications, and engineered structural drawings. Select a capability below to view technical details or generate a live cost breakdown.
          </p>
        </div>

        {/* 6-Card Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="flex flex-col bg-[#15202E] rounded-xl border border-[#2A3A4E] hover:border-[#FF5722]/60 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Card Photo Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15202E] via-transparent to-black/30 pointer-events-none" />
                
                {/* Clean Editorial Number */}
                <div className="absolute top-3 left-3 bg-[#0F1722]/85 backdrop-blur-sm border border-[#2A3A4E] text-[#FF5722] font-mono text-xs font-bold px-2.5 py-1 rounded">
                  {service.number}
                </div>

                {/* Base Rate Indicator */}
                <div className="absolute bottom-3 right-3 bg-[#0F1722]/90 backdrop-blur-sm border border-[#2A3A4E] text-slate-200 text-xs font-mono font-medium px-2 py-0.5 rounded">
                  From <span className="text-white font-bold">R {service.basePricePerUnit}</span> / {service.unitLabel}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF5722] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8A99AD] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Technical Specifications Checklist */}
                <div className="space-y-2 pt-2 border-t border-[#2A3A4E]/60">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Technical Specifications:
                  </div>
                  <ul className="space-y-1.5">
                    {service.specifications.slice(0, 3).map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#FF5722] shrink-0 mt-0.5" />
                        <span className="leading-snug">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Turnaround & Action Buttons */}
                <div className="pt-4 border-t border-[#2A3A4E]/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectServiceForEstimator(service.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#1E2A38] hover:bg-[#28384B] border border-[#2A3A4E] rounded-md transition-colors"
                  >
                    <Calculator className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>Cost Calculator</span>
                  </button>

                  <a
                    href={`https://wa.me/27815296428?text=${encodeURIComponent(
                      `Hello JBM Infracivils, I am inquiring about your ${service.title} services. Please advise on pricing and site availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#FF5722] hover:bg-[#E64A19] rounded-md transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Fast Inbound Bar */}
        <div className="mt-12 p-6 rounded-xl bg-[#15202E] border border-[#2A3A4E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-[#FF5722]/10 border border-[#FF5722]/30 text-[#FF5722]">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Have Engineered Drawings or an Existing Bill of Quantities (BOQ)?
              </h4>
              <p className="text-xs text-[#8A99AD]">
                Send your PDF structural plans directly to our quantity surveying team on WhatsApp for a swift turnaround.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/27815296428?text=Hello%20JBM%20Infracivils,%20I%20have%20civil%20drawings/BOQ%20plans%20ready%20for%20a%20tender%20or%20formal%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Plans to WhatsApp: 081 529 6428</span>
          </a>
        </div>

      </div>
    </section>
  );
};
