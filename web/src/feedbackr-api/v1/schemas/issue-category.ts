import z from 'zod'

export const IssueCategorySchema = z.object({
  name: z.string()
})

export type IssueCategory = z.infer<typeof IssueCategorySchema>
