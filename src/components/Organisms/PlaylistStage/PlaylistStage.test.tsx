import React from 'react'
import { Link } from '@/components/Atoms/Link'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { PlaylistStage } from './PlaylistStage'
import { backlink, props } from './PlaylistStage.mocks'
import { StyledBacklinkWrapper } from './PlaylistStage.styled'

describe('<PlaylistStage />', () => {
  test('Renders without error', () => {
    const tree = renderWithTheme(<PlaylistStage {...props} />)
    expect(tree).toMatchSnapshot()
  })

  describe('Backlink', () => {
    test('should be hidden by default', () => {
      const wrapper = mountWithTheme(<PlaylistStage {...props} />)
      expect(wrapper.find(StyledBacklinkWrapper)).toHaveLength(0)
    })

    test('should be visible when backlink prop provided', () => {
      const wrapper = mountWithTheme(<PlaylistStage {...props} backlink={backlink} />)

      expect(wrapper.find(StyledBacklinkWrapper)).toHaveLength(1)
      const link = wrapper.find(StyledBacklinkWrapper).find(Link)
      expect(link?.prop('href')).toEqual(backlink.link)
      expect(link?.contains(backlink.name)).toEqual(true)
    })
  })
})
