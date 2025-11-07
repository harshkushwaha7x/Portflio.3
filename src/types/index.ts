export interface ProjectDetails {
  description: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveDemo: string;
  sourceCode: string;
  details: ProjectDetails;
}

export interface Skill {
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface NavItem {
  label: string;
  id: string;
}
