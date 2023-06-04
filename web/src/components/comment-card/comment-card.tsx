import UserHeadline from '@/components/user-headline'
import type { CommentCardProps } from './types'

export default function CommentCard({ comment }: CommentCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <UserHeadline user={comment.user} />

        <button className='font-sans text-xs text-savoy-blue font-bold sm:font-semibold hover:underline transition-all'>
          Reply
        </button>
      </div>

      <p className="font-sans text-xs sm:text-sm text-glaucous font-normal sm:pl-20">
        { comment.content }
      </p>
    </div>
  )
}
