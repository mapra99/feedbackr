import type { ButtonVariant } from './types'

const baseStyles = `
  flex items-center justify-center rounded-xl text-lg text-white h-11 font-sans px-14 hover:opacity-80 transition-all active:opacity-60
`

const primaryStyles = `
  bg-veronica
`

const secondaryStyles = `
  bg-savoy-blue
`

const tertiaryStyles = `
  bg-marian-blue
`

const dangerStyles = `
  bg-poppy
`

export default function resolveStylesFor(variant: ButtonVariant) {
  let styles = baseStyles
  if (variant === 'primary') styles += primaryStyles
  if (variant === 'secondary') styles += secondaryStyles
  if (variant === 'tertiary') styles += tertiaryStyles
  if (variant === 'danger') styles += dangerStyles

  return styles
}
