import { Meta, StoryObj } from '@storybook/react'
import { Status, StatusType } from './Status'

const statusTypes: { [key: number]: StatusType } = { 0: 'white', 1: 'black', 2: 'primary' }

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Status> = {
  title: 'Example/Status',
  component: Status,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Status>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    ...statusTypes,
  },
}
