import { useState } from 'react';
import { ArrowUpRight, Presentation, CheckCircle, ExternalLink, Layers, X, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsProps {
  darkMode: boolean;
}

export function Projects({ darkMode }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'C-Suite Pitch Decks', 'Master Templates', 'Think-cell & Data Viz', 'On-Site London'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-2">
              <Presentation size={14} />
              <span>Selected Portfolio Case Studies</span>
              <span aria-hidden="true">·</span>
              <span>Enterprise Grade</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display ${
                darkMode ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Featured Presentation Works
            </h2>
          </div>

          {/* Interactive Category Filter - Allowed functional button tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/60 rounded-xl border border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className={`group relative rounded-3xl overflow-hidden border cursor-pointer transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode
                  ? 'bg-neutral-900/50 border-neutral-800/80 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/5'
                  : 'bg-white border-neutral-200 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-neutral-200/60'
              }`}
            >
              {/* Media Container with measured contrast scrim */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback container
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-neutral-900');
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                {/* Quiet unboxed text kicker on image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 pointer-events-none">
                  <span className="font-mono bg-neutral-950/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-800">
                    {project.category}
                  </span>
                  <span className="font-mono bg-neutral-950/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-800">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs text-neutral-400 font-mono">{project.clientType}</p>
                    <h3 className="text-lg sm:text-xl font-bold font-display group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-neutral-950 transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className={`text-sm leading-relaxed mb-4 line-clamp-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {project.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 mb-5 text-xs">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-400">
                      <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                      <span className="line-clamp-1">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer Tools - Clean unboxed text with dot separators */}
                <div className="pt-4 border-t border-neutral-800/40 flex flex-wrap items-center gap-2 text-xs text-neutral-500 font-mono">
                  {project.tools.map((t, idx) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <span className="text-neutral-400">{t}</span>
                      {idx < project.tools.length - 1 && <span aria-hidden="true">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl ${
              darkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-white border-neutral-300 text-neutral-950'
            }`}
          >
            {/* Modal Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 transition-colors"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                  {activeModalProject.category} · {activeModalProject.year}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-neutral-300 font-mono mt-1">
                  Client Profile: {activeModalProject.clientType}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-2">Project Overview</h4>
                <p className={`text-base leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-3">Key Technical Deliverables</h4>
                <ul className="space-y-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-neutral-200' : 'text-neutral-800'}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Architecture */}
              <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800">
                <h4 className="text-xs font-mono text-neutral-400 uppercase mb-2">Software Stack &amp; Methodologies</h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {activeModalProject.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
                <a
                  href="#simulator"
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <Presentation size={15} />
                  <span>Test in Simulator</span>
                </a>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 text-xs font-semibold rounded-xl border border-neutral-700 hover:bg-neutral-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
