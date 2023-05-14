import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { saiyanTheme } from '@/styles/sc-vars-saiyan'
import { ThemeColors } from '@/types/theme'
import { loremIpsumArray } from '@/utils/loremIpsumArray'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { Tag } from './Tag'
import Readme from './Tag.readme.md'

storiesOf('Design System/Atoms/Tag', module)
  .add(
    'Default',
    () => {
      return <Tag text="Some text" padding={{ left: 'lg', right: 'lg' }} />
    },
    {
      info: Readme,
    },
  )
  .add(
    'Custom Padding',
    () => {
      return <Tag text="Featured" padding={{ left: 'md', right: 'md', top: 'xxs', bottom: 'xxs' }} />
    },
    {
      info: Readme,
    },
  )
  .add(
    'Colored',
    () => {
      const selectedColor = select('Color', Object.keys(saiyanTheme.color), 'black') as ThemeColors

      return (
        <Tag
          text="some text with anchor link"
          href="#"
          targetBlank={true}
          color={selectedColor}
          padding={{ left: 'sm', right: 'sm' }}
        />
      )
    },
    {
      info: Readme,
    },
  )
  .add(
    'Link',
    () => {
      return <Tag text="some text with anchor link" href="#" targetBlank={true} padding={{ left: 'sm', right: 'sm' }} />
    },
    {
      info: Readme,
    },
  )
  .add(
    'Many Tags',
    () => {
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
    },
    {
      info: Readme,
    },
  )
