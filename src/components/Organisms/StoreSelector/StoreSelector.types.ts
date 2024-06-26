/* global React */
import type { ReactNode } from 'react'

export interface Item {
  id: string
  badge?: string
  header: string
  description?: ReactNode | null
  [key: string]: unknown
}

export type SearchFieldProps = {
  consent?: ReactNode
  disabled?: boolean
  errorMessage?: string
  onChange: (value: string) => void
  onSearch: () => void
  placeholder: string
  value: string
}

export type InitialStateProps = {
  text: string
  children: ReactNode
}

export type StoreSelectorProps = {
  componentComplement?: <T extends Item>(item: T) => ReactNode | void
  componentSearchConsent?: ReactNode
  hideCloseButton?: boolean
  initialSearchQuery?: string
  isDisabledPredicate?: <T extends Item>(item: T) => boolean
  isLoading?: boolean
  isSelectedPredicate?: <T extends Item>(item: T) => boolean
  itemList?: Item[]
  itemSelected?: Item | null
  noModal?: boolean
  onModalClose?: () => void
  onSearch: (query: string) => void
  onSelect: (item: Item) => void
  textErrorMessage: string
  textInitialState: string
  textModalTitle: string
  textNoItemsFound: string
  textSearchPlaceholder: string
  textSelectDelivery: string
  textSelected: string
  textSelectPickup: string
}
