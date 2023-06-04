import z from 'zod'

import { IssueCategorySchema } from './issue-category'
import { UserSchema } from './user'

export const IssueSchema = z.object({
  uuid: z.string(),
  title: z.string(),
  detail: z.string(),
  status: z.enum(['suggestion', 'planned', 'in_progress', 'live']),
  createdAt: z.string(),
  updatedAt: z.string(),
  category: IssueCategorySchema,
  user: UserSchema,
  upvotes: z.number(),
  alreadyUpvoted: z.boolean()
})

export type Issue = z.infer<typeof IssueSchema>
