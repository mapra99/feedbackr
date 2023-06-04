import { sendRequest } from "@/feedbackr-api/v1/client"
import { CommentSchema } from "@/feedbackr-api/v1/schemas"
import { CommentErrorsSchema } from './types'
import type { CreateCommentParams } from './types'

export default async function createComment(params: CreateCommentParams, accessToken: string) {
  const { status, response, data } = await sendRequest('POST', '/api/v1/comments', { ...params }, { accessToken })

  if (status === 200) {
    return { success: true, result: CommentSchema.parse(data) }
  } else if (status === 422) {
    const errorData = await response.json()
    return { success: false, result: CommentErrorsSchema.parse(errorData) }
  } else {
    throw new Error(`Unexpected response code: ${status}`)
  }
}
