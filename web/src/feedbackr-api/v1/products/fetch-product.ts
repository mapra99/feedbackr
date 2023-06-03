import { sendRequest } from "@/feedbackr-api/v1/client"
import { ProductSchema } from '@/feedbackr-api/v1/schemas'

export default async function fetchProduct (slug: string, accessToken: string) {
  const { status, data } = await sendRequest('GET', `/api/v1/products/${slug}`, {}, { accessToken })

  if (status === 200) {
    return { success: true, result: ProductSchema.parse(data) }
  } else if ([401, 404].includes(status)) {
    return { success: false, result: undefined }
  } else {
    throw new Error(`Unexpected response code: ${status}`)
  }
}
