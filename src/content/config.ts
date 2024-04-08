import { defineCollection, z} from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        date_published: z.date(),
        date_added: z.date(),
        date_updated: z.date(),
        draft: z.boolean()
    })
})

export const collections = {
    posts: postsCollection
}