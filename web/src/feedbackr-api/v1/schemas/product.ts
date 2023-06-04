import z from 'zod'

export const ProductSchema = z.object({
  name: z.string(),
  slug: z.string(),
})

export type Product = z.infer<typeof ProductSchema>
