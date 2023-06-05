'use client'

import DropdownList from "@/components/dropdown-list"
import { ChevronIconUp } from "@/icons"
import useDropdown from "@/hooks/use-dropdown"

import type { SelectFieldProps } from './types'

export default function SelectField({ items, selectedId, name, id }: SelectFieldProps) {
  const { open, selectedItem, toggleList, selectItem } = useDropdown({ items, selectedId })

  return (
    <div className="relative flex">
      <input type="hidden" id={id} name={name} value={selectedItem?.id} />
      <button
        className={`
          w-full font-sans text-xs sm:text-base font-normal text-marian-blue rounded-md h-12 bg-ghost-white-light pl-6 pr-12 focus:outline-none transition-all border flex items-center
          ${open ? 'border-savoy-blue' : 'border-white'}
        `}
        onClick={toggleList}
        type="button"
      >
        <span className={`${open ? 'opacity-80' : ''}`}>
          { selectedItem?.label }
        </span>
        <div className={`absolute right-6 w-3 text-savoy-blue ${open ? '' : 'rotate-180'} transition-all`}>
          <ChevronIconUp />
        </div>
      </button>

      { open && (
        <div className="absolute w-full top-full left-0 z-10">
          <DropdownList items={items} selectedId={selectedItem?.id} onSelect={selectItem} />
        </div>
      ) }
    </div>
  )
}
