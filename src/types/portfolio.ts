export interface Project {
  id: string;
  title: string;
  category: 'C-Suite Pitch Decks' | 'Master Templates' | 'Think-cell & Data Viz' | 'On-Site London' | 'Branding & Editorial';
  description: string;
  image: string;
  highlights: string[];
  tools: string[];
  clientType: string;
  year: string;
  slidesCount: number;
  slides: SlideItem[];
}

export interface SlideItem {
  title: string;
  subtitle: string;
  layout: 'title' | 'metrics' | 'waterfall' | 'comparison' | 'timeline' | 'executive';
  metrics?: { label: string; value: string; delta?: string }[];
  bulletPoints?: string[];
  callout?: string;
  chartType?: string;
}

export interface ExperienceItem {
  company: string;
  designation: string;
  period: string;
  isCurrent: boolean;
  location: string;
  overview: string;
  responsibilities: string[];
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  scoreOrDetails?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    description: string;
    tags: string[];
  }[];
}

export interface CareerHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: string;
}
