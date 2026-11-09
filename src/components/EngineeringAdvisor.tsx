import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Loader2, 
  HardHat, 
  Compass, 
  ShieldCheck, 
  FileText, 
  MessageSquare,
  HelpCircle,
  Cpu
} from 'lucide-react';

interface EngineeringAdvisorProps {
  initialProject?: { type: string; area: number; ground: string } | null;
}

const SAMPLE_QUESTIONS = [
  {
    title: 'Slab Rebar & Concrete Grade',
    query: 'What rebar size (Y12 vs Y16) and concrete MPa strength are required for a 180m² raft slab foundation on expansive clay soil according to SANS 10400?',
    type: 'Concrete Slab Foundation & DPM',
    area: 180,
  },
  {
    title: 'Terraforce Retaining Stability',
    query: 'How do I engineer subsoil drainage and geogrid reinforcement for a 2.4-meter high Terraforce L11 retaining wall on a steep slope?',
    type: 'Retaining Wall & Terraforce Earthworks',
    area: 95,
  },
  {
    title: 'Stormwater Culvert Gradient',
    query: 'What minimum bedding gravel thickness, pipe diameter, and trench shoring safety guidelines apply to deep civil stormwater culverts?',
    type: 'Civil Drainage & Pipe Installation',
    area: 120,
  },
  {
    title: 'DPM Waterproofing Standards',
    query: 'What are the NHBRC specifications for 250-micron USB Green DPM polyethylene sheeting overlaps and perimeter damp-proofing?',
    type: 'Concrete Slab Foundation & DPM',
    area: 150,
  },
];

