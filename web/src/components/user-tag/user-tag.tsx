'use client'

import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import UserPreview from '@/components/user-preview'
import type { UserTagProps } from "./types"

export default function UserTag({ user }: UserTagProps) {
  const [previewOpen, setPreviewOpen] = useState<boolean>(false)
  const [parent] = useAutoAnimate()

  const openPreview = () => setPreviewOpen(true)
  const closePreview = () => setPreviewOpen(false)
  const togglePreview = () => setPreviewOpen(!previewOpen)

  return (
    <span
      className="relative font-bold hover:underline z-10 cursor-pointer"
      onMouseEnter={openPreview}
      onMouseLeave={closePreview}
      onClick={togglePreview}
      ref={parent}
    >
      @{ user.username }

      { previewOpen && (
        <div className="absolute shadow-sm left-0 top-full mt-1">
          <UserPreview user={user} />
        </div>
      )}
    </span>
  )
}
