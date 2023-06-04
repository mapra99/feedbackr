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
  children: Comment[];
};

export const CommentSchema: z.ZodType<Comment> = BaseCommentSchema.extend({
  children: z.lazy(() => CommentSchema.array())
})
