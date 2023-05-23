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
      className="h-14 w-10 p-1 font-sans text-xs font-bold rounded-xl flex flex-col justify-center items-center gap-2 bg-ghost-white hover:bg-periwinkle transition-all active:bg-savoy-blue active:text-white"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="w-3">
        <ChevronIconUp />
      </div>

      99
    </button>
  )
}
