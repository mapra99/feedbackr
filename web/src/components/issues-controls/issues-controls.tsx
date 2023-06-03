'use client'

import FilterSelect from '@/components/filter-select'
import { Button } from '@/components/button'
import { BulbIcon } from '@/icons'
import { useSmBreakpoint } from '@/hooks/use-breakpoints'

const SORT_OPTIONS = [
  { id: 'upvotes_desc', label: 'Most Upvotes', value: { field: 'upvotes', desc: true } },
  { id: 'upvotes_asc', label: 'Least Upvotes', value: { field: 'upvotes', desc: false } },
  { id: 'comments_desc', label: 'Most Comments', value: { field: 'comments', desc: true } },
  { id: 'comments_asc', label: 'Least Comments', value: { field: 'comments', desc: false } }
]

export default function IssuesControls() {
  const mobile = !useSmBreakpoint()

  return (
    <div className="w-full bg-delft-blue h-16 sm:h-20 px-6 text-white flex items-center justify-between sm:rounded-xl">
      <div className="flex gap-8 items-center">
        <div className={`${mobile ? 'hidden' : 'flex'} items-center gap-3`}>
          <div className="w-6 h-6 text-white">
            <BulbIcon />
          </div>

          <span className="font-sans text-xl">
            6 Suggestions
          </span>
        </div>

        <FilterSelect
          items={SORT_OPTIONS}
          selectedId="upvotes_desc"
          label="Sort by"
        />
      </div>

      <Button variant="primary" className="!px-3 sm:!px-6 sm:h-12">
        + Add Feedback
      </Button>
    </div>
  )
}
