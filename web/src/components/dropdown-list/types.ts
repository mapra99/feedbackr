import type { DropdownListItem } from "@/hooks/use-dropdown/types";

export interface DropdownListProps {
  items: DropdownListItem[]
  selectedId?: string
  onSelect?: (id: string) => void
}
