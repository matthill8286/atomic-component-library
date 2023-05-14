import { ReactNode } from 'react'
import { AvailabilityProps } from '@/components/Molecules/Availability/Availability.interface'

export type TranslatedMarketText = string
type ZipCode = string
type Location = string

export interface MarketInfoPropsTranslations {
  buttonSelectDelivery?: TranslatedMarketText
  buttonSelectDeliveryPickup?: TranslatedMarketText
  buttonSelectPickup: TranslatedMarketText
  buttonSelected: TranslatedMarketText
}

export interface Address {
  city: string
  phone?: string
  street: string
  street_number?: string // eslint-disable-line camelcase
  zip_code: string // eslint-disable-line camelcase
}

export interface SaveSelectedMarketProps {
  marketId: string
  wcsMarketId: string
  name: string
  availability?: AvailabilityProps
}

export interface MarketInfoMethods {
  closeModal: (e: React.MouseEvent) => void
  saveSelectedMarket: (payload: SaveSelectedMarketProps) => void
}

export interface MarketEntriesProps extends MarketInfoPropsTranslations, MarketInfoMethods {
  clubMarketId?: string
  nearbyMarkets?: MarketType[] | null
  selectedMarket?: MarketType | null
  optInConsentComponent?: (market: MarketType) => React.ReactNode | void
}

export interface ShowSearchMessageProps {
  nearbyMarkets: MarketType[]
  title: string
}

export interface SearchMarketsProps {
  searchQuery: ZipCode | Location
}

export interface MarketSelectorTranslations {
  description: string
  title: string
  searchPlaceholder: string
  noNearbyStores: string
  noResults: string
  selected: string
  selectPickup: string
}

export interface Translations extends MarketInfoPropsTranslations {
  modalTitle: TranslatedMarketText
  modalDescription: TranslatedMarketText
  noNearbyStores: TranslatedMarketText
  noResultsMessage: TranslatedMarketText
  searchPlaceholder: TranslatedMarketText
}

export interface MarketType {
  address?: Address
  availability: AvailabilityProps
  distance: string
  market_id?: string // eslint-disable-line camelcase
  marketId?: string
  name: string
  pickupLocation?: string
  state?: StoreState
  wcs_market_id: string // eslint-disable-line camelcase
  wcsMarketId?: string
}

export interface ComponentProps extends MarketInfoMethods, MarketEntriesProps {
  marketsLoading: boolean
  noResults: boolean
  searchMarkets: (props: SearchMarketsProps) => void
  consent?: ReactNode
  closeModal: () => void
  noModal?: boolean
  resetOnSelect?: () => void
  hideCloseButton?: boolean
  optInConsentComponent?: (market: MarketType) => React.ReactNode | void
}

export enum StoreState {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PARTIALLY_ACTIVE = 'PARTIALLY_ACTIVE',
}

export type MarketSelectorModalProps = Translations & ComponentProps
