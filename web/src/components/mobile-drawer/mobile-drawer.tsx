'use client'

import CategoriesFilter from '@/components/categories-filter'
import type { MobileDrawerProps } from './types'

export default function MobileDrawer({ filterParams }: MobileDrawerProps) {
  return (
    <div className="h-screen transition-all duration-500 w-screen absolute top-20 right-0 z-50 flex justify-end">
      <div className="bg-ghost-white-light h-full w-72 box-border items-center">
        <div className="w-full p-6">
          <CategoriesFilter filterParams={filterParams} />
        </div>
      </div>

      <div className="w-full bg-black opacity-50 h-full absolute right-0 top-0 -z-10" />
    </div>
  )
}
