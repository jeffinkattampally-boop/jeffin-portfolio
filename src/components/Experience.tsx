import { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Award, CheckCircle2, ChevronRight, FileCheck } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';

interface ExperienceProps {
  darkMode: boolean;
}

export function Experience({ darkMode }: ExperienceProps) {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-2">
              <Briefcase size={14} />
              <span>Career Trajectory</span>
              <span aria-hidden="true">·</span>
              <span>13+ Years Enterprise Design</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display ${
                darkMode ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Professional Background &amp; Track Record
            </h2>
          </div>

          {/* Interactive Switcher */}
          <div className="flex items-center p-1 bg-neutral-900/60 rounded-xl border border-neutral-800">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'work'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Briefcase size={14} />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <GraduationCap size={14} />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === 'work' ? (
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.company}
                className={`relative rounded-3xl p-6 sm:p-10 border transition-all duration-300 ${
                  darkMode
                    ? 'bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700'
                    : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
                }`}
              >
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-800/40 mb-8">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
                      <span>{exp.period}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-neutral-400">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                      {exp.isCurrent && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-emerald-400 font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Role
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className={`text-2xl sm:text-3xl font-bold font-display ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                      {exp.designation}
                    </h3>
                    <p className="text-base text-amber-500 font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  {/* Recognition Badges */}
                  {exp.achievements.length > 0 && (
                    <div className="flex flex-col gap-1.5 lg:items-end">
                      {exp.achievements.map((ach, aIdx) => (
                        <div
                          key={aIdx}
                          className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-medium"
                        >
                          <Award size={14} className="shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Overview */}
                <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {exp.overview}
                </p>

                {/* Core Responsibilities Grid */}
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                    Core Enterprise Responsibilities &amp; Delivery Scope
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className={`p-3.5 rounded-xl border flex items-start gap-3 text-xs sm:text-sm leading-relaxed ${
                          darkMode
                            ? 'bg-neutral-900/60 border-neutral-800/60 text-neutral-300'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                        }`}
                      >
                        <CheckCircle2 size={15} className="text-amber-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className={`rounded-3xl p-8 border transition-all ${
                  darkMode
                    ? 'bg-neutral-900/40 border-neutral-800'
                    : 'bg-white border-neutral-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    <span>Graduated {edu.year}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    <span>{edu.location}</span>
                  </span>
                </div>
                <h3 className={`text-2xl font-bold font-display mb-2 ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                  {edu.degree}
                </h3>
                <p className="text-base text-amber-500 font-medium mb-4">
                  {edu.institution}
                </p>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {edu.scoreOrDetails}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Formal Verification Declaration Statement from Resume */}
        <div className={`mt-14 p-6 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono ${
          darkMode ? 'bg-neutral-900/30 border-neutral-800 text-neutral-400' : 'bg-neutral-50 border-neutral-200 text-neutral-600'
        }`}>
          <div className="flex items-center gap-3">
            <FileCheck size={18} className="text-emerald-400 shrink-0" />
            <span>
              <strong>Verified Profile Declaration:</strong> Professional history, dates, and certifications verified against official credentials.
            </span>
          </div>
          <span className="text-amber-500 font-bold shrink-0">
            Jeffin J Kattampally
          </span>
        </div>

      </div>
    </section>
  );
}
