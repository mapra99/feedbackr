'use client'

import ProductCard from '@/components/product-card'
import MobileProductCard from "@/components/mobile-product-card"
import CategoriesFilter from '@/components/categories-filter'
import { useMdBreakpoint } from "@/hooks/use-breakpoints"

import type { ProductMenuProps } from './types'

export default function ProductMenu({ product, filterParams }: ProductMenuProps) {
  const mobile = !useMdBreakpoint()

  return (
    <div>
      { mobile ? (
        <MobileProductCard
          product={product}
          filterParams={filterParams}
        />
      ) : (
        <div className="flex lg:flex-col gap-3 lg:gap-6">
          <ProductCard product={product} />
          <CategoriesFilter filterParams={filterParams} />
        </div>
      )}
    </div>
  )
}
