import React from 'react'
import { mountWithTheme } from '@/testRenderer'
import { Typo } from './Typo'

const DEFAULT_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis euismod ligula.'

describe('Typo', () => {
  it('should render default', () => {
    const comp = mountWithTheme(<Typo>{DEFAULT_TEXT}</Typo>)
    const span = comp.find('span')

    expect(comp.debug()).toMatchSnapshot()
    expect(span).toBeDefined()
    expect(span.text()).toBe(DEFAULT_TEXT)
  })

  it('should render different tags', () => {
    const tags: (keyof JSX.IntrinsicElements)[] = ['div', 'p', 'h1']
    tags.forEach((tag) => {
      const comp = mountWithTheme(<Typo tag={tag}>{DEFAULT_TEXT}</Typo>)
      expect(comp.debug()).toMatchSnapshot()
      expect(comp.find(tag)).toBeDefined()
    })
  })
})
