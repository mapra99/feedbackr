'use client';

import { useState } from "react"
import StatusSelector from "@/components/status-selector"
import KanbanColumn from "@/components/kanban-column"
import { IssuesKanbanProps } from "./types"
import type { IssueStatus } from "@/feedbackr-api/v1/schemas";
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import useIssuesKanban from "@/hooks/use-issues-kanban";

export default function MobileIssuesKanban({ groupedIssues, productSlug }: IssuesKanbanProps) {
  const [activeStatus, setActiveStatus] = useState<IssueStatus>('planned')
  const { issuesByStatus, handleIssueDrop } = useIssuesKanban(groupedIssues);
  const handleStatusChange = (status: IssueStatus) => { setActiveStatus(status) }

  const issuesCount: { [key: string]: number } = {}
  Object.keys(groupedIssues).forEach(status => {
    issuesCount[status] = issuesByStatus[status as IssueStatus].length
  })

  const issues = issuesByStatus[activeStatus]

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col gap-6">
        <StatusSelector activeStatus={activeStatus} onStatusChange={handleStatusChange} issuesCount={issuesCount} />
        <div className="px-6">
          <KanbanColumn status={activeStatus} issues={issues} onIssueDrop={handleIssueDrop} productSlug={productSlug} />
        </div>
      </div>
    </DndProvider>
  )
}