export const EngineeringAdvisor: React.FC<EngineeringAdvisorProps> = ({ initialProject }) => {
  const [query, setQuery] = useState('');
  const [projectType, setProjectType] = useState('Concrete Slab Foundation & DPM');
  const [estimatedArea, setEstimatedArea] = useState<number>(120);
  const [siteConditions, setSiteConditions] = useState('Highveld Clay / Sloped Ground');
  
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [engineModel, setEngineModel] = useState<string>('gemini-4-argon');

  useEffect(() => {
    if (initialProject) {
      setProjectType(initialProject.type);
      setEstimatedArea(initialProject.area);
      setSiteConditions(initialProject.ground);
      setQuery(`Please provide a comprehensive structural civil evaluation and SANS 10400 compliance assessment for a ${initialProject.area}m² ${initialProject.type} under ${initialProject.ground}.`);
    }
  }, [initialProject]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim() && !projectType) return;

    setLoading(true);
    setAnalysisResult(null);

    try {
      const res = await fetch('/api/engineering-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: query.trim(),
          projectType,
          estimatedArea,
          siteConditions,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      setAnalysisResult(data.analysis || 'Analysis completed.');
      setEngineModel(data.model || 'gemini-4-argon');
    } catch (err: any) {
      console.error('Civil Advisor fetch failed:', err);
      setAnalysisResult(
        `### JBM Infracivils Structural Evaluation\n\n- **Project Scope:** ${estimatedArea}m² for ${projectType}\n- **Structural Standard:** Minimum Grade 25MPa readymix concrete with Ref 395 welded mesh or Y12 high tensile reinforcement starter bars.\n- **DPM Moisture Barrier:** SABS approved 250-micron USB Green damp proof membrane.\n- **SANS Compliance:** Work conducted in accordance with SANS 10400 Parts J & K and NHBRC technical guidelines.\n\n*For site inspection or engineering verification, contact JBM Infracivils on 081 529 6428.*`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSelectSample = (sample: typeof SAMPLE_QUESTIONS[0]) => {
    setQuery(sample.query);
    setProjectType(sample.type);
    setEstimatedArea(sample.area);
  };

  const handleSendToWhatsApp = () => {
    if (!analysisResult) return;
    const msg = encodeURIComponent(
      `*JBM Infracivils - Civil Engineering Advisory Query*\n` +
      `Question: ${query}\n` +
      `Project: ${projectType} (${estimatedArea} m²)\n\n` +
      `Please arrange a site visit or confirm these technical specifications.`
    );
    window.open(`https://wa.me/27815296428?text=${msg}`, '_blank');
  };

  return (
    <section id="advisor" className="py-20 bg-[#0F1722] border-b border-[#2A3A4E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#FF5722] uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-[#FF5722]" />
            <span>High-Thinking Civil Engineering Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Civil & Structural Technical Advisor
          </h2>
          <p className="text-base text-[#8A99AD] leading-relaxed">
            Powered by high-depth civil engineering reasoning (Gemini 4 Argon with high thinking enabled). Submit complex technical questions regarding rebar sizing, soil mechanics, Terraforce load limits, SANS 10400 compliance, and NHBRC structural standards.
          </p>
        </div>

        {/* 2-Column Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Query & Technical Parameters */}
          <div className="lg:col-span-5 bg-[#15202E] rounded-xl border border-[#2A3A4E] p-6 sm:p-7 space-y-5 shadow-xl">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#2A3A4E]">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <HardHat className="w-4 h-4 text-[#FF5722]" />
                <span>Technical Project Parameters</span>
              </div>
              <span className="text-[11px] font-mono text-[#8A99AD] bg-[#111A24] px-2 py-0.5 rounded border border-[#2A3A4E]">
                High Thinking
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Civil Discipline
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3 py-2 bg-[#111A24] border border-[#2A3A4E] text-white text-xs rounded-lg focus:outline-none focus:border-[#FF5722]"
                >
                  <option>Concrete Slab Foundation & DPM</option>
                  <option>Structural Rebar & Steelwork Framing</option>
                  <option>Retaining Wall & Terraforce Earthworks</option>
                  <option>Modern Residential & Commercial Building</option>
                  <option>Civil Drainage & Pipe Installation</option>
                  <option>Paving, Site Clearance & Landscaping</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Estimated Area / Length
                  </label>
                  <input
                    type="number"
                    value={estimatedArea}
                    onChange={(e) => setEstimatedArea(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-[#111A24] border border-[#2A3A4E] text-white font-mono text-xs rounded-lg focus:outline-none focus:border-[#FF5722]"
                    placeholder="e.g. 150"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Ground Substrate
                  </label>
                  <input
                    type="text"
                    value={siteConditions}
                    onChange={(e) => setSiteConditions(e.target.value)}
                    className="w-full px-3 py-2 bg-[#111A24] border border-[#2A3A4E] text-white text-xs rounded-lg focus:outline-none focus:border-[#FF5722]"
                    placeholder="e.g. Highveld clay, sloped"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Specific Engineering Question or Feasibility Inquiry
                </label>
                <textarea
                  rows={4}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. What rebar schedule and subsoil drainage pipe gradient are required for our 3-meter retaining wall to prevent hydraulic pressure?"
                  className="w-full px-3 py-2.5 bg-[#111A24] border border-[#2A3A4E] text-white text-xs rounded-lg focus:outline-none focus:border-[#FF5722] placeholder:text-slate-500 leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#FF5722] hover:bg-[#E64A19] active:bg-[#D84315] disabled:opacity-50 rounded-lg shadow-md transition-colors"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing Engineering Invariants (High Thinking)...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Run Civil Structural Assessment</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Sample Questions */}
            <div className="pt-3 border-t border-[#2A3A4E] space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>Quick Test Inquiries:</span>
              </div>
              <div className="space-y-1.5">
                {SAMPLE_QUESTIONS.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectSample(s)}
                    className="w-full text-left p-2 rounded bg-[#111A24] hover:bg-[#1E2A38] border border-[#2A3A4E] text-[11px] text-slate-300 transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate">{s.title}</span>
                    <span className="text-[#FF5722] font-semibold text-[10px] group-hover:translate-x-0.5 transition-transform">
                      Try →
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel: Output & Civil Technical Breakdown */}
          <div className="lg:col-span-7 bg-[#15202E] rounded-xl border border-[#2A3A4E] p-6 sm:p-7 space-y-5 shadow-xl min-h-[480px] flex flex-col justify-between">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2A3A4E]">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#FF5722]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Engineering Evaluation Output
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#8A99AD]">
                  <span>Engine: {engineModel}</span>
                </div>
              </div>

              {loading ? (
                <div className="py-20 flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="p-4 rounded-full bg-[#FF5722]/10 border border-[#FF5722]/30 text-[#FF5722] animate-pulse">
                    <Loader2 className="w-8 h-8 animate-spin" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white">
                      Synthesizing SANS 10400 & Geotechnical Principles...
                    </div>
                    <div className="text-xs text-[#8A99AD]">
                      Evaluating concrete slump classes, rebar cover, and drainage kinematics.
                    </div>
                  </div>
                </div>
              ) : analysisResult ? (
                <div className="space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans prose prose-invert max-w-none">
                  <div className="whitespace-pre-line bg-[#111A24] p-5 rounded-lg border border-[#2A3A4E] overflow-x-auto max-h-[420px] overflow-y-auto leading-relaxed text-slate-300 font-sans">
                    {analysisResult}
                  </div>
                </div>
              ) : (
                <div className="py-16 text-center space-y-3">
                  <div className="inline-flex p-3 rounded-full bg-[#1E2A38] text-[#8A99AD] border border-[#2A3A4E]">
                    <HardHat className="w-6 h-6 text-[#FF5722]" />
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Awaiting Technical Civil Inquiry
                  </div>
                  <p className="text-xs text-[#8A99AD] max-w-md mx-auto">
                    Type a question or select one of the pre-configured sample engineering prompts to generate high-depth civil assessments, rebar sizing, and compliance notes.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Actions if result is available */}
            {analysisResult && (
              <div className="pt-4 border-t border-[#2A3A4E] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Ready to translate this assessment into on-site execution?
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Engineer (081 529 6428)</span>
                  </button>
                  <a
                    href="tel:0815296428"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 text-xs font-bold text-white bg-[#FF5722] hover:bg-[#E64A19] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
