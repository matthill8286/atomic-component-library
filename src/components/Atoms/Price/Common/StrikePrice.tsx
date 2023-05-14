import * as React from 'react'
import { TypoProps } from '@/components/Atoms/Typography/Typo/Typo.interface'
import { ToolTip } from '@/components/Atoms/ToolTip'
import { getPriceArray } from '@/components/Atoms/Price/utils/getPriceArray'
import { DiscountLabel } from './DiscountLabel'
import { StrikeThrough, StyledStrikePriceTypo } from './StrikeThrough'
import { StyledBrandedStrikePrice, StyledStrikePriceWrapper, StyledSuperPrice } from './StrikePrice.styled'
import { hasToolTip } from '../utils/hasTooltip'

export interface StrikePriceWrapperProps {
  size?: 'small' | 'large' | 'responsive'
  justify?: 'space-between' | 'flex-start' | 'flex-end'
  discountValue?: number | string
  strikePrice: string | number
  strikePricePrefix?: string
  strikePriceTooltip?: string
}

export const StrikePrice: React.FC<StrikePriceWrapperProps> = ({
  size = 'large',
  justify,
  discountValue,
  strikePrice,
  strikePricePrefix,
  strikePriceTooltip,
}) => {
  const fontSizeDetermined = size === 'small' ? 'md' : 'xl'
  const lineHeightDetermined = size === 'small' ? 'xs' : 'md'

  const strikePriceProps: TypoProps = {
    lineHeight: lineHeightDetermined,
    padding: '0',
    margin: '0',
    weight: 'semibold',
    fontSize: fontSizeDetermined,
  }
  const priceArray = getPriceArray(strikePrice.toString())

  const SuperPriceWrapper = ({ size }) => {
    return priceArray[1] ? (
      <StyledSuperPrice
        size={size}
        tag="sup"
        weight="semibold"
        lineHeight={lineHeightDetermined}
        fontSize={fontSizeDetermined}
      >
        {priceArray[1]}
      </StyledSuperPrice>
    ) : null
  }

  return (
    <StyledStrikePriceWrapper size={size} justify={justify}>
      {discountValue && <DiscountLabel discountValue={`${discountValue}`} />}
      {hasToolTip(strikePriceTooltip) ? (
        <ToolTip content={strikePriceTooltip}>
          <StyledBrandedStrikePrice size={size}>
            <StrikeThrough enabled size={size}>
              <StyledStrikePriceTypo {...strikePriceProps} lineHeight={lineHeightDetermined} size={size}>
                {strikePricePrefix} {priceArray[0]} <SuperPriceWrapper size={size} />
              </StyledStrikePriceTypo>
            </StrikeThrough>
          </StyledBrandedStrikePrice>
        </ToolTip>
      ) : (
        <StyledBrandedStrikePrice size={size}>
          <StrikeThrough enabled size={size}>
            <StyledStrikePriceTypo {...strikePriceProps} lineHeight={lineHeightDetermined} size={size}>
              {strikePricePrefix && strikePricePrefix + ' '}
              {priceArray[0]}
              <SuperPriceWrapper size={size} />
            </StyledStrikePriceTypo>
          </StrikeThrough>
        </StyledBrandedStrikePrice>
      )}
    </StyledStrikePriceWrapper>
  )
}
