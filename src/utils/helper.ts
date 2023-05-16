import { useContext } from 'react'
import { alternateTheme, defaultTheme } from '@/styles'
import { ThemeContext } from '@/styles/styled'
import { Theme, ThemeColors } from '@/types'

export interface ChangeColorProps {
  theme?: Theme
  defaultColor: ThemeColors
  color?: ThemeColors
}

export const isdefaultTheme = (): boolean => {
  const { name } = useContext(ThemeContext)
  return name === defaultTheme.name
}

export const isAlternateTheme = (): boolean => {
  const { name } = useContext(ThemeContext)
  return name === alternateTheme.name
}

// returns the input color. if it is the primary color it will change it to grey for alternate
export const getColor = (changeColorProps: ChangeColorProps): ThemeColors => {
  const color = changeColorProps.color
  const theme = changeColorProps.theme
  let colorProp: ThemeColors | undefined
  if (color === 'primary') {
    if (isdefaultTheme()) {
      colorProp = color
    } else {
      colorProp = 'grey6'
    }
  } else {
    colorProp = color
  }
  return colorProp ? (theme ? theme.color[colorProp] : colorProp) : changeColorProps.defaultColor
}

export const useTheme = (): Theme => {
  return useContext(ThemeContext)
}

export const colorsList = Object.keys(defaultTheme.color) as ThemeColors[]

export const containsHtmlTags = /<.+?>/g
