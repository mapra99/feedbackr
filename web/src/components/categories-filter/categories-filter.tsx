'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import ISSUE_CATEGORY_LABELS from "@/constants/issue-category-labels"
import CategoryLabel from "@/components/category-label"
import updateCurrentPath from "@/utils/update-current-path"
import type { CategoriesFilterProps } from './types'

const FILTER_OPTIONS = [ { name: "all", label: "All" }, ...ISSUE_CATEGORY_LABELS ]

export default function CategoriesFilter({ filterParams }: CategoriesFilterProps) {
  const [selection, setSelection] = useState<Set<string>>(new Set(filterParams.category ? filterParams.category.split(',') : ["all"]))
  const router = useRouter()

  const handleSelectionChange = (name: string) => {
    const updatedSelection = new Set(updateSelection(name))
    updatedSelection.delete("all")

    const newPath = updateCurrentPath({ category: Array.from(updatedSelection).join(",") })
    router.push(newPath)
  }

  const updateSelection = (name: string) => {
    const newSelection = new Set(selection)

    if (selection.has(name)) {
      newSelection.delete(name)
      if (newSelection.size === 0) newSelection.add("all")
    } else {
      if (newSelection.has("all")) newSelection.delete("all")
      if (name === 'all') newSelection.clear()

      newSelection.add(name)
    }

    setSelection(newSelection)
    return newSelection
  }

  return (
    <div className="flex-1 lg:flex-auto lg:w-64 h-44 lg:h-auto flex flex-wrap items-center rounded-xl gap-x-2 gap-y-4 bg-white p-6">
      {
        FILTER_OPTIONS.map((option) => (
          <CategoryLabel
            key={option.name}
            label={option.label}
            onSelectionChange={() => handleSelectionChange(option.name)}
            selected={selection.has(option.name)}
          />
        ))
      }
    </div>
  )
}
