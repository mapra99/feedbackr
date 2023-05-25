'use client'

import DropdownList from "@/components/dropdown-list"
import { ChevronIconUp } from "@/icons"
import useDropdown from "@/hooks/use-dropdown"

import type { SelectFieldProps } from './types'

export default function SelectField({ items, selectedId }: SelectFieldProps) {
  const { open, selectedItem, toggleList, selectItem } = useDropdown({ items, selectedId  })

  return (
    <div className="relative flex">
      <button
        className={`
          font-sans text-base text-marian-blue rounded-md h-12 bg-ghost-white-light px-6 focus:outline-none transition-all border flex items-center
          ${open ? 'border-savoy-blue' : 'border-white'}
        `}
        onClick={toggleList}
      >
        <span className={`${open ? 'opacity-80' : ''}`}>
          { selectedItem?.label }
        </span>
        <div className={`ml-2 w-3 text-savoy-blue ${open ? '' : 'rotate-180'} transition-all`}>
          <ChevronIconUp />
        </div>
      </button>

      { open && (
        <div className="absolute top-0 left-0">
          <DropdownList items={items} selectedId={selectedItem?.id} onSelect={selectItem} />
        </div>
      ) }
    </div>
  )
}