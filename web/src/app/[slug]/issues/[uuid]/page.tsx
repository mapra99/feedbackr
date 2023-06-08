import { notFound } from 'next/navigation';
import invariant from 'tiny-invariant'

import { LinkButton } from '@/components/button'
import BackButton from '@/components/back-button';
import IssueCard from '@/components/issue-card';
import CommentsSection from '@/components/comments-section'

import useAuth from '@/hooks/use-auth'
import { fetchIssue } from '@/feedbackr-api/v1/issues'
import type { IssuePageProps } from './types'

export default async function IssuePage({ params } :IssuePageProps) {
  const { redirect, accessToken } = await useAuth({ authorize: true })
  if (redirect) return redirect;

  invariant(accessToken, 'accessToken is required')
  const { result: issue } = await fetchIssue(params.uuid, accessToken)
  if (!issue) { return notFound() }

  return (
    <div className="container p-6 sm:py-14 sm:px-10 lg:px-6 flex flex-col gap-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center">
        <BackButton href={params.slug} />
        <LinkButton href={`${params.slug}/issues/${params.uuid}/edit`} variant="secondary" className="px-4">
          Edit Feedback
        </LinkButton>
      </div>

      <div>
        <IssueCard issue={issue} />
      </div>

      { issue.comments ? (
        <div>
          <CommentsSection issueUuid={issue.uuid} comments={issue.comments} totalCount={issue.commentsCount} />
        </div>
      ) : null }
    </div>
  )
}
