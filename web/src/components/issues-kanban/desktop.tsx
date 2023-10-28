'use client'

import { IssuesKanbanProps } from "./types"
import KanbanColumn from "@/components/kanban-column"
import ISSUE_STATUSES from "@/constants/issue-statuses"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import useIssuesKanban from "@/hooks/use-issues-kanban"

export default function DesktopIssuesKanban({ groupedIssues }: IssuesKanbanProps) {
  const { issuesByStatus, handleIssueDrop } = useIssuesKanban(groupedIssues);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-3 lg:gap-8 overflow-x-auto">
        { ISSUE_STATUSES.map(status => (
          <div className="md:min-w-[14rem] lg:min-w-[22rem]" key={status}>
            <KanbanColumn key={status} status={status} issues={issuesByStatus[status]} onIssueDrop={handleIssueDrop} />
          </div>
        )) }
      </div>
    </DndProvider>
  )
}
