import type { Product } from '@/feedbackr-api/v1/schemas'

export interface ProductMenuProps {
  product: Product
  filterParams: {
    category?: string
  }
}
