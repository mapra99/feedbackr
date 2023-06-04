export interface DropdownListItem {
  id: string
  label: string
  value: unknown
}

export interface UseDropdownParams {
  items: DropdownListItem[];
  selectedId?: string;
}
