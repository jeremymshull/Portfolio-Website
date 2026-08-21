import type { Skill } from '../types/content';

const published = 'published' as const;

export const skills: readonly Skill[] = [
  ...[
    'Flows',
    'Validation Rules',
    'Reports & Dashboards',
    'Profiles',
    'Roles',
    'Permission Sets',
    'Custom Objects / Data Modeling',
    'Web-to-Case',
  ].map((name) => ({ name, category: 'Salesforce Platform' as const, publicationStatus: published })),
  ...[
    'Apex',
    'Scheduled Apex',
    'Triggers',
    'Classes',
    'Lightning Web Components',
    'SOQL',
    'JavaScript',
    'HTML',
    'CSS',
    'Unit Testing',
    'HttpCalloutMock',
  ].map((name) => ({ name, category: 'Development' as const, publicationStatus: published })),
  ...['REST Callouts', 'REST APIs', 'JSON Parsing and Response Handling', 'Named Credentials'].map(
    (name) => ({
      name,
      category: 'Automation and Integration' as const,
      publicationStatus: published,
    }),
  ),
  ...[
    'GitHub',
    'VS Code',
    'Salesforce CLI',
    'Jira',
    'Process Optimization',
    'Stakeholder Communication',
    'End-User Training & Support',
    'Requirements Gathering',
    'Problem Solving',
    'Cross-Functional Collaboration',
  ].map((name) => ({ name, category: 'Tools and Practices' as const, publicationStatus: published })),
];

export function getPublishedSkills() {
  return skills.filter((skill) => skill.publicationStatus === 'published');
}
