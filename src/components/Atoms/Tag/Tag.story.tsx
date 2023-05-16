import { number, select } from '@storybook/addon-knobs'
import * as React from 'react'
import { defaultTheme } from '@/styles/sc-vars-default'
import { ThemeColors } from '@/types/theme'
import { loremIpsumArray } from '@/utils/loremIpsumArray'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { Tag } from './Tag'
import Readme from './Tag.readme.md'

export default {
  title: 'Design System/Atoms/Tag',
}

export const Default = () => {
  return <Tag text="Some text" padding={{ left: 'lg', right: 'lg' }} />
}

Default.story = {
  parameters: {
    info: Readme,
  },
}

export const CustomPadding = () => {
  return <Tag text="Featured" padding={{ left: 'md', right: 'md', top: 'xxs', bottom: 'xxs' }} />
}

CustomPadding.story = {
  parameters: {
    info: Readme,
  },
}

export const Colored = () => {
  const selectedColor = select('Color', Object.keys(defaultTheme.color), 'black') as ThemeColors

  return (
    <Tag
      text="some text with anchor link"
      href="#"
      targetBlank={true}
      color={selectedColor}
      padding={{ left: 'sm', right: 'sm' }}
    />
  )
}

Colored.story = {
  parameters: {
    info: Readme,
  },
}

export const Link = () => {
  return <Tag text="some text with anchor link" href="#" targetBlank={true} padding={{ left: 'sm', right: 'sm' }} />
}

Link.story = {
  parameters: {
    info: Readme,
  },
}

export const ManyTags = () => {
  const tags = loremIpsumArray
    .slice(
      0,
      number('number of tags', 20, {
        range: true,
        min: 0,
        max: loremIpsumArray.length,
        step: 1,
      }),
    )
    .map((t) => <Tag key={t} text={t} targetBlank marginBottom marginRight />)

  return <StorybookWrapper style={{ display: 'flex', flexWrap: 'wrap' }}>{tags}</StorybookWrapper>
}

ManyTags.story = {
  parameters: {
    info: Readme,
  },
}
