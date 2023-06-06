'use client'

import { useState } from 'react'
import { buildStyles } from './styles'
import type { TextFieldProps } from './types'

export default function TextField({ className, error, ...props }: TextFieldProps) {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-1">
      <input
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
