import type { DropdownListItem } from "@/components/dropdown-list/types";

export interface FilterSelectProps {
  label: string
  items: DropdownListItem[];
  selectedId?: string;
}
