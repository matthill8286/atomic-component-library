import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Theme } from '@/types'

interface UseThemeInfo {
  themeName: string
}

export const useThemeInfo = (): UseThemeInfo => {
  const themeContext = useContext<Theme>(ThemeContext)
  const themeName = themeContext.name
  return { themeName }
}
