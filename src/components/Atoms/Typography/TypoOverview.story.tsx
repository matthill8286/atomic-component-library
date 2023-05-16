import { boolean, text } from '@storybook/addon-knobs'
import * as React from 'react'
import { TypeRhythm, TypoExampleBox } from '@/components/Atoms/Typography/utils'
import { alternateTheme } from '@/styles/sc-vars-alternate'
import { defaultTheme } from '@/styles/sc-vars-default'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { CopyText } from './CopyText'
import { Heading } from './Heading'
import { TypographyScaleHeadline } from './Heading/Heading.interface'
import { HeadingPresets } from './Heading/HeadingPresets'
import { InfoText, TypographyScaleInfo } from './InfoText'

export default {
  title: 'Design System/Atoms/Typography',
}

export const Overview = () => {
  const headingKeys = Object.keys(HeadingPresets)
  const demoText = text('Text', 'AbBbCc, 12345')
  const showRhythm = boolean('Show Rhythm', false)
  const infoTextScales: TypographyScaleInfo[] = ['small', 'small-highlighted', 'extra-small']

  const getFontSizeString = (fontName?: string): string => {
    if (!fontName) {
      return ''
    }

    const separator = '  •  '

    let fontSizeString = separator + fontName

    // fontSize for default
    if (defaultTheme.font.size[fontName]) {
      fontSizeString = fontSizeString + separator + 'default' + defaultTheme.font.size[fontName]
    }

    // fontSize for Alternate
    if (alternateTheme.font.size[fontName]) {
      fontSizeString = fontSizeString + separator + 'alternate' + alternateTheme.font.size[fontName]
    }

    return fontSizeString
  }
  // headings
  const exampleBoxes = headingKeys.map((k) => (
    <TypoExampleBox key={k} labelTop={'Headline' + getFontSizeString(HeadingPresets[k].fontSize)} labelBottom={k}>
      <TypeRhythm visible={showRhythm}>
        <Heading scale={k as TypographyScaleHeadline}>{demoText}</Heading>
      </TypeRhythm>
    </TypoExampleBox>
  ))

  // copy text
  exampleBoxes.push(
    <TypoExampleBox labelTop="CopyText" key={'CopyText'}>
      <TypeRhythm visible={boolean('Show Rhythm', false)}>
        <CopyText>{demoText}</CopyText>
      </TypeRhythm>
    </TypoExampleBox>,
  )

  // info text
  infoTextScales.forEach((scale) => {
    exampleBoxes.push(
      <TypoExampleBox key={'InfoText_' + scale} labelTop="InfoText" labelBottom={scale}>
        <TypeRhythm visible={boolean('Show Rhythm', false)}>
          <InfoText scale={scale}>{demoText}</InfoText>
        </TypeRhythm>
      </TypoExampleBox>,
    )
  })

  return <StorybookWrapper>{exampleBoxes}</StorybookWrapper>
}
