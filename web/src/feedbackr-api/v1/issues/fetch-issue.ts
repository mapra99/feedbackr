import { sendRequest } from "@/feedbackr-api/v1/client"
import { IssueSchema } from '@/feedbackr-api/v1/schemas'

export default async function fetchIssue(uuid: string, accessToken: string) {
  const { status, data } = await sendRequest('GET', `/api/v1/issues/${uuid}`, {}, { accessToken })

  if (status === 200) {
    return { success: true, result: IssueSchema.parse(data) }
  } else if ([401, 404].includes(status)) {
    return { success: false, result: undefined }
  } else {
    throw new Error(`Unexpected response code: ${status}`)
  }
}
