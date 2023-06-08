import { sendRequest } from "@/feedbackr-api/v1/client"

export default async function deleteIssue(uuid: string, accessToken: string) {
  const { status } = await sendRequest('DELETE', `/api/v1/issues/${uuid}`, {}, { accessToken })

  if (status === 204) {
    return { success: true }
  } else {
    throw new Error(`Unexpected response code: ${status}`)
  }
}
