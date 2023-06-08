import z from 'zod'

export const CreateIssueParamsSchema = z.object({
  title: z.string(),
  detail: z.string(),
  category: z.enum(['bug', 'feature', 'ui', 'ux', 'enhancement']),
  status: z.string().optional(),
  productSlug: z.string()
})

export type CreateIssueParams = z.infer<typeof CreateIssueParamsSchema>

export const ErrorResponseSchema = z.object({
  errors: z.array(z.string())
})

export const UpdateIssueParamsSchema = z.object({
  title: z.string().optional(),
  detail: z.string().optional(),
  category: z.enum(['bug', 'feature', 'ui', 'ux', 'enhancement']).optional(),
  status: z.string().optional(),
  issueUuid: z.string()
})

export type UpdateIssueParams = z.infer<typeof UpdateIssueParamsSchema>
