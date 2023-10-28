'use client'

import { PointerLeftIcon } from "@/icons"
import type { BackButtonProps } from './types'

export default function BackButton({ lightText = false }: BackButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-3"
      onClick={() => window.history.back()}
    >
      <div className={`w-3 h-3 ${lightText ? "text-lavender" : "text-savoy-blue"}`}>
        <PointerLeftIcon />
      </div>

      <span className={`${lightText ? "text-white" : "text-glaucous"} font-sans text-xs font-bold`}>
        Go Back
      </span>
    </button>
  )
}
