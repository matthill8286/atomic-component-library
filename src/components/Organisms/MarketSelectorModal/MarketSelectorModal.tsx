import React, { useEffect, useState } from 'react'
import { LoadingIndicator } from '@/components/Atoms/LoadingIndicator'
import { Modal } from '@/components/Molecules/Modal'
import { media } from '@/styles/media'
import { styled } from '@/styles/styled'
import { MarketEntries } from './MarketEntries'
import { MarketSelectorModalProps, SaveSelectedMarketProps } from './MarketSelectorModal.interface'
import { SearchField } from './SearchField'
import { SelectionView } from './SelectionView'

const StyledLoadingIndicator = styled(LoadingIndicator)`
  position: relative;
  margin: 0 auto;
`
export const StyledContentWrapper = styled.div<{ noModal?: boolean }>`
  max-width: ${({ noModal }) => (noModal ? '100%' : '400px')};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.base.xs} 0;
  ${media.md} {
    max-width: ${({ noModal }) => (noModal ? '100%' : '650px')};
  }
`

export const MarketSelectorModal: React.FC<MarketSelectorModalProps> = ({
  buttonSelected,
  buttonSelectDelivery,
  buttonSelectDeliveryPickup,
  buttonSelectPickup,
  closeModal,
  clubMarketId,
  consent,
  marketsLoading = false,
  modalDescription,
  modalTitle,
  nearbyMarkets,
  noNearbyStores,
  noResults,
  noResultsMessage,
  saveSelectedMarket,
  searchMarkets,
  searchPlaceholder,
  selectedMarket,
  noModal,
  resetOnSelect,
  hideCloseButton,
  optInConsentComponent,
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const hideMarketList = resetOnSelect && searchQuery === ''

  const handleSearch = () => {
    if (searchQuery !== '') {
      searchMarkets({ searchQuery })
    }
  }

  useEffect(() => {
    if (selectedMarket?.address) {
      setSearchQuery(selectedMarket.address.city || selectedMarket.address.zip_code)
      handleSearch()
    }
  }, [])

  const saveMarketSelection = (payload: SaveSelectedMarketProps) => {
    saveSelectedMarket(payload)

    if (resetOnSelect) {
      setSearchQuery('')
      resetOnSelect()
    }
  }

  const searchField = (
    <SearchField
      placeholder={searchPlaceholder}
      value={searchQuery}
      onChange={setSearchQuery}
      onSearch={handleSearch}
      consent={consent}
      errorMessage={noResults && noResultsMessage ? noResultsMessage : undefined}
    />
  )

  let content: React.ReactNode = null

  if (marketsLoading) {
    content = <StyledLoadingIndicator color="primary" isVisible size={80} />
  } else if (nearbyMarkets && nearbyMarkets.length === 0) {
    content = (
      <SelectionView modalDescription={noResults ? noNearbyStores : modalDescription} searchField={searchField} />
    )
  } else {
    content = (
      <>
        {searchField}
        {!hideMarketList && (
          <MarketEntries
            buttonSelectPickup={buttonSelectPickup}
            buttonSelectDelivery={buttonSelectDelivery}
            buttonSelectDeliveryPickup={buttonSelectDeliveryPickup}
            buttonSelected={buttonSelected}
            closeModal={closeModal}
            clubMarketId={clubMarketId}
            nearbyMarkets={nearbyMarkets}
            saveSelectedMarket={saveMarketSelection}
            selectedMarket={selectedMarket}
            optInConsentComponent={optInConsentComponent}
          />
        )}
      </>
    )
  }

  return noModal ? (
    <StyledContentWrapper noModal={noModal}>{content}</StyledContentWrapper>
  ) : (
    <Modal title={modalTitle} onClose={closeModal} hideCloseButton={hideCloseButton}>
      <StyledContentWrapper noModal={noModal}>{content}</StyledContentWrapper>
    </Modal>
  )
}
