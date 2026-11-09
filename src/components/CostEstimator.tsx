import React, { useState, useId } from 'react';
import { 
  Calculator, 
  MessageSquare, 
  ArrowRight, 
  Layers, 
  HardHat, 
  Sparkles, 
  Info,
  CheckCircle,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

interface CostEstimatorProps {
  selectedServiceId?: string;
  onSelectProjectForAdvisor?: (projectDetails: { type: string; area: number; ground: string }) => void;
  onPopulateQuoteForm?: (quoteDetails: { service: string; area: number; notes: string }) => void;
}

interface ProjectTypeConfig {
  id: string;
  name: string;
  unit: string;
  baseRate: number;
  minUnits: number;
  maxUnits: number;
  defaultUnits: number;
  description: string;
}

const PROJECT_TYPES: ProjectTypeConfig[] = [
  {
    id: 'concrete-slab',
    name: 'Concrete Slab Foundation & DPM',
    unit: 'm²',
    baseRate: 890,
    minUnits: 20,
    maxUnits: 1200,
    defaultUnits: 120,
    description: 'Cast raft or strip foundation, 25MPa readymix, 250μm DPM sheeting, laser leveling.',
  },
  {
    id: 'retaining-wall',
    name: 'Retaining Wall & Terraforce',
    unit: 'm²',
    baseRate: 1450,
    minUnits: 15,
    maxUnits: 600,
    defaultUnits: 80,
    description: 'Interlocking Terraforce L11 blocks, stepped slope stabilization, subsoil drainage.',
  },
  {
    id: 'structural-rebar',
    name: 'Structural Rebar & Steelwork',
    unit: 'm²',
    baseRate: 680,
    minUnits: 30,
    maxUnits: 1500,
    defaultUnits: 150,
    description: 'High-tensile Y12/Y16 rebar cages, Ref 395 mesh, ground beam steel fixing.',
  },
  {
    id: 'residential',
    name: 'Residential / Commercial Building',
    unit: 'm²',
    baseRate: 2450,
    minUnits: 40,
    maxUnits: 800,
    defaultUnits: 180,
    description: 'Turnkey structural civil construction, reinforced frame, load-bearing walls.',
  },
  {
    id: 'drainage',
    name: 'Civil Drainage & Pipe Installation',
    unit: 'm',
    baseRate: 780,
    minUnits: 15,
    maxUnits: 500,
    defaultUnits: 60,
    description: 'Stormwater culverts, deep trench excavation, shoring, manholes & weep lines.',
  },
  {
    id: 'paving',
    name: 'Paving, Site Clearance & Grading',
    unit: 'm²',
    baseRate: 520,
    minUnits: 50,
    maxUnits: 2500,
    defaultUnits: 250,
    description: 'Commercial 60/80mm interlocking pavers, heavy compaction, kerbs & ground prep.',
  },
];

const GROUND_CONDITIONS = [
  { id: 'stable', label: 'Flat / Stable Ground', multiplier: 1.0, desc: 'Normal sandy/loam soil, minimal cut & fill' },
  { id: 'sloped', label: 'Sloped / Terraced', multiplier: 1.2, desc: 'Requires stepped excavation & benching' },
  { id: 'clay', label: 'Clay / High Water Table', multiplier: 1.35, desc: 'Requires subsoil geofabric + extra drainage' },
  { id: 'rock', label: 'Rocky / Dolomitic Soil', multiplier: 1.5, desc: 'Requires hydraulic breaker / heavy rock breaking' },
];

const SPEC_GRADES = [
  { id: 'standard', label: 'Standard Civil Spec', multiplier: 1.0, desc: '25MPa concrete, standard Ref mesh, SANS compliant' },
  { id: 'industrial', label: 'Heavy Structural Spec', multiplier: 1.22, desc: '30-35MPa concrete, Y16 rebar, 250μm DPM, commercial grade' },
];

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  selectedServiceId,
  onSelectProjectForAdvisor,
  onPopulateQuoteForm,
}) => {
  const [selectedType, setSelectedType] = useState<string>(() => {
    if (selectedServiceId) {
      if (selectedServiceId.includes('rebar')) return 'structural-rebar';
      if (selectedServiceId.includes('retaining')) return 'retaining-wall';
      if (selectedServiceId.includes('slab')) return 'concrete-slab';
      if (selectedServiceId.includes('drainage')) return 'drainage';
      if (selectedServiceId.includes('paving')) return 'paving';
      if (selectedServiceId.includes('residential')) return 'residential';
    }
    return 'concrete-slab';
  });

  const currentConfig = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
  const [units, setUnits] = useState<number>(currentConfig.defaultUnits);
  const [groundCondition, setGroundCondition] = useState<string>('stable');
  const [specGrade, setSpecGrade] = useState<string>('standard');

  const sliderId = useId();
  const numberInputId = useId();

  // Calculations
  const groundMult = GROUND_CONDITIONS.find((g) => g.id === groundCondition)?.multiplier || 1.0;
  const specMult = SPEC_GRADES.find((s) => s.id === specGrade)?.multiplier || 1.0;

  const baseTotal = currentConfig.baseRate * units * groundMult * specMult;
  
  // Cost Components Breakdown
  const earthworksCost = Math.round(baseTotal * 0.22);
  const materialsCost = Math.round(baseTotal * 0.44);
  const plantLaborCost = Math.round(baseTotal * 0.26);
  const complianceTestingCost = Math.round(baseTotal * 0.08);

  const totalLow = Math.round(baseTotal * 0.95);
  const totalHigh = Math.round(baseTotal * 1.08);

  const formatZAR = (num: number) => {
    return 'R ' + num.toLocaleString('en-ZA');
  };

  // WhatsApp formatted string
  const groundName = GROUND_CONDITIONS.find((g) => g.id === groundCondition)?.label;
  const specName = SPEC_GRADES.find((s) => s.id === specGrade)?.label;

  const whatsappMessage = encodeURIComponent(
    `*JBM INFRACIVILS - COST ESTIMATE INQUIRY*\n` +
    `----------------------------------------\n` +
    `• Service: ${currentConfig.name}\n` +
    `• Estimated Scope: ${units} ${currentConfig.unit}\n` +
    `• Ground Condition: ${groundName}\n` +
    `• Specification Grade: ${specName}\n` +
    `----------------------------------------\n` +
    `*Estimated Cost Breakdown:*\n` +
    `- Earthworks & Preparation: ${formatZAR(earthworksCost)}\n` +
    `- Materials & Reinforcement: ${formatZAR(materialsCost)}\n` +
    `- Plant Machinery & Labor: ${formatZAR(plantLaborCost)}\n` +
    `- SANS QA & Testing: ${formatZAR(complianceTestingCost)}\n` +
    `----------------------------------------\n` +
    `*ESTIMATED BUDGET:* ${formatZAR(totalLow)} - ${formatZAR(totalHigh)}\n` +
    `----------------------------------------\n` +
    `Please advise on site availability for an on-site inspection and formal BOQ.`
  );

  const handleSendToWhatsApp = () => {
    window.open(`https://wa.me/27815296428?text=${whatsappMessage}`, '_blank');
  };

  const handleApplyToQuote = () => {
    if (onPopulateQuoteForm) {
      onPopulateQuoteForm({
        service: currentConfig.name,
        area: units,
        notes: `Estimated range ${formatZAR(totalLow)} - ${formatZAR(totalHigh)} (${groundName}, ${specName})`,
      });
    }
  };

  const handleConsultAI = () => {
    if (onSelectProjectForAdvisor) {
      onSelectProjectForAdvisor({
        type: currentConfig.name,
        area: units,
        ground: `${groundName} (${specName})`,
      });
    }
  };

  return (
    <section id="estimator" className="py-20 bg-[#0F1722] border-b border-[#2A3A4E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-bold text-[#FF5722] uppercase tracking-wider flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Civil Pricing Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Estimate Your Project Cost
          </h2>
          <p className="text-base text-[#8A99AD] leading-relaxed">
            Configure your project parameters, ground conditions, and structural grade to obtain a reliable South African Rand (ZAR) estimation based on prevailing civil contracting rates.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Controls */}
          <div className="lg:col-span-7 bg-[#15202E] rounded-xl border border-[#2A3A4E] p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Step 1: Select Project Discipline */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                1. Select Civil Discipline / Project Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PROJECT_TYPES.map((pt) => {
                  const isSelected = selectedType === pt.id;
                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => {
                        setSelectedType(pt.id);
                        setUnits(pt.defaultUnits);
                      }}
                      className={`p-3 text-left rounded-lg border text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-[#1E2A38] border-[#FF5722] text-white shadow-md ring-1 ring-[#FF5722]'
                          : 'bg-[#111A24] border-[#2A3A4E] text-[#8A99AD] hover:border-slate-500 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="truncate">{pt.name.split('&')[0]}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        From R {pt.baseRate}/{pt.unit}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-slate-400">
                {currentConfig.description}
              </p>
            </div>

            {/* Step 2: Dimensions / Area Slider */}
            <div className="space-y-4 pt-4 border-t border-[#2A3A4E]">
              <div className="flex items-center justify-between">
                <label htmlFor={sliderId} className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  2. Project Scope / Dimensions ({currentConfig.unit})
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id={numberInputId}
                    type="number"
                    min={currentConfig.minUnits}
                    max={currentConfig.maxUnits}
                    value={units}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (!isNaN(val)) setUnits(Math.max(currentConfig.minUnits, Math.min(currentConfig.maxUnits, val)));
                    }}
                    className="w-24 px-3 py-1 bg-[#111A24] border border-[#2A3A4E] text-white font-mono text-right text-sm rounded focus:outline-none focus:border-[#FF5722]"
                  />
                  <span className="text-xs font-bold text-[#FF5722] font-mono">{currentConfig.unit}</span>
                </div>
              </div>

              {/* Range Slider */}
              <input
                id={sliderId}
                type="range"
                min={currentConfig.minUnits}
                max={currentConfig.maxUnits}
                step={currentConfig.unit === 'm' ? 5 : 10}
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="w-full h-2 bg-[#1E2A38] rounded-lg appearance-none cursor-pointer accent-[#FF5722]"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>Min: {currentConfig.minUnits} {currentConfig.unit}</span>
                <span className="text-slate-300 font-bold">{units} {currentConfig.unit} selected</span>
                <span>Max: {currentConfig.maxUnits} {currentConfig.unit}</span>
              </div>
            </div>

            {/* Step 3: Site & Substrate Conditions */}
            <div className="space-y-3 pt-4 border-t border-[#2A3A4E]">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                3. Site & Ground Conditions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {GROUND_CONDITIONS.map((gc) => {
                  const isChecked = groundCondition === gc.id;
                  return (
                    <button
                      key={gc.id}
                      type="button"
                      onClick={() => setGroundCondition(gc.id)}
                      className={`p-3 text-left rounded-lg border text-xs transition-all ${
                        isChecked
                          ? 'bg-[#1E2A38] border-[#FF5722] text-white ring-1 ring-[#FF5722]'
                          : 'bg-[#111A24] border-[#2A3A4E] text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <div className="font-semibold">{gc.label}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{gc.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Structural Specification Grade */}
            <div className="space-y-3 pt-4 border-t border-[#2A3A4E]">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                4. Structural Specification Grade
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SPEC_GRADES.map((sg) => {
                  const isChecked = specGrade === sg.id;
                  return (
                    <button
                      key={sg.id}
                      type="button"
                      onClick={() => setSpecGrade(sg.id)}
                      className={`p-3 text-left rounded-lg border text-xs transition-all ${
                        isChecked
                          ? 'bg-[#1E2A38] border-[#FF5722] text-white ring-1 ring-[#FF5722]'
                          : 'bg-[#111A24] border-[#2A3A4E] text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <div className="font-semibold">{sg.label}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{sg.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Live Estimation Output & Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Calculation Summary Card */}
            <div className="bg-[#15202E] rounded-xl border border-[#2A3A4E] p-6 sm:p-7 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5722]/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#8A99AD] uppercase tracking-wider">
                  Indicative Project Budget Range
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-balance">
                  {formatZAR(totalLow)} <span className="text-[#8A99AD] font-normal text-lg">to</span> {formatZAR(totalHigh)}
                </div>
                <div className="text-xs text-slate-400">
                  Estimated based on {units} {currentConfig.unit} for {currentConfig.name}
                </div>
              </div>

              {/* Quantified Cost Breakdown */}
              <div className="space-y-3 pt-4 border-t border-[#2A3A4E]">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                  <span>Line Item Breakdown</span>
                  <span className="font-mono text-[11px] text-[#8A99AD]">Rand (ZAR)</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-[#2A3A4E]/50">
                    <span className="text-slate-300">1. Earthworks, Benching & Compaction</span>
                    <span className="font-mono font-medium text-white">{formatZAR(earthworksCost)}</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-[#2A3A4E]/50">
                    <span className="text-slate-300">2. Materials (Concrete, Steel, DPM)</span>
                    <span className="font-mono font-medium text-white">{formatZAR(materialsCost)}</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-[#2A3A4E]/50">
                    <span className="text-slate-300">3. Civil Plant Hire & Skilled Crews</span>
                    <span className="font-mono font-medium text-white">{formatZAR(plantLaborCost)}</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-[#2A3A4E]/50">
                    <span className="text-slate-300">4. SANS Compliance & Testing</span>
                    <span className="font-mono font-medium text-white">{formatZAR(complianceTestingCost)}</span>
                  </div>
                </div>
              </div>

              {/* Direct Actions: Send to WhatsApp & Request On-Site Inspection */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Breakdown to WhatsApp (081 529 6428)</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleApplyToQuote}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-[#FF5722] hover:bg-[#E64A19] rounded-lg transition-colors"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>Formal Quote</span>
                  </button>

                  <button
                    onClick={handleConsultAI}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-slate-200 bg-[#1E2A38] hover:bg-[#28384B] border border-[#2A3A4E] rounded-lg transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>AI Engineering Review</span>
                  </button>
                </div>
              </div>

              {/* Disclaimer Notice */}
              <div className="p-3 rounded-lg bg-[#111A24] border border-[#2A3A4E] flex items-start gap-2.5 text-[11px] text-[#8A99AD] leading-relaxed">
                <Info className="w-4 h-4 text-[#8A99AD] shrink-0 mt-0.5" />
                <span>
                  Estimates are provisional guidelines subject to final geotechnical soil tests, municipal depth requirements, and engineered site drawings. Formal on-site inspections are conducted by JBM Infracivils foremen.
                </span>
              </div>

            </div>

            {/* Quick Contact Card */}
            <div className="p-5 rounded-xl bg-[#15202E] border border-[#2A3A4E] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-white">Need a Quantity Surveyor / Tender BOQ?</div>
                <div className="text-xs text-[#8A99AD]">Speak directly to JBM management</div>
              </div>
              <a
                href="tel:0815296428"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#1E2A38] hover:bg-[#2A3A4E] border border-[#2A3A4E] rounded-md transition-colors"
              >
                <span>081 529 6428</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
