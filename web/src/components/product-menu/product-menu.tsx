import ProductCard from '@/components/product-card'
import MobileProductCard from "@/components/mobile-product-card"
import CategoriesFilter from '@/components/categories-filter'
import RoadmapSummary from '@/components/roadmap-summary'
import browserInfo from '@/utils/browser-info'

import type { ProductMenuProps } from './types'

export default function ProductMenu({ product, filterParams, groupedIssues }: ProductMenuProps) {
  const { isPhone } = browserInfo()

  return (
    <div>
      { isPhone ? (
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
