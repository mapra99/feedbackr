import type { ProductCardProps } from './types'

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-64 h-44 lg:h-36 flex flex-col justify-end rounded-lg bg-savoy-blue bg-gradient-to-bl from-blush via-veronica to-picton-blue p-6">
      <h1 className="font-sans text-2xl text-white ">
        { product.name }
      </h1>
      <span className="font-sans text-sm text-white font-medium">
        Feedback Board
      </span>
    </div>
  )
}
