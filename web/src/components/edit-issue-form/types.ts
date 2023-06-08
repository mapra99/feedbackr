import z from 'zod';
import type { Issue } from '@/feedbackr-api/v1/schemas';

export const IssueErrorsSchema = z.object({
  errors: z.array(z.string())
})

export type IssueErrors = z.infer<typeof IssueErrorsSchema>

export interface EditIssueFormProps {
  productSlug: string
  issue: Issue
}
