import * as React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { ModalButtonGroup } from './ModalButtonGroup'
import { ModalButtonGroupProps } from './ModalButtonGroup.interface'

describe('ModalButtonGroup', () => {
  const props: Partial<ModalButtonGroupProps> = {
    primaryButtonProps: {
      buttonLabel: 'Call to action',
      actionType: 'primary',
      onClick: jest.fn(),
    },
    secondaryButtonProps: {
      buttonLabel: 'Bookmark',
      actionType: 'outlined',
      onClick: jest.fn(),
    },
  }

  it('Should render a ModalButtonGroup', () => {
    const tree = renderWithTheme(<ModalButtonGroup {...props} />)
    expect(tree).toMatchSnapshot()
  })
  it('Should render with alignment.', () => {
    const tree = renderWithTheme(<ModalButtonGroup buttonAlignment="right" {...props} />)
    expect(tree).toMatchSnapshot()
  })

  it('Should not render with no Button', () => {
    const tree = renderWithTheme(<ModalButtonGroup />)
    expect(tree).toMatchSnapshot()
  })
})
