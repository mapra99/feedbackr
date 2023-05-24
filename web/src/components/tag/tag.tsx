'use client'

import { useState } from 'react';

export default function Tag() {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected)
  }

  return (
    <button
      className={`
        flex justify-center items-center px-4 h-8 rounded-xl bg-ghost-white font-sans text-xs font-bold text-savoy-blue active:opacity-60 transition-all
        ${selected ? "bg-savoy-blue text-white hover:opacity-80" : "hover:bg-periwinkle"}
      `}
      onClick={handleClick}
    >
      Tag
    </button>
  )
}
