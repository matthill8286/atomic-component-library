import { createContext, ReactNode } from 'react'

export interface HeaderContextType {
  openDrawer: (name: string | null, content: ReactNode | Element | null | undefined, side?: 'left' | 'right') => void
  updateDrawer: (name: string | null, content: ReactNode | Element | null | undefined) => void
  closeDrawer: () => void
  navigationButtonLabel?: string | null
  openDrawName?: string | null
  state: any
}

export const HeaderContext = createContext<HeaderContextType>({
  navigationButtonLabel: '',
  openDrawName: '',
  closeDrawer: () => {},
  openDrawer: () => {},
  updateDrawer: () => {},
  state: {},
})
