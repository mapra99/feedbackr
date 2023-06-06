'use client'

import UserPreview from '@/components/user-preview'
import type { UserTagProps } from "./types"

export default function UserTag({ user }: UserTagProps) {
  return (
    <span className="relative font-bold hover:underline z-10">
      @{ user.username }
      <div className="absolute top-full mt-1">
        <UserPreview user={user} />
      </div>
    </span>
  )
}
