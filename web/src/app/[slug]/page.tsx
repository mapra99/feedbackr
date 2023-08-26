import useAuth from '@/hooks/use-auth'
import { notFound } from 'next/navigation';
import invariant from 'tiny-invariant';
import ProductMenu from '@/components/product-menu'
import { fetchProduct } from '@/feedbackr-api/v1/products';
import IssuesList from '@/components/issues-list';
import { fetchIssuesList } from '@/feedbackr-api/v1/issues';
import { groupIssuesByStatus } from '@/utils/issues';
import type { ProductPageProps } from './types'

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const { redirect, accessToken } = await useAuth({ authorize: true })
  if (redirect) return redirect
  invariant(accessToken, 'access token not found')

  const { result: product } = await fetchProduct(params.slug, accessToken)
  if (!product) { notFound() }

  const { sort_by = 'upvotes', sort_direction = 'desc' } = searchParams
  const { category } = searchParams
  const { result: issues } = await fetchIssuesList(params.slug, accessToken, { sort_by, sort_direction }, { category })
  invariant(issues, 'issues could not be loaded')

  const groupedIssues = groupIssuesByStatus(issues)

  return (
    <div className="w-full flex flex-col md:pt-14 md:px-10 lg:pt-24 lg:flex-row lg:gap-8 max-w-7xl mx-auto">
      <div className="md:mb-10">
        <ProductMenu product={product} filterParams={{ category }} groupedIssues={groupedIssues} />
      </div>
      <div className="lg:flex-1">
        <IssuesList issues={issues} productSlug={params.slug} sortParams={{ sort_by, sort_direction }} />
      </div>
    </div>
  )
}
