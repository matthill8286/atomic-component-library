import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'

const WithSizeHookComponent = () => {
  const { height, width, breakpoint } = useWindowDimensions()
  return <div>{`Breakpoint: ${breakpoint} View width: ${width} View height: ${height}`}</div>
}

export default {
  title: 'Design System/Helper/withSizeHook',
}

export const Default = () => <WithSizeHookComponent />
