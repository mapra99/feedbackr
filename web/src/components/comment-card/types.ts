import { Comment } from '@/feedbackr-api/v1/schemas'
import { User } from '@/feedbackr-api/v1/schemas'

export interface CommentCardProps {
  comment: Comment
  onReplyCreation: (content: string, parentType: 'Issue' | 'Comment', parentUuid: string) => void
  users: User[]
}
