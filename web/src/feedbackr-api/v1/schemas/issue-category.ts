import z from 'zod'

export const IssueCategorySchema = z.object({
  name: z.enum(['bug', 'feature', 'enhancement', 'ui', 'ux'])
})

export type IssueCategory = z.infer<typeof IssueCategorySchema>
