import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { projectContexts, publicationStatuses } from './types/content';

const nonEmptyText = z.string().trim().min(1);

const projectMediaSchema = z.object({
  kind: z.enum(['screenshot', 'diagram']),
  src: nonEmptyText,
  alt: nonEmptyText,
  caption: nonEmptyText.optional(),
});

const projectLinkSchema = z.object({
  kind: z.enum(['repository', 'demo']),
  label: nonEmptyText,
  url: z.url(),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z
    .object({
      title: nonEmptyText,
      publicationStatus: z.enum(publicationStatuses).default('draft'),
      featured: z.boolean().default(false),
      order: z.number().int().nonnegative().optional(),
      context: z.enum(projectContexts).optional(),
      contextDescription: nonEmptyText.optional(),
      summary: nonEmptyText.optional(),
      cardProblem: nonEmptyText.optional(),
      cardSolution: nonEmptyText.optional(),
      cardTechnologies: z.array(nonEmptyText).min(1).optional(),
      businessProblem: nonEmptyText.optional(),
      stakeholders: z.array(nonEmptyText).min(1).optional(),
      solution: nonEmptyText.optional(),
      architecture: z.array(nonEmptyText).min(1).optional(),
      keyFeatures: z.array(nonEmptyText).min(1).optional(),
      technicalDecisions: z.array(nonEmptyText).min(1).optional(),
      technologies: z.array(nonEmptyText).min(1).optional(),
      testing: z.array(nonEmptyText).min(1).optional(),
      challenges: z.array(nonEmptyText).min(1).optional(),
      lessonsLearned: z.array(nonEmptyText).min(1).optional(),
      futureImprovements: z.array(nonEmptyText).min(1).optional(),
      impactNote: nonEmptyText.optional(),
      evidenceNote: nonEmptyText.optional(),
      mediaUnavailableReason: nonEmptyText.optional(),
      media: z.array(projectMediaSchema).min(1).optional(),
      links: z.array(projectLinkSchema).min(1).optional(),
    })
    .superRefine((project, context) => {
      if (project.publicationStatus !== 'published') return;

      const requiredPublishedFields = [
        'context',
        'contextDescription',
        'summary',
        'businessProblem',
        'solution',
        'technologies',
      ] as const;

      for (const field of requiredPublishedFields) {
        if (project[field] === undefined) {
          context.addIssue({
            code: 'custom',
            path: [field],
            message: `Published projects require ${field}.`,
          });
        }
      }
    }),
});

export const collections = { projects };
