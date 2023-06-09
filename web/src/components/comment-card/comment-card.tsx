'use client'

import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import UserHeadline from '@/components/user-headline'
import NewReplyForm from '@/components/new-reply-form'
import useEnrichedContent from '@/hooks/use-enriched-content'
import type { CommentCardProps } from './types'

export default function CommentCard({ comment, onReplyCreation, users }: CommentCardProps) {
  const [replyFormVisible, setReplyFormVisible] = useState<boolean>(false)
  const [parent] = useAutoAnimate()
  const enrichedContent = useEnrichedContent(comment.content, users)

  return (
    <div className="flex flex-col" ref={parent}>
      <div className="flex items-center justify-between mb-4 gap-4">
        <UserHeadline user={comment.user} />

        <button
          className='font-sans text-xs text-savoy-blue font-bold sm:font-semibold hover:underline transition-all'
          onClick={() => setReplyFormVisible(!replyFormVisible)}
        >
          Reply
        </button>
      </div>

      <p
        className={`
          font-sans text-xs sm:text-sm text-glaucous font-normal sm:pl-14 sm:ml-5 sm:border-l sm:border-glaucous/10
          ${comment.replies.length > 0 ? 'pb-4' : ''}
        `}
      >
        { enrichedContent }
      </p>

      { replyFormVisible ? (
        <div className="mt-2 sm:pl-20">
          <NewReplyForm
            onSubmit={(content) => onReplyCreation(content, 'Comment', comment.uuid)}
          />
        </div>
      ) : null}

      { comment.replies.length > 0 ? (
        <div className="pl-6 sm:ml-5 flex flex-col gap-6 border-l border-glaucous/10">
          { comment.replies.map((reply) => (
            <CommentCard key={reply.uuid} comment={reply} onReplyCreation={onReplyCreation} users={users} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
