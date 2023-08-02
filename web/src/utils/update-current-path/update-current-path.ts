'use client'

function updateCurrentPath(params: { [key: string]: string }) {
  const url = new URL(window.location.href)
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value)
  }

  return `${url.pathname}${url.search}${url.hash}`
}

export default updateCurrentPath
