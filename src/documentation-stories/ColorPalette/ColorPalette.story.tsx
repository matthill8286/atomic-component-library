import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ColorPalette } from './ColorPalette'
import Readme from './ColorPalette.readme.md'

export default {
  title: 'General/Overviews',
  component: ColorPalette,
  info: Readme,
} as Meta

const Template: Story = () => <ColorPalette />

export const ColorPaletteDefault = Template.bind({})
