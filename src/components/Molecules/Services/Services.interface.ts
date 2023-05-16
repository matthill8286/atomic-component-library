export type ServicesOfferType = 'warranties' | 'services'

export interface ServicesPriceProps {
  amount: number
  currency: string
  freeLabel: React.ReactNode | string | React.ReactElement
}

interface ServicesPriceData {
  price?: number
  amount?: number
  currency?: string
}

export interface ServiceType {
  id: string
  additionalContent?: string | undefined
  name: string
  onlineShopId?: string
  offerType?: ServicesOfferType
  price?: ServicesPriceData
  fee?: ServicesPriceData
  selected?: boolean
  recurringSubscriptionText?: string
}

export interface Knobs {
  onChange: (isCheck: boolean, id: string | undefined) => void
}

export interface ServicesProps extends Knobs {
  headline?: string
  freeLabel: React.ReactNode | string | React.ReactElement
  items: ServiceType[]
  lineitemId: string
  loading: boolean
  offersDisabled?: boolean
  onIconModalOpen?: (content: string) => void
  onDisabledServicesClick?: () => void
  onShowInfo?: (onlineShopId: string, id: string, index: number) => void
  index?: number
}

export interface ServiceEntryProps extends ServicesProps {
  item: ServiceType
}
export interface StyledEntryProps {
  isDisabled: boolean
}
