export type Language = "en" | "pt";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface MediaGalleryItem {
  title: string;
  url: string;
  caption: string;
}

export interface ProjectVisualPreview {
  type: "desktop" | "mobile";
  badge: string;
  caption: string;
  mediaUrl?: string;
  gallery?: MediaGalleryItem[];
}

export interface CaseStudy {
  id: string;
  title: string;
  role: string;
  tagline: string;
  domain: string;
  featured?: boolean;
  statusBadge?: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  metrics: ProjectMetric[];
  visualPreview: ProjectVisualPreview;
  architecture: {
    overview: string;
    flow: string[];
    technicalDecisions: string[];
  };
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    description: string;
    appliedIn?: string;
    tags: string[];
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  responsibilities: string[];
  impactMetric: string;
}

export interface PortfolioProfile {
  name: string;
  title: string;
  secondaryTitle: string;
  status: string;
  location: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    details: string;
  };
  corePrinciples: {
    principle: string;
    description: string;
  }[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    cvUrl?: string;
  };
}

export interface NavigationLabels {
  projects: string;
  skills: string;
  experience: string;
  about: string;
  contact: string;
  viewProjects: string;
  getInTouch: string;
  downloadCv?: string;
  source: string;
  backToTop: string;
  viewArchitecture: string;
  visitLive: string;
  problemLabel: string;
  solutionLabel: string;
  impactLabel: string;
  flowLabel: string;
  decisionsLabel: string;
  stackLabel: string;
  close: string;
  visualProofLabel: string;
  galleryView: string;
}

export interface PortfolioContent {
  profile: PortfolioProfile;
  caseStudies: CaseStudy[];
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  nav: NavigationLabels;
}
