import { z, defineCollection } from "astro:content";

const communitiesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const peopleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const projectsAndEventsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  communities: communitiesCollection,
  people: peopleCollection,
  projectsAndEvents: projectsAndEventsCollection,
};
