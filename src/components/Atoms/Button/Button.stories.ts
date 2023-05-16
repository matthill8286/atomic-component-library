import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button V2',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
}

export default meta

type Story = StoryObj<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    actionType: 'primary',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    actionType: 'secondary',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    actionType: 'ghost',
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    actionType: 'ghost',
    children: 'Button',
  },
}
