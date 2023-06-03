import z from 'zod'

export const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  username: z.string()
})

export type User = z.infer<typeof UserSchema>
