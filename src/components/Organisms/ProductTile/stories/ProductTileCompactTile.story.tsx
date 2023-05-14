import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ProductTileLayout, ProductTileProps, newProductMocks } from '@/components/Organisms/ProductTile'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { ProductTileCompactTile } from '@/components/Organisms/ProductTile/ProductTileCompactTile'
import { styled } from '@/styles'
import { IconButton } from '@/components/Atoms/Button'
import { Icon } from '@/components/Atoms/Icon'
import { OtherBookmarkActive } from '@matthill8286/atomic-icon-library'

const StyledIconButton = styled(IconButton)`
  border: none;
  display: flex;
  padding: 0;
  min-width: auto;
  justify-content: center;
  margin-right: 20px;
`

export default {
  title: 'Design System/Organisms/ProductTile/Compact',
  component: ProductTileCompactTile,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

const Wrapper = ({ children }) => <StorybookWrapper>{children}</StorybookWrapper>

const Template: Story<ProductTileProps> = (args: ProductTileProps) => (
  <Wrapper>
    <ProductTileCompactTile {...args} layout={ProductTileLayout.compact} />
  </Wrapper>
)

export const Default = Template.bind({})

Default.args = {
  product: newProductMocks[0],
  orientation: 'landscape',
  renderAddToBookmarkButton: () => (
    <StyledIconButton>
      <Icon color="grey5" height="md">
        <OtherBookmarkActive />
      </Icon>
    </StyledIconButton>
  ),
}
