import useAuth from '@/hooks/use-auth'
import { notFound } from 'next/navigation';
import invariant from 'tiny-invariant';
import ProductMenu from '@/components/product-menu'
import { fetchProduct } from '@/feedbackr-api/v1/products';
import IssuesList from '@/components/issues-list';
import { fetchIssuesList } from '@/feedbackr-api/v1/products/issues';
import type { ProductPageProps } from './types'

export default async function ProductPage({ params }: ProductPageProps) {
  const { redirect, accessToken } = await useAuth({ authorize: true })
  if (redirect) return redirect
  invariant(accessToken, 'access token not found')

  const { result: product } = await fetchProduct(params.slug, accessToken)
  if (!product) { notFound() }

  const { result: issues } = await fetchIssuesList(params.slug, accessToken)
  invariant(issues, 'issues could not be loaded')

  return (
    <div className="w-full flex flex-col sm:pt-14 sm:px-10 lg:pt-24 lg:flex-row lg:gap-8 max-w-7xl mx-auto">
      <div className="sm:mb-10">
        <ProductMenu product={product} />
      </div>
      <div className="lg:flex-1">
        <IssuesList issues={issues} productSlug={params.slug} />
      </div>
    </div>
  )
}
