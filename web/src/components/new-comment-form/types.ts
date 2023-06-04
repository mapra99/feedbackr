export interface NewCommentFormProps {
  issueUuid: string
  onSubmit: (content: string, parentType: 'Issue' | 'Comment', parentUuid: string) => void
}
