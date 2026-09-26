import { useState } from 'react';
import { Cpu, Award, CheckCircle, BarChart3, Palette, FileSpreadsheet, Users, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsMatrixProps {
  darkMode: boolean;
}

export function SkillsMatrix({ darkMode }: SkillsMatrixProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BarChart3 size={16} />;
      case 1:
        return <FileSpreadsheet size={16} />;
      case 2:
        return <Palette size={16} />;
      default:
        return <Users size={16} />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-2">
            <Cpu size={14} />
            <span>Technical Mastery &amp; Toolsets</span>
            <span aria-hidden="true">·</span>
            <span>Skill Level 3 Certified</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-950'
            }`}
          >
            Software Expertise &amp; Core Competencies
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Deep specialization across presentation systems, consulting-grade data visualization, Adobe Creative Cloud, and executive operations.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center gap-2 ${
                activeCategoryIndex === idx
                  ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/25 scale-[1.02]'
                  : darkMode
                  ? 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
                  : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200'
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-neutral-900/40 border-neutral-800 hover:border-amber-400/40'
                  : 'bg-white border-neutral-200 hover:border-amber-500/40 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-amber-500 font-semibold">
                  {skill.experience} Experience
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-800 text-amber-400">
                  {skill.level}%
                </span>
              </div>

              <h3 className={`text-xl font-bold font-display mb-2 ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                {skill.name}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {skill.description}
              </p>

              {/* Progress Bar with smooth styling */}
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-gradient-to-r from-amber-400 to-indigo-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Tags - Quiet unboxed text with subtle dot separators */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                {skill.tags.map((tag, tIdx) => (
                  <span key={tag} className="flex items-center gap-1">
                    <span>{tag}</span>
                    {tIdx < skill.tags.length - 1 && <span aria-hidden="true" className="text-neutral-600">·</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Level 3 Graphics Certification Spotlight Banner */}
        <div
          className={`p-8 rounded-3xl border relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 ${
            darkMode
              ? 'bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 border-neutral-700/60'
              : 'bg-gradient-to-br from-neutral-50 via-amber-50/20 to-neutral-100 border-amber-200 shadow-lg'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-neutral-950 flex items-center justify-center shrink-0 shadow-lg shadow-amber-400/20">
              <Award size={26} />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 block mb-0.5">
                Official Credential Verification
              </span>
              <h3 className={`text-2xl font-bold font-display ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                Skill Level 3 in Graphics Design
              </h3>
              <p className={`text-sm mt-1 max-w-xl ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                Formally cleared Level 3 Graphics assessment covering advanced visual composition, typographic hierarchy, color theory, complex Think-cell data integration, and enterprise brand governance.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-xs text-neutral-400 block">Assessment Status</span>
              <span className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle size={14} />
                Passed &amp; Verified
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
