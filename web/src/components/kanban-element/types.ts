import type { Issue } from '@/feedbackr-api/v1/schemas'

export interface KanbanElementProps {
  issue: Issue;
  productSlug: string;
}
