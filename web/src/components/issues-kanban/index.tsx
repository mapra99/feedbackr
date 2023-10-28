import type { IssuesKanbanProps } from './types'
import browserInfo from '@/utils/browser-info'
import DesktopIssuesKanban from './desktop'
import MobileIssuesKanban from './mobile'

export default function IssuesKanban({ groupedIssues, productSlug }: IssuesKanbanProps) {
  const { isPhone } = browserInfo();
  if (isPhone) return <MobileIssuesKanban groupedIssues={groupedIssues} productSlug={productSlug} />

  return <DesktopIssuesKanban groupedIssues={groupedIssues} productSlug={productSlug} />
}
