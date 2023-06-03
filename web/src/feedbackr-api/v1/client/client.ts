import 'server-only'

import { camelizeKeys } from '@/utils/camelize'
import { snakelizeKeys } from '@/utils/snakelize'
import type { HttpVerb, SendRequestOptions } from './types'

const BASE_URL = process.env.FEEDBACKR_API_BASE_URL

const buildHeaders = (accessToken?: string) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }

  if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`

  return headers
}

const buildBody = (method: HttpVerb, body: { [key: string]: unknown }) => {
  if (method === 'GET') return undefined
  return JSON.stringify(snakelizeKeys(body))
}

export async function sendRequest(
  method: HttpVerb,
  path: string,
  body: { [key: string]: unknown },
  options: SendRequestOptions = {}
) {
  const url = `${BASE_URL}${path}`
  const headers = buildHeaders(options.accessToken)

  const response = await fetch(url, {
    method,
    headers,
    body: buildBody(method, body),
    ...options
  })

  if (!response.ok) {
    return {
      status: response.status,
      response,
      data: null
    }
  }

  const data = await response.json();
  const formattedData = camelizeKeys(data)

  return {
    status: response.status,
    response,
    data: formattedData
  }
}
