export interface DropdownListItem {
  id: string
  label: string
  value: string
}

export interface UseDropdownParams {
  items: DropdownListItem[];
  selectedId?: string;
}
