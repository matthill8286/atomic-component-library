import * as React from 'react'
import { useTheme } from '@/utils/helper'
import { DiscountLabel } from '../Common/DiscountLabel'
import { PriceProps } from '../Price'
import { ToolTip } from '@/components/Atoms/ToolTip'
import { ThemeColors, ThemeFontLineHeight, ThemeFontSizes } from '@/types/theme'
import { StrikeThrough, StyledStrikePriceTypo } from '../Common/StrikeThrough'
import { getPriceArray } from '../utils/getPriceArray'
import { FlexBox } from '@/components/Helper'
import {
  InfoBox,
  StyledLoyaltyText,
  InfoLine,
  PriceContainer,
  StyledPriceRow,
  StyledUnbrandedPriceDisplayWrapper,
  Wrapper,
} from './UnbrandedPrice.styled'

export const UnbrandedPrice: React.FC<PriceProps> = ({
  className,
  size = 'large',
  amount,
  shippingInfo,
  withBackground = false,
  basePrice,
  strikePrice,
  strikePricePrefix,
  strikePriceTooltip,
  strikePriceRight,
  discountValue,
  justify,
  showLoyaltyText,
}) => {
  const {
    price: { regular },
  } = useTheme()
  if (!amount) return null

  const typoSize = regular.size[size]
  const typoLineHeight = regular.lineHeight[size]

  return (
    <PriceContainer className={className}>
      {showLoyaltyText && <StyledLoyaltyText />}
      <StyledPriceRow justify={justify}>
        <FlexBox flexDirection="column">
          <Wrapper display="flex" justify={justify}>
            {strikePrice && (
              <>
                {discountValue && (
                  <DiscountLabel discountValue={`${discountValue}`} marginRight="xs" withUnbrandedPrice />
                )}
                <UnbrandedPriceDisplay
                  size={typoSize}
                  lineHeight={typoLineHeight}
                  amount={strikePrice}
                  strikeThrough
                  justify={justify}
                  strikePricePrefix={strikePricePrefix}
                  strikePriceTooltip={strikePriceTooltip}
                  strikePriceRight={strikePriceRight}
                />
              </>
            )}

            <UnbrandedPriceDisplay
              size={typoSize}
              lineHeight={typoLineHeight}
              amount={amount}
              justify={justify}
              color={withBackground ? 'white' : strikePrice ? 'primary' : 'black'}
            />
          </Wrapper>
          <InfoBox justifyContent={'flex-start'}>
            {[basePrice, shippingInfo].map((line, i) =>
              line ? (
                <InfoLine key={'adi' + i} color={withBackground ? 'white' : 'grey4'}>
                  {line}
                </InfoLine>
              ) : null,
            )}
          </InfoBox>
        </FlexBox>
      </StyledPriceRow>
    </PriceContainer>
  )
}

export interface UnbrandedPriceDisplayProps {
  className?: string
  amount: string | number
  color?: ThemeColors
  size: ThemeFontSizes
  lineHeight: ThemeFontLineHeight
  strikeThrough?: boolean
  strikePriceRight?: boolean
  strikePricePrefix?: string
  strikePriceTooltip?: string
  justify?: string
}

export const UnbrandedPriceDisplay: React.FC<UnbrandedPriceDisplayProps> = ({
  className,
  amount,
  color,
  size,
  lineHeight,
  strikeThrough,
  strikePriceRight,
  strikePricePrefix,
  strikePriceTooltip,
  justify,
}) => {
  const [wholeValue, decimalValue] = getPriceArray(amount.toString())

  return (
    <StyledUnbrandedPriceDisplayWrapper
      className={className}
      strikePriceRight={strikePriceRight}
      strikeThrough={strikeThrough}
      justify={justify}
    >
      <StrikeThrough enabled={strikeThrough} size={size}>
        <ToolTip content={strikePriceTooltip}>
          <StyledStrikePriceTypo
            fontSize={size}
            lineHeight={lineHeight}
            weight="semibold"
            fontFamily="default"
            textAlign="right"
            size={size}
            color={strikeThrough ? undefined : color}
          >
            {strikeThrough && strikePricePrefix === 'UVP' && `${strikePricePrefix} `}
            {wholeValue}
          </StyledStrikePriceTypo>
          {decimalValue && (
            <StyledStrikePriceTypo
              tag="sup"
              fontSize={size}
              lineHeight={lineHeight}
              weight="semibold"
              fontFamily="default"
              size={size}
              color={strikeThrough ? undefined : color}
            >
              {decimalValue}
            </StyledStrikePriceTypo>
          )}
        </ToolTip>
      </StrikeThrough>
    </StyledUnbrandedPriceDisplayWrapper>
  )
}
