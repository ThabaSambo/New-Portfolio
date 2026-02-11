
import { Project, Skill, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Thaba Josiah Sambo",
  role: "Systems & Business Analyst",
  experience: "4+ years",
  location: "San Francisco, CA",
  phone: "+1 (555) 012-3456",
  email: "thaba.sambo@example.com",
  linkedin: "linkedin.com/in/thaba-josiah-sambo"
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ERP System Integration',
    category: 'Systems Analysis',
    description: 'Lead the gap analysis and architectural mapping for integrating a legacy supply chain system with a modern SAP ERP environment.',
    impact: 'Reduced data latency by 40% and eliminated redundant manual entry workflows across 3 departments.',
    tools: ['UML', 'REST APIs', 'SQL Server', 'SAP'],
    image: 'https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-3027.jpg',
    metrics: [
      { name: 'System Speed', value: 95 },
      { name: 'Data Accuracy', value: 98 }
    ]
  },
  {
    id: '2',
    title: 'Digital Banking Transformation',
    category: 'Business Analysis',
    description: 'End-to-end requirement elicitation for a new mobile banking platform, bridging communication between business stakeholders and developers.',
    impact: 'Successfully delivered 50+ user stories and SRS documentation that reduced development rework by 20%.',
    tools: ['JIRA', 'Confluence', 'Figma', 'User Stories'],
    image: 'https://img.freepik.com/free-vector/digital-banking-services-concept-illustration_114360-12836.jpg',
    metrics: [
      { name: 'Stakeholder Satisfaction', value: 92 },
      { name: 'On-time Delivery', value: 88 }
    ]
  },
  {
    id: '3',
    title: 'Cloud Migration Strategy',
    category: 'Systems Analysis',
    description: 'Analysed existing on-premise infrastructure and designed the logical architecture for a transition to AWS microservices.',
    impact: 'Decreased infrastructure overhead costs by $150k annually through optimized cloud resource planning.',
    tools: ['AWS', 'Enterprise Architect', 'Lucidchart', 'BPMN'],
    image: 'https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-631.jpg',
    metrics: [
      { name: 'Cost Reduction', value: 30 },
      { name: 'Scalability', value: 100 }
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'UML & BPMN 2.0', level: 95, category: 'Technical' },
  { name: 'SQL & DB Schema Design', level: 90, category: 'Technical' },
  { name: 'API Documentation (Swagger)', level: 85, category: 'Technical' },
  { name: 'Req. Elicitation (SRS)', level: 95, category: 'Domain' },
  { name: 'SDLC (Agile/Scrum)', level: 92, category: 'Domain' },
  { name: 'System Architecture', level: 88, category: 'Domain' },
  { name: 'Stakeholder Mgmt', level: 90, category: 'Soft' },
  { name: 'Technical Writing', level: 95, category: 'Soft' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'TechFlow Solutions',
    role: 'Systems & Business Analyst',
    period: '2021 - Present',
    description: [
      'Bridge the gap between business needs and technical solutions by translating high-level requirements into detailed system specifications.',
      'Design comprehensive UML diagrams including sequence, class, and use-case diagrams to guide development teams.',
      'Lead UAT (User Acceptance Testing) cycles and SIT (System Integration Testing) to ensure software quality.',
      'Optimized 15+ business processes using BPMN standards, resulting in significant operational efficiency gains.'
    ]
  }
];
