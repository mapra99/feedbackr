import type { RoadmapHeaderProps } from './types'

export default function RoadmapHeader({ productSlug }: RoadmapHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900">Roadmap</h1>
      <p className="mt-4 text-gray-600">Product: {productSlug}</p>
    </div>
  )
}