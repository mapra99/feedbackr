import useAuth from '@/hooks/use-auth'
import BackButton from '@/components/back-button'
import NewIssueForm from '@/components/new-issue-form'
import type { NewIssuePageProps } from './types'

export default async function NewIssuePage({ params }: NewIssuePageProps) {
  const { redirect } = await useAuth({ authorize: true })
  if (redirect) return redirect

  return (
    <main className="flex lg:items-center justify-center w-full min-h-screen">
      <div className="my-8 sm:my-14 mx-6 max-w-lg w-full">
        <div className="mb-14">
          <BackButton />
        </div>

        <NewIssueForm productSlug={params.slug} />
      </div>
    </main>
  )
}
