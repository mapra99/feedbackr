import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import invariant from 'tiny-invariant';
import ProductMenu from '@/components/product-menu';
import useAuth from '@/hooks/use-auth'
import { fetchProduct } from '@/feedbackr-api/v1/products';
import type { ProductPageProps } from './types'

export default async function ProductPage({ params }: ProductPageProps) {
  const { redirect } = await useAuth({ authorize: true })
  if (redirect) return redirect;

  const accessToken = cookies().get('accessToken')?.value
  invariant(accessToken, 'access token not found')

  const { result: product } = await fetchProduct(params.slug, accessToken)
  if (!product) { notFound() }

  return (
    <div className="w-full flex flex-col sm:pt-14 sm:px-10 lg:pt-24 lg:flex-row lg:gap-8 max-w-6xl">
      <div className="sm:mb-10">
        <ProductMenu product={product} />
      </div>
    </div>
  )
}
