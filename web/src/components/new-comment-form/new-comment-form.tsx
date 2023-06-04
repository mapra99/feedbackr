'use client'

import { useState } from 'react'
import { TextAreaField } from "../text-field"
import { Button } from "@/components/button"

import type { ChangeEvent } from 'react'
import type { NewCommentFormProps } from './types'

const MAX_CHARACTERS_COUNT = 250

export default function NewCommentForm({ issueUuid, onSubmit }: NewCommentFormProps) {
  const [content, setContent] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  const handleSubmit = async () => {
    if (content.length > MAX_CHARACTERS_COUNT) return
    await onSubmit(content, 'Issue', issueUuid)
  }

  const charactersLeft = MAX_CHARACTERS_COUNT - content.length
  const error = charactersLeft < 0 ? 'You have exceeded the maximum number of characters' : undefined

  return (
    <form
      className="bg-white py-6 px-8 rounded-xl"
      onSubmit={handleSubmit}
    >
      <h2 className="font-sans text-xl text-marian-blue mb-6">
        Add Comment
      </h2>

      <TextAreaField
        className="h-20 w-full mb-4 p-4 sm:px-6 text-xs sm:text-sm text-marian-blue font-normal placeholder:text-cool-gray"
        placeholder="Type your comment here"
        value={content}
        error={error}
        onChange={handleChange}
      />

      <div className="flex justify-between gap-2 items-center">
        <span className="font-sans text-xs sm:text-sm text-glaucous font-normal">
          { charactersLeft > 0 ? charactersLeft : 0 } Characters left
        </span>

        <Button
          variant="primary"
          type="submit"
          className="px-4 sm:px-6"
        >
          Post Comment
        </Button>
      </div>
    </form>
  )
}
