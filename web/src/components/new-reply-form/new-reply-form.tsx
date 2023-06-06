'use client'

import { useState } from 'react'
import { TextAreaField } from "../text-field"
import { Button } from "@/components/button"

import type { ChangeEvent } from 'react'
import type { NewReplyFormProps } from './types'

const MAX_CHARACTERS_COUNT = 250

export default function NewReplyForm({ onSubmit }: NewReplyFormProps) {
  const [content, setContent] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  const handleSubmit = async () => {
    if (content.length > MAX_CHARACTERS_COUNT) return
    await onSubmit(content)
  }

  const charactersLeft = MAX_CHARACTERS_COUNT - content.length
  const error = charactersLeft < 0 ? 'You have exceeded the maximum number of characters' : undefined

  return (
    <form
      className="flex gap-4 w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex-1">
        <TextAreaField
          className="h-20 mb-4 p-4 sm:px-6 text-xs sm:text-sm text-marian-blue font-normal placeholder:text-cool-gray"
          placeholder="Type your comment here"
          value={content}
          error={error}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary"
        type="submit"
        className="px-4 sm:px-6"
      >
        Post Reply
      </Button>
    </form>
  )
}
