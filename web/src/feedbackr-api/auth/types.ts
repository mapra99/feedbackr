import z from 'zod'

export const SignUpParamsSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  username: z.string()
})

export type SignUpParams = z.infer<typeof SignUpParamsSchema>

export const SignUpErrorsSchema = z.object({
  errors: z.object({
    firstName: z.array(z.string()).optional(),
    lastName: z.array(z.string()).optional(),
    email: z.array(z.string()).optional(),
    password: z.array(z.string()).optional(),
    username: z.array(z.string()).optional(),
    passwordConfirmation: z.array(z.string()).optional(),
    general: z.array(z.string()).optional()
  })
})

export type SignUpErrors = z.infer<typeof SignUpErrorsSchema>
