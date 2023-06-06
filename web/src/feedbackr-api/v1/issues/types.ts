import z from 'zod'

export const CreateIssueParamsSchema = z.object({
  title: z.string(),
  detail: z.string(),
  category: z.enum(['bug', 'feature', 'ui', 'ux', 'enhancement']),
  productSlug: z.string()
})

export type CreateIssueParams = z.infer<typeof CreateIssueParamsSchema>

export const ErrorResponseSchema = z.object({
  errors: z.array(z.string())
})
