'use client'

import { useState } from 'react'
import CommentCard from '@/components/comment-card'
import NewCommentForm from '@/components/new-comment-form'
import Spinner from '@/components/spinner'
import type { CommentsSectionProps } from './types'

export default function CommentsSection({ issueUuid, comments, totalCount }: CommentsSectionProps) {
  const [loading, setLoading] = useState<boolean>(false)

  const addComment = async (content: string, parentType: 'Issue' | 'Comment', parentUuid: string) => {
    setLoading(true)
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ content, parentType, parentUuid })
    })

    if (response.ok) { return window.location.reload() }
  }

  if (loading) return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-xl py-20">
      <Spinner />
    </div>
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 sm:gap-7 p-6 sm:px-8 rounded-xl bg-white">
        <h2 className="font-sans text-xl text-marian-blue">
          { totalCount } Comments
        </h2>

        <div>
          { comments.map((comment, index) => (
            <div key={comment.uuid}>
              <CommentCard comment={comment} onReplyCreation={addComment} />
              { index !== comments.length - 1 && <hr className="my-6 sm:my-8 border-t border-cool-gray opacity-30" /> }
            </div>
          )) }
        </div>
      </div>

      <div>
        <NewCommentForm onSubmit={(content) => addComment(content, 'Issue', issueUuid)} />
      </div>
    </div>
  )
}
