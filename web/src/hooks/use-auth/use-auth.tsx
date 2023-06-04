import 'server-only'

import { cookies } from 'next/headers'
import { fetchCurrentUser } from '@/feedbackr-api/v1/auth/'
import Redirect from '@/components/redirect'
import type { UseAuthParams } from "./types"

export default async function useAuth({ authorize = true }: UseAuthParams) {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  const { result: currentUser } = await fetchCurrentUser(accessToken)

  if (authorize && !currentUser) {
    return { redirect: <Redirect to="/login" /> }
  } else {
    return { currentUser, accessToken }
  }
}
