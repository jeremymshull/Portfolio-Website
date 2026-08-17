import type { Certification } from '../types/content';

// Certifications remain empty until their names and issuer details are verified.
export const certifications: readonly Certification[] = [];

export function getPublishedCertifications() {
  return certifications.filter((certification) => certification.publicationStatus === 'published');
}
