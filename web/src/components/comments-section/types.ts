import type { Comment } from '@/feedbackr-api/v1/schemas'

export interface CommentsSectionProps {
  comments: Comment[]
  totalCount: number
}
