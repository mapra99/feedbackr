import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import invariant from 'tiny-invariant';
import ProductMenu from '@/components/product-menu';
import IssuesList from '@/components/issues-list';
import useAuth from '@/hooks/use-auth'
import { fetchProduct } from '@/feedbackr-api/v1/products';
import { fetchIssuesList } from '@/feedbackr-api/v1/products/issues';
import type { ProductPageProps } from './types'

export default async function ProductPage({ params }: ProductPageProps) {
  const { redirect } = await useAuth({ authorize: true })
  if (redirect) return redirect;

  const accessToken = cookies().get('accessToken')?.value
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
        <IssuesList issues={issues} />
      </div>
    </div>
  )
}
