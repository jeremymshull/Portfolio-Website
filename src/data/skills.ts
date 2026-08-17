import type { Skill } from '../types/content';

// Skills remain empty until each item and its supporting project evidence are verified.
export const skills: readonly Skill[] = [];

export function getPublishedSkills() {
  return skills.filter((skill) => skill.publicationStatus === 'published');
}
