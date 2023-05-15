import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { OtherArticle } from 'atomic-icon-library'
import { renderWithTheme } from '@/testRenderer'
import { Like } from './Like'

describe('Like', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Like scale="small">Test Like</Like>)
    expect(tree).toMatchSnapshot()
  })
  it('renders with left Icon', () => {
    const tree = renderWithTheme(
      <Like
        scale="large"
        iconLeft={
          <Icon>
            <OtherArticle />
          </Icon>
        }
      >
        Test Like with Icon
      </Like>,
    )
    expect(tree).toMatchSnapshot()
  })
  it('renders with right Icon', () => {
    const tree = renderWithTheme(
      <Like
        scale="small"
        iconRight={
          <Icon>
            <OtherArticle />
          </Icon>
        }
      >
        Test Like with Icon
      </Like>,
    )
    expect(tree).toMatchSnapshot()
  })
})
