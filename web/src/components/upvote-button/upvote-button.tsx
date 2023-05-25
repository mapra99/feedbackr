'use client'

import { useState } from 'react'
import { ChevronIconUp } from "@/icons"

export default function UpvoteButton({}) {
  const [selected, setSelected] = useState<boolean>(false)

  const handleClick = () => {
    setSelected(!selected)
  }

  return (
    <button
      className={`
        h-14 w-10 p-1 font-sans text-xs font-bold rounded-xl flex flex-col justify-center items-center gap-2 transition-all
        ${selected ? 'bg-savoy-blue text-white hover:opacity-80' : 'text-marian-blue bg-ghost-white hover:bg-periwinkle'}
      `}
      onClick={handleClick}
    >
      <div className={`w-3 ${selected ? 'text-white' : 'text-savoy-blue'}`}>
        <ChevronIconUp />
      </div>

      99
    </button>
  )
}
