import { sendRequest } from "@/feedbackr-api/client"
import { AccessTokenSchema } from "./types"
import type { LoginParams } from './types'

const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID
const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET

export default async function login (userParams: LoginParams) {
  const params = {
    username: userParams.email,
    password: userParams.password,
    grantType: 'password',
    clientId: OAUTH_CLIENT_ID,
    clientSecret: OAUTH_CLIENT_SECRET
  }
  const { status, response, data } = await sendRequest('POST', '/api/v1/oauth/token', params)

  if (status === 200) {
    return { success: true, result: AccessTokenSchema.parse(data) }
  } else if (status === 401) {
    const errorData = await response.json()
    return { success: false, result: { errors: { general: [ errorData.error ]}} }
  } else {
    throw new Error(`Unexpected response code: ${status}`)
  }
}
