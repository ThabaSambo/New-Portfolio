
import { Project, Skill, Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: "Thaba Josiah Sambo",
  role: "Systems & Business Analyst",
  experience: "3+ years",
  location: "South Africa",
  phone: "076 211 9498",
  email: "thabasambo@gmail.com",
  linkedin: "linkedin.com/in/thaba-sambo-2aaa85236",
  github: "github.com/ThabaSambo"
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Future Value Calculator',
    category: 'Fintech Development',
    description: 'A tool designed to estimate potential future values of investments based on provided variables, built with a focus on financial precision.',
    impact: 'Empowered users to make data-driven investment decisions using a streamlined custom calculation engine.',
    tools: ['Java', 'Springboot', 'Custom Framework', 'Financial Logic'],
    image: 'https://img.freepik.com/free-vector/payment-information-concept-illustration_114360-2814.jpg',
    metrics: []
  },
  {
    id: '2',
    title: 'Attendance Management System',
    category: 'Operations & Systems',
    description: 'A robust solution designed to efficiently track learner and "geek" check-ins and check-outs, automating the entire attendance workflow.',
    impact: 'Eliminated manual errors in time tracking and improved operational management of learner attendance records.',
    tools: ['Springboot', 'Angular', 'Postgres', 'REST API'],
    image: 'https://img.freepik.com/free-vector/checking-attendance-concept-illustration_114360-7813.jpg',
    metrics: []
  },
  {
    id: '3',
    title: 'Decorexy (AI E-commerce)',
    category: 'E-commerce & AI',
    description: 'An E-commerce platform for furniture sales featuring a unique vendor verification system to ensure products meet minimum requirements.',
    impact: 'Integrated Gemini AI Studio to automate furniture quality checks, ensuring a high-standard marketplace for all users.',
    tools: ['React', 'Java', 'Springboot', 'AI Studio (Gemini)'],
    image: 'https://img.freepik.com/free-vector/shopping-app-concept-illustration_114360-1141.jpg',
    metrics: []
  },
  {
    id: '4',
    title: 'FRS – Account Balance Manager (FNB)',
    category: 'Requirements Engineering',
    description: 'Documented detailed Functional Requirements Specifications (FRS) for FNB’s Account Balance Manager system.',
    impact: 'Provided a comprehensive technical roadmap that successfully bridged the gap between business stakeholders and developers.',
    tools: ['Functional Specs', 'Stakeholder Mgmt', 'Banking Systems', 'BPMN'],
    image: 'https://img.freepik.com/free-vector/business-contract-concept-illustration_114360-4892.jpg',
    metrics: []
  }
];

export const SKILLS: Skill[] = [
  { name: 'UML & BPMN 2.0', level: 95, category: 'Technical' },
  { name: 'Java & Springboot', level: 88, category: 'Technical' },
  { name: 'SQL & DB Schema Design', level: 90, category: 'Technical' },
  { name: 'Req. Elicitation (SRS/FRS)', level: 95, category: 'Domain' },
  { name: 'SDLC (Agile/Scrum)', level: 92, category: 'Domain' },
  { name: 'System Architecture', level: 88, category: 'Domain' },
  { name: 'Stakeholder Mgmt', level: 90, category: 'Soft' },
  { name: 'Technical Writing', level: 95, category: 'Soft' }
];

export const EDUCATION: Education[] = [
  {
    institution: "Vaal University Of Technology",
    degree: "Advanced Diploma in Information Technology",
  },
  {
    institution: "Vaal University Of Technology",
    degree: "Diploma in Information Technology",
  },
  {
    institution: "Inkomazi Secondary School",
    degree: "Grade 12 National Senior Certificate",
  }
];

export const CERTIFICATIONS = [
  "Code C1 Drivers License"
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'FNB South Africa',
    role: 'Junior System Analyst',
    period: 'June 2023 - Present',
    description: [
      'Conducted requirement analysis sessions with stakeholders and assisted in preparing documentation for new features.',
      'Conducted requirements gathering sessions and documented user and software requirements.',
      'Developed and tested APIs, ensuring integration with core banking services.',
      'System Analyst Project: Documented a Functional Requirements Specification (FRS) for the Account Balance Manager (ABM) project, aligning business requirements with technical design and providing clear guidelines for developers and QA teams.',
      'Collaborated with multiple teams to define and improve business processes and enterprise workflows.',
      'Provided strategic recommendations on system enhancements and product performance improvements.',
      'Monitored project status reports and contributed to continuous process improvement.',
      'Key Achievement: Successfully bridged the gap between business stakeholders and developers by preparing a detailed FRS that improved communication and reduced misinterpretation in project delivery.'
    ]
  }
];
