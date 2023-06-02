import useAuth from '@/hooks/use-auth'
import type { ProductPageProps } from './types'

export default async function ProductPage({ params }: ProductPageProps) {
  const { redirect } = await useAuth({ authorize: true })

  if (redirect) return redirect;

  return (
    <h1>
      Product: {params.slug}
    </h1>
  )
}
