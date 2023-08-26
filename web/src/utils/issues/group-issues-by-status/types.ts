import type { Issue } from '@/feedbackr-api/v1/schemas'

export interface GroupedIssues {
  [key: string]: Issue[]; 
}
