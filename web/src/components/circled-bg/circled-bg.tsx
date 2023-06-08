import type { CircledBgProps } from './types'

export default function CircledBg({ children }: CircledBgProps) {
  return (
    <div className="rounded-full w-10 sm:w-14 h-10 sm:h-14 flex justify-center items-center bg-savoy-blue bg-gradient-to-bl from-blush via-veronica to-picton-blue">
      <div className="text-white flex justify-center items-center">
        { children }
      </div>
    </div>
  )
}
