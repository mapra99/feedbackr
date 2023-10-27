import type { KanbanColumnProps } from './types'
import { LABEL_MAPPING, DESCRIPTION_MAPPING } from '@/constants/issue-statuses'
import KanbanElement from '@/components/kanban-element'

export default function KanbanColumn({ status, issues }: KanbanColumnProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-marian-blue font-sans font-bold text-xl">
          { LABEL_MAPPING[status] } ({ issues.length })
        </h2>

        <p className="text-glaucous font-sans text-xs font-normal">
          { DESCRIPTION_MAPPING[status] }
        </p>
      </div>

      <div className="flex flex-col gap-4">
        { issues.map(issue => (
          <KanbanElement issue={issue} key={issue.uuid} />
        )) }
      </div>
    </div>
  )
}
