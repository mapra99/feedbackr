import { useMediaQuery } from 'react-responsive'

export const useSmBreakpoint = () => useMediaQuery({ query: '(min-width: 640px)' })
export const useMdBreakpoint = () => useMediaQuery({ query: '(min-width: 768px)' })
export const useLgBreakpoint = () => useMediaQuery({ query: '(min-width: 1024px)' })
export const useXlBreakpoint = () => useMediaQuery({ query: '(min-width: 1280px)' })
