import { CopyText, Heading } from '@/components/Atoms/Typography'
import * as React from 'react'
import { Collapse, CollapseProps } from './Collapse'
import { storiesOf } from '@storybook/react'

const Template = ({ ...args }: CollapseProps) => {
  return (
    <Collapse {...args}>
      <Heading scale="level-3">Lorem Ipsum is simply dummy text</Heading>
      <CopyText>
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </CopyText>
    </Collapse>
  )
}

const baseArgs: Partial<CollapseProps> = {
  isOpen: true,
  collapsedHeight: 28,
}

storiesOf('Design System/Molecules/Collapse', module).add('Default', () => <Template {...baseArgs} />)
