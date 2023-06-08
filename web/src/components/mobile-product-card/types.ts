import type { ReactNode } from 'react'
import type { Product } from '@/feedbackr-api/v1/schemas'

export interface MobileProductCardProps {
  product: Product
  children: ReactNode
}
