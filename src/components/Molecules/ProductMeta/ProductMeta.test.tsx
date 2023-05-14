import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { ProductMeta } from './ProductMeta'

describe('Product page meta', () => {
  it('renders product meta', () => {
    const wrapper = renderWithTheme(
      <ProductMeta
        bookmarked={false}
        buttonTextLaunch="Launch"
        buttonTextComplete="Mark complete"
        shareHandler={() => jest.fn()}
        bookmarkHandler={() => jest.fn()}
        savePlaylistHandler={() => jest.fn()}
        features={[
          { name: 'Provider', value: 'Youtube' },
          { name: 'Primary competency', value: 'Digital Marketing' },
          { name: 'Type', value: 'Article' },
          { name: 'Length', value: '16 minutes' },
        ]}
        competencyCopy="5 competencies featured in this learning product:"
        tags={[
          { text: 'CREATIVITY', href: '#' },
          { text: 'STORYTELLIGN', href: '#' },
          { text: 'DESIGN', href: '#' },
          { text: 'WRITING', href: '#' },
          { text: 'BRAINSTORMING', href: '#' },
        ]}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
