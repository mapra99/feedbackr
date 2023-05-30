'use client'

import { useState } from 'react'
import CircledBg from '@/components/circled-bg'
import Spinner from '@/components/spinner'

import type { FormEvent } from 'react'
import type { FormProps } from './types'

export default function Form({ icon, children, onSubmit, ...props }: FormProps) {
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    if (onSubmit) await onSubmit(event)
    setLoading(false)
  }

  return(
    <form
      className="flex flex-col items-center justify-center p-6 sm:p-10 bg-white rounded-xl relative"
      onSubmit={handleSubmit}
      {...props}
    >
      { icon ? (
        <div className="absolute left-6 sm:left-10 -top-5 sm:-top-7 z-10">
          <CircledBg>
            { icon }
          </CircledBg>
        </div>
      ) : null }

      { children }

      { loading ? (
        <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-white/70">
          <Spinner />
        </div>
      ) : null }
    </form>
  )
}
