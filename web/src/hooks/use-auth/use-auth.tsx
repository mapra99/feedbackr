import 'server-only'

import { cookies } from 'next/headers'
import { fetchCurrentUser } from '@/feedbackr-api/v1/auth/'
import Redirect from '@/components/redirect'
import type { UseAuthParams } from "./types"

export default async function useAuth({ authorize = true }: UseAuthParams) {
  const cookieStore = cookies()
  const { result: currentUser } = await fetchCurrentUser(cookieStore.get('accessToken')?.value)

  if (authorize && !currentUser) {
    return { redirect: <Redirect to="/login" /> }
  } else {
    return { currentUser }
  }
}
