import { boolean, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { saiyanTheme } from '@/styles/sc-vars-saiyan'
import { ThemeColors, ThemeFontSizes } from '@/types/theme'
import { CopyText } from './CopyText'

storiesOf('Design System/Atoms/Typography', module).add('CopyText', () => {
  const sampleText = text(
    'Sample text',
    `Lorem ipsum dolorsit amet consectetur adipisicing elit. Lorem ipsum dolorsit amet consectetur adipisicing elit. Lorem ipsum dolorsit amet consectetur adipisicing elit. Lorem ipsum dolorsit amet consectetur adipisicing elit.`,
  )

  const fontSizeOptions = ['xxs', 'xs', 'sm', 'md']
  const fontSize = select('Type fontSize', fontSizeOptions, 'xs') as ThemeFontSizes
  const tagOptions: (keyof JSX.IntrinsicElements)[] = ['p', 'span', 'div']
  const tagName = select('Tag name', tagOptions, 'p')
  const withMargins = boolean('With margins', false)
  const multiple = boolean('Multiple paragraphs', false)
  const showColors = boolean('Enable Custom Color', false)
  const selectedColor = select('Color', Object.keys(saiyanTheme.color), 'black') as ThemeColors
  const isBold = boolean('Bold', false)
  const limitLines = number('Limit Lines', 0)

  return (
    <>
      <CopyText
        tag={tagName}
        fontSize={fontSize}
        withMargins={withMargins}
        bold={isBold}
        {...(showColors && { color: selectedColor })}
        limitLines={limitLines}
      >
        {sampleText}
      </CopyText>
      {multiple && (
        <CopyText
          tag={tagName}
          fontSize={fontSize}
          withMargins={withMargins}
          bold={isBold}
          {...(showColors && { color: selectedColor })}
          limitLines={limitLines}
        >
          {sampleText}
        </CopyText>
      )}
      {multiple && (
        <CopyText
          tag={tagName}
          fontSize={fontSize}
          withMargins={withMargins}
          bold={isBold}
          {...(showColors && { color: selectedColor })}
          limitLines={limitLines}
        >
          {sampleText}
        </CopyText>
      )}
    </>
  )
})
