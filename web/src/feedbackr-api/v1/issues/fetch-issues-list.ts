import z from 'zod'
import { sendRequest } from "@/feedbackr-api/v1/client"
import { IssueSchema } from '@/feedbackr-api/v1/schemas'

export default async function fetchIssuesList(
  productSlug: string,
  accessToken: string,
  searchParams?: { sort_by?: string, sort_direction?: string }
) {
  let params = `product_slug=${productSlug}`
  if (searchParams?.sort_by) params += `&sort_by=${searchParams.sort_by}`
  if (searchParams?.sort_direction) params += `&sort_direction=${searchParams.sort_direction}`

  const { status, data } = await sendRequest('GET', `/api/v1/issues?${params}`, {}, { accessToken })

  if (status === 200) {
    return { success: true, result: z.array(IssueSchema).parse(data) }
  } else if ([401, 404].includes(status)) {
    return { success: false, result: undefined }
  } else {
    throw new Error(`Unexpected response code: ${status}`)
  }
}
