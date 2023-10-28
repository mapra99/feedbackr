import { useState } from 'react';
import type { GroupedIssues } from "@/utils/issues/group-issues-by-status/types";
import { IssueStatus } from '@/feedbackr-api/v1/schemas';
import invariant from 'tiny-invariant';

export default function useIssuesKanban(initialGroupedIssues: GroupedIssues) {
  const [issuesByStatus, setIssuesByStatus] = useState(initialGroupedIssues);

  const handleIssueDrop = (issueUuid: string, currentStatus: IssueStatus, newStatus: IssueStatus) => {
    const issue = issuesByStatus[currentStatus].find((issue) => issue.uuid === issueUuid);
    invariant(issue, `Could not find issue with uuid ${issueUuid} in status ${currentStatus}`);

    const updatedIssue = {...issue, status: newStatus}

    const newIssuesByStatus = {
      ...issuesByStatus,
      [currentStatus]: issuesByStatus[currentStatus].filter((issue) => issue.uuid !== issueUuid),
      [newStatus]: [...issuesByStatus[newStatus], updatedIssue]
    };

    setIssuesByStatus(newIssuesByStatus);
  }

  return {
    issuesByStatus,
    handleIssueDrop
  }
}
