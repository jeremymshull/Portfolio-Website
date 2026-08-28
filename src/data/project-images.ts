import type { ImageMetadata } from 'astro';
import caseNotificationImage from '../../source-assets/images/case-sla-notification-email.png';
import weatherSearchImage from '../../source-assets/images/weather-lwc-search.png';

const projectImages: Readonly<Record<string, ImageMetadata>> = {
  'source-assets/images/case-sla-notification-email.png': caseNotificationImage,
  'source-assets/images/weather-lwc-search.png': weatherSearchImage,
};

export function getProjectImage(src?: string) {
  return src ? projectImages[src] : undefined;
}
