import React from 'react'
import { mountWithTheme } from '@/testRenderer'
import { VideoPlayerCore } from '@/components/Atoms/VideoPlayer/VideoPlayerCore'

describe('VideoPlayer', () => {
  it('renders correctly', () => {
    const tree = mountWithTheme(<VideoPlayerCore url="https://www.youtube.com/embed/-BdbiZcNBXg" />)
    expect(tree).toMatchSnapshot()
  })
})
