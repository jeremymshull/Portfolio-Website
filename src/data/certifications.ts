import type { Certification } from '../types/content';
import { siteProfile } from './site';

export const certifications: readonly Certification[] = [
  {
    name: 'Salesforce Certified Administrator',
    issuer: 'Salesforce',
    earnedDate: 'July 2025',
    verificationUrl: siteProfile.trailhead,
    publicationStatus: 'published',
  },
  {
    name: 'Salesforce Platform Developer I',
    issuer: 'Salesforce',
    earnedDate: 'January 2025',
    verificationUrl: siteProfile.trailhead,
    publicationStatus: 'published',
  },
];

export function getPublishedCertifications() {
  return certifications.filter((certification) => certification.publicationStatus === 'published');
}
