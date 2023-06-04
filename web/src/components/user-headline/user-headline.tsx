import Avatar from "@/components/avatar";
import type { UserHeadlineProps } from "./types";

export default function UserHeadline({ user }: UserHeadlineProps) {
  return (
    <div className="flex items-center gap-4 sm:gap-9 justify-between">
      <Avatar firstName={user.firstName} lastName={user.lastName} />

      <div className="flex flex-col">
        <span className="font-sans text-xs sm:text-lg text-marian-blue font-bold">
          { user.firstName } { user.lastName }
        </span>

        <span className="font-sans text-xs sm:text-lg text-glaucous font-normal">
          @{ user.username }
        </span>
      </div>
    </div>
  )
}
