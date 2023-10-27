'use client';

import { useState } from "react"
import StatusSelector from "@/components/status-selector"
import KanbanColumn from "@/components/kanban-column"
import { IssuesKanbanProps } from "./types"
import type { IssueStatus } from "@/feedbackr-api/v1/schemas";

export default function MobileIssuesKanban({ groupedIssues }: IssuesKanbanProps) {
  const [activeStatus, setActiveStatus] = useState<IssueStatus>('planned')
  const handleStatusChange = (status: IssueStatus) => { setActiveStatus(status) }

  const issuesCount: { [key: string]: number } = {}
  Object.keys(groupedIssues).forEach(status => {
    issuesCount[status] = groupedIssues[status].length
  })

  const issues = groupedIssues[activeStatus]

  return (
    <div className="flex flex-col gap-6">
      <StatusSelector activeStatus={activeStatus} onStatusChange={handleStatusChange} issuesCount={issuesCount} />
      <div className="px-6">
        <KanbanColumn status={activeStatus} issues={issues} />
      </div>
    </div>
  )
}
