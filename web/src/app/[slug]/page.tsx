import ProductMenu from '@/components/product-menu';
import useAuth from '@/hooks/use-auth'
import type { ProductPageProps } from './types'

export default async function ProductPage({ params }: ProductPageProps) {
  const { redirect } = await useAuth({ authorize: true })
  if (redirect) return redirect;

  return (
    <div className="w-full">
      <ProductMenu />
    </div>
  )
}
