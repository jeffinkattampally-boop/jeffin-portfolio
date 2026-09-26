import { useState } from 'react';
import { ArrowDown, Presentation, Award, Globe, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  darkMode: boolean;
  onOpenResume: () => void;
}

export function Hero({ darkMode, onOpenResume }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Punch & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Trust Kicker - Unboxed clean text metadata */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase mb-5 text-amber-500">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
              <span>Senior PowerPoint & Presentation Designer</span>
              <span aria-hidden="true">·</span>
              <span>13+ Years Enterprise Experience</span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 font-display ${
                darkMode ? 'text-white' : 'text-neutral-950'
              }`}
              style={{ textWrap: 'balance' }}
            >
              Crafting High-Stakes{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-indigo-400">
                Boardroom Presentations
              </span>{' '}
              that Win Deals &amp; Capital.
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl ${
                darkMode ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              Transforming complex corporate strategy, multi-billion dollar M&A financial models, and executive data into persuasive, boardroom-ready presentations. Veteran of{' '}
              <strong className={darkMode ? 'text-white' : 'text-neutral-900'}>R R Donnelley</strong> and{' '}
              <strong className={darkMode ? 'text-white' : 'text-neutral-900'}>Williams Lea Tag</strong>, with exclusive on-site consultative deployment in{' '}
              <span className="text-amber-500 font-semibold">London, UK</span>.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pt-4 border-t border-neutral-800/40">
              {PERSONAL_INFO.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className={`text-2xl sm:text-3xl font-extrabold font-display tabular-nums ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-400 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#simulator"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-xl shadow-lg shadow-amber-400/20 transition-all whitespace-nowrap"
              >
                <Presentation size={18} />
                <span>Launch Slide Simulator</span>
              </a>

              <a
                href="#projects"
                className={`inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl border transition-all whitespace-nowrap ${
                  darkMode
                    ? 'border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200'
                    : 'border-neutral-300 bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
                }`}
              >
                <span>View Portfolio Works</span>
              </a>

              <button
                onClick={onOpenResume}
                className={`inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl border transition-all whitespace-nowrap ${
                  darkMode
                    ? 'border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white'
                    : 'border-neutral-200 hover:border-neutral-300 text-neutral-700 hover:text-neutral-950'
                }`}
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Verified Credentials Pills / Clean Inline Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 size={14} />
                <span>Level 3 Graphics Certified</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-sky-400">
                <Globe size={14} />
                <span>London On-Site Deployed</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 text-amber-400">
                <Award size={14} />
                <span>Quarter Performance Award Winner</span>
              </span>
            </div>
          </div>

          {/* Right Column: 3D Tilting Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md perspective-1000"
            >
              <div
                className={`relative rounded-3xl p-3 border transition-transform duration-200 ease-out transform-style-3d shadow-2xl ${
                  darkMode
                    ? 'bg-neutral-900/70 border-neutral-700/60 shadow-amber-500/5'
                    : 'bg-white/80 border-neutral-200 shadow-neutral-300/60'
                }`}
                style={{
                  transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
                }}
              >
                {/* Image Slot with Fallback Container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-900">
                  {!imageError ? (
                    <img
                      src={PERSONAL_INFO.avatar}
                      alt={PERSONAL_INFO.name}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top filter contrast-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950 p-6 text-center">
                      <Presentation size={48} className="text-amber-400 mb-3" />
                      <h3 className="text-xl font-bold text-white mb-1">{PERSONAL_INFO.name}</h3>
                      <p className="text-xs text-neutral-400">{PERSONAL_INFO.title}</p>
                    </div>
                  )}

                  {/* Gradient Overlay Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent pointer-events-none" />

                  {/* Direct Profile Details on Bottom of Card */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 pointer-events-none">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-base font-bold font-display leading-tight">{PERSONAL_INFO.name}</p>
                        <p className="text-xs text-amber-300/90">Senior Presentation Designer</p>
                      </div>
                      <span className="px-2.5 py-1 text-[11px] font-semibold bg-neutral-900/80 backdrop-blur-md rounded-md border border-neutral-700/80 text-neutral-200">
                        Kerala &amp; London
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Accent Badge 1: Top Right */}
                <div
                  className={`absolute -top-3 -right-3 px-3.5 py-2 rounded-xl border backdrop-blur-md text-xs font-semibold shadow-lg flex items-center gap-2 pointer-events-none ${
                    darkMode
                      ? 'bg-neutral-900/95 border-amber-500/40 text-amber-300'
                      : 'bg-white/95 border-amber-400/50 text-amber-800'
                  }`}
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <Sparkles size={14} className="text-amber-400" />
                  <span>Think-cell &amp; PPT Specialist</span>
                </div>

                {/* Floating Accent Badge 2: Bottom Left */}
                <div
                  className={`absolute -bottom-3 -left-3 px-3.5 py-2 rounded-xl border backdrop-blur-md text-xs font-semibold shadow-lg flex items-center gap-2 pointer-events-none ${
                    darkMode
                      ? 'bg-neutral-900/95 border-neutral-700 text-neutral-200'
                      : 'bg-white/95 border-neutral-300 text-neutral-800'
                  }`}
                  style={{ transform: 'translateZ(25px)' }}
                >
                  <Award size={14} className="text-indigo-400" />
                  <span>13+ Yrs Enterprise Track</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll down prompt */}
        <div className="mt-14 pt-6 flex justify-center">
          <a
            href="#experience"
            className="flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-amber-400 transition-colors"
          >
            <span>Explore Experience &amp; Projects</span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
