import React from 'react';
import { Phone, MessageSquare, Calculator, ShieldCheck, ArrowRight, CheckCircle2, Award, HardHat, Compass } from 'lucide-react';

interface HeroProps {
  onScrollToEstimator: () => void;
  onScrollToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToEstimator, onScrollToContact }) => {
  const phoneDisplay = '081 529 6428';
  const phoneHref = 'tel:0815296428';
  const whatsappHref = 'https://wa.me/27815296428?text=Hello%20JBM%20Infracivils,%20I%20would%20like%20to%20request%20a%20civil%20engineering%20quote%20for%20our%20project.';

  return (
    <section className="relative overflow-hidden bg-[#0F1722] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#2A3A4E]">
      {/* Background Graphic Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#8A99AD 1px, transparent 1px), radial-gradient(#FF5722 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Pill / Kicker as Clean Unboxed Text with Separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#8A99AD] uppercase tracking-wider">
              <span className="text-[#FF5722] font-bold">Civil Engineering & Construction</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>SANS 10400 Standards</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>NHBRC Registered Quality</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Building Strong Foundations for South Africa’s Future
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-[#8A99AD] leading-relaxed max-w-2xl">
              From heavy-duty structural rebar and reinforced concrete slabs to Terraforce earth retaining walls and municipal drainage infrastructure. JBM Infracivils delivers precision civil engineering with unmatched site durability.
            </p>

            {/* Quick Capability Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#FF5722] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">
                  <strong>Structural Steel & Rebar:</strong> Y12/Y16 high-yield cages & Ref 395 mesh
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#FF5722] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">
                  <strong>Terraforce Retaining:</strong> Stepped slope stabilization & geofabric drainage
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#FF5722] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">
                  <strong>Concrete Slab Foundations:</strong> 250μm DPM waterproofing & laser leveling
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#FF5722] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">
                  <strong>Heavy Plant & Drainage:</strong> Deep trenching, culverts & industrial paving
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onScrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#FF5722] hover:bg-[#E64A19] active:bg-[#D84315] rounded-lg shadow-lg shadow-[#FF5722]/20 transition-all hover:translate-y-[-1px] whitespace-nowrap"
              >
                <span>Request an On-Site Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-[#1E2A38] hover:bg-[#28384B] border border-[#2A3A4E] hover:border-emerald-500/50 rounded-lg transition-all whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {phoneDisplay}</span>
              </a>

              <button
                onClick={onScrollToEstimator}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-[#8A99AD] hover:text-white transition-colors whitespace-nowrap"
              >
                <Calculator className="w-4 h-4 text-[#FF5722]" />
                <span>Interactive Cost Estimator</span>
              </button>
            </div>

            {/* Direct Phone Assistance Strip */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              <span>Direct Site Engineer Line:</span>
              <a href={phoneHref} className="text-white font-bold hover:text-[#FF5722] underline underline-offset-4">
                {phoneDisplay}
              </a>
              <span className="hidden sm:inline text-slate-600">·</span>
              <span className="hidden sm:inline">Rapid Gauteng & Regional Mobilization</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset & Official Logo Plaque */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Official 3D Embossed Logo Plaque Display */}
            <div className="relative rounded-xl overflow-hidden border border-[#2A3A4E] bg-[#15202E] shadow-2xl group">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src="/assets/aistudio/image_2711ad07.png"
                  alt="JBM Infracivils Official Logo - Civil Engineering and Construction"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1722]/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white tracking-wide drop-shadow-md">
                    Official Insignia & Registered Mark
                  </span>
                  <span className="text-[#FF5722] font-mono text-[11px] font-bold bg-[#0F1722]/80 px-2 py-0.5 rounded border border-[#2A3A4E]">
                    JBM INFRACIVILS
                  </span>
                </div>
              </div>
            </div>

            {/* Real Civil Construction Site Photography Feature */}
            <div className="relative rounded-xl overflow-hidden border border-[#2A3A4E] bg-[#15202E] shadow-xl group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/hero_civil_construction_1794252110452.jpg"
                  alt="JBM Infracivils Civil Engineering Site - South Africa"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1722]/90 via-[#0F1722]/30 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#FF5722] font-semibold uppercase tracking-wider">
                    <HardHat className="w-3.5 h-3.5" />
                    <span>Heavy Earthworks & Sub-Structure Rebar</span>
                  </div>
                  <p className="text-xs text-slate-200">
                    Active excavation, foundation steel cages, and precision laser survey on South African terrain.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Column KPI Trust Strip placed below the hero split */}
        <div className="mt-14 pt-8 border-t border-[#2A3A4E] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs font-semibold text-[#8A99AD] uppercase tracking-wider">
              SANS 10400 Code Compliant
            </div>
            <p className="text-xs text-slate-400">
              Rigorous structural engineering & NHBRC home builder standards.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FF5722] font-mono tabular-nums">
              6 Core
            </div>
            <div className="text-xs font-semibold text-[#8A99AD] uppercase tracking-wider">
              Civil Disciplines
            </div>
            <p className="text-xs text-slate-400">
              Rebar framing, Terraforce, raft foundations, drainage & paving.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              25 - 35 MPa
            </div>
            <div className="text-xs font-semibold text-[#8A99AD] uppercase tracking-wider">
              Certified Concrete Mixes
            </div>
            <p className="text-xs text-slate-400">
              High-strength readymix with on-site slump & cube tests.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              24 / 7
            </div>
            <div className="text-xs font-semibold text-[#8A99AD] uppercase tracking-wider">
              Direct Contractor Line
            </div>
            <p className="text-xs text-slate-400">
              Call <a href={phoneHref} className="text-white hover:underline">{phoneDisplay}</a> for rapid quotes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
