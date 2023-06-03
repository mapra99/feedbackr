import z from 'zod'
import { sendRequest } from "@/feedbackr-api/v1/client"
import { IssueSchema } from '@/feedbackr-api/v1/schemas'

export default async function fetchIssuesList(productSlug: string, accessToken: string) {
  const { status, data } = await sendRequest('GET', `/api/v1/products/${productSlug}/issues`, {}, { accessToken })

  if (status === 200) {
    return { success: true, result: z.array(IssueSchema).parse(data) }
  } else if ([401, 404].includes(status)) {
    return { success: false, result: undefined }
  } else {
    throw new Error(`Unexpected response code: ${status}`)
  }
}
