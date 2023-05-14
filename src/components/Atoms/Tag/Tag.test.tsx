import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { loremIpsumArray } from '@/utils/loremIpsumArray'
import { Tag } from './Tag'

describe('Tag', () => {
  const tagContent = 'Tag '

  it('Should render a tag', () => {
    const tree = renderWithTheme(<Tag text="">{tagContent}</Tag>)
    expect(tree).toMatchSnapshot()
  })

  it('Should render a tag with link', () => {
    const tree = renderWithTheme(
      <Tag text="" href="#" targetBlank>
        {tagContent}
      </Tag>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should render 20 tags', () => {
    const tags = loremIpsumArray
      .slice(0, 20)

      .map((t) => <Tag key={t} text={t} targetBlank marginBottom marginRight />)

    const tree = renderWithTheme(<>{tags}</>)
    expect(tree).toMatchSnapshot()
  })
})
