import CategoryLabel from '@/components/category-label'
import CommentsCounter from '@/components/comments-counter'
import UpvoteButton from '@/components/upvote-button'
import ISSUE_CATEGORY_LABELS from '@/constants/issue-category-labels'
import type { IssueCardProps } from './types'

export default function IssueCard({ issue }: IssueCardProps) {
  const categoryLabel = ISSUE_CATEGORY_LABELS.find((category) => category.name === issue.category.name)?.label

  return (
    <div className="bg-white rounded-xl p-6 sm:py-7 sm:pl-8 sm:pr-20 text-marian-blue flex flex-col sm:flex-row sm:relative sm:gap-10">
      <div className="sm:order-2">
        <h3 className="font-sans text-xs sm:text-xl font-bold mb-2 sm:mb-1">
          { issue.title }
        </h3>
        <p className="font-sans font-normal text-xs sm:text-base text-glaucous mb-2 sm:mb-3">
          { issue.detail }
        </p>

        { categoryLabel ? (
          <div className="mb-4 sm:mb-0">
            <CategoryLabel label={categoryLabel} />
          </div>
        ) : null}
      </div>

      <div className="flex justify-between items-center sm:order-1">
        <div className="sm:self-start">
          <UpvoteButton issueUuid={issue.uuid} upvotes={issue.upvotes} initialActive={issue.alreadyUpvoted} />
        </div>

        <div className="sm:absolute sm:right-8">
          <CommentsCounter commentsCount={issue.commentsCount} />
        </div>
      </div>
    </div>
  )
}
