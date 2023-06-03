import IssueCard from '@/components/issue-card'
import IssuesControls from '@/components/issues-controls'
import NoIssuesBanner from '@/components/no-issues-banner'
import type { IssuesListProps } from './types'

export default function IssuesList({ issues }: IssuesListProps) {
  return (
    <div>
      <IssuesControls />
      { issues.length > 0 ? (
        <div className="mt-8 mx-6 sm:my-6 sm:mx-0 flex flex-col gap-4">
          { issues.map(issue => (
            <IssueCard issue={issue} key={issue.uuid} />
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
