import useAuth from '@/hooks/use-auth'
import type { ProductPageProps } from './types'

export default async function ProductPage({ product, issues }: ProductPageProps) {
  const { redirect } = await useAuth({ authorize: true })
  if (redirect) return redirect;

  return (
    <div className="w-full flex flex-col sm:pt-14 sm:px-10 lg:pt-24 lg:flex-row lg:gap-8 max-w-7xl mx-auto">
      { product }
      { issues }
    </div>
  )
}
