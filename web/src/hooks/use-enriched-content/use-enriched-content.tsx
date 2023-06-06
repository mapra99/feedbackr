import UserTag from '@/components/user-tag';
import type { ReactNode } from 'react'
import type { User } from '@/feedbackr-api/v1/schemas'

export default function useEnrichedContent(content: string, users: User[]) {
  const taggedUsers = content.match(/\@(\S+)/g);
  if (!taggedUsers) return content;

  const enrichedContent: ReactNode[] = [];
  let startIndex = 0;

  taggedUsers.forEach((taggedUser) => {
    const index = content.indexOf(taggedUser, startIndex);
    if (index !== -1) enrichedContent.push(content.substring(startIndex, index));
    
    const username = taggedUser.substring(1);

    const user = users.find((user) => user.username === username)
    if (!user) return

    enrichedContent.push(
      <UserTag user={user} />
    );

    startIndex = index + taggedUser.length;
  });

  // Add the remaining text after the last tagged username
  if (startIndex < content.length) {
    enrichedContent.push(content.substring(startIndex));
  }

  return enrichedContent
}
