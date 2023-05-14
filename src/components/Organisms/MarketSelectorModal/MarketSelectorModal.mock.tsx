/* eslint-disable camelcase */
import { action } from '@storybook/addon-actions'
import { MarketType, Address, MarketSelectorModalProps } from './MarketSelectorModal.interface'
import { ProductAvailabilityState } from '@/types'

export const address: Address = {
  city: 'Munchen',
  phone: '089/31853/0',
  street: 'Maria-Probst-Str.',
  street_number: '11',
  zip_code: '80939',
}

export const market: MarketType = {
  address,
  availability: {
    state: ProductAvailabilityState.AVAILABLE,
    text: 'Pick up in 2 to 3 working days',
  },
  distance: '3 km',
  market_id: '1',
  name: 'München-Euroindustriepark',
  wcs_market_id: '',
}

export const NearbyMarkets: MarketType[] = [
  { ...market, market_id: '2' },
  {
    ...market,
    distance: '4 km',
    market_id: '3',
  },
]

export const NearbyMarketsNA: MarketType[] = [
  ...NearbyMarkets,
  {
    ...market,
    availability: {
      state: ProductAvailabilityState.NOT_AVAILABLE,
      text: 'Not available on this market',
    },
    distance: '4 km',
    market_id: '3',
  },
]

export const SharedProps: MarketSelectorModalProps = {
  buttonSelectPickup: 'Selected Pickup',
  buttonSelected: 'Selected',
  closeModal: action('close modal'),
  clubMarketId: '',
  marketsLoading: false,
  modalTitle: 'Choose a market',
  nearbyMarkets: [],
  modalDescription: 'Please enter your postal code or city, to view markets in your area.',
  noNearbyStores: 'No nearby stores found',
  noResults: false,
  noResultsMessage: 'No results',
  saveSelectedMarket: action('save selected market'),
  searchMarkets: (arg) => action(`search markets "${arg?.searchQuery}"`)(),
  searchPlaceholder: 'Search...',
  selectedMarket: null,
}
