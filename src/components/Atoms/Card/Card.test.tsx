import * as React from 'react'
import { media } from '@/styles'
import { renderWithTheme } from '@/testRenderer'
import { Padding, VerticalPaddingMap } from '@/types/theme'
import { Card } from './CardV2'
import { handlePadding } from './Card.styled'

describe('Card', () => {
  const cardContent = 'Card '

  it('Should render a Card', () => {
    const tree = renderWithTheme(<Card elevation={0}>{cardContent}</Card>)
    expect(tree).toMatchSnapshot()
  })

  it('Should render a Card with shape', () => {
    const tree = renderWithTheme(
      <Card elevation={0} shape="sharp">
        {cardContent}
      </Card>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should render a Card with hover', () => {
    const tree = renderWithTheme(
      <Card elevation={0} elevationHover={3}>
        {cardContent}
      </Card>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should render a Card with no border on right', () => {
    const tree = renderWithTheme(
      <Card elevation={0} noBorder="right">
        {cardContent}
      </Card>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should render a Card with custom shape', () => {
    const tree = renderWithTheme(
      <Card
        elevation={0}
        shape={{
          bottomLeft: 'sharp',
          bottomRight: 'sharp',
          topLeft: 'rounded-small',
          topRight: 'rounded-small',
        }}
      >
        {cardContent}
      </Card>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should render a Card with padding, noBorder, shape, surface', () => {
    const tree = renderWithTheme(
      <Card
        padding={{ top: 'lg', bottom: 'lg', left: 'md', right: 'md' }}
        elevation={0}
        elevationHover={0}
        noBorder={[]}
        shape={{
          bottomLeft: 'sharp',
          bottomRight: 'sharp',
          topLeft: 'rounded-small',
          topRight: 'rounded-small',
        }}
        surface={'white'}
      >
        {cardContent}
      </Card>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should render a Card with elevation', () => {
    const tree = renderWithTheme(<Card elevation={1}>{cardContent}</Card>)
    expect(tree).toMatchSnapshot()
  })

  it('Should render a Card with surface', () => {
    const tree = renderWithTheme(
      <Card elevation={0} surface="white">
        {cardContent}
      </Card>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should render a Card with padding', () => {
    const tree = renderWithTheme(
      <Card elevation={0} padding="xxs">
        {cardContent}
      </Card>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should render a Card with custom padding', () => {
    const tree = renderWithTheme(
      <Card elevation={0} padding={{ top: 'md', bottom: 'md', left: 'md', right: 'md' }}>
        {cardContent}
      </Card>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should render a Card with badges', () => {
    const tree = renderWithTheme(
      <Card
        elevation={0}
        badges={[
          { id: 0, name: 'New' },
          { id: 1, name: '100% Free' },
        ]}
        badgeActionType="prominent"
      >
        {cardContent}
      </Card>,
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should render a Card with badges and hover effect', () => {
    const tree = renderWithTheme(
      <Card
        elevation={0}
        elevationHover={4}
        shape="rounded-small"
        display="flex"
        badges={[
          { id: 0, name: 'New' },
          { id: 1, name: '100% Free' },
        ]}
        badgeActionType="prominent"
      >
        {cardContent}
      </Card>,
    )
    expect(tree).toMatchSnapshot()
  })
})

const themeSpacingBase = {
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '40px',
  xxl: '48px',
  xxxl: '56px',
  xxxxl: '64px',
}

describe('handlePadding(...)', () => {
  it('should return the padding for all sides (sm)', () => {
    const result = handlePadding(themeSpacingBase, 'sm')

    expect(result).toBe('padding: 16px;')
  })

  it('should return the padding only for top (sm)', () => {
    const padding = { top: 'sm' } as Padding
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe('padding-top: 16px;')
  })

  it('should return the padding only for right (lg)', () => {
    const padding = { right: 'lg' } as Padding
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe('padding-right: 32px;')
  })

  it('should return the padding only for bottom (xxs)', () => {
    const padding = { bottom: 'xxs' } as Padding
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe('padding-bottom: 4px;')
  })

  it('should return the padding only for left (xl)', () => {
    const padding = { left: 'xl' } as Padding
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe('padding-left: 40px;')
  })

  it('should return the padding only for left and top (xs, xxl)', () => {
    const padding = { left: 'xs', top: 'xxl' } as Padding
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe('padding-top: 48px;padding-left: 8px;')
  })

  it('should return separate paddings for all sides (top: md, right: sm, bottom: xs, left: md)', () => {
    const padding: Padding = {
      left: 'md',
      right: 'sm',
      top: 'md',
      bottom: 'xs',
    }
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe('padding-top: 24px;padding-right: 16px;padding-bottom: 8px;padding-left: 24px;')
  })

  it('should return a padding media-query for all sides (mobile|sm)', () => {
    const padding: VerticalPaddingMap = { mobile: 'sm' }
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe(media.mobile + ' {padding: 16px; };')
  })

  it('should return a padding media-query for all sides (tablet|md)', () => {
    const padding: VerticalPaddingMap = { tablet: 'md' }
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe(media.tablet + ' {padding: 24px; };')
  })

  it('should return a padding media-query for all sides (desktop|lg)', () => {
    const padding: VerticalPaddingMap = { desktop: 'lg' }
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe(media.desktop + ' {padding: 32px; };')
  })

  it('should return a padding media-query for all sides (mobile|xs & desktop|xl)', () => {
    const padding: VerticalPaddingMap = { mobile: 'xs', desktop: 'xl' }
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe(media.mobile + ' {padding: 8px; };' + media.desktop + ' {padding: 40px; };')
  })

  it('should return a padding media-query for all sides (mobile|tablet|desktop)', () => {
    const padding: VerticalPaddingMap = {
      mobile: 'xxs',
      tablet: 'xl',
      desktop: 'xxl',
    }
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe(
      media.mobile +
        ' {padding: 4px; };' +
        media.tablet +
        ' {padding: 40px; };' +
        media.desktop +
        ' {padding: 48px; };',
    )
  })

  it('should return a padding media-query for all sides but override top', () => {
    const padding = {
      mobile: 'xxs',
      tablet: 'xl',
      desktop: 'xxl',
      top: 'sm',
    } as VerticalPaddingMap
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe(
      media.mobile +
        ' {padding: 4px; padding-top: 16px;};' +
        media.tablet +
        ' {padding: 40px; padding-top: 16px;};' +
        media.desktop +
        ' {padding: 48px; padding-top: 16px;};',
    )
  })

  it('should return a padding media-query for all sides but override left', () => {
    const padding = {
      mobile: 'xxs',
      tablet: 'xl',
      desktop: 'xxl',
      left: 'md',
    } as VerticalPaddingMap
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe(
      media.mobile +
        ' {padding: 4px; padding-left: 24px;};' +
        media.tablet +
        ' {padding: 40px; padding-left: 24px;};' +
        media.desktop +
        ' {padding: 48px; padding-left: 24px;};',
    )
  })

  it('should return a padding media-query for all sides but override right and bottom', () => {
    const padding = {
      mobile: 'xxs',
      tablet: 'xl',
      desktop: 'xxl',
      right: 'sm',
      bottom: 'md',
    } as VerticalPaddingMap
    const result = handlePadding(themeSpacingBase, padding)

    expect(result).toBe(
      media.mobile +
        ' {padding: 4px; padding-right: 16px;padding-bottom: 24px;};' +
        media.tablet +
        ' {padding: 40px; padding-right: 16px;padding-bottom: 24px;};' +
        media.desktop +
        ' {padding: 48px; padding-right: 16px;padding-bottom: 24px;};',
    )
  })
})
