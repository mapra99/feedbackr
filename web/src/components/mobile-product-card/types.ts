import type { Product } from '@/feedbackr-api/v1/schemas'
import { GroupedIssues } from '@/utils/issues/group-issues-by-status/types'

export interface MobileProductCardProps {
  product: Product
  filterParams: {
    category?: string
  }
  groupedIssues: GroupedIssues
}
