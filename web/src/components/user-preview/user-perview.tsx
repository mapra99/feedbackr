import Avatar from '@/components/avatar'
import type { UserPreviewProps } from './types'

export default function UserPreview({ user }:  UserPreviewProps) {
  return (
    <div className="bg-white rounded-xl p-4 flex items-center justify-center gap-4 shadow-sm">
      <div className="flex-1">
        <Avatar firstName={user.firstName} lastName={user.lastName} />
      </div>

      <span className="text-xs font-normal text-marian-blue">
        { user.firstName } { user.lastName }
      </span>
    </div>
  )
}
