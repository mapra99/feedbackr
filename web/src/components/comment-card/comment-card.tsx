'use client'

import { useState } from 'react'
import UserHeadline from '@/components/user-headline'
import NewReplyForm from '../new-reply-form/new-reply-form'
import type { CommentCardProps } from './types'

export default function CommentCard({ comment, onReplyCreation }: CommentCardProps) {
  const [replyFormVisible, setReplyFormVisible] = useState<boolean>(false)

  return (
    <div className="flex flex-col">
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
        { comment.content }
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
            <CommentCard key={reply.uuid} comment={reply} onReplyCreation={onReplyCreation} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
