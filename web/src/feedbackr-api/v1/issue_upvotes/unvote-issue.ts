import { sendRequest } from "@/feedbackr-api/v1/client"

export default async function unvoteIssue(issueUuid: string, accessToken: string) {
  const { status } = await sendRequest('DELETE', `/api/v1/issue_upvotes/${issueUuid}`, {}, { accessToken })

  if (status === 204) {
    return { success: true }
  } else {
    throw new Error(`Unexpected response code: ${status}`)
  }
}
