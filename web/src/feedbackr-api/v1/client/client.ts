'use server'

import { camelizeKeys } from '@/utils/camelize'
import { snakelizeKeys } from '@/utils/snakelize'
import type { HttpVerb } from './types'

const BASE_URL = process.env.FEEDBACKR_API_BASE_URL

export async function sendRequest(
  method: HttpVerb,
  path: string,
  body: { [key: string]: unknown },
  options = {}
) {
  const url = `${BASE_URL}${path}`
  const formattedBody = snakelizeKeys(body)

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formattedBody),
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
