'use client'

import Tag from "@/components/tag"
import type { IssueCategory } from '@/feedbackr-api/v1/schemas'

const ISSUE_CATEGORY_MAPPINGS = [
  { value: 'all', label: 'All' },
  { value: 'ui', label: 'UI' },
  { value: 'ux', label: 'UX' },
  { value: 'enhancement', label: 'Enhancement' },
  { value: 'bug', label: 'Bug' },
  { value: 'feature', label: 'Feature' }
]

export default function LabelsCard() {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-4 w-full p-6 bg-white rounded-lg shadow-xl">
      { ISSUE_CATEGORY_MAPPINGS.map((category) => (
        <Tag key={category.value} label={category.label} />
      ))}
    </div>
  )
}
