import { CommentIcon } from "@/icons"
import type { CommentsCounterProps } from "./types"

export default function CommentsCounter({ commentsCount }: CommentsCounterProps) {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-4 h-4 text-lavender">
        <CommentIcon />
      </div>

      <span className="font-sans text-xs sm:text-base text-marian-blue !font-bold">
        { commentsCount }
      </span>
    </div>
  )
}
