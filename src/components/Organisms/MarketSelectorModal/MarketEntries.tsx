import React from 'react'
import { styled } from '@/styles'
import { MarketInfo } from './MarketInfo/MarketInfo'
import { MarketEntriesProps, MarketType } from './MarketSelectorModal.interface'

const StyledMarketEntries = styled.div`
  margin-top: ${({ theme }) => theme.spacing.base.md};
`

export const MarketEntries: React.FC<MarketEntriesProps> = ({
  buttonSelectDelivery,
  buttonSelectDeliveryPickup,
  buttonSelectPickup,
  buttonSelected,
  closeModal,
  clubMarketId,
  nearbyMarkets,
  saveSelectedMarket,
  selectedMarket,
  optInConsentComponent,
}): React.ReactElement => {
  return (
    <StyledMarketEntries data-test="mms-market-entries">
      {nearbyMarkets &&
        nearbyMarkets.map((market: MarketType, index: number): React.ReactNode => {
          if (typeof market.market_id === 'undefined') {
            return null
          }

          const isSelected =
            (selectedMarket !== null && selectedMarket?.market_id === market.market_id) ||
            clubMarketId === market.market_id

          return (
            <MarketInfo
              buttonSelectDelivery={buttonSelectDelivery}
              buttonSelectDeliveryPickup={buttonSelectDeliveryPickup}
              buttonSelectPickup={buttonSelectPickup}
              buttonSelected={buttonSelected}
              closeModal={closeModal}
              key={market.market_id}
              market={market}
              isSelected={isSelected}
              saveSelectedMarket={saveSelectedMarket}
              showBottomBorder={index < nearbyMarkets.length - 1}
              optInConsentComponent={optInConsentComponent}
            />
          )
        })}
    </StyledMarketEntries>
  )
}
