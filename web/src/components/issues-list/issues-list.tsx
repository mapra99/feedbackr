import Link from 'next/link';
import IssueCard from '@/components/issue-card'
import IssuesControls from '@/components/issues-controls'
import NoIssuesBanner from '@/components/no-issues-banner'
import type { IssuesListProps } from './types'

export default function IssuesList({ issues, productSlug }: IssuesListProps) {
  console.log({ productSlug })
  return (
    <div>
      <IssuesControls />
      { issues.length > 0 ? (
        <div className="mt-8 mx-6 sm:my-6 sm:mx-0 flex flex-col gap-4 lg:gap-5">
          { issues.map(issue => (
            <Link key={issue.uuid} href={`${productSlug}/issues/${issue.uuid}`}>
              <IssueCard issue={issue} />
            </Link>
          )) }
        </div>
      ) : (
        <div className="my-8 mx-6 sm:my-6 sm:mx-0">
          <NoIssuesBanner />
        </div>
      )}
    </div>
  )
}
