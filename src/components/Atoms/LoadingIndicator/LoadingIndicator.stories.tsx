import { Meta, StoryObj } from '@storybook/react'
import { LoadingIndicator, LoadingIndicatorColor } from './LoadingIndicator'

const loadingIndicatorColor: { [key: string]: LoadingIndicatorColor } = {
  white: 'white',
  black: 'black',
  primary: 'primary',
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof LoadingIndicator> = {
  title: 'Example/Loading Indicator',
  component: LoadingIndicator,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: {
        type: 'options',
        options: ['white', 'black', 'primary'],
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof LoadingIndicator>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    color: 'primary',
    isVisible: true,
    size: 20,
    barWidth: 2,
  },
}
