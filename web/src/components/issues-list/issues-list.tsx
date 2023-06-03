import IssuesControls from '../issues-controls/issues-controls'
import type { IssuesListProps } from './types'

export default function IssuesList({ issues }: IssuesListProps) {
  return (
    <div>
      <IssuesControls />
      <h1>ISSUES LIST</h1>
    </div>
  )
}
