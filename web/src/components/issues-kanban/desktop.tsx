import { IssuesKanbanProps } from "./types"
import KanbanColumn from "@/components/kanban-column"
import ISSUE_STATUSES from "@/constants/issue-statuses"

export default function DesktopIssuesKanban({ groupedIssues }: IssuesKanbanProps) {
  return (
    <div className="flex gap-3 lg:gap-8 overflow-x-auto">
      { ISSUE_STATUSES.map(status => (
        <div className="md:min-w-[14rem] lg:min-w-[22rem]" key={status}>
          <KanbanColumn key={status} status={status} issues={groupedIssues[status]} />
        </div>
      )) }
    </div>
  )
}
