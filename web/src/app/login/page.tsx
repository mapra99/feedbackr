import { cookies } from 'next/headers';
import { fetchCurrentUser } from '@/feedbackr-api/v1/auth'
import LoginForm from '@/components/login-form';
import Redirect from '@/components/redirect';


export default async function Login() {
  const cookieStore = cookies();
  const { result: currentUser } = await fetchCurrentUser(cookieStore.get('accessToken')?.value)
  if (currentUser) return <Redirect to="/" />

  return (
    <main className="flex items-center justify-center w-full min-h-screen">
      <div className="my-20 mx-6 max-w-lg w-full">
        <LoginForm />
      </div>
    </main>
  )
}
