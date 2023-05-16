import { boolean, color, number, radios, text } from '@storybook/addon-knobs'
import React from 'react'
import { ShowMore, ShowMoreProps } from './'

const knobs = (): ShowMoreProps => ({
  lineHeight: number('Line Height', 18),
  numOfLines: number('Number of Lines', 2),
  noShowLess: boolean('No Show Less', false),
  showMoreText: text('Show More Text', 'Show more'),
  showLessText: text('Show Less Text', 'Show less'),
  labelAlignment: radios('Label Alignment', { Start: 'flex-start', Center: 'center', End: 'flex-end' }, 'center'),
  fadeOutHeight: number('Fade out Height', 0),
  fadeOutBackgroundColor: color('Fade out Background', '#ffffff'),
  fontColor: radios('Font Color', { black: 'black', grey: 'grey5', white: 'white' }, 'grey5'),
  fontSize: number('Font Size', 16),
  fontWeight: radios('Font Weight', { regular: 'regular', semibold: 'semibold', bold: 'bold' }, 'semibold'),
})

export default {
  title: 'Design System/Atoms/ShowMore',
}

export const Default = () => (
  <ShowMore {...knobs()}>
    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`}
  </ShowMore>
)
