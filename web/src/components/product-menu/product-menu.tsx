'use client'

import ProductCard from '@/components/product-card'
import MobileProductCard from "@/components/mobile-product-card"
import CategoriesFilter from '@/components/categories-filter'
import RoadmapSummary from '@/components/roadmap-summary'
import { useMdBreakpoint } from "@/hooks/use-breakpoints"

import type { ProductMenuProps } from './types'

export default function ProductMenu({ product, filterParams, groupedIssues }: ProductMenuProps) {
  const mobile = !useMdBreakpoint()

  return (
    <div>
      { mobile ? (
        <MobileProductCard
          product={product}
          filterParams={filterParams}
          groupedIssues={groupedIssues}
        />
      ) : (
        <div className="flex lg:flex-col gap-3 lg:gap-6">
          <ProductCard product={product} />
          <CategoriesFilter filterParams={filterParams} />
          <RoadmapSummary groupedIssues={groupedIssues} />
        </div>
      )}
    </div>
  )
}
