import type { ImageMetadata } from 'astro';
import caseIntakeTitleCard from '../assets/project-title-cards/case-intake-and-sla-automation.webp';
import jobApplicationTitleCard from '../assets/project-title-cards/job-application-tracker.webp';
import slackContactTitleCard from '../assets/project-title-cards/slack-contact-quick-action.webp';
import weatherTitleCard from '../assets/project-title-cards/weather-lightning-web-component.webp';

export interface ProjectTitleCard {
  image: ImageMetadata;
  alt: string;
}

const projectTitleCards: Readonly<Record<string, ProjectTitleCard>> = {
  'case-intake-and-sla-automation': {
    image: caseIntakeTitleCard,
    alt: 'Generated abstract title artwork, not a project screenshot, showing a request document routed through SLA timing and notification symbols.',
  },
  'slack-contact-quick-action': {
    image: slackContactTitleCard,
    alt: 'Generated abstract title artwork, not a project screenshot, showing two contact symbols being relinked through a quick action.',
  },
  'weather-lightning-web-component': {
    image: weatherTitleCard,
    alt: 'Generated abstract title artwork, not a project screenshot, showing a location marker connected to cloud and sun symbols.',
  },
  'job-application-tracker': {
    image: jobApplicationTitleCard,
    alt: 'Generated abstract title artwork, not a project screenshot, showing an application moving through connected stages with follow-up task symbols.',
  },
};

export function getProjectTitleCard(projectId: string): ProjectTitleCard {
  const titleCard = projectTitleCards[projectId];

  if (!titleCard) {
    throw new Error(`No generated title card is mapped for published project "${projectId}".`);
  }

  return titleCard;
}
