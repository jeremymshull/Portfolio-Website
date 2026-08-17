import { getCollection } from 'astro:content';

export async function getPublishedProjects() {
  const projects = await getCollection(
    'projects',
    ({ data }) => data.publicationStatus === 'published',
  );

  return projects.sort((first, second) => {
    const firstOrder = first.data.order ?? Number.MAX_SAFE_INTEGER;
    const secondOrder = second.data.order ?? Number.MAX_SAFE_INTEGER;

    return firstOrder - secondOrder || first.data.title.localeCompare(second.data.title);
  });
}
