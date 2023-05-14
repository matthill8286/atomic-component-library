import * as React from 'react'
import { Theme } from '@/types/theme'
import { ThemeConsumer } from '@/styles/styled'
import { FlexBox, FlexItem } from '@/components/Helper/FlexBox'
import { StrikePrice } from '../Common/StrikePrice'
import { AdditionalInfo } from '../Common/AdditionalInfo'
import { getPriceArray } from '../utils/getPriceArray'
import { PriceProps } from '../Price'
import {
  BrandedPriceFlexWrapper,
  Prefix,
  PriceContainer,
  DecimalPrice,
  FlexEnergyLabel,
  PriceRow,
  StyledLoyaltyText,
  WholePrice,
  WrapperFullWidth,
} from './BrandedPrice.styled'

export const BrandedPrice = ({
  size = 'large',
  showLoyaltyText,
  className,
  justify,
  prefix,
  amount,
  sideInfo,
  strikePricePrefix,
  strikePrice,
  strikePriceTooltip,
  discountValue,
  basePrice,
  shippingInfo,
  withBackground,
  energyEfficiency,
  onEnergyEfficiencyClick,
}: PriceProps): React.ReactElement => {
  const [wholeValue, decimalValue] = getPriceArray(amount.toString())

  return (
    <ThemeConsumer>
      {(theme?: Theme) => {
        const prefixSize = theme && theme.price.branded.prefixSize[size ? size : 'large']
        const priceSize = theme && theme.price.branded.size[size ? size : 'large']
        const fontSizeDetermined = size === 'small' ? 'xl' : 'xxxl'

        return (
          <PriceContainer className={className}>
            {showLoyaltyText && <StyledLoyaltyText />}
            <PriceRow>
              <WrapperFullWidth>
                {strikePrice && (
                  <StrikePrice
                    size={size}
                    justify={justify}
                    discountValue={discountValue}
                    strikePrice={strikePrice}
                    strikePricePrefix={strikePricePrefix}
                    strikePriceTooltip={strikePriceTooltip}
                  />
                )}
                <FlexBox justifyContent={justify}>
                  {energyEfficiency && <FlexEnergyLabel></FlexEnergyLabel>}
                  {sideInfo && <FlexItem flex={'1 1 auto'}>{sideInfo}</FlexItem>}
                  <FlexBox flexDirection="column">
                    <BrandedPriceFlexWrapper alignSelf="flex-end" size={size}>
                      <Prefix size={size} fontSize={prefixSize} weight="bold">
                        {prefix}
                      </Prefix>
                      <WholePrice display="flex" size={size} fontSize={priceSize} weight="semibold" fontFamily="price">
                        {wholeValue}
                      </WholePrice>
                      <DecimalPrice
                        tag="sup"
                        size={size}
                        fontSize={fontSizeDetermined}
                        weight="semibold"
                        fontFamily="price"
                      >
                        {decimalValue}
                      </DecimalPrice>
                    </BrandedPriceFlexWrapper>
                    <AdditionalInfo lines={[basePrice, shippingInfo]} withBackground={withBackground} />
                  </FlexBox>
                </FlexBox>
              </WrapperFullWidth>
            </PriceRow>
          </PriceContainer>
        )
      }}
    </ThemeConsumer>
  )
}
