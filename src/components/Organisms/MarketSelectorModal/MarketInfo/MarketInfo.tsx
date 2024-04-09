import * as React from 'react'
import { Heading } from '@/components/Atoms/Typography'
import { Availability } from '../../../Molecules/Availability'
import { AddressAndPhone } from './AddressAndPhone'
import { MarketInfoProps } from './MarketInfo.interface'
import {
  StyledButton,
  StyledDistanceBadge,
  StyledMarketInfo,
  StyledMarketInfoHeaderRow,
  StyledMarketInfoRow,
  StyledLabelParent,
} from './MarketInfo.styled'
import { StoreState } from '../MarketSelectorModal.interface'

export const MarketInfo: React.FC<MarketInfoProps> = ({
  buttonSelectDelivery,
  buttonSelectDeliveryPickup,
  buttonSelectPickup,
  buttonSelected,
  market,
  saveSelectedMarket,
  isSelected,
  showBottomBorder,
  optInConsentComponent,
}) => {
  if (!market.market_id) {
    return null
  }

  const { availability } = market
  const hasAvailabilityStatus: boolean = market && !!market.availability
  const marketId: string = market.market_id
  const wcsMarketId: string = market.wcs_market_id
  const isUnavailable = hasAvailabilityStatus
    ? market.availability.state === 'NOT_AVAILABLE' || market.state === StoreState.INACTIVE
    : false

  let buttonText = buttonSelectPickup
  if (isSelected) {
    buttonText = buttonSelected
  } else {
    if (buttonSelectDelivery) {
      buttonText = buttonSelectDelivery
    } else if (buttonSelectDeliveryPickup) {
      buttonText = buttonSelectDeliveryPickup
    }
  }

  const ActionButton = (
    <StyledButton
      disabled={isUnavailable}
      onClick={() => {
        saveSelectedMarket({
          marketId,
          wcsMarketId,
          name: market.name,
          availability: market.availability,
        })
      }}
      actionType={isSelected ? 'secondary' : 'primary'}
      fullWidth>
      {buttonText}
    </StyledButton>
  )

  return (
    <StyledMarketInfo showBottomBorder={showBottomBorder}>
      <StyledMarketInfoHeaderRow>
        <div>
          {market.distance && <StyledDistanceBadge>{market.distance}</StyledDistanceBadge>}
          {market.name && (
            <Heading scale="level-4" tag="span">
              {market.name}
            </Heading>
          )}
        </div>
        {hasAvailabilityStatus && (
          <Availability text={availability.text} state={availability.state} />
        )}
      </StyledMarketInfoHeaderRow>
      <StyledMarketInfoRow>
        <AddressAndPhone market={market} showPhoneNumber={false} />
        {optInConsentComponent !== undefined ? (
          <StyledLabelParent>
            {optInConsentComponent(market)}
            {ActionButton}
          </StyledLabelParent>
        ) : (
          ActionButton
        )}
      </StyledMarketInfoRow>
    </StyledMarketInfo>
  )
}
