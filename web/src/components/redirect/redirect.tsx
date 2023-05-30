'use client'

import { useEffect } from 'react'
import type { RedirectProps } from './types'

export default function Redirect({ to }: RedirectProps) {
  useEffect(() => {
    window.location.href = to
  })

  return null
}
