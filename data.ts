
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTech Process Optimization',
    category: 'Operations',
    description: 'Conducted a deep-dive analysis of mortgage application workflows, identifying bottlenecks that caused a 15-day delay in processing.',
    impact: 'Reduced application-to-approval time by 40% and improved customer satisfaction scores by 25%.',
    tools: ['SQL', 'Tableau', 'Visio', 'Excel VBA'],
    image: 'https://picsum.photos/seed/fintech/800/600',
    metrics: [
      { name: 'Before (Days)', value: 45 },
      { name: 'After (Days)', value: 27 }
    ]
  },
  {
    id: '2',
    title: 'Market Expansion Strategy',
    category: 'Strategy',
    description: 'Leveraged Python and Google Analytics data to forecast market trends for a retail giant entering the SE Asia market.',
    impact: 'Estimated a $5M first-year revenue opportunity with 85% confidence interval accuracy.',
    tools: ['Python', 'Pandas', 'PowerBI', 'Market Segmentation'],
    image: 'https://picsum.photos/seed/market/800/600',
    metrics: [
      { name: 'Market Reach %', value: 85 },
      { name: 'Revenue Growth %', value: 12 }
    ]
  },
  {
    id: '3',
    title: 'Supply Chain Digitization',
    category: 'Supply Chain',
    description: 'Requirement gathering and stakeholder management for an end-to-end ERP migration affecting 500+ global users.',
    impact: 'Achieved 98% user adoption rate within the first 3 months of rollout.',
    tools: ['JIRA', 'Confluence', 'User Stories', 'ERP'],
    image: 'https://picsum.photos/seed/supply/800/600',
    metrics: [
      { name: 'Adoption Rate %', value: 98 },
      { name: 'Efficiency Gain %', value: 30 }
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'SQL & Database Management', level: 90, category: 'Technical' },
  { name: 'Tableau / PowerBI', level: 95, category: 'Technical' },
  { name: 'Python (Data Analysis)', level: 80, category: 'Technical' },
  { name: 'Requirements Engineering', level: 95, category: 'Domain' },
  { name: 'Agile/Scrum Methodology', level: 85, category: 'Domain' },
  { name: 'Stakeholder Management', level: 90, category: 'Soft' },
  { name: 'Critical Thinking', level: 95, category: 'Soft' },
  { name: 'Public Speaking', level: 80, category: 'Soft' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Global Analytics Corp',
    role: 'Senior Business Analyst',
    period: '2021 - Present',
    description: [
      'Lead cross-functional teams to deliver enterprise-wide data solutions.',
      'Managed a portfolio of projects valued at $2.5M annually.',
      'Mentored 5 junior analysts in requirement elicitation and SQL optimization.'
    ]
  },
  {
    company: 'Startup Hub',
    role: 'Business Operations Analyst',
    period: '2019 - 2021',
    description: [
      'Developed real-time dashboards for C-suite performance tracking.',
      'Automated reporting workflows saving 20 man-hours per week.',
      'Conducted competitive market analysis for series B funding round.'
    ]
  }
];
