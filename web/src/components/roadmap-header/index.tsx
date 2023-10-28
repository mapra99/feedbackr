import BackButton from '@/components/back-button'
import { LinkButton } from '@/components/button'
import type { RoadmapHeaderProps } from './types'

export default function RoadmapHeader({ productSlug }: RoadmapHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4 px-6 md:px-8 lg:px-10 py-7 bg-delft-blue text-white font-sans md:rounded-xl">
      <div className="flex flex-col gap-1">
        <BackButton lightText />
        <h1 className="text-xl md:text-3xl font-bold text-gray-900">Roadmap</h1>
      </div>

      <LinkButton
        variant="primary" className="!px-3 sm:!px-6 sm:h-12"
        href={`/${productSlug}/issues/new`}
      >
        + Add Feedback
      </LinkButton>
    </div>
  )
}