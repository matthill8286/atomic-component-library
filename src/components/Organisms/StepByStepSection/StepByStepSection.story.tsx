import { boolean, number, select, text } from '@storybook/addon-knobs'
import React from 'react'
import { StepByStepSection } from './index'
import { ColorStyle, StepByStepProps } from './StepByStepSection.types'

// const stories = storiesOf('Design System/Organisms/StepByStepSection', module)

export default {
  title: 'Design System/Organisms/StepByStepSection',
}

const mockFields = [
  {
    stepText: 'They decide to go to Bremen and become musicians there',
    stepLinkText: 'Read more',
    stepLink: 'https://en.wikipedia.org/wiki/Town_Musicians_of_Bremen',
  },
  {
    stepText: 'On the way they see a lighted cottage with four robbers in it.',
    stepLinkText: 'Read more',
    stepLink: 'https://en.wikipedia.org/wiki/Town_Musicians_of_Bremen#test',
  },
  {
    stepText: "Standing on each other's backs, they scare the robbers away",
    stepLinkText: 'Read more',
    stepLink: 'https://en.wikipedia.org/wiki/Town_Musicians_of_Bremen',
  },
  {
    stepText: 'The animals take possession of the house',
    stepLinkText: 'Read more',
    stepLink: 'https://en.wikipedia.org/wiki/Town_Musicians_of_Bremen',
  },
  {
    stepText: 'A robber returns to check, and runs again from these "beasts"',
    stepLinkText: 'Read more',
    stepLink: 'https://en.wikipedia.org/wiki/Town_Musicians_of_Bremen',
  },
  {
    stepText: 'With the robbers gone, the animals live happily ever after',
    stepLinkText: 'Read more',
    stepLink: 'https://en.wikipedia.org/wiki/Town_Musicians_of_Bremen',
  },
  {
    stepText: 'This step should never be shown',
    stepLinkText: 'Read more',
    stepLink: 'https://en.wikipedia.org/wiki/Town_Musicians_of_Bremen',
  },
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fieldsWithoutLinks = mockFields.map(({ stepLink, ...field }) => field)

export const Default = () => {
  const knobs = () => ({
    headline: text('Headline', 'Town Musicians of Bremen.'),
    copyText: text(
      'Copytext',
      'In the story, a donkey, a dog, a cat, and a rooster leave their homes and set out together.',
    ),
    background: select('Background Color', [ColorStyle.PRIMARY, ColorStyle.GREY, ColorStyle.CYAN], ColorStyle.PRIMARY),
    fieldAmount: number('amount of steps (max. 6)', 3),
    links: boolean('with Links', true),
  })

  const cutToRightAmount = (array: any[]) => array.slice(0, knobs().fieldAmount)

  const props: StepByStepProps = {
    background: knobs().background,
    headline: knobs().headline,
    copyText: knobs().copyText,
    fields: knobs().links ? cutToRightAmount(mockFields) : cutToRightAmount(fieldsWithoutLinks),
  }

  return <StepByStepSection {...props} />
}

Default.story = {
  name: 'default',
}
