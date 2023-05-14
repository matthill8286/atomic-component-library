import { Meta, Story } from '@storybook/react'
import React from 'react'
import { AnimationOverview } from './AnimationOverview'
import { AnimationProps } from './AnimationOverview.interface'
import Readme from './AnimationOverview.readme.md'

// storiesOf('General/Overviews', module).add(
//   'Animations',
//   () => (
//     <AnimationOverview
//       easing={select('Easing', ['linear', 'ease', 'ease-in', 'ease-in-out', 'ease-out'], 'ease')}
//       infinite={boolean('Loop', false)}
//       fillMode={select('Fill Mode', ['forwards', 'backwards', 'none'], 'forwards')}
//       transition={select('Transition', ['short', 'medium', 'long'], 'long')}
//     />
//   ),
//   {
//     info: Readme,
//   }
// )

export default {
  title: 'General/Overviews',
  component: AnimationOverview,
  info: Readme,
} as Meta

const Template: Story<Partial<AnimationProps>> = (args: Partial<AnimationProps>) => <AnimationOverview {...args} />

export const Animations = Template.bind({})
Animations.args = {
  fillMode: 'backwards',
  easing: 'ease-out',
  infinite: false,
  transition: 'long',
}
Animations.argTypes = {}
