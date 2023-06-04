import { MenuIcon } from '@/icons'

import type { MobileProductCardProps } from './types'

export default function MobileProductCard({ product }: MobileProductCardProps) {
  return (
    <nav className="w-full h-20 flex justify-between items-center bg-savoy-blue bg-gradient-to-bl from-blush via-veronica to-picton-blue px-6">
      <div className="flex flex-col">
        <h1 className="font-sans text-lg text-white ">
          { product.name }
        </h1>
        <span className="font-sans text-xs text-white font-medium">
          Feedback Board
        </span>
      </div>

      <div className="w-5 h-5 text-white">
        <MenuIcon />
      </div>
    </nav>
  )
}
