import type { CategoryLabelProps } from './types'

const LABEL_MAPPINGS = {
  'all': 'All',
  'bug': 'Bug',
  'feature': 'Feature',
  'enhancement': 'Enhancement',
  'ui': 'UI',
  'ux': 'UX'
}

export default function CategoryLabel({ label }: CategoryLabelProps) {
  return (
    <div className="flex items-center">
      <span className="flex justify-center items-center font-sans text-xs text-savoy-blue h-8 px-4 rounded-xl bg-ghost-white">
        { LABEL_MAPPINGS[label] }
      </span>
    </div>
  )
}
