import type { Issue, IssueStatus } from '@/feedbackr-api/v1/schemas'

export interface KanbanColumnProps {
  issues: Issue[];
  status: IssueStatus;
}
