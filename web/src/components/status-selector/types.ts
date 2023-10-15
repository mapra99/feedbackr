export interface StatusSelectorProps {
  activeStatus: string;
  onStatusChange: (status: string) => void;
  issuesCount: { [key: string]: number };
}
