import type { Issue, IssueStatus } from '@/feedbackr-api/v1/schemas'

export type GroupedIssues = {
  [key in IssueStatus]: Issue[];
};
