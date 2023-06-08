'use client'

import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { MenuIcon, CrossIcon } from '@/icons'

import type { MobileProductCardProps } from './types'

export default function MobileProductCard({ product, children }: MobileProductCardProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [parent] = useAutoAnimate()

  const openMenu = () => {
    setMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  return (
    <div className="relative" ref={parent}>
      <nav className="w-full h-20 flex justify-between items-center bg-savoy-blue bg-gradient-to-bl from-blush via-veronica to-picton-blue px-6">
        <div className="flex flex-col">
          <h1 className="font-sans text-lg text-white ">
            { product.name }
          </h1>
          <span className="font-sans text-xs text-white font-medium">
            Feedback Board
          </span>
        </div>

        <div className="w-5 h-5 text-white cursor-pointer" onClick={toggleMenu} ref={parent}>
          { menuOpen ? <CrossIcon /> : <MenuIcon /> }
        </div>
      </nav>

      { menuOpen && (
        <div className="absolute right-0 w-screen h-screen z-50">
          <div className="absolute right-0 w-screen h-full bg-black/50" onClick={closeMenu}>
            <div className="absolute right-0 w-72 h-full bg-ghost-white-light p-6 flex flex-col gap-6 items-center" onClick={(e) => e.stopPropagation()}>
              { children }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
