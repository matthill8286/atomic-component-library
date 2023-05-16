import * as React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { FlexBox, FlexBoxProps, FlexItem, FlexItemProps } from './FlexBox'

describe('FlexBox', () => {
  const props: FlexBoxProps = {}

  it('renders correctly', () => {
    const tree = renderWithTheme(<FlexBox {...props} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders with direction column', () => {
    const tree = renderWithTheme(<FlexBox {...props} flexDirection="column" />)
    expect(tree).toMatchSnapshot()
  })

  it('renders with flex wrap', () => {
    const tree = renderWithTheme(<FlexBox {...props} flexWrap="wrap" />)
    expect(tree).toMatchSnapshot()
  })
})

describe('FlexItem', () => {
  const props: FlexItemProps = {}

  it('renders correctly', () => {
    const tree = renderWithTheme(<FlexItem {...props} />)
    expect(tree).toMatchSnapshot()
  })
})
