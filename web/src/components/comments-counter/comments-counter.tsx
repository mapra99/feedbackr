import { CommentIcon } from "@/icons"

export default function CommentsCounter() {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-4 h-4 text-lavender">
        <CommentIcon />
      </div>

      <span className="font-sans text-xs sm:text-base text-marian-blue !font-bold">
        2
      </span>
    </div>
  )
}
