import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { EmbeddedPlayer } from './EmbeddedPlayer'

describe('EmbeddedPlayer', () => {
  it('shows a youtube video', () => {
    const tree = renderWithTheme(<EmbeddedPlayer embedUrl="https://www.youtube.com/embed/TeQ_TTyLGMs" />)
    expect(tree).toMatchSnapshot()
  })
})
