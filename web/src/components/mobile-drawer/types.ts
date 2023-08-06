import { type GroupedIssues } from "@/utils/issues/group-issues-by-status/types";

export interface MobileDrawerProps {
  filterParams: {
    category?: string;
  }
  groupedIssues: GroupedIssues
}
