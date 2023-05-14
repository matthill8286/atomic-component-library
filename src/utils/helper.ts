import { useContext } from 'react'
import { alternateTheme, saiyanTheme } from '@/styles'
import { ThemeContext } from '@/styles/styled'
import { Theme, ThemeColors } from '@/types'

export interface ChangeColorProps {
  theme?: Theme
  defaultColor: ThemeColors
  color?: ThemeColors
}

export const isSaiyanTheme = (): boolean => {
  const { name } = useContext(ThemeContext)
  return name === saiyanTheme.name
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
    if (isSaiyanTheme()) {
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

export const colorsList = Object.keys(saiyanTheme.color) as ThemeColors[]

export const containsHtmlTags = /<.+?>/g
