import type { KanbanColumnProps } from './types'
import { LABEL_MAPPING, DESCRIPTION_MAPPING, BORDER_COLOR_MAPPING, BG_COLOR_MAPPING } from '@/constants/issue-statuses'
import KanbanElement from '@/components/kanban-element'
import { useDrop } from 'react-dnd'
import { ISSUE_CARD_TYPE, type IssueCardDropData } from '@/components/issues-kanban/dnd-config'

export default function KanbanColumn({ status, issues, productSlug, onIssueDrop }: KanbanColumnProps) {
  const handleDrop = (dropData: IssueCardDropData) => {
    const { issueUuid, currentStatus } = dropData

    onIssueDrop(issueUuid, currentStatus, status)
  }

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ISSUE_CARD_TYPE,
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  return (
    <div className="flex flex-col gap-6 lg:gap-8 h-full">
      <div className="flex flex-col gap-1">
        <h2 className="text-marian-blue font-sans text-xl md:text-sm lg:text-xl !font-bold">
          { LABEL_MAPPING[status] } ({ issues.length })
        </h2>

        <p className="text-glaucous font-sans text-xs md:text-sm lg:text-base !font-normal">
          { DESCRIPTION_MAPPING[status] }
        </p>
      </div>

      <div
        className={`
          flex flex-col gap-4 h-full rounded-xl transition-all border-dashed
          ${canDrop ? `border-4 ${BORDER_COLOR_MAPPING[status]} p-4 opacity-20` : 'border-0'}
          ${isOver ? BG_COLOR_MAPPING[status] : ''}
        `}
        ref={drop}
      >
        { issues.map(issue => (
          <KanbanElement issue={issue} key={issue.uuid} productSlug={productSlug} />
        )) }
      </div>
    </div>
  )
}
