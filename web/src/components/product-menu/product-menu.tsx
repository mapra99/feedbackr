'use client'

import ProductCard from '@/components/product-card'
import MobileProductCard from "@/components/mobile-product-card"
import { useSmBreakpoint } from "@/hooks/use-breakpoints"

export default function ProductMenu() {
  const mobile = !useSmBreakpoint()

  return (
    <div>
      { mobile ? (
        <MobileProductCard />
      ) : (
        <ProductCard />
      )}
    </div>
  )
}
