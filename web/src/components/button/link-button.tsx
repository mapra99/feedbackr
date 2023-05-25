import Link from 'next/link';
import resolveStylesFor from './styles'

import type { LinkButtonProps } from './types'

export default function LinkButton({ variant, children, className, ...props }: LinkButtonProps) {
  const styles = resolveStylesFor(variant)

  return (
    <Link
      className={`${styles} ${className}`}
      {...props}
    >
      { children }
    </Link>
  )
}
