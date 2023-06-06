import type { Comment } from '@/feedbackr-api/v1/schemas'

export interface CommentsSectionProps {
  issueUuid: string
  comments: Comment[]
  totalCount: number
}
