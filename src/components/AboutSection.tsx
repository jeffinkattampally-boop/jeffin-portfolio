import { useState } from 'react';
import { UserCheck, ShieldCheck, Zap, BarChart2, Globe, Heart, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  darkMode: boolean;
}

export function AboutSection({ darkMode }: AboutSectionProps) {
  const pillars = [
    {
      number: '01',
      title: 'Executive Strategic Clarity',
      description: 'Condensing dense 80-page financial audits and multi-layered advisory reports into clean, decisive 1-page visual summaries that enable rapid C-suite consensus.',
    },
    {
      number: '02',
      title: 'Think-cell Mathematical Rigor',
      description: 'Building McKinsey- and BCG-grade waterfall models, Mekko charts, and CAGR projections directly synchronized with live Excel enterprise models.',
    },
    {
      number: '03',
      title: 'Enterprise Master Architecture',
      description: 'Engineering bulletproof PowerPoint template libraries, typographic systems, and accessible palettes deployed across global workforce tiers.',
    },
    {
      number: '04',
      title: 'High-Pressure Turnaround Velocity',
      description: 'Proven track record of delivering flawless pitch presentations within 12–24 hour windows during active M&A bids and investor roadshows.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-2">
              <UserCheck size={14} />
              <span>Design Philosophy &amp; Background</span>
              <span aria-hidden="true">·</span>
              <span>Senior Specialist</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4 ${
                darkMode ? 'text-white' : 'text-neutral-950'
              }`}
            >
              The Bridge Between Complex Strategy &amp; Boardroom Persuasion
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              With more than a decade of experience servicing global financial institutions and advisory leaders at R R Donnelley and Williams Lea Tag, I treat presentation design as a strategic communication tool. Every alignment, color choice, and data transition serves one objective: driving executive confidence.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid - Human Editorial Numbering adhering to Section 1.B */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className={`p-7 rounded-3xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-neutral-900/40 border-neutral-800 hover:border-amber-400/40'
                  : 'bg-white border-neutral-200 hover:border-amber-500/40 shadow-sm'
              }`}
            >
              <span className="text-3xl font-extrabold font-display text-amber-400/80 block mb-4">
                {pillar.number}
              </span>
              <h3 className={`text-xl font-bold font-display mb-2 ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                {pillar.title}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* London Deployment & Global Presence Feature Card */}
        <div
          className={`p-8 sm:p-10 rounded-3xl border relative overflow-hidden ${
            darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-neutral-200 shadow-md'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 block mb-2">
                International On-Site Provenance
              </span>
              <h3 className={`text-2xl sm:text-3xl font-bold font-display mb-4 ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                Selected for On-Site Consultation in London, UK
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                During my tenure at Williams Lea Tag, I was selected to represent the design team on-site in London. Working side-by-side with executive partners and managing directors across Canary Wharf and the City of London, I led live turnarounds on confidential multi-million-pound proposals and RFP presentations.
              </p>
              
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Face-to-face C-suite Consultation</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Cross-Border Queue Harmonization</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Level 3 Certified Quality Assurance</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className={`p-5 rounded-2xl border text-center ${
                darkMode ? 'bg-neutral-950/60 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
              }`}>
                <p className="text-3xl font-extrabold font-display text-amber-400 tabular-nums">100%</p>
                <p className="text-xs text-neutral-400 mt-1">Client Commendation Rate</p>
              </div>
              <div className={`p-5 rounded-2xl border text-center ${
                darkMode ? 'bg-neutral-950/60 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
              }`}>
                <p className="text-3xl font-extrabold font-display text-sky-400 tabular-nums">&gt;5,000</p>
                <p className="text-xs text-neutral-400 mt-1">Corporate Presentation Decks Completed</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
