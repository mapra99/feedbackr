'use client';

import { useState } from "react"
import StatusSelector from "../status-selector"
import { IssuesKanbanProps } from "./types"

export default function MobileIssuesKanban({ groupedIssues }: IssuesKanbanProps) {
  const [activeStatus, setActiveStatus] = useState('planned')
  const handleStatusChange = (status: string) => { setActiveStatus(status) }

  const issuesCount: { [key: string]: number } = {}
  Object.keys(groupedIssues).forEach(status => {
    issuesCount[status] = groupedIssues[status].length
  })

  const issues = groupedIssues[activeStatus]

  return (
    <StatusSelector activeStatus={activeStatus} onStatusChange={handleStatusChange} issuesCount={issuesCount} />
  )
}
