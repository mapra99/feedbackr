'use client'

import ISSUE_STATUSES from '@/constants/issue-statuses'
import StatusLabel from '@/components/status-label'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import type { RoadmapSummaryProps } from './types'

function RoadmapSummary({ groupedIssues }: RoadmapSummaryProps) {
  const { slug } = useParams();

  return (
    <div className="flex-1 lg:flex-auto lg:w-64 min-h-44 lg:h-auto flex flex-col items-center rounded-xl gap-6 bg-white p-6">
      <div className="w-full flex justify-between items-center">
        <span className="text-xl text-marian-blue font-bold font-sans">
          Roadmap
        </span>

        <Link href={`/${slug}/roadmap`} className="text-xs font-sans transition-all text-savoy-blue underline hover:opacity-70">
          View
        </Link>
      </div>

      <div className="w-full flex flex-col gap-2">
        {
          ISSUE_STATUSES.map((status) => (
            <div key={status} className="w-full flex justify-between items-center">
              <StatusLabel status={status} />
              <span className="text-base text-glaucous font-bold font-sans">
                { groupedIssues[status].length }
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RoadmapSummary
