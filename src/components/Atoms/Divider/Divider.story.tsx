import { number, select } from '@storybook/addon-knobs'
import * as React from 'react'
import { defaultTheme } from '@/styles/sc-vars-default'
import { ThemeColors } from '@/types/theme'
import { Divider } from './Divider'

const options = Object.keys(defaultTheme.color) as ThemeColors[]
const height = [5, 10, 12.5, 13, 15]

const knobs = () => {
  return {
    color: select('Color', options, 'primary'),
    height: select('Height', height, height[5]),
  }
}

export default {
  title: 'Design System/Atoms/Divider',
}

export const Default = () => {
  return <Divider {...knobs()} />
}
