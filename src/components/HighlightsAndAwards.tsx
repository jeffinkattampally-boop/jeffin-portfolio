import { Trophy, Plane, Award, Star, Film, Compass, Headphones, Sparkles, ArrowRight } from 'lucide-react';
import { CAREER_HIGHLIGHTS, PERSONAL_INFO } from '../data/portfolioData';

interface HighlightsAndAwardsProps {
  darkMode: boolean;
}

export function HighlightsAndAwards({ darkMode }: HighlightsAndAwardsProps) {
  const getHighlightIcon = (name: string) => {
    switch (name) {
      case 'PlaneTakeoff':
        return <Plane className="text-sky-400" size={24} />;
      case 'Award':
        return <Award className="text-amber-400" size={24} />;
      case 'Trophy':
        return <Trophy className="text-emerald-400" size={24} />;
      default:
        return <Star className="text-indigo-400" size={24} />;
    }
  };

  const getHobbyIcon = (name: string) => {
    switch (name) {
      case 'Movies':
        return <Film size={22} className="text-amber-400" />;
      case 'Travelling':
        return <Compass size={22} className="text-sky-400" />;
      default:
        return <Headphones size={22} className="text-purple-400" />;
    }
  };

  return (
    <section id="highlights" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-2">
            <Trophy size={14} />
            <span>Honors &amp; International Milestones</span>
            <span aria-hidden="true">·</span>
            <span>Distinguished Service</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-950'
            }`}
          >
            Career Highlights &amp; Accolades
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Milestones that define 13+ years of delivering uncompromising quality for international leaders.
          </p>
        </div>

        {/* 4 Core Career Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {CAREER_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode
                  ? 'bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/50'
                  : 'bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-xl'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                  {getHighlightIcon(item.iconName)}
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60 text-amber-400">
                  {item.badge}
                </span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold font-display mb-1 ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                {item.title}
              </h3>
              <p className="text-xs font-mono text-neutral-400 mb-3">
                {item.subtitle}
              </p>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Creative Inspirations & Hobbies Section */}
        <div className="pt-8 border-t border-neutral-800/60">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            <span>Beyond the Boardroom</span>
            <span aria-hidden="true">·</span>
            <span>Creative Inspirations</span>
          </div>

          <h3 className={`text-2xl font-bold font-display mb-6 ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
            Personal Interests &amp; Creative Influences
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERSONAL_INFO.hobbies.map((hobby) => (
              <div
                key={hobby.name}
                className={`p-6 rounded-2xl border transition-all ${
                  darkMode ? 'bg-neutral-900/30 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    {getHobbyIcon(hobby.name)}
                  </div>
                  <h4 className={`text-lg font-bold font-display ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                    {hobby.name}
                  </h4>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
