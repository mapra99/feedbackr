import IssuesControls from '@/components/issues-controls'
import NoIssuesBanner from '@/components/no-issues-banner'
import type { IssuesListProps } from './types'

export default function IssuesList({ issues }: IssuesListProps) {
  return (
    <div>
      <IssuesControls />
      { issues.length > 0 ? (
        <div className="mt-8">
          { issues.map(issue => (
            <div key={issue.uuid} className="mt-4">
              { issue.title }
            </div>
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
