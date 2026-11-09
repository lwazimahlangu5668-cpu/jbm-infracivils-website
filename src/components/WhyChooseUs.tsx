import React from 'react';
import { ShieldCheck, HardHat, Compass, CheckCircle2, Award, Truck, Hammer, FileCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-[#111A24] border-b border-[#2A3A4E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-bold text-[#FF5722] uppercase tracking-wider">
            Quality Assurance & Structural Safety
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered Integrity. Grounded in Precision.
          </h2>
          <p className="text-base sm:text-lg text-[#8A99AD] leading-relaxed">
            In civil engineering and structural building, compromises lead to structural failure. JBM Infracivils enforces uncompromising standards from the first bucket of earthwork to the final concrete polish.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-xl bg-[#15202E] border border-[#2A3A4E] hover:border-[#FF5722]/50 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF5722]/10 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              SANS 10400 & NHBRC Code
            </h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Every foundation slab, retaining wall, and load-bearing structure conforms strictly to South African National Standards and NHBRC warranty requirements.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-400">
              Zero tolerance for sub-standard steel or lean concrete mixes.
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#15202E] border border-[#2A3A4E] hover:border-[#FF5722]/50 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF5722]/10 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722]">
              <HardHat className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Dedicated On-Site Foremen
            </h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              No absentee contracting. Every JBM Infracivils site has a certified civil foreman supervising rebar bends, spacer chairs, and compaction passes daily.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-400">
              Direct accountability from groundbreak to handover.
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#15202E] border border-[#2A3A4E] hover:border-[#FF5722]/50 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF5722]/10 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Laser Precision Leveling
            </h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              High-accuracy laser levels calibrate sub-base grading, stormwater culvert fall gradients (1:100 to 1:200), and floor slab flatness tolerances.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-400">
              Eliminates ponding, differential settlement, and floor humps.
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#15202E] border border-[#2A3A4E] hover:border-[#FF5722]/50 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF5722]/10 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722]">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Turnkey Plant & Fleet
            </h3>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              Equipped with heavy excavators, tandem compaction rollers, plate tampers, hydraulic rock hammers, and trench shoring units for swift site deployment.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-400">
              Fast mobilization across Gauteng and neighboring provinces.
            </div>
          </div>

        </div>

        {/* Quality Guarantee Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#15202E] border border-[#2A3A4E] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#FF5722] uppercase tracking-wider">
              <FileCheck className="w-4 h-4" />
              <span>JBM Infracivils Structural Guarantee</span>
            </div>
            <h4 className="text-xl font-bold text-white">
              Transparent Rand Quotations with Clear Engineering Deliverables
            </h4>
            <p className="text-xs sm:text-sm text-[#8A99AD] max-w-2xl leading-relaxed">
              We provide fixed itemized pricing, transparent material breakdowns, and official delivery milestones. No hidden plant mobilization surcharges or surprise billing.
            </p>
          </div>

          <a
            href="tel:0815296428"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#FF5722] hover:bg-[#E64A19] rounded-lg transition-colors whitespace-nowrap shadow-md"
          >
            <span>Speak to a Director: 081 529 6428</span>
          </a>
        </div>

      </div>
    </section>
  );
};
