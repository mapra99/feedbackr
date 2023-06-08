import { DropdownListItem } from '@/hooks/use-dropdown/types'

export interface SelectFieldProps {
  items: DropdownListItem[]
  selectedId?: string
  name?: string
  id?: string
}
