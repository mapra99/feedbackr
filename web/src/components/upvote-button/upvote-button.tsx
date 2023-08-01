'use client'

import { useState, type MouseEvent } from 'react'
import { ChevronIconUp } from "@/icons"

import type { UpvoteButtonProps } from './types'

export default function UpvoteButton({ issueUuid, upvotes, initialActive = false }: UpvoteButtonProps) {
  const [upvotesCount, setUpvotesCount] = useState<number>(upvotes)
  const [selected, setSelected] = useState<boolean>(initialActive)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();

    const newSelected = !selected
    setSelected(newSelected)

    if (newSelected) {
      setUpvotesCount(upvotesCount + 1)
      upvoteIssue(issueUuid)
    } else {
      setUpvotesCount(upvotesCount - 1)
      unvoteIssue(issueUuid)
    }
  }

  const upvoteIssue = async (issueUuid: string) => {
    await fetch('/api/issue_upvotes', { method: 'POST', body: JSON.stringify({ issueUuid }) })
  }

  const unvoteIssue = async (issueUuid: string) => {
    await fetch('/api/issue_upvotes', { method: 'PUT', body: JSON.stringify({ issueUuid }) })
  }

  return (
    <button
      className={`
        h-8 sm:h-14 w-20 sm:w-10 px-4 sm:px-1 p-1 font-sans text-xs font-bold rounded-xl flex flex-row sm:flex-col justify-between sm:justify-center items-center gap-2 transition-all
        ${selected ? 'bg-savoy-blue text-white hover:opacity-80' : 'text-marian-blue bg-ghost-white hover:bg-periwinkle'}
      `}
      onClick={handleClick}
      type="button"
    >
      <div className={`w-3 ${selected ? 'text-white' : 'text-savoy-blue'}`}>
        <ChevronIconUp />
      </div>

      { upvotesCount }
    </button>
  )
}
