import { Meta, StoryObj } from '@storybook/react'
import { ColorPalette } from './ColorPalette'

const meta: Meta<typeof ColorPalette> = {
  title: 'Example/Color palette',
  component: ColorPalette,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ColorPalette>

export const Default: Story = {
  args: {},
}
