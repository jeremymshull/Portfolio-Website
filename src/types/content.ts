export const publicationStatuses = ['draft', 'published'] as const;

export type PublicationStatus = (typeof publicationStatuses)[number];

export const projectContexts = ['personal', 'training', 'volunteer', 'professional'] as const;

export type ProjectContext = (typeof projectContexts)[number];

export const skillCategories = [
  'Salesforce Platform',
  'Development',
  'Automation and Integration',
  'Tools and Practices',
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export interface Skill {
  name: string;
  category: SkillCategory;
  publicationStatus: PublicationStatus;
  description?: string;
  evidenceProjectIds?: readonly string[];
}

export interface Certification {
  name: string;
  issuer: string;
  publicationStatus: PublicationStatus;
  earnedDate?: string;
  verificationUrl?: string;
}
