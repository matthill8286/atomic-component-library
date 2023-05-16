import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Overline, IDivider } from '@/components/Atoms/Overline'

export default {
  title: 'Design System/Atoms/Overline',
  component: Overline,
} as Meta

const Template: Story<IDivider> = (args: IDivider) => <Overline {...args} />

export const OverlineStory = Template.bind({})

OverlineStory.args = {
  className: 'the-overline-news',
}

OverlineStory.argTypes = {
  className: {
    options: [
      'the-overline-services',
      'the-overline-home',
      'the-overline-news',
      'the-overline-testimonials',
      'the-overline-featured',
      'the-overline-contact',
    ],
    control: { type: 'select' },
  },
}
