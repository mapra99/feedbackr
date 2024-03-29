import { BG_COLOR_MAPPING, LABEL_MAPPING } from '@/constants/issue-statuses'
import type { StatusLabelProps } from './types'

export default function StatusLabel({ status, size = "large" }: StatusLabelProps) {
  return (
    <div className="flex items-center gap-4 font-sans">
      <div className={`w-2 h-2 rounded-full ${BG_COLOR_MAPPING[status]}`} />

      <span className={`${size === "small" ? "text-xs" : "text-base"} text-glaucous`}>
        {LABEL_MAPPING[status]}
      </span>
    </div>
  )
}
