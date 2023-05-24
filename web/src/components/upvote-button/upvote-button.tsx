'use client'

import { useState } from 'react'
import { ChevronIconUp } from "@/icons"

export default function UpvoteButton({}) {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleMouseDown = () => {
    setIsActive(true)
  }

  const handleMouseUp = () => {
    setIsActive(false)
  }

  return (
    <button
      className={`h-14 w-10 p-1 font-sans text-xs font-bold rounded-xl flex flex-col justify-center items-center gap-2 transition-all ${isActive ? 'bg-savoy-blue text-white' : 'text-marian-blue bg-ghost-white hover:bg-periwinkle'}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className={`w-3 ${isActive ? 'text-white' : 'text-savoy-blue'}`}>
        <ChevronIconUp />
      </div>

      99
    </button>
  )
}
