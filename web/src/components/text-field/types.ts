import type { InputHTMLAttributes } from 'react'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  initialValue?: string
}

export interface TextAreaFieldProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  initialValue?: string
}
