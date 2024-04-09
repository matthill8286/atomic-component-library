import React from 'react'
import { IconButton } from '@/components/Atoms/Button/IconButton'
import { SkeletonBlockItem, SkeletonInlineItem } from '@/components/Atoms/Skeleton'
import { FlexBox, Icon, Spacer } from '@/index'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { ProductTileCompact } from './ProductTileCompact'
import { ProductTileCompactElement } from './ProductTileCompactElement'
import { OtherAddToTrash } from 'atomic-icon-library'
import { newProductMocks } from '@/components/Organisms/ProductTile/elements/mockProduct'

const productLineItemElementProps = {
  title: newProductMocks[0]?.title,
  provider: newProductMocks[0]?.provider?.name,
  description: 'Testing the description',
}

describe('ProductTileCompact', () => {
  it('renders correct snapshot with product data', () => {
    const mockClick = jest.fn()
    const wrapper = renderWithTheme(
      <ProductTileCompact productImage={newProductMocks[0].image} loading={false}>
        <ProductTileCompactElement onClick={mockClick} {...productLineItemElementProps} loading={false} />
      </ProductTileCompact>,
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correct snapshot with button children', () => {
    const mockClick = jest.fn()
    const wrapper = renderWithTheme(
      <ProductTileCompact loading={false} productImage={newProductMocks[0].image}>
        <ProductTileCompactElement
          onClick={mockClick}
          {...productLineItemElementProps}
          loading={false}
          showInteractions={false}
        />
        <FlexBox flexDirection="row">
          <IconButton>
            <Icon width={20} height={20}>
              <OtherAddToTrash />
            </Icon>
          </IconButton>
          <Spacer direction="vertical" size="md" />
        </FlexBox>
      </ProductTileCompact>,
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correct snapshot in loading state', () => {
    const mockClick = jest.fn()
    const wrapper = renderWithTheme(
      <ProductTileCompact loading productImage={newProductMocks[0].image}>
        <ProductTileCompactElement onClick={mockClick} {...productLineItemElementProps} loading />
      </ProductTileCompact>,
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders Skeleton-Elements in loading state', () => {
    const mockClick = jest.fn()
    const wrapper = mountWithTheme(
      <ProductTileCompact loading>
        <ProductTileCompactElement onClick={mockClick} {...productLineItemElementProps} loading />
      </ProductTileCompact>,
    )

    expect(wrapper.find(SkeletonBlockItem).length).toBe(1)
  })
})

describe('ProductTileCompactElement', () => {
  it('should be clickable', () => {
    const mockClick = jest.fn()
    const wrapper = mountWithTheme(
      <ProductTileCompact onClick={mockClick}>
        <ProductTileCompactElement {...productLineItemElementProps} loading />
      </ProductTileCompact>,
    )

    wrapper.find(ProductTileCompactElement).simulate('click')
    expect(mockClick.mock.calls.length).toEqual(1)
  })
})
