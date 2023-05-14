import React from 'react'
import { Link } from '@/components/Atoms/Link'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { ArticleStage } from './ArticleStage'
import { backlink, props } from './ArticleStage.mocks'
import { StyledBacklinkWrapper } from './ArticleStage.styled'

describe('<ArticleStage />', () => {
  test('Renders without error', () => {
    const tree = renderWithTheme(<ArticleStage {...props} />)
    expect(tree).toMatchSnapshot()
  })

  describe('Backlink', () => {
    test('should be hidden by default', () => {
      const wrapper = mountWithTheme(<ArticleStage {...props} />)

      expect(wrapper.find(StyledBacklinkWrapper)).toHaveLength(0)
    })

    test('should be visible when backlink prop provided', () => {
      const wrapper = mountWithTheme(<ArticleStage {...props} backlink={backlink} />)

      expect(wrapper.find(StyledBacklinkWrapper)).toHaveLength(1)
      const link = wrapper.find(StyledBacklinkWrapper).find(Link)
      expect(link?.prop('href')).toEqual(backlink.link)
      expect(link?.contains(backlink.name)).toEqual(true)
    })
  })
})
