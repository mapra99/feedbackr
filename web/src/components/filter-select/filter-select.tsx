'use client'

import DropdownList from '@/components/dropdown-list';
import { ChevronIconUp } from '@/icons';
import useDropdown from '@/hooks/use-dropdown';
import type { FilterSelectProps } from './types';

export default function FilterSelect({ items, selectedId, label }: FilterSelectProps) {
  const { open, selectedItem, toggleList, selectItem } = useDropdown({ items, selectedId  })

  return (
    <div className="relative flex h-full">
      <button
        className={`h-full flex rounded-xl text-ghost-white font-sans text-sm items-center`}
        onClick={toggleList}
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
        <div className="absolute top-[calc(100%+0.5rem)] left-0 z-10">
          <DropdownList items={items} selectedId={selectedItem?.id} onSelect={selectItem} />
        </div>
      ) }
    </div>
  )
}
