import { boolean, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { saiyanTheme } from '@/styles/sc-vars-saiyan'
import { ThemeColors } from '@/types/theme'
import { InfoText } from '..'
import { TypographyScaleInfo } from './InfoText.interface'

storiesOf('Design System/Atoms/Typography', module).add('InfoText', () => {
  const sampleText = text('Example text', `Lorem ipsum dolor`)
  const scaleOptions = ['small', 'small-highlighted', 'extra-small']
  const scale = select('Type scale', scaleOptions, 'small') as TypographyScaleInfo
  const tagOptions: (keyof JSX.IntrinsicElements)[] = ['span', 'em', 'strong', 'div']
  const tagName = select('Tag name', tagOptions, 'span')
  const showColors = boolean('Enable Custom Color', false)
  const selectedColor = select('Color', Object.keys(saiyanTheme.color), 'black') as ThemeColors
  const limitLines = number('Limit Lines', 0)

  return (
    <InfoText tag={tagName} scale={scale} {...(showColors && { color: selectedColor })} limitLines={limitLines}>
      {sampleText}
    </InfoText>
  )
})
