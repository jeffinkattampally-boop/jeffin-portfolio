import { useState, useEffect } from 'react';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Projects } from './components/Projects';
import { InteractiveSlideDeck } from './components/InteractiveSlideDeck';
import { Experience } from './components/Experience';
import { SkillsMatrix } from './components/SkillsMatrix';
import { HighlightsAndAwards } from './components/HighlightsAndAwards';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jeffin_portfolio_theme');
      if (saved) return saved === 'dark';
    }
    return true; // Default dark mode for immersive presentation aesthetic
  });

  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('jeffin_portfolio_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-neutral-950 text-neutral-100 antialiased selection:bg-amber-400 selection:text-neutral-950';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-neutral-50 text-neutral-900 antialiased selection:bg-amber-400 selection:text-neutral-950';
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 ${darkMode ? 'text-neutral-100' : 'text-neutral-900'}`}>
      {/* 3D WebGL Canvas Background */}
      <ThreeCanvas darkMode={darkMode} />

      {/* Primary Top Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="relative z-10">
        <Hero
          darkMode={darkMode}
          onOpenResume={() => setResumeOpen(true)}
        />

        <AboutSection
          darkMode={darkMode}
        />

        <Projects
          darkMode={darkMode}
        />

        <InteractiveSlideDeck
          darkMode={darkMode}
        />

        <Experience
          darkMode={darkMode}
        />

        <SkillsMatrix
          darkMode={darkMode}
        />

        <HighlightsAndAwards
          darkMode={darkMode}
        />

        <ContactSection
          darkMode={darkMode}
        />
      </main>

      {/* Minimal Anti-Slop Footer */}
      <Footer
        darkMode={darkMode}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Comprehensive Resume / CV Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
