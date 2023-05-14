// eslint-disable-next-line no-restricted-imports
import baseStyled, { BaseThemedCssFunction, css as baseCss, ThemedStyledInterface, ThemeProps } from 'styled-components'
import { Theme } from '@/types/theme'

export { ThemeConsumer, ThemeContext, keyframes } from 'styled-components'

export type ThemedStyledProps<P, T> = P & ThemeProps<T>
export const styled = baseStyled as ThemedStyledInterface<Theme>
export const css = baseCss as BaseThemedCssFunction<Theme>
export { ThemeProvider } from './ThemeProvider'
