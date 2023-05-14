/* global React */
import { AvailabilityProps } from '@/components/Molecules/Availability/Availability.interface'
import { MarketType, TranslatedMarketText as TranslatedText } from '../MarketSelectorModal.interface'

export interface AddressAndPhoneProps {
  market: MarketType
  showPhoneNumber?: boolean
}

export interface SaveSelectedMarketProps {
  marketId: string
  wcsMarketId: string
  name: string
  availability: AvailabilityProps
}

export interface MarketInfoPropsTranslations {
  buttonSelectDelivery?: TranslatedText
  buttonSelectDeliveryPickup?: TranslatedText
  buttonSelectPickup: TranslatedText
  buttonSelected: TranslatedText
}

export interface MarketInfoMethods {
  closeModal: (e: React.MouseEvent) => void
  saveSelectedMarket: (payload: SaveSelectedMarketProps) => void
}

export interface MarketInfoProps extends MarketInfoPropsTranslations, MarketInfoMethods {
  market: MarketType
  isSelected: boolean
  showBottomBorder?: boolean
  optInConsentComponent?: (market: MarketType) => React.ReactNode | void
}
