import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "blog/**",
      schema: z.object({
        image: z.string().optional(),
        author: z.string().optional(),
        publishAt: z.string().optional(),
      }),
    }),
  },
});
