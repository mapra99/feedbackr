import { sendRequest } from "@/feedbackr-api/v1/client"

export default async function upvoteIssue(issueUuid: string, accessToken: string) {
  const { status } = await sendRequest('POST', '/api/v1/issue_upvotes', { issueUuid }, { accessToken })

  if (status === 201) {
    return { success: true }
  } else {
    throw new Error(`Unexpected response code: ${status}`)
  }
}
