import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'

const WithSizeHookComponent = () => {
  const { height, width, breakpoint } = useWindowDimensions()
  return <div>{`Breakpoint: ${breakpoint} View width: ${width} View height: ${height}`}</div>
}

storiesOf('Design System/Helper/withSizeHook', module).add('Default', () => <WithSizeHookComponent />)
