import type { IssueCategory } from '@/feedbackr-api/v1/schemas';

export interface CategoryLabelProps {
  label: IssueCategory['name'];
}
