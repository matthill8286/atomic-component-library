import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { OtherArrow } from 'atomic-icon-library'
import { mountWithTheme, mountWithThemeAndRouter, renderWithTheme, renderWithThemeAndRouter } from '@/testRenderer'
import { Link } from './Link'

describe('<Link /> component', () => {
  const onClick = jest.fn()
  const linkContent = 'Button'
  const linkHref = 'https://google.com/?how-to-write-tests'

  it('should render a button tag against the "onClick" attribute', () => {
    const button = renderWithTheme(<Link onClick={onClick}>{linkContent}</Link>)
    const tree = mountWithTheme(<Link onClick={onClick}>{linkContent}</Link>)
    expect(tree.find('button')).toHaveLength(1)
    expect(button).toMatchSnapshot()
  })

  it('should not render a button tag against the "href" attribute', () => {
    const tree = mountWithTheme(<Link href={linkHref}>{linkContent}</Link>)
    expect(tree.find('button')).toHaveLength(0)
  })

  it('should not render a button tag against the "to" attribute', () => {
    const tree = mountWithThemeAndRouter(<Link to="/">{linkContent}</Link>)
    expect(tree.find('button')).toHaveLength(0)
  })

  it('should render an anchor tag against the "href" attribute', () => {
    const anchor = renderWithTheme(<Link href={linkHref}>{linkContent}</Link>)
    const tree = mountWithTheme(<Link href={linkHref}>{linkContent}</Link>)
    expect(tree.find('a')).toHaveLength(1)
    expect(anchor).toMatchSnapshot()
  })

  it('should not render an anchor tag against the "onClick" attribute', () => {
    const tree = mountWithTheme(<Link onClick={onClick}>{linkContent}</Link>)
    expect(tree.find('a')).toHaveLength(0)
  })

  it('should render an anchor tag from a router link against the "to" attribute', () => {
    const routerLink = renderWithThemeAndRouter(<Link to="/">{linkContent}</Link>)
    const tree = mountWithThemeAndRouter(<Link to="/">{linkContent}</Link>)
    expect(tree.find('RouterLinkWrapper[data-test="ewb-router-link"]')).toHaveLength(1)
    expect(routerLink).toMatchSnapshot()
  })

  it('should not render an anchor tag from a router link against the "onClick" attribute', () => {
    const tree = mountWithTheme(<Link onClick={onClick}>{linkContent}</Link>)
    expect(tree.find('RouterLinkWrapper[data-test="ewb-router-link"]')).toHaveLength(0)
  })

  it('should not render an anchor tag from a router link against the "href" attribute', () => {
    const tree = mountWithTheme(<Link href={linkHref}>{linkContent}</Link>)
    expect(tree.find('RouterLinkWrapper[data-test="ewb-router-link"]')).toHaveLength(0)
  })

  it('should render an anchor tag with a left icon', () => {
    const tree = renderWithTheme(
      <Link
        scale="large"
        iconLeft={
          <Icon>
            <OtherArrow />
          </Icon>
        }
      >
        {linkContent}
      </Link>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('should render an anchor tag with a right icon', () => {
    const tree = renderWithTheme(
      <Link
        scale="small"
        iconRight={
          <Icon>
            <OtherArrow />
          </Icon>
        }
      >
        {linkContent}
      </Link>,
    )
    expect(tree).toMatchSnapshot()
  })
})
