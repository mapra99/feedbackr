import z from 'zod'

export const CreateCommentParamsSchema = z.object({
  content: z.string(),
  parentUuid: z.string(),
  parentType: z.enum(['Issue', 'Comment'])
})

export type CreateCommentParams = z.infer<typeof CreateCommentParamsSchema>

export const CommentErrorsSchema = z.object({
  errors: z.array(z.string())
})

export type CommentErrors = z.infer<typeof CommentErrorsSchema>
