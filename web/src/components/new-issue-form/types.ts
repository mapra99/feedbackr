import z from 'zod';

export const IssueErrorsSchema = z.object({
  errors: z.array(z.string())
})

export type IssueErrors = z.infer<typeof IssueErrorsSchema>

export interface NewIssueFormProps {
  productSlug: string
}
