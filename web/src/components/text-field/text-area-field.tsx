'use client'

import { ChangeEvent, useState } from 'react'
import { buildStyles } from './styles'
import type { TextAreaFieldProps } from './types'

export default function TextAreaField({ className, error, initialValue, onChange, ...props }: TextAreaFieldProps) {
  const [value, setValue] = useState<string>(initialValue || '')
  const [active, setActive] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    if (onChange) onChange(e)
  }

  return (
    <div className="flex flex-col gap-1">
      <textarea
        className={`
          ${buildStyles(active, error)}
          ${className}
        `}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        value={value}
        onChange={handleChange}
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
