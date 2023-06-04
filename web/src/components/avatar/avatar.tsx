import type { AvatarProps } from "./types"

export default function Avatar({ firstName, lastName }: AvatarProps) {
  return (
    <div className="rounded-full w-10 h-10 flex justify-center items-center bg-savoy-blue bg-gradient-to-bl from-blush via-veronica to-picton-blue">
      <span className="font-sans text-xs text-white font-bold">
        { firstName[0] }{ lastName[0] }
      </span>
    </div>
  )
}
