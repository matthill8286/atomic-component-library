import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { saiyanTheme } from '@/styles/sc-vars-saiyan'
import { ThemeColors } from '@/types/theme'
import { Divider } from './Divider'

const options = Object.keys(saiyanTheme.color) as ThemeColors[]
const height = [5, 10, 12.5, 13, 15]

const knobs = () => {
  return {
    color: select('Color', options, 'primary'),
    height: select('Height', height, height[5]),
  }
}

storiesOf('Design System/Atoms/Divider', module).add('Default', () => {
  return <Divider {...knobs()} />
})
