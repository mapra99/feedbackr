'use client'

import { PointerLeftIcon } from "@/icons"

export default function BackButton() {
  return (
    <button
      type="button"
      className="flex items-center gap-3"
      onClick={() => window.history.back()}
    >
      <div className="w-3 h-3 text-savoy-blue">
        <PointerLeftIcon />
      </div>

      <span className="text-glaucous font-sans text-xs font-bold">
        Go Back
      </span>
    </button>
  )
}
