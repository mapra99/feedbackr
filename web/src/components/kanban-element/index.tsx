import type { KanbanElementProps } from './types'
import StatusLabel from '@/components/status-label'
import { BG_COLOR_MAPPING } from '@/constants/issue-statuses'
import CategoryLabel from '@/components/category-label'
import ISSUE_CATEGORY_LABELS from '@/constants/issue-category-labels'
import invariant from 'tiny-invariant'
import UpvoteButton from '@/components/upvote-button'
import CommentsCounter from '@/components/comments-counter'
import { useDrag } from 'react-dnd'
import { ISSUE_CARD_TYPE, type IssueCardDropData } from '@/components/issues-kanban/dnd-config'
import Link from 'next/link'

export default function KanbanElement({ issue, productSlug }: KanbanElementProps) {
  const categoryLabel = ISSUE_CATEGORY_LABELS.find((category) => category.name === issue.category.name)?.label
  invariant(categoryLabel, `Category label not found for category name: ${issue.category.name}`)

  const dropData: IssueCardDropData = { issueUuid: issue.uuid, currentStatus: issue.status }

  const [{ opacity }, drag] = useDrag({
    type: ISSUE_CARD_TYPE,
    item: dropData,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    }),
  })

  return (
    <Link ref={drag} href={`${productSlug}/issues/${issue.uuid}`} style={{ opacity }} className="@container flex flex-col gap-4 relative p-6 md:px-5 lg:p-8 rounded-xl bg-white hover:cursor-pointer">
      <div className={`absolute w-full left-0 top-0 h-1.5 rounded-tl-xl rounded-tr-xl ${BG_COLOR_MAPPING[issue.status]}`} />

      <StatusLabel status={issue.status} size="small" />

      <div className="flex flex-col gap-2">
        <h3 className="font-sans font-bold text-xs lg:text-xl text-marian-blue">
          { issue.title }
        </h3>
        <p className="font-sans font-normal text-xs lg:text-base text-glaucous md:mb-4 lg:mb-2">
          { issue.detail }
        </p>
        <CategoryLabel label={categoryLabel} />
      </div>

      <div className='flex justify-between items-center'>
        <UpvoteButton issueUuid={issue.uuid} upvotes={issue.upvotes} initialActive={issue.alreadyUpvoted} />
        <CommentsCounter commentsCount={issue.commentsCount} />
      </div>
    </Link>
  )
}
