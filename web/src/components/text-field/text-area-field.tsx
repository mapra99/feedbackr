'use client'

import { useState } from 'react'
import { buildStyles } from './styles'
import type { TextAreaFieldProps } from './types'

export default function TextAreaField({ className, error, ...props }: TextAreaFieldProps) {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-1">
      <textarea
        className={`
          ${buildStyles(active, error)}
          ${className}
        `}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        {...props}
      />
      { error && (
        <span className="text-poppy font-sans text-xs font-normal">
          { error }
        </span>
      ) }
    </div>
  )
}
