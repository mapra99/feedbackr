import type { ReactNode } from 'react'

export interface ProductPageProps {
  params: {
    slug: string
  },
  searchParams: {
    sort_by?: string
    sort_direction?: string
  }
}
