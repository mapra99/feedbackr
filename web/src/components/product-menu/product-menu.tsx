'use client'

import ProductCard from '@/components/product-card'
import MobileProductCard from "@/components/mobile-product-card"
import LabelsCard from '@/components/labels-card'
import { useSmBreakpoint } from "@/hooks/use-breakpoints"

import type { ProductMenuProps } from './types'

export default function ProductMenu({ product }: ProductMenuProps) {
  const mobile = !useSmBreakpoint()

  return (
    <div>
      { mobile ? (
        <MobileProductCard product={product}>
          <LabelsCard />
        </MobileProductCard>
      ) : (
        <ProductCard product={product} />
      )}
    </div>
  )
}
