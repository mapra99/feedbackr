import type { IssueStatus } from '@/feedbackr-api/v1/schemas'

const ISSUE_STATUSES: IssueStatus[] = [
  'suggestion',
  'planned',
  'in_progress',
  'live'
]

export default ISSUE_STATUSES

export const BG_COLOR_MAPPING = {
  suggestion: 'bg-cool-gray',
  planned: 'bg-atomic-tangerine',
  in_progress: 'bg-veronica',
  live: 'bg-maya-blue'
}

export const BORDER_COLOR_MAPPING = {
  suggestion: 'border-cool-gray',
  planned: 'border-atomic-tangerine',
  in_progress: 'border-veronica',
  live: 'border-maya-blue'
}

export const LABEL_MAPPING = {
  suggestion: 'Suggestion',
  planned: 'Planned',
  in_progress: 'In Progress',
  live: 'Live'
}
