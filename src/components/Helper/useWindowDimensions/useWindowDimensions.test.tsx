import * as React from 'react'
import { create } from 'react-test-renderer'
import { useWindowDimensions } from './useWindowDimensions'

const WithSizeHookComponent: React.FC = () => {
  const { height, width, breakpoint } = useWindowDimensions()
  return <div>{`Breakpoint: ${breakpoint} View width: ${width} View height: ${height}`}</div>
}

describe('withSizeHook', () => {
  it('finds the size from window', () => {
    // @ts-ignore
    global.window = { innerWidth: 850, innerHeight: 200 }

    const comp = create(<WithSizeHookComponent />)

    // I can not convince the compiler, that comp.toJSON().children[0] is not null ...
    // @ts-ignore
    const actual = comp.toJSON().children[0]
    expect(actual).toBe('Breakpoint: 1008 View width: 1024 View height: 768')
  })
})
