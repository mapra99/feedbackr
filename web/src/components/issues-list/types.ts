import type { Issue } from '@/feedbackr-api/v1/schemas'

interface SortParams {
  sort_by?: string
  sort_direction?: string
}

export interface IssuesListProps {
  issues: Issue[]
  productSlug: string
  sortParams: SortParams
}
