import type { IssueStatus } from '@/feedbackr-api/v1/schemas'

export interface StatusLabelProps {
  status: IssueStatus
  size?: 'small' | 'large'
}
