import * as React from 'react'
import { mountWithTheme, renderWithThemeAndRouter } from '@/testRenderer'
import { ToolTip } from './ToolTip'
import { StyledToolTipContent, StyledToolTipWrapper } from './ToolTip.styled'

describe('ToolTip', () => {
  it('renders basic', () => {
    const tree = renderWithThemeAndRouter(<ToolTip />)
    expect(tree).toMatchSnapshot()
  })

  it('renders default', () => {
    const comp = mountWithTheme(
      <ToolTip content="Lorem ipsum">
        <span>Link</span>
      </ToolTip>,
    )
    expect(comp.find(StyledToolTipWrapper)).toHaveLength(1)
    expect(comp).toMatchSnapshot()
  })

  it('renders primary', () => {
    const comp = mountWithTheme(
      <ToolTip content="Lorem ipsum" primary>
        <span>Link</span>
      </ToolTip>,
    )
    expect(comp.find(StyledToolTipWrapper)).toHaveLength(1)
    expect(comp).toMatchSnapshot()
  })

  it('renders visible on hover and hides on leave', () => {
    const comp = mountWithTheme(
      <ToolTip content="Lorem ipsum">
        <span>Link</span>
      </ToolTip>,
    )
    expect(comp.find(StyledToolTipContent)).toHaveLength(0)

    comp.find(StyledToolTipWrapper).first().simulate('mouseenter')
    expect(comp.find(StyledToolTipContent)).toHaveLength(1)

    comp.find(StyledToolTipWrapper).first().simulate('mouseleave')
    expect(comp.find(StyledToolTipContent)).toHaveLength(0)
  })
})
