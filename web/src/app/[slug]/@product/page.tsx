import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import invariant from 'tiny-invariant';
import ProductMenu from '@/components/product-menu'
import { fetchProduct } from '@/feedbackr-api/v1/products';
import type { ProductProps } from './types'

export default async function Product({ params }: ProductProps) {
  const accessToken = cookies().get('accessToken')?.value
  invariant(accessToken, 'access token not found')

  const { result: product } = await fetchProduct(params.slug, accessToken)
  if (!product) { notFound() }

  return (
    <div className="sm:mb-10">
      <ProductMenu product={product} />
    </div>
  )
}
