import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { defaultTheme } from './sc-vars-default'

type theme = typeof defaultTheme

interface ThemeProviderProps {
  children: React.ReactNode
  theme: theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const mergedTheme = Object.assign({}, defaultTheme, props.theme)
  return <Provider theme={mergedTheme}>{props.children}</Provider>
}
