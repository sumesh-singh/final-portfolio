export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  link?: string;
  description: string[];
  tech: string[];
  date: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  year: string;
  grade: string;
}