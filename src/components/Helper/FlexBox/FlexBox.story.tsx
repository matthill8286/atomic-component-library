import { boolean, number, select, text } from '@storybook/addon-knobs'
import React from 'react'
import { FlexBox, FlexBoxProps, FlexItem, FlexItemProps } from './FlexBox'
import readme from './FlexBox.readme.mdx'

export default {
  title: 'Design System/Helper/FlexBox',
}

export const Default = () => {
  const flexBoxKnobs: FlexBoxProps = {
    debug: boolean('box debug', true),
    display: select('box display', ['flex', 'inline-flex'], 'flex'),
    flexDirection: select('box flexDirection', ['row', 'row-reverse', 'column', 'column-reverse'], 'row'),
    flexWrap: select('box:flexWrap', ['nowrap', 'wrap', 'wrap-reverse'], 'wrap'),
    justifyContent: select(
      'box justifyContent',
      ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
      'flex-start',
    ),
    alignContent: select('box alignContent', ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'], 'flex-start'),
    alignItems: select(
      'box alignItems',
      ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
      'flex-start',
    ),
  }
  const firstFlexItemProps: FlexItemProps = {
    debug: boolean('first_item debug', true),
    order: number('first_item order', 0),
    flex: text('first_item flex', '0 1 auto'),
    alignSelf: select(
      'first_item alignSelf',
      ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      'auto',
    ),
  }
  const secondFlexItemProps: FlexItemProps = {
    debug: boolean('second_item debug', true),
    order: number('second_item order', 0),
    flex: text('second_item flex', '0 1 auto'),
    alignSelf: select(
      'second_item alignSelf',
      ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      'auto',
    ),
  }
  return (
    <FlexBox {...flexBoxKnobs}>
      <FlexItem {...firstFlexItemProps}>First Item</FlexItem>
      <FlexItem {...secondFlexItemProps}>Second Item</FlexItem>
    </FlexBox>
  )
}

Default.story = {
  parameters: { info: readme },
}
