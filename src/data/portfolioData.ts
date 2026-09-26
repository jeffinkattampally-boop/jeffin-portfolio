import { Project, ExperienceItem, EducationItem, SkillCategory, CareerHighlight } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Jeffin J Kattampally',
  title: 'Senior PowerPoint & Presentation Designer',
  subtitle: 'Specializing in C-Suite Pitch Decks, Think-cell Visualizations & Corporate Master Templates',
  bio: 'With over 13 years of enterprise-level design experience across premier outsourcing powerhouses (R R Donnelley and Williams Lea Tag), I transform high-stakes strategic data and complex business narratives into elegant, persuasive presentations. Experienced in international on-site client consulting in London, UK.',
  email: 'jeffinkattampally@gmail.com',
  phone: '+91 9496034951',
  location: 'Kuravilangad, Kottayam (Dt), Kerala, India',
  linkedin: 'https://www.linkedin.com/in/jeffin-james-1b366b192/',
  avatar: '/src/assets/images/jeffin_profile_portrait_1790424132181.jpg',
  stats: [
    { label: 'Years Experience', value: '13+' },
    { label: 'Decks Delivered', value: '5,000+' },
    { label: 'On-Site London', value: 'Deployed' },
    { label: 'Graphics Skill', value: 'Level 3 Certified' },
  ],
  hobbies: [
    { name: 'Movies', description: 'Cinematic storytelling, visual pacing & lighting' },
    { name: 'Travelling', description: 'Exploring architecture, global culture & landscapes' },
    { name: 'Music', description: 'Acoustic & orchestral soundscapes for deep focus' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'csuite-ma-pitch',
    title: 'Global M&A Executive Pitch Deck',
    category: 'C-Suite Pitch Decks',
    description: 'A 45-slide high-stakes investment banking pitch deck designed for an international $2.4B acquisition advisory. Featured custom Think-cell valuation bridges, synergy forecasts, and boardroom-ready executive summaries.',
    image: '/src/assets/images/csuite_pitch_deck_mockup_1790424158567.jpg',
    highlights: [
      'Engineered McKinsey-standard waterfall & EBITDA bridge visualizations',
      'Developed modular deal-structure comparison frameworks for fast C-suite decisions',
      'Zero-defect delivery under 48-hour high-pressure turnaround time',
    ],
    tools: ['PowerPoint', 'Think-cell', 'Adobe Illustrator', 'MS Excel'],
    clientType: 'Global Investment Bank & Private Equity',
    year: '2024',
    slidesCount: 5,
    slides: [
      {
        title: 'Strategic Synergy & Acquisition Overview',
        subtitle: 'Executive Briefing — Target Valuation $2.4B',
        layout: 'executive',
        metrics: [
          { label: 'Enterprise Value', value: '$2.4B', delta: '+18% YoY' },
          { label: 'Expected Synergies', value: '$340M', delta: 'Year 2 Target' },
          { label: 'IRR Projection', value: '24.5%', delta: 'Base Case' },
        ],
        bulletPoints: [
          'Direct alignment with Core Growth Horizons and digital infrastructure portfolio',
          'Immediate cross-selling leverage across European and North American enterprise accounts',
          'Conservative 18-month integration timeline with preserved EBITDA margin of 32%',
        ],
        callout: 'Board Recommendation: Authorize final binding offer with 65/35 debt-equity structure.',
      },
      {
        title: 'Pro-Forma EBITDA Bridge (2024 - 2027)',
        subtitle: 'Think-cell Waterfall Model — Consolidated Operations',
        layout: 'waterfall',
        chartType: 'Think-cell Waterfall Chart',
        metrics: [
          { label: '2024 Base EBITDA', value: '$480M' },
          { label: 'Operational Efficiencies', value: '+$110M' },
          { label: 'Supply Chain Consolidation', value: '+$85M' },
          { label: '2027 Target EBITDA', value: '$675M' },
        ],
        bulletPoints: [
          'Supply chain savings verified by third-party forensic audit',
          'Headcount rationalization accounts for less than 15% of total cost synergy pool',
        ],
      },
      {
        title: 'Competitive Market Landscape & Positioning',
        subtitle: 'Quadrant Matrix: Tech Differentiation vs. Scale',
        layout: 'comparison',
        bulletPoints: [
          'Target entity occupies the top-right high-differentiation tier in Northern Europe',
          'Barriers to entry: 14 active proprietary patents and ISO 27001 tier-4 compliant data centers',
          'Immediate competitive moat against legacy regional incumbents',
        ],
      },
      {
        title: 'Phased Integration Roadmap & Milestones',
        subtitle: '100-Day Executive Governance Framework',
        layout: 'timeline',
        bulletPoints: [
          'Day 0-30: Leadership alignment, IT infrastructure bridge, customer retention protocol',
          'Day 31-60: Unified enterprise brand deployment & procurement contract renegotiations',
          'Day 61-100: Global workforce harmonization and automated ERP synchronization',
        ],
      },
      {
        title: 'Board Decision Memorandum & Next Steps',
        subtitle: 'Final Authorization Schedule and Capital Drawdown',
        layout: 'title',
        callout: 'Unanimous vote requested for Special Resolution 04 to proceed with escrow deposit.',
      },
    ],
  },
  {
    id: 'fortune-master-template',
    title: 'Enterprise Master Slide Design System',
    category: 'Master Templates',
    description: 'Architected a comprehensive corporate master template system comprising 60+ bespoke layout masters, color palette rules, automated typography hierarchy, and reusable vector icon libraries used by 4,000+ employees.',
    image: '/src/assets/images/corporate_master_template_1790424169859.jpg',
    highlights: [
      '60+ slide layouts designed for 16:9 widescreen and 4:3 legacy compatibility',
      'Embedded custom corporate color palettes with locked accessible contrast levels',
      'Automated table styles, bullet indent standards, and brand-compliant chart color cycles',
    ],
    tools: ['PowerPoint Master Slides', 'Adobe Illustrator', 'MS Word', 'Typography Engine'],
    clientType: 'Multinational Healthcare & Life Sciences Corp',
    year: '2023',
    slidesCount: 4,
    slides: [
      {
        title: 'Master Template Architecture & Brand Foundations',
        subtitle: 'Global Presentation Design System v3.2',
        layout: 'title',
        bulletPoints: [
          'Unified design language aligning print editorial collateral with screen-first decks',
          'Automated placeholder hierarchy preventing unauthorized font distortions',
          'Dual dark/light mode master sets tailored for virtual web conferences vs auditorium projection',
        ],
      },
      {
        title: 'Grid Hierarchy & Typography Governance',
        subtitle: 'Optical Alignments and Dynamic Layout Containers',
        layout: 'comparison',
        metrics: [
          { label: 'Layout Masters', value: '64' },
          { label: 'Color Accents', value: '6 Tested' },
          { label: 'Icon Library', value: '450+ Vectors' },
        ],
        bulletPoints: [
          '12-column dynamic modular grid supporting 1 to 4 split-column compositions',
          'Hardcoded margins ensuring strict 40px safe zones across any television or projector',
        ],
      },
      {
        title: 'Pre-Formatted Analytical Data Containers',
        subtitle: 'Standardized Tables, KPI Cards, and Process Flows',
        layout: 'metrics',
        metrics: [
          { label: 'Quarterly Revenue', value: '$1.82B', delta: '+12.4%' },
          { label: 'Operating Margin', value: '28.6%', delta: '+140 bps' },
          { label: 'Customer Retention', value: '98.2%', delta: 'All-time high' },
        ],
      },
      {
        title: 'Executive Summary Layout Variations',
        subtitle: 'Ready-to-use Boardroom Briefing Templates',
        layout: 'executive',
        bulletPoints: [
          'Pre-configured callout blocks with contrast-compliant accents',
          'Built-in citation markers and footnote metadata zones',
        ],
      },
    ],
  },
  {
    id: 'thinkcell-data-viz',
    title: 'Financial & Strategic Data Visualization Suite',
    category: 'Think-cell & Data Viz',
    description: 'Advanced financial data visualization suite utilizing Think-cell integrated with Excel workbooks. Built complex McKinsey-style Mekko charts, CAGR compound growth projections, and operational waterfall analyses for Fortune 100 quarterly reporting.',
    image: '/src/assets/images/financial_data_viz_charts_1790424181859.jpg',
    highlights: [
      'Developed 80+ dynamic Think-cell charts directly linked to multi-sheet Excel data models',
      'Automated CAGR arrows, level difference lines, and broken axis representations',
      'Reduced executive chart update cycle time from 4 hours to 15 minutes per deck',
    ],
    tools: ['Think-cell', 'MS Excel', 'PowerPoint', 'Financial Modeling'],
    clientType: 'Tier 1 Strategy Consulting Firm',
    year: '2023 - 2024',
    slidesCount: 4,
    slides: [
      {
        title: 'Five-Year Regional Revenue Trajectory',
        subtitle: 'Think-cell CAGR Comparison by Operating Geography',
        layout: 'metrics',
        metrics: [
          { label: 'North America CAGR', value: '+14.2%' },
          { label: 'Europe & UK CAGR', value: '+9.8%' },
          { label: 'Asia-Pacific CAGR', value: '+22.6%' },
        ],
        bulletPoints: [
          'Asia-Pacific outperforming original guidance by 340 basis points',
          'Foreign exchange impact normalized using constant currency 2021 baseline',
        ],
      },
      {
        title: 'Cost Structure Deconstruction & Net Margin Waterfall',
        subtitle: 'COGS, SG&A, R&D Allocations vs Operating Free Cash Flow',
        layout: 'waterfall',
        chartType: 'Think-cell Waterfall',
        metrics: [
          { label: 'Gross Revenue', value: '$1,200M' },
          { label: 'Direct COGS', value: '-$540M' },
          { label: 'SG&A & Marketing', value: '-$210M' },
          { label: 'R&D Innovation', value: '-$130M' },
          { label: 'Operating Profit', value: '$320M' },
        ],
      },
      {
        title: 'Product Category Market Share Mekko Analysis',
        subtitle: 'Market Size by Segment vs Relative Competitive Share',
        layout: 'comparison',
        bulletPoints: [
          'Enterprise Software segment represents 48% of total addressable market',
          'SaaS recurring contracts grew to 71% of net new annual recurring revenue',
        ],
      },
      {
        title: 'Capital Expenditure & Free Cash Flow Forecast',
        subtitle: '2024–2028 Debt Service Capacity & Liquidity Headroom',
        layout: 'executive',
        callout: 'Total available liquidity exceeds $850M, providing substantial buffer for opportunistic bolt-on acquisitions.',
      },
    ],
  },
  {
    id: 'london-onsite-deployment',
    title: 'London On-Site Executive Design Engagement',
    category: 'On-Site London',
    description: 'Selected for exclusive overseas on-site deployment in London, United Kingdom. Provided live, real-time presentation design and consultative graphics support directly to C-suite partners and managing directors during high-priority European bids.',
    image: '/src/assets/images/london_skyline_corporate_1790424146206.jpg',
    highlights: [
      'Direct face-to-face consultative requirements gathering with executive stakeholders in London',
      'Delivered same-day turnaround on confidential bid proposals and tender presentations',
      'Established high-speed offshore-to-onshore workflow bridge that boosted team turnaround by 35%',
    ],
    tools: ['PowerPoint', 'Adobe Creative Suite', 'Client Consultation', 'Workflow Management'],
    clientType: 'Global Enterprise & UK Management Office',
    year: 'On-Site Deployment',
    slidesCount: 3,
    slides: [
      {
        title: 'London On-Site Engagement Overview',
        subtitle: 'Canary Wharf & City of London Enterprise Delivery',
        layout: 'title',
        bulletPoints: [
          'Embedment within client strategy teams for rapid-fire pitch deck iterations',
          'Direct briefing sessions with Managing Directors, Partners, and Heads of Strategy',
          'Bridging communications between London onshore leads and Indian offshore design centers',
        ],
      },
      {
        title: 'High-Impact Tender & RFP Success Rate',
        subtitle: 'Key Metrics from On-Site Design Interventions',
        layout: 'metrics',
        metrics: [
          { label: 'Major Bids Delivered', value: '42' },
          { label: 'RFP Win Rate', value: '88%' },
          { label: 'Client Commendations', value: '100% 5★' },
        ],
      },
      {
        title: 'Onshore-Offshore Queue Harmonization',
        subtitle: 'Operating Playbook for Cross-Timezone Design Operations',
        layout: 'timeline',
        bulletPoints: [
          'Implemented standardized intake ticket schemas eliminating ambiguous rework requests',
          'Conducted hands-on training for junior designers on international executive standards',
        ],
      },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'R R Donnelley India Outsource (P) Ltd.',
    designation: 'Senior PowerPoint Designer',
    period: 'May 2022 – Present',
    isCurrent: true,
    location: 'Kerala, India',
    overview: 'Serving as Senior PowerPoint Designer driving mission-critical presentation collateral for premier global enterprise clients, consulting groups, and Fortune 500 corporations.',
    responsibilities: [
      'Design high-stakes C-suite PowerPoint presentations, pitch decks, and executive briefings under tight deadlines.',
      'Design and engineer customized, brand-compliant corporate master templates for global organizations.',
      'Direct client communication to gather specifications, interpret complex business ideas, and translate them into visual stories.',
      'Manage work queues and ensure strict adherence to service level agreements (SLAs) across global shifts.',
      'Execute rigorous Quality Checks (QC) on presentations and documents to ensure zero typographical or layout errors.',
      'Provide training, technical upskilling, and mentorship for new joiners and junior presentation specialists.',
      'Design executive collateral, banners, brochures, and posters with Adobe Creative Suite applications.',
    ],
    achievements: [
      'Recognized with Performance Awards for best performance of the quarter.',
      'Honored with the Award for highest number of positive client feedback and commendations.',
      'Pioneered complex Think-cell data visualization workflows adopted by the wider production floor.',
    ],
  },
  {
    company: 'Williams Lea Tag',
    designation: 'PowerPoint Designer',
    period: 'May 2013 – May 2022',
    isCurrent: false,
    location: 'India & On-Site London, UK',
    overview: 'Nine years of dedicated presentation design excellence delivering world-class corporate communications for international financial institutions and global advisory accounts.',
    responsibilities: [
      'Created bespoke presentation slide decks, client pitches, and board reporting decks.',
      'Selected for prestigious on-site client deployment to London, UK to work directly with executives.',
      'Created standardized executive documents and automated reporting formats using MS Word and MS Excel.',
      'Executed photo editing, vector illustration, and graphical enhancements with Adobe Photoshop and Illustrator.',
      'Maintained brand identity guidelines across thousands of corporate presentations.',
      'Collaborated seamlessly across international project management teams to deliver 24/7 global coverage.',
    ],
    achievements: [
      'Opportunity to visit and work On-site in London, UK delivering mission-critical bids.',
      'Successfully cleared and passed Skill Level 3 in Graphics Design.',
      'Consistently ranked among the top-tier designers for speed, visual precision, and customer satisfaction.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Sc Information Technology (I.T)',
    institution: 'AJK College of Arts and Science',
    location: 'Coimbatore, Tamil Nadu',
    year: '2011',
    scoreOrDetails: 'Graduated with strong technical foundation in computational media, digital layouts, and software systems.',
  },
  {
    degree: 'Plus Two (Higher Secondary)',
    institution: 'Govt. Boys Higher Secondary School',
    location: 'Palakkad, Kerala',
    year: '2008',
    scoreOrDetails: 'Completed higher secondary education in science and mathematics.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Presentation & Master Templates',
    skills: [
      {
        name: 'PowerPoint Presentation',
        level: 98,
        experience: '13+ Years',
        description: 'Elite-level mastery of slide masters, custom animations, transitions, grid systems, aspect ratios, and visual storytelling.',
        tags: ['Master Slides', 'Custom Themes', 'Kinetic Animation', 'C-Suite Decks'],
      },
      {
        name: 'Custom Template Architecture',
        level: 96,
        experience: '13+ Years',
        description: 'Building bulletproof enterprise-wide PowerPoint templates with locked typography, strict color rules, and modular layout variations.',
        tags: ['Brand Guidelines', 'Typography Sets', 'Color Palettes', 'Layout Systems'],
      },
      {
        name: 'Presentation Quality Check (QC)',
        level: 95,
        experience: '10+ Years',
        description: 'Meticulous eye for alignment, typography consistency, brand compliance, and zero-defect executive review.',
        tags: ['Zero-Defect', 'Format Governance', 'SLA Adherence', 'Proofreading'],
      },
    ],
  },
  {
    category: 'Financial Data Visualization',
    skills: [
      {
        name: 'Think-cell',
        level: 95,
        experience: '10+ Years',
        description: 'Advanced consulting-grade charts: waterfall models, Mekko charts, CAGR arrows, compound bridges, and Gantt project roadmaps.',
        tags: ['Waterfall Charts', 'Mekko Diagrams', 'CAGR Models', 'Excel Linking'],
      },
      {
        name: 'MS Excel Data Integration',
        level: 88,
        experience: '12+ Years',
        description: 'Clean data formatting, dynamic chart sourcing, and seamless embedding into high-fidelity PowerPoint deliverables.',
        tags: ['Data Tables', 'Dynamic Linking', 'Chart Automation', 'Modeling'],
      },
    ],
  },
  {
    category: 'Adobe Creative Suite',
    skills: [
      {
        name: 'Adobe Illustrator',
        level: 90,
        experience: '11+ Years',
        description: 'Precision vector iconography, custom infographics, process maps, corporate logos, and scalable presentation assets.',
        tags: ['Vector Graphics', 'Custom Icons', 'Infographics', 'Brand Assets'],
      },
      {
        name: 'Adobe Photoshop',
        level: 88,
        experience: '11+ Years',
        description: 'High-end photo retouching, background extractions, lighting adjustments, composite mockups, and visual texturing.',
        tags: ['Photo Retouching', 'Compositing', 'Masking', 'Visual Grading'],
      },
      {
        name: 'Adobe InDesign',
        level: 85,
        experience: '8+ Years',
        description: 'Multi-page executive brochures, annual corporate reports, whitepapers, and editorial print publishing.',
        tags: ['Editorial Layout', 'Brochures', 'Print Publishing', 'Typesetting'],
      },
    ],
  },
  {
    category: 'Consulting & Leadership',
    skills: [
      {
        name: 'Client Requirements Consultation',
        level: 94,
        experience: '13+ Years',
        description: 'Interpreting rough sketches, complex verbal briefs, and raw executive ideas into polished, high-impact decks.',
        tags: ['Global Clients', 'Stakeholder Comms', 'Storyboarding', 'Briefing'],
      },
      {
        name: 'Work Queue & SLA Management',
        level: 92,
        experience: '8+ Years',
        description: 'Allocating resources, managing multi-tier priority shifts, and consistently hitting tight deadlines across time zones.',
        tags: ['Queue Allocation', 'SLA Tracking', 'Turnaround Velocity', 'Offshore Ops'],
      },
      {
        name: 'Mentorship & New Joiner Training',
        level: 92,
        experience: '7+ Years',
        description: 'Developing curriculum and coaching onboarding presentation designers on global design standards and software tools.',
        tags: ['Talent Upskilling', 'Training Modules', 'Peer Reviews', 'Workshops'],
      },
    ],
  },
];

export const CAREER_HIGHLIGHTS: CareerHighlight[] = [
  {
    id: 'london-onsite',
    title: 'On-Site London Deployment',
    subtitle: 'International Client Engagement · United Kingdom',
    description: 'Awarded the exclusive opportunity to travel and work on-site in London, UK, collaborating directly with executive stakeholders on mission-critical proposals.',
    badge: 'International On-Site',
    iconName: 'PlaneTakeoff',
  },
  {
    id: 'skill-level-3',
    title: 'Passed Skill Level 3 Certification',
    subtitle: 'Graphic & Presentation Design Excellence',
    description: 'Attained prestigious Level 3 Graphic Design qualification, certifying advanced design theory, visual hierarchy, and mastery of corporate presentation toolsets.',
    badge: 'Certified Level 3',
    iconName: 'Award',
  },
  {
    id: 'quarter-award',
    title: 'Best Performance of the Quarter',
    subtitle: 'R R Donnelley Performance Recognition',
    description: 'Conferred performance award in recognition of outstanding delivery velocity, flawless quality control, and executive client handling under pressure.',
    badge: 'Quarterly Honor',
    iconName: 'Trophy',
  },
  {
    id: 'client-feedback',
    title: 'Highest Client Commendations Award',
    subtitle: 'Outstanding Customer Satisfaction Record',
    description: 'Recognized for receiving the highest tally of verified 5-star commendations and glowing direct client feedback across the global production floor.',
    badge: 'Client Choice',
    iconName: 'Star',
  },
];
