'use client'

import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { MenuIcon, CrossIcon } from '@/icons'
import MobileDrawer from '@/components/mobile-drawer'

import type { MobileProductCardProps } from './types'

export default function MobileProductCard({ product, filterParams, groupedIssues }: MobileProductCardProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [parent] = useAutoAnimate()

  const toggleDrawer = () => {
    const newDrawerState = !drawerOpen

    if (newDrawerState) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = ''
    }

    setDrawerOpen(newDrawerState)
  }

  return (
    <div ref={parent}>
      <nav className="w-full h-20 flex justify-between items-center bg-savoy-blue bg-gradient-to-bl from-blush via-veronica to-picton-blue px-6">
        <div className="flex flex-col">
          <h1 className="font-sans text-lg text-white ">
            { product.name }
          </h1>
          <span className="font-sans text-xs text-white font-medium">
            Feedback Board
          </span>
        </div>

        <button className="w-5 h-5 text-white" onClick={toggleDrawer} ref={parent}>
          { drawerOpen ? <CrossIcon/> : <MenuIcon /> }
        </button>
      </nav>

      { drawerOpen ? (
        <MobileDrawer filterParams={filterParams} groupedIssues={groupedIssues} />
      ) : null}
    </div>
  )
}
