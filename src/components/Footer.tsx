import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
  onOpenResume: () => void;
}

export function Footer({ darkMode, onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors ${darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-100 border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-800/40">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white text-[11px] font-bold">
                JK
              </span>
              <span className={`text-base font-bold font-display ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              Senior PowerPoint &amp; Presentation Designer · R R Donnelley &amp; Williams Lea Tag Veteran
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#simulator" className="hover:text-amber-400 transition-colors">Slide Simulator</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <button onClick={onOpenResume} className="hover:text-amber-400 transition-colors">
              Curriculum Vitae
            </button>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className={`p-2.5 rounded-xl border transition-colors flex items-center gap-1.5 text-xs ${
              darkMode ? 'border-neutral-800 hover:bg-neutral-900 text-neutral-300' : 'border-neutral-300 hover:bg-neutral-200 text-neutral-700'
            }`}
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} Jeffin J Kattampally. All presentation rights &amp; designs reserved.</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-neutral-300 transition-colors">
              {PERSONAL_INFO.email}
            </a>
            <span aria-hidden="true">·</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-neutral-300 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
