import React from 'react'
import { OtherArticle } from '@matthill8286/atomic-icon-library'
import { renderWithTheme } from '@/testRenderer'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Icon>
        <OtherArticle />
      </Icon>,
    )
    expect(tree).toMatchSnapshot()
  })
})
