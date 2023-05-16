import { Meta, StoryObj } from '@storybook/react'
import { ColorPalette } from './ColorPalette'

const meta: Meta<typeof ColorPalette> = {
  title: 'Design system/Color palette',
  component: ColorPalette,
}

export default meta

type Story = StoryObj<typeof ColorPalette>

export const Default: Story = {}
