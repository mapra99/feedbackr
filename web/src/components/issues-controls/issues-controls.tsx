'use client'

import FilterSelect from '@/components/filter-select'
import { LinkButton } from '@/components/button'
import { BulbIcon } from '@/icons'
import { useSmBreakpoint } from '@/hooks/use-breakpoints'
import { useRouter } from 'next/navigation'


import type { IssuesControlsProps } from './types'

const SORT_OPTIONS = [
  { id: 'upvotes_desc', label: 'Most Upvotes', value: { field: 'upvotes', desc: true } },
  { id: 'upvotes_asc', label: 'Least Upvotes', value: { field: 'upvotes', desc: false } },
  { id: 'comments_desc', label: 'Most Comments', value: { field: 'comments', desc: true } },
  { id: 'comments_asc', label: 'Least Comments', value: { field: 'comments', desc: false } }
]

export default function IssuesControls({ issuesCount, productSlug, sortParams }: IssuesControlsProps) {
  const mobile = !useSmBreakpoint()
  const router = useRouter()

  const handleFilterSelect = (selectedId: string) => {
    const selectedOption = SORT_OPTIONS.find(option => option.id === selectedId)
    if (!selectedOption) return

    const { field, desc } = selectedOption.value
    router.push(`/${productSlug}?sort_by=${field}&sort_direction=${desc ? 'desc' : 'asc'}`)
  }

  const { sort_by, sort_direction } = sortParams
  const sortOption = SORT_OPTIONS.find(option => option.value.field === sort_by && option.value.desc === (sort_direction === 'desc'))

  return (
    <div className="w-full bg-delft-blue h-16 sm:h-20 px-6 text-white flex items-center justify-between sm:rounded-xl">
      <div className="flex gap-8 items-center">
        <div className={`${mobile ? 'hidden' : 'flex'} items-center gap-3`}>
          <div className="w-6 h-6 text-white">
            <BulbIcon />
          </div>

          <span className="font-sans text-xl">
            { issuesCount } Suggestions
          </span>
        </div>

        <FilterSelect
          items={SORT_OPTIONS}
          selectedId={sortOption?.id}
          label="Sort by"
          onSelect={handleFilterSelect}
        />
      </div>

      <LinkButton
        variant="primary" className="!px-3 sm:!px-6 sm:h-12"
        href={`/${productSlug}/issues/new`}
      >
        + Add Feedback
      </LinkButton>
    </div>
  )
}
