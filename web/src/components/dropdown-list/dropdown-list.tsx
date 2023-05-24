'use client'

import { useState } from 'react'
import { CheckIcon } from '@/icons'
import type { DropdownListProps } from './types'

export default function DropdownList({ items, selectedId, onSelect }: DropdownListProps) {
  const [selected, setSelected] = useState<string | undefined>(selectedId)

  const handleSelect = (id: string) => {
    setSelected(id)
    if (onSelect) onSelect(id)
  }

  return (
    <div className="w-64 shadow-2xl rounded-md bg-white">
      { items.map((item, index) => (
        <>
          <button
            key={item.id}
            className="flex items-center justify-between px-6 py-3 w-full transition-all text-glaucous text-base font-sans hover:text-veronica active:opacity-80"
            onClick={() => handleSelect(item.id)}
          >
            { item.label }

            { item.id === selected && (
              <div className="w-3 text-veronica">
                <CheckIcon />
              </div>
            )}
          </button>
          { index < items.length - 1 && <hr className="border-t border-savoy-blue opacity-10" /> }
        </>
      )) }
    </div>
  )
}
