import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  livePreview?: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'dev' | 'ai' | 'tools';
}
