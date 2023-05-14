import React from 'react'
import { css, styled } from '@/styles/styled'
import { Typo } from '@/components/Atoms/Typography'
import { PriceBrandingProps } from '../Price'
import { MarginMap } from '@/types'

interface DiscountLabelProps extends PriceBrandingProps {
  discountValue: string
  marginRight?: MarginMap
  withUnbrandedPrice?: boolean
}

export const DiscountLabel: React.FC<DiscountLabelProps> = ({
  discountValue,
  marginRight = 'xxs',
  withUnbrandedPrice = false,
}) => {
  return (
    <StyledDiscountLabel
      display="inline-block"
      color="white"
      background="primary"
      fontSize={`${withUnbrandedPrice ? 'xxs' : 's'}`}
      padding={`${withUnbrandedPrice ? '4px' : 0} 4px`}
      margin={`0 ${marginRight} 0 0`}
      isVerticallyCentered={withUnbrandedPrice}
      borderRadius="borderRadius1"
    >
      {discountValue}
    </StyledDiscountLabel>
  )
}

const StyledDiscountLabel = styled(Typo)<{
  isVerticallyCentered?: boolean
}>(
  ({ isVerticallyCentered }) => css`
    ${isVerticallyCentered && 'align-self: center'};
  `,
)
