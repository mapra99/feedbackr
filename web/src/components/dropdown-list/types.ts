export interface DropdownListItem {
  id: string
  label: string
  value: string
}

export interface DropdownListProps {
  items: DropdownListItem[]
  selectedId?: string
  onSelect?: (id: string) => void
}
