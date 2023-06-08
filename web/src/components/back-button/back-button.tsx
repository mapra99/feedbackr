import Link from 'next/link';
import { PointerLeftIcon } from "@/icons"
import { BackButtonProps } from "./types"

export default function BackButton({ href }: BackButtonProps) {
  return (
    <Link
      type="button"
      className="flex items-center gap-3"
      href={href}
    >
      <div className="w-3 h-3 text-savoy-blue">
        <PointerLeftIcon />
      </div>

      <span className="text-glaucous font-sans text-xs font-bold">
        Go Back
      </span>
    </Link>
  )
}
