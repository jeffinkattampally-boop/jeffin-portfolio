import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Layers, 
  FileText, 
  BarChart3, 
  Sparkles, 
  Monitor, 
  CheckCircle,
  TrendingUp,
  Building2,
  PieChart
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface InteractiveSlideDeckProps {
  darkMode: boolean;
}

export function InteractiveSlideDeck({ darkMode }: InteractiveSlideDeckProps) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '4:3'>('16:9');
  const [showNotes, setShowNotes] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'breakdown' | 'specs'>('preview');

  const currentProject = PROJECTS[selectedProjectIndex];
  const currentSlide = currentProject.slides[currentSlideIndex] || currentProject.slides[0];

  const handleNextSlide = () => {
    if (currentSlideIndex < currentProject.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setCurrentSlideIndex(0);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setCurrentSlideIndex(currentProject.slides.length - 1);
    }
  };

  const handleSelectProject = (index: number) => {
    setSelectedProjectIndex(index);
    setCurrentSlideIndex(0);
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden border-t border-b border-neutral-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-2">
            <Sparkles size={14} />
            <span>Interactive Presentation Simulator</span>
            <span aria-hidden="true">·</span>
            <span>Real Slide Decks &amp; Think-cell Logic</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-950'
            }`}
          >
            Experience Executive Slide Design in Motion
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Navigate live board-ready layouts, inspect custom Think-cell waterfall models, and explore the layout systems built for Fortune 500 decision makers.
          </p>
        </div>

        {/* Project Deck Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => handleSelectProject(idx)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center gap-2 ${
                selectedProjectIndex === idx
                  ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/25 scale-[1.02]'
                  : darkMode
                  ? 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
                  : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200'
              }`}
            >
              <span>{proj.title}</span>
              <span className={`text-[11px] px-1.5 py-0.5 rounded ${
                selectedProjectIndex === idx
                  ? 'bg-neutral-950/20 text-neutral-950'
                  : 'bg-neutral-800 text-neutral-400'
              }`}>
                {proj.slides.length} slides
              </span>
            </button>
          ))}
        </div>

        {/* Main Simulator Canvas Container */}
        <div
          className={`relative rounded-3xl border transition-all duration-300 overflow-hidden shadow-2xl ${
            isFullscreen
              ? 'fixed inset-4 z-50 p-6 flex flex-col justify-between overflow-y-auto'
              : darkMode
              ? 'bg-neutral-950/90 border-neutral-800 shadow-black/60'
              : 'bg-white border-neutral-200 shadow-neutral-300/60'
          }`}
        >
          {/* Deck Top Bar Controls */}
          <div className="px-6 py-4 border-b border-neutral-800/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <div className="h-4 w-[1px] bg-neutral-700 mx-1 hidden sm:block" />
              <span className="text-xs font-mono font-medium text-neutral-400 hidden sm:inline">
                {currentProject.clientType} · {currentProject.year}
              </span>
            </div>

            {/* Middle: Aspect Ratio & Mode Controls */}
            <div className="flex items-center gap-2">
              <div className="flex items-center p-0.5 bg-neutral-900 rounded-lg border border-neutral-800 text-xs">
                <button
                  onClick={() => setAspectRatio('16:9')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    aspectRatio === '16:9' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Widescreen (16:9)"
                >
                  16:9 Widescreen
                </button>
                <button
                  onClick={() => setAspectRatio('4:3')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    aspectRatio === '4:3' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Standard (4:3)"
                >
                  4:3 Standard
                </button>
              </div>

              <button
                onClick={() => setShowNotes(!showNotes)}
                className={`px-3 py-1.5 text-xs rounded-lg border flex items-center gap-1.5 transition-colors ${
                  showNotes
                    ? 'bg-neutral-800 border-neutral-700 text-neutral-200'
                    : 'bg-transparent border-neutral-800 text-neutral-500 hover:text-neutral-300'
                }`}
                title="Toggle Executive Slide Notes"
              >
                <FileText size={14} />
                <span className="hidden sm:inline">Design Rationale</span>
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen View'}
              >
                {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
            </div>

            {/* Slide Index Counter */}
            <div className="text-xs font-mono text-neutral-400">
              Slide <span className="text-amber-400 font-bold tabular-nums">{currentSlideIndex + 1}</span> of{' '}
              <span className="tabular-nums">{currentProject.slides.length}</span>
            </div>
          </div>

          {/* Simulator Body */}
          <div className="p-6 md:p-8 flex flex-col items-center justify-center">
            {/* The Slide Viewport */}
            <div
              className={`w-full transition-all duration-300 relative rounded-2xl overflow-hidden shadow-2xl border ${
                aspectRatio === '16:9' ? 'aspect-[16/9] max-w-4xl' : 'aspect-[4/3] max-w-3xl'
              } ${
                darkMode
                  ? 'bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border-neutral-700/80 text-white'
                  : 'bg-gradient-to-br from-neutral-50 via-white to-neutral-100 border-neutral-300 text-neutral-950'
              }`}
            >
              {/* Slide Background Subtle Grid & Brand Header */}
              <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

              {/* Master Slide Header Zone */}
              <div className="p-6 sm:p-8 pb-4 flex items-start justify-between border-b border-neutral-800/30">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-500 block mb-1">
                    {currentSlide.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight font-display">
                    {currentSlide.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 text-xs font-bold font-mono">
                    JK
                  </div>
                </div>
              </div>

              {/* Slide Content Dynamic Layout */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between overflow-y-auto">
                {/* 1. Metrics Layout */}
                {currentSlide.metrics && currentSlide.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                    {currentSlide.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border backdrop-blur-sm transition-transform hover:-translate-y-1 ${
                          darkMode
                            ? 'bg-neutral-900/60 border-neutral-800 hover:border-amber-400/40'
                            : 'bg-white/80 border-neutral-200 hover:border-amber-500/40'
                        }`}
                      >
                        <p className="text-xs text-neutral-400 mb-1">{m.label}</p>
                        <p className={`text-2xl sm:text-3xl font-extrabold font-display tabular-nums ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                          {m.value}
                        </p>
                        {m.delta && (
                          <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-emerald-500">
                            <TrendingUp size={12} />
                            <span>{m.delta}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. Think-cell Waterfall Simulation */}
                {currentSlide.layout === 'waterfall' && (
                  <div className="mb-6 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-3 font-mono">
                      <span>Think-cell Automated Waterfall Model</span>
                      <span className="text-amber-400">Values in USD Millions</span>
                    </div>
                    {/* Simulated Waterfall Chart with dynamic bars */}
                    <div className="h-32 flex items-end justify-between gap-3 pt-4 border-b border-neutral-700/50">
                      <div className="flex-1 flex flex-col items-center h-full justify-end">
                        <span className="text-xs font-mono font-bold text-sky-400 mb-1">$480M</span>
                        <div className="w-full bg-sky-500/80 rounded-t h-[65%]" />
                        <span className="text-[10px] text-neutral-400 mt-2 text-center line-clamp-1">Base</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center h-full justify-end">
                        <span className="text-xs font-mono font-bold text-emerald-400 mb-1">+$110M</span>
                        <div className="w-full bg-emerald-500/80 rounded-t h-[28%] mb-[65%]" />
                        <span className="text-[10px] text-neutral-400 mt-2 text-center line-clamp-1">Operations</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center h-full justify-end">
                        <span className="text-xs font-mono font-bold text-emerald-400 mb-1">+$85M</span>
                        <div className="w-full bg-emerald-500/80 rounded-t h-[20%] mb-[93%]" />
                        <span className="text-[10px] text-neutral-400 mt-2 text-center line-clamp-1">Supply Chain</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center h-full justify-end">
                        <span className="text-xs font-mono font-bold text-amber-400 mb-1">$675M</span>
                        <div className="w-full bg-amber-400 rounded-t h-[95%]" />
                        <span className="text-[10px] text-neutral-400 mt-2 text-center line-clamp-1">Target</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Bullet Points */}
                {currentSlide.bulletPoints && currentSlide.bulletPoints.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {currentSlide.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                          ✓
                        </div>
                        <span className={darkMode ? 'text-neutral-200' : 'text-neutral-700'}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* 4. Strategic Executive Callout */}
                {currentSlide.callout && (
                  <div className={`p-4 rounded-xl border-l-4 border-amber-400 ${
                    darkMode ? 'bg-neutral-900/80 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
                  }`}>
                    <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-amber-200' : 'text-neutral-900'}`}>
                      {currentSlide.callout}
                    </p>
                  </div>
                )}
              </div>

              {/* Master Slide Footer Governance Zone */}
              <div className="px-6 sm:px-8 py-3 border-t border-neutral-800/30 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>CONFIDENTIAL &amp; PROPRIETARY</span>
                <span>{currentProject.title}</span>
                <span>Slide {currentSlideIndex + 1}</span>
              </div>
            </div>

            {/* Navigation Filmstrip & Slide Stepper */}
            <div className="w-full max-w-4xl mt-6 flex flex-wrap items-center justify-between gap-4">
              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevSlide}
                  className="px-4 py-2 text-xs font-semibold rounded-xl border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <ChevronLeft size={16} />
                  <span>Previous</span>
                </button>
                <button
                  onClick={handleNextSlide}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 flex items-center gap-1.5 transition-all shadow-md shadow-amber-400/20 active:scale-95"
                >
                  <span>Next Slide</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Slide Thumbnails Selector */}
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {currentProject.slides.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      currentSlideIndex === idx
                        ? 'bg-neutral-200 text-neutral-950 font-bold ring-2 ring-amber-400'
                        : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                    }`}
                  >
                    #{idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Presenter Notes & Design Rationale Drawer */}
          {showNotes && (
            <div className="px-6 py-4 border-t border-neutral-800/80 bg-neutral-900/40 text-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FileText size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-200 block mb-0.5">Senior Designer Rationale &amp; Technical Execution:</strong>
                  <p className="text-neutral-400">
                    Engineered using strict corporate 12-column grid alignment, custom Think-cell linked parameters, and WCAG AA contrast compliance to ensure legibility across boardroom projection screens and mobile PDF review.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[11px] font-mono px-2 py-1 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                  Tool: {currentProject.tools.join(', ')}
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
