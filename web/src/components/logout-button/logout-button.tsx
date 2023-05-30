'use client'

import { Button } from '@/components/button'

export default function LogoutButton() {
  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' })
    window.location.href = "/"
  }

  return (
    <Button variant="tertiary" onClick={handleLogout} type="button">
      Log out
    </Button>
  )
}
