import invariant from 'tiny-invariant'
import useAuth from '@/hooks/use-auth'
import BackButton from '@/components/back-button'
import EditIssueForm from '@/components/edit-issue-form'
import { fetchIssue } from '@/feedbackr-api/v1/issues'
import type { EditIssuePageProps } from './types'

export default async function EditIssuePage({ params }: EditIssuePageProps) {
  const { redirect, accessToken } = await useAuth({ authorize: true })
  if (redirect) return redirect

  invariant(accessToken, 'Access token is required')
  const { result: issue } = await fetchIssue(params.uuid, accessToken)
  invariant(issue, 'Issue could not be loaded')

  return (
    <main className="flex lg:items-center justify-center w-full min-h-screen">
      <div className="my-8 sm:my-14 mx-6 max-w-lg w-full">
        <div className="mb-14">
          <BackButton />
        </div>

        <EditIssueForm productSlug={params.slug} issue={issue} />
      </div>
    </main>
  )
}
