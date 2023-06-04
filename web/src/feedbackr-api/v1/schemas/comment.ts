import z from 'zod'
import { UserSchema } from './user'

const BaseCommentSchema = z.object({
  uuid: z.string(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  user: UserSchema
})

export type Comment = z.infer<typeof BaseCommentSchema> & {
  replies: Comment[];
};

export const CommentSchema: z.ZodType<Comment> = BaseCommentSchema.extend({
  replies: z.lazy(() => CommentSchema.array())
})
