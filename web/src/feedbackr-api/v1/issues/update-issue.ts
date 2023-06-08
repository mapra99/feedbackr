import { sendRequest } from "@/feedbackr-api/v1/client"
import { IssueSchema } from "@/feedbackr-api/v1/schemas"
import { ErrorResponseSchema } from './types'
import type { UpdateIssueParams } from './types'

export default async function updateIssue(params: UpdateIssueParams, accessToken: string) {
  const { status, response, data } = await sendRequest('PUT', `/api/v1/issues/${params.issueUuid}`, { ...params }, { accessToken })

  if (status === 200) {
    return { success: true, result: IssueSchema.parse(data) }
  } else if (status === 422) {
    const errorData = await response.json()
    return { success: false, result: ErrorResponseSchema.parse(errorData) }
  } else {
    throw new Error(`Unexpected response code: ${status}`)
  }
}
