'use client'

import type { CategoryLabelProps } from './types'

export default function CategoryLabel({ label, selected = false, onSelectionChange }: CategoryLabelProps) {
  const handleClick = () => {
    if (onSelectionChange) onSelectionChange(!selected)
  }

  return (
    <button className="flex items-center" onClick={handleClick}>
      <span className={`
        flex justify-center items-center font-sans text-xs h-8 px-4 rounded-xl transition-all
        ${selected ? 'bg-savoy-blue text-white hover:opacity-80' : 'text-savoy-blue bg-ghost-white hover:bg-periwinkle'}
      `}>
        { label }
      </span>
    </button>
  )
}
