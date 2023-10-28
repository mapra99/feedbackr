import { IssueStatus } from "@/feedbackr-api/v1/schemas";

export const ISSUE_CARD_TYPE = 'issue_card';

export interface IssueCardDropData {
  issueUuid: string;
  currentStatus: IssueStatus;
}
