import React, { useState } from 'react';
import { PROJECTS_DATA, ProjectItem } from '../data/projectsData';
import { MapPin, Clock, ShieldCheck, ArrowRight, X, MessageSquare, ExternalLink, HardHat } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Structural Rebar', 'Retaining Walls', 'Building Construction', 'Civil Drainage', 'Paving & Earthworks'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-[#111A24] border-b border-[#2A3A4E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold text-[#FF5722] uppercase tracking-wider">
              Proven Civil Engineering Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Project Portfolio
            </h2>
            <p className="text-base text-[#8A99AD] leading-relaxed">
              Explore our recent civil earthworks, structural steel fixing, retaining wall installations, and turnkey building contracts completed across Gauteng and South Africa.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional Button Controls Allowed by Constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#15202E] border border-[#2A3A4E] rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-[#FF5722] text-white shadow-sm'
                    : 'text-[#8A99AD] hover:text-white hover:bg-[#1E2A38]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#15202E] rounded-xl border border-[#2A3A4E] hover:border-[#FF5722]/60 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15202E] via-transparent to-black/30 pointer-events-none" />

                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-[#0F1722]/90 backdrop-blur-sm border border-[#2A3A4E] text-slate-200 text-xs font-medium px-2.5 py-1 rounded flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
                  <span>{project.location}</span>
                </div>

                {/* Category Indicator */}
                <div className="absolute bottom-3 right-3 bg-[#0F1722]/90 backdrop-blur-sm border border-[#2A3A4E] text-[#8A99AD] text-[11px] font-mono px-2 py-0.5 rounded">
                  {project.category}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-[#FF5722] transition-colors leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-xs text-[#8A99AD] line-clamp-2 leading-relaxed">
                  {project.scope}
                </p>

                <div className="pt-3 border-t border-[#2A3A4E]/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {project.completionTime}
                  </span>
                  <span className="text-[#FF5722] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Modal Preview */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
              className="bg-[#15202E] border border-[#2A3A4E] rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Bar */}
              <div className="p-4 sm:p-5 border-b border-[#2A3A4E] flex items-center justify-between bg-[#111A24]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FF5722]">
                  <HardHat className="w-4 h-4" />
                  <span className="uppercase tracking-wider">Civil Engineering Case Study</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 text-slate-400 hover:text-white bg-[#1E2A38] border border-[#2A3A4E] rounded-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-[#2A3A4E] bg-slate-900">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#8A99AD]">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>{selectedProject.location}</span>
                    <span>·</span>
                    <span>Client: {selectedProject.clientType}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.scope}
                  </p>
                </div>

                {/* Key Engineering Specifications */}
                <div className="p-4 rounded-lg bg-[#111A24] border border-[#2A3A4E] space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Structural Specifications & Quality Standard
                  </div>
                  <div className="text-xs text-[#8A99AD] space-y-1">
                    <div>• <strong>Structural Spec:</strong> {selectedProject.keySpecs}</div>
                    <div>• <strong>Completion Timeline:</strong> {selectedProject.completionTime}</div>
                    <div>• <strong>Standards Compliance:</strong> SANS 10400 Code, NHBRC Quality Guidelines</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/27815296428?text=${encodeURIComponent(
                      `Hello JBM Infracivils, I saw your case study for "${selectedProject.title}" in ${selectedProject.location}. I have a similar project and would like to get a quote.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire About Similar Project via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto py-3 px-5 text-xs font-semibold text-slate-300 hover:text-white bg-[#1E2A38] border border-[#2A3A4E] rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
