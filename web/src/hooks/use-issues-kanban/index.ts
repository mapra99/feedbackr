import { useState } from 'react';
import type { GroupedIssues } from "@/utils/issues/group-issues-by-status/types";
import { Issue, IssueStatus } from '@/feedbackr-api/v1/schemas';
import invariant from 'tiny-invariant';

export default function useIssuesKanban(initialGroupedIssues: GroupedIssues) {
  const [issuesByStatus, setIssuesByStatus] = useState(initialGroupedIssues);

  const handleIssueDrop = (issueUuid: string, currentStatus: IssueStatus, newStatus: IssueStatus) => {
    if (currentStatus === newStatus) return;

    const issue = issuesByStatus[currentStatus].find((issue) => issue.uuid === issueUuid);
    invariant(issue, `Could not find issue with uuid ${issueUuid} in status ${currentStatus}`);

    const updatedIssue = {...issue, status: newStatus}

    const newIssuesByStatus = {
      ...issuesByStatus,
      [currentStatus]: issuesByStatus[currentStatus].filter((issue) => issue.uuid !== issueUuid),
      [newStatus]: [...issuesByStatus[newStatus], updatedIssue]
    };

    setIssuesByStatus(newIssuesByStatus);
    updateIssueRequest(updatedIssue, newStatus);
  }

  const updateIssueRequest = async (issue: Issue, newStatus: IssueStatus) => {
    const formData = new FormData();
    formData.append('issueUuid', issue.uuid)
    formData.append('title', issue.title)
    formData.append('category', issue.category.name)
    formData.append('detail', issue.detail)
    formData.append('status', newStatus);

    await fetch('/api/issues', {
      method: 'PUT',
      body: formData
    });
  }

  return {
    issuesByStatus,
    handleIssueDrop
  }
}
