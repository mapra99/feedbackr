import { Button } from '@/components/button'
import { DetectiveIcon } from "@/icons"

export default function NoIssuesBanner() {
  return (
    <div className="bg-white rounded-xl py-20 sm:py-28 px-6 flex justify-center items-center flex-col">
      <div className="h-28 w-28 sm:w-36 sm:h-36 mb-10 sm:mb-14">
        <DetectiveIcon />
      </div>

      <h2 className="font-sans text-marian-blue text-xl sm:text-3xl mb-3 sm:mb-4">
        There is no feedback yet.
      </h2>
      <p className="font-sans text-glaucous text-xs sm:text-base text-center font-normal mb-6 sm:mb-12 max-w-md">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
      </p>
      <Button variant="primary" className="!px-4 sm:!px-6 sm:h-12">
        + Add Feedback
      </Button>
    </div>
  )
}
