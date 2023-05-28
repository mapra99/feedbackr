import resolveStylesFor from './styles'

import type { ButtonProps } from './types'

export default function Button({ variant, children, className, ...props }: ButtonProps) {
  const styles = resolveStylesFor(variant)

  return (
    <button
      className={`${styles} ${className}`}
      {...props}
    >
      { children }
    </button>
  )
}
