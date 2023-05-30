import { sendRequest } from "@/feedbackr-api/v1/client"
import { UserSchema } from '@/feedbackr-api/v1/schemas'

export default async function fetchCurrentUser (accessToken: string | undefined) {
  const { status, data } = await sendRequest('GET', '/api/v1/profile', {}, { accessToken })

  if (status === 200) {
    return { success: true, result: UserSchema.parse(data) }
  } else if (status === 401) {
    return { success: false, result: undefined }
  } else {
    throw new Error(`Unexpected response code: ${status}`)
  }
}
