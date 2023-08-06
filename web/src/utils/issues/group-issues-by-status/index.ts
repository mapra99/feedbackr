import ISSUE_STATUSES from '@/constants/issue-statuses'

import type { Issue } from '@/feedbackr-api/v1/schemas'
import type { GroupedIssues } from './types'

function groupIssuesByStatus(issues: Issue[]) {
  const groupedIssues: GroupedIssues = {}
  ISSUE_STATUSES.forEach(status => {
    groupedIssues[status] = issues.filter(issue => issue.status === status)
  })

  return groupedIssues
};

export default groupIssuesByStatus
