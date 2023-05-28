import type { ButtonHTMLAttributes, ReactNode} from 'react'
import type { LinkProps } from 'next/link'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
}

export interface LinkButtonProps extends LinkProps {
  variant: ButtonVariant
  children: ReactNode
  className?: string
}
