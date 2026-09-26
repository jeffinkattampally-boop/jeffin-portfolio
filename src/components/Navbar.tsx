import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export function Navbar({ darkMode, onToggleTheme, onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Featured Work', href: '#projects' },
    { label: 'Slide Deck Simulator', href: '#simulator' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/20'
            : 'bg-white/85 backdrop-blur-md border-b border-neutral-200 shadow-md shadow-neutral-200/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight transition-colors flex items-center gap-2 group font-display"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            JK
          </span>
          <span className={darkMode ? 'text-white' : 'text-neutral-900'}>
            Jeffin J Kattampally
          </span>
        </a>

        {/* Zone 2: Clean 4–6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors relative py-1 hover:underline underline-offset-8 decoration-amber-500 decoration-2 ${
                darkMode ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Resume Quick Action */}
          <button
            onClick={onOpenResume}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
              darkMode
                ? 'border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200'
                : 'border-neutral-300 bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
            }`}
          >
            <span>View CV</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className={`p-2 rounded-lg border transition-all ${
              darkMode
                ? 'border-neutral-800 bg-neutral-900 text-amber-400 hover:bg-neutral-800'
                : 'border-neutral-200 bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-lg shadow-sm shadow-amber-400/25 transition-all whitespace-nowrap"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg md:hidden border transition-colors ${
              darkMode
                ? 'border-neutral-800 text-neutral-300 hover:bg-neutral-900'
                : 'border-neutral-200 text-neutral-700 hover:bg-neutral-100'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 border-b transition-all ${
            darkMode
              ? 'bg-neutral-950/95 border-neutral-800 text-neutral-200'
              : 'bg-white/95 border-neutral-200 text-neutral-800'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-800/40 flex items-center gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 py-2 text-xs font-semibold text-center rounded-lg border border-neutral-700"
              >
                View CV
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 text-xs font-semibold text-center text-neutral-950 bg-amber-400 rounded-lg"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
