interface SortParams {
  sort_by?: string
  sort_direction?: string
}

export interface IssuesControlsProps {
  productSlug: string
  issuesCount: number
  sortParams: SortParams
  isPhone?: boolean
}
