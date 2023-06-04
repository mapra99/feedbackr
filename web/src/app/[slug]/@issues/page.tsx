import { cookies } from 'next/headers';
import invariant from 'tiny-invariant';
import IssuesList from '@/components/issues-list';
import { fetchIssuesList } from '@/feedbackr-api/v1/products/issues';
import type { IssuesProps } from './types'

export default async function Issues({ params }: IssuesProps) {
  const accessToken = cookies().get('accessToken')?.value
  invariant(accessToken, 'access token not found')

  const { result: issues } = await fetchIssuesList(params.slug, accessToken)
  invariant(issues, 'issues could not be loaded')

  return (
    <div className="lg:flex-1">
      <IssuesList issues={issues} />
    </div>
  )
}
