import { notFound } from 'next/navigation';
import invariant from 'tiny-invariant'
import useAuth from '@/hooks/use-auth'
import { fetchIssue } from '@/feedbackr-api/v1/products/issues'
import type { IssuePageProps } from './types'

export default async function IssuePage({ params } :IssuePageProps) {
  const { redirect, accessToken } = await useAuth({ authorize: true })
  if (redirect) return redirect;

  invariant(accessToken, 'accessToken is required')
  const { result: issue } = await fetchIssue({ uuid: params.uuid, productSlug: params.slug }, accessToken)
  if (!issue) { return notFound() }

  return (
    <h1>
      { issue.title }
    </h1>
  )
}
