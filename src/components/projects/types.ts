import { Language, PersonalProject } from "@/data/portfolio";

/**
 * Interface Segregation Principle (ISP):
 * Fine-grained prop interfaces ensuring components only depend on the data they strictly consume.
 */

export interface ProjectPreviewProps {
  language: Language;
}

export interface ProjectActionsProps {
  githubUrl?: string;
  liveUrl?: string;
  isPrivateRepo?: boolean;
  language: Language;
}

export interface ProjectFeaturesProps {
  features: string[];
  language: Language;
}

export interface ProjectTechStackProps {
  technologies: string[];
  language: Language;
}

export interface ProjectCardProps {
  project: PersonalProject;
  language: Language;
}
