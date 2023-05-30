export type HttpVerb = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface Headers {
  'Content-Type': string
  'Accept': string
  'Authorization'?: string
}

export interface SendRequestOptions extends RequestInit {
  accessToken?: string
}
