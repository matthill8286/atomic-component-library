import { Meta, StoryObj } from '@storybook/react'
import { AnimationOverview } from './AnimationOverview'

const meta: Meta<typeof AnimationOverview> = {
  title: 'Example/Animation',
  component: AnimationOverview,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AnimationOverview>

export const Animation: Story = {
  args: {
    transition: 'defaultEasing',
    infinite: false,
    fillMode: 'none',
    easing: 'ease-in',
  },
}
