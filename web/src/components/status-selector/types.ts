import type { IssueStatus } from '@/feedbackr-api/v1/schemas'

export interface StatusSelectorProps {
  activeStatus: string;
  onStatusChange: (status: IssueStatus) => void;
  issuesCount: { [key: string]: number };
}
