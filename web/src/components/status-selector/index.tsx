import type { StatusSelectorProps } from './types'
import ISSUE_STATUSES, { LABEL_MAPPING, BORDER_COLOR_MAPPING } from '@/constants/issue-statuses'

export default function StatusSelector({ activeStatus, onStatusChange, issuesCount }: StatusSelectorProps) {
  return (
    <div className="overflow-x-auto flex justify-between border-lavender border-b">
      { ISSUE_STATUSES.map(status => (
        <button
          className={`
            min-w-[7rem] inline-block text-center py-5 font-sans text-xs text-marian-blue font-bold whitespace-nowrap
            ${activeStatus === status ? `border-b-4 ${BORDER_COLOR_MAPPING[status]}` : 'opacity-40'}
          `}
          key={status}
          onClick={() => onStatusChange(status)}
        >
          { LABEL_MAPPING[status] } ({ issuesCount[status] || 0 })
        </button>
      ))}
    </div>
  )
}
