import { Language, JobExperience, ProjectExperience } from "@/data/portfolio";

/**
 * Interface Segregation Principle (ISP):
 * Focused interfaces for experience timeline components.
 */

export interface ExperienceCardProps {
  experience: JobExperience;
  language: Language;
}

export interface ProjectExperienceItemProps {
  project: ProjectExperience;
  language: Language;
}
