import CommentCard from '@/components/comment-card'
import type { CommentsSectionProps } from './types'

export default function CommentsSection({ comments, totalCount }: CommentsSectionProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 sm:gap-7 p-6 sm:px-8 rounded-xl bg-white">
        <h2 className="font-sans text-xl text-marian-blue">
          { totalCount } Comments
        </h2>

        <div>
          { comments.map((comment, index) => (
            <div key={comment.uuid}>
              <CommentCard comment={comment} />
              { index !== comments.length - 1 && <hr className="my-6 sm:my-8 border-t border-cool-gray opacity-30" /> }
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}
