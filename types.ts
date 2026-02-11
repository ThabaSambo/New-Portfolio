
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  tools: string[];
  image: string;
  metrics: { name: string; value: number }[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Technical' | 'Soft' | 'Domain';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
