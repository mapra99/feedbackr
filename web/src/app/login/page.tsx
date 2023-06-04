import Redirect from '@/components/redirect';
import LoginForm from '@/components/login-form';
import useAuth from '@/hooks/use-auth';


export default async function Login() {
  const { currentUser } = await useAuth({ authorize: false })
  if (currentUser) return <Redirect to="/" />;

  return (
    <main className="flex items-center justify-center w-full min-h-screen">
      <div className="my-20 mx-6 max-w-lg w-full">
        <LoginForm />
      </div>
    </main>
  )
}
