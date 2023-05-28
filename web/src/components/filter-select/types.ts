import type { DropdownListItem } from "@/hooks/use-dropdown/types";

export interface FilterSelectProps {
  label: string
  items: DropdownListItem[];
  selectedId?: string;
}
