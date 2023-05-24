'use client'

import { useState } from 'react';
import DropdownList from '@/components/dropdown-list';
import { ChevronIconUp } from '@/icons';
import type { FilterSelectProps } from './types';

export default function FilterSelect({ items, selectedId, label }: FilterSelectProps) {
  const [selection, setSelection] = useState<string | undefined>(selectedId)
  const [open, setOpen] = useState<boolean>(false)

  const selectedItem = selection ? items.find(item => item.id === selection) : undefined

  const handleSelect = (id: string) => {
    setSelection(id)
    setOpen(false)
  }

  return (
    <div className="relative flex">
      <button
        className={`h-20 px-4 flex bg-delft-blue rounded-xl text-ghost-white font-sans text-sm items-center`}
        onClick={() => setOpen(!open)}
      >
        <span className={`${open ? 'opacity-80' : ''}`}>
          { label } :
          <span className="font-bold px-1">{ selectedItem?.label }</span>
        </span>
        <div className={`ml-2 w-3 text-ghost-white ${open ? '' : 'rotate-180'} transition-all`}>
          <ChevronIconUp />
        </div>
      </button>

      { open && (
        <div className="absolute top-24 left-0">
          <DropdownList items={items} selectedId={selection} onSelect={handleSelect} />
        </div>
      ) }
    </div>
  )
}
