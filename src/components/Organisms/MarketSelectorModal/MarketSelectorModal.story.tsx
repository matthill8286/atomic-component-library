import { boolean } from '@storybook/addon-knobs'
import React from 'react'
import { NotificationBox } from '@/index'
import { MarketSelectorModal } from './MarketSelectorModal'
import { MarketType } from './MarketSelectorModal.interface'
import { NearbyMarkets, NearbyMarketsNA, SharedProps } from './MarketSelectorModal.mock'
import Readme from './MarketSelectorModal.readme.md'

interface SharedKnobs {
  marketsLoading: boolean
  noResults: boolean
  nearbyMarkets: MarketType[]
  selectedMarket: MarketType | null
}

function optInComponent() {
  return function renderPropsTest(market: MarketType) {
    return market.pickupLocation === 'DRIVE_THROUGH' ? 'opt-in component' : undefined
  }
}

const sharedKnobs = (): SharedKnobs => {
  return {
    marketsLoading: boolean('Markets loading', false),
    noResults: boolean('With Search Error', false),
    selectedMarket: boolean('Selected Market', false) ? NearbyMarkets[0] : null,
    nearbyMarkets: boolean('With nearby markets', false) ? NearbyMarkets : [],
  }
}

export default {
  title: 'Design System/Organisms/MarketSelectorModal',
}

export const Default = () => <MarketSelectorModal {...SharedProps} {...sharedKnobs()} />

Default.story = {
  parameters: {
    info: Readme,
  },
}

export const WithConsentToolTip = () => (
  <MarketSelectorModal
    {...SharedProps}
    {...sharedKnobs()}
    consent={
      <NotificationBox
        buttonLayout="row"
        buttons={[
          {
            actionBtnLabel: 'Aktivieren',
            onClick: function noRefCheck() {},
          },
        ]}
        hasTitleIcon
        title="Damit Sie schneller Ihren nächsten Markt finden, nutzen wir Daten von Google Maps. Um fortzufahren müssen Sie die Komfort-Kategorie aktivieren."
        tooltip={{
          arrowPosition: 'top-right',
          left: 0,
          top: 70,
        }}
        type="info"
      />
    }
  />
)

WithConsentToolTip.story = {
  name: 'With Consent ToolTip',

  parameters: {
    info: Readme,
  },
}

export const WithNotAvailable = () => (
  <MarketSelectorModal
    {...SharedProps}
    nearbyMarkets={NearbyMarketsNA}
    {...{ selectedMarket: boolean('Selected Market', false) ? NearbyMarkets[0] : null }}
  />
)

WithNotAvailable.story = {
  name: 'With NOT_AVAILABLE',

  parameters: {
    info: Readme,
  },
}

export const WithOptInComponent = () => (
  <MarketSelectorModal
    {...SharedProps}
    optInConsentComponent={optInComponent()}
    nearbyMarkets={NearbyMarketsNA.map((market, idx) => {
      return {
        ...market,
        pickupLocation: idx === 0 ? 'DRIVE_THROUGH' : 'COUNTER',
      }
    })}
    {...{ selectedMarket: boolean('Selected Market', false) ? NearbyMarkets[0] : null }}
  />
)

WithOptInComponent.story = {
  name: 'With opt-in component',
  parameters: { info: Readme },
}

export const EmptyMarketIDs = () => (
  <MarketSelectorModal
    {...SharedProps}
    nearbyMarkets={NearbyMarketsNA.map(m => {
      const { market_id: _marketId, ...rest } = m
      return rest
    })}
    selectedMarket={null}
  />
)

EmptyMarketIDs.story = {
  name: 'Empty Market IDs',

  parameters: {
    info: Readme,
  },
}
