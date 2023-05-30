import { sendRequest } from "@/feedbackr-api/v1/client"
import { camelizeKeys } from "@/utils/camelize"
import { UserSchema } from '@/feedbackr-api/v1/schemas'
import { SignUpErrorsSchema } from "./types"
import type { SignUpParams } from './types'

export default async function signUp (params: SignUpParams) {
  const { status, data, response } = await sendRequest('POST', '/api/v1/users', { user: params })

  if (status === 201) {
    return { success: true, result: UserSchema.parse(data) }
  } else if (status === 422) {
    const result = SignUpErrorsSchema.parse(camelizeKeys(await response.json()))
    return { success: false, result }
  } else {
    throw new Error(`Unexpected response code: ${status}`)
  }
}
