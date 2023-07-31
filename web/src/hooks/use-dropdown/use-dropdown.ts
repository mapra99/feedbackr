import { useState } from 'react'
import type { UseDropdownParams } from './types'

export default function useDropdown({ selectedId, items, onSelect }: UseDropdownParams) {
  const [selection, setSelection] = useState<string | undefined>(selectedId)
  const [open, setOpen] = useState<boolean>(false)

  const selectedItem = selection ? items.find(item => item.id === selection) : undefined

  const selectItem = (id: string) => {
    setSelection(id)
    setOpen(false)
    if (onSelect) onSelect(id)
  }

  const toggleList = () => { setOpen(!open) }

  return {
    toggleList, open, selectedItem, selectItem
  }
}
