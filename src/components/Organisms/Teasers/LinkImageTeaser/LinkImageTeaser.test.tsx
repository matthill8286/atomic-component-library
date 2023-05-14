import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { LinkImageTeaser } from './LinkImageTeaser'
import { ImageTeaserProps } from '../ImageTeaser/ImageTeaser.interface'
import { ThemeProvider } from 'styled-components'
import { alternateTheme } from '@/index'
import { MemoryRouter } from 'react-router-dom'

const linkProps: ImageTeaserProps = {
  images: {
    lg: 'lgimage',
    md: 'mdImage',
    sm: 'smImage',
    xl: 'xlImage',
  },
  link: { to: '/link' },
}

describe('LinkImageTeaser', () => {
  const onClickFunction = jest.fn()
  test('should call click handler on a click event', () => {
    const { container, getByTestId } = render(
      <ThemeProvider theme={alternateTheme}>
        <MemoryRouter>
          <LinkImageTeaser {...linkProps} onClick={onClickFunction} />
        </MemoryRouter>
      </ThemeProvider>,
    )
    const teaserWrapper = getByTestId('link-wrapped-teaser')
    fireEvent.click(teaserWrapper)
    expect(onClickFunction).toBeCalled()
  })

  test('should contain an anchor wrapping Teaser', () => {
    const { container, getByTestId } = render(
      <ThemeProvider theme={alternateTheme}>
        <MemoryRouter>
          <LinkImageTeaser {...{ ...linkProps, link: { href: 'http://absolute.com' } }} onClick={onClickFunction} />
        </MemoryRouter>
      </ThemeProvider>,
    )
    const teaserWrapper = getByTestId('anchor-wrapped-teaser')
    fireEvent.click(teaserWrapper)
    expect(teaserWrapper).toBeDefined()
  })
})
