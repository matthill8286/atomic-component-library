import { boolean, number, select, text } from '@storybook/addon-knobs'
import * as React from 'react'
import { TypeRhythm } from '@/components/Atoms/Typography/utils/TypeRhythm'
import {
  BoxDimensions,
  ThemeColors,
  ThemeFontFamilies,
  ThemeFontLineHeight,
  ThemeFontSizes,
  ThemeFontWeights,
} from '@/types/theme'
import { Typo } from './Typo'
import { TypoProps } from './Typo.interface'

const fontSizes = {
  xxxs: 'xxxs',
  xxs: 'xxs',
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
  xxxl: 'xxxl',
  xxxxl: 'xxxxl',
}

const fontFamilies = {
  default: 'default',
  featured: 'featured',
  meta: 'meta',
}

const fontColors = {
  primary: 'primary',
  secondary: 'secondary',
  grey1: 'grey1',
  grey2: 'grey2',
  grey3: 'grey3',
  grey4: 'grey4',
  grey5: 'grey5',
  black: 'black',
  white: 'white',
  success: 'success',
  alert: 'alert',
  error: 'error',
  info: 'info',
  selected: 'selected',
}

const fontWeights = {
  regular: 'regular',
  semibold: 'semibold',
  bold: 'bold',
}

const fontLineHeights = {
  Auto: undefined,
  xxxs: 'xxxs',
  xxs: 'xxs',
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
  xxxl: 'xxxl',
  xxxxl: 'xxxxl',
}

const textTags: { [key: string]: keyof JSX.IntrinsicElements } = {
  Span: 'span',
  Paragraph: 'p',
  Div: 'div',
  'Heading 1': 'h1',
  'Heading 2': 'h2',
  'Heading 3': 'h3',
  'Heading 4': 'h4',
  ul: 'ul',
  ol: 'ol',
  li: 'li',
  sup: 'sup',
}

const textMargins = ['', 'md', 'lg', 'xs 0 sm 0', 'md 0 lg 0']

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis euismod ligula.
Sed sagittis, nulla non tincidunt cursus, lacus ipsum pellentesque massa, eu sollicitudin diam nulla id leo.
Curabitur maximus tincidunt augue vitae facilisis. Aliquam ac pharetra enim, ac aliquam nunc.
Morbi nec mollis dolor. Nunc eu ullamcorper ex. Vestibulum tempor urna pulvinar sapien lobortis, et posuere velit aliquam.
Proin feugiat dui nec neque fringilla tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
cubilia Curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris lobortis
consequat ullamcorper.`

export default {
  title: 'Design System/Atoms/Typography',
}

export const _Typo = () => {
  const content = text('Text', lipsum)

  const knobs = (): TypoProps => ({
    tag: select('Tag', textTags, textTags.Paragraph),
    fontSize: select('Font Size', fontSizes, fontSizes.sm) as ThemeFontSizes,
    fontFamily: select('Font Family', fontFamilies, fontFamilies.default) as ThemeFontFamilies,
    color: select('Color', fontColors, fontColors.grey4) as ThemeColors,
    weight: select('Weight', fontWeights, fontWeights.regular) as ThemeFontWeights,
    underline: boolean('Underline', false),
    lineHeight: select('Line Heights', fontLineHeights, fontLineHeights.Auto) as ThemeFontLineHeight,
    limitLines: number('Limit Lines', 0),
  })
  const margin: BoxDimensions = select('Margins', textMargins, '')

  return (
    <TypeRhythm visible={boolean('Show Rythm', false)}>
      <Typo {...knobs()} margin={margin}>
        {content}
      </Typo>
    </TypeRhythm>
  )
}

export const ResponsiveTypo = () => {
  const content = text('Text', lipsum)

  const knobs = (): TypoProps => ({
    tag: select('Tag', textTags, textTags.Paragraph),
    fontFamily: select('Font Family', fontFamilies, fontFamilies.default) as ThemeFontFamilies,
    color: select('Color', fontColors, fontColors.black) as ThemeColors,
    weight: select('Weight', fontWeights, fontWeights.regular) as ThemeFontWeights,
    underline: boolean('Underline', false),
    lineHeight: select('Line Heights', fontLineHeights, fontLineHeights.Auto) as ThemeFontLineHeight,
    limitLines: number('Limit Lines', 0),
  })
  const margin: BoxDimensions = select('Margins', textMargins, '')

  return (
    <TypeRhythm visible={boolean('Show Rythm', false)}>
      <Typo {...knobs()} margin={margin} fontSize={{ mobile: 'xs', tablet: 'md', desktop: 'xxl' }}>
        {content}
      </Typo>
    </TypeRhythm>
  )
}
