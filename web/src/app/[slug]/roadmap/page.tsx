import useAuth from '@/hooks/use-auth'
import { notFound } from 'next/navigation';
import invariant from 'tiny-invariant';
import RoadmapHeader from '@/components/roadmap-header'
import { fetchProduct } from '@/feedbackr-api/v1/products';
import { fetchIssuesList } from '@/feedbackr-api/v1/issues';
import { groupIssuesByStatus } from '@/utils/issues';
import IssuesKanban from '@/components/issues-kanban';
import type { ProductRoadmapPageProps } from './types'

export default async function ProductRoadmapPage({ params }: ProductRoadmapPageProps) {
  const { redirect, accessToken } = await useAuth({ authorize: true })
  if (redirect) return redirect
  invariant(accessToken, 'access token not found')

  const { result: product } = await fetchProduct(params.slug, accessToken)
  if (!product) { notFound() }

  const { result: issues } = await fetchIssuesList(params.slug, accessToken)
  invariant(issues, 'issues could not be loaded')

  const groupedIssues = groupIssuesByStatus(issues)

  return (
    <div className="w-full flex flex-col md:pt-14 md:px-10 md:gap-8 lg:gap-12 lg:pt-20 max-w-7xl mx-auto">
      <div className="md:mb-10">
        <RoadmapHeader productSlug={params.slug} />
      </div>
      <div className="lg:flex-1">
        <IssuesKanban groupedIssues={groupedIssues} />
      </div>
    </div>
  )
}
