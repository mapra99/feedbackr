'use client'

import { useState } from 'react'
import type { TextFieldProps } from './types'

export default function TextField({ className, error, ...props }: TextFieldProps) {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-1">
      <input
        className={`
          font-sans text-base text-marian-blue rounded-md h-12 bg-ghost-white-light px-6 transition-all outline-none active:outline-none focus:outline-none
          ${active ? 'border border-savoy-blue' : ''}
          ${error ? 'border border-poppy' : ''}
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
