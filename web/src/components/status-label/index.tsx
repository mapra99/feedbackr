import { COLOR_MAPPING, LABEL_MAPPING } from '@/constants/issue-statuses'
import type { StatusLabelProps } from './types'

export default function StatusLabel({ status }: StatusLabelProps) {
  return (
    <div className="flex items-center gap-4 font-sans">
      <div className={`w-2 h-2 rounded-full ${COLOR_MAPPING[status]}`} />

      <span className="text-base text-glaucous">
        {LABEL_MAPPING[status]}
      </span>
    </div>
  )
}
