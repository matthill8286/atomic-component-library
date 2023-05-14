/* global JSX */
/* eslint-disable eqeqeq */
import React, { useState, useRef, useEffect } from 'react'
import anyPass from 'lodash/fp/anyPass'
import { Modal } from '@/components/Molecules/Modal'
import { Heading, Typo } from '@/components/Atoms/Typography'
import { Badge, ActionButton, FlexItem, ItemWrapper, MainWrapper } from './StoreSelector.styled'
// eslint-disable-next-line prettier/prettier
import type { StoreSelectorProps, Item } from './StoreSelector.types'
import { SearchField } from './SearchField'
import { InitialState } from './InitialState'
import { LoadingState } from './LoadingState'

export function StoreSelector({
  componentComplement,
  componentSearchConsent,
  hideCloseButton,
  initialSearchQuery = '',
  isDisabledPredicate,
  isLoading,
  isSelectedPredicate,
  itemList,
  itemSelected,
  noModal,
  onModalClose,
  onSearch,
  onSelect,
  textErrorMessage,
  textInitialState,
  textModalTitle,
  textNoItemsFound,
  textSearchPlaceholder,
  textSelected,
  textSelectPickup,
}: StoreSelectorProps): JSX.Element {
  const isPristineRef = useRef<boolean>(true)
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery)
  const hasItems = Array.isArray(itemList) && itemList.length > 0
  const hasError = textErrorMessage.length > 0
  const isItemSelected = (x: Item) => itemSelected != null && itemSelected?.id === x.id
  const isSelected = isSelectedPredicate ? anyPass([isItemSelected, isSelectedPredicate]) : isItemSelected

  function handleSearch() {
    if (searchQuery !== '') {
      onSearch(searchQuery)
    }
  }

  useEffect(() => {
    if (isPristineRef.current) {
      isPristineRef.current = !(Boolean(isLoading) && Boolean(searchQuery))
    }
  }, [isPristineRef, searchQuery, isLoading])

  const Search = (
    <SearchField
      placeholder={textSearchPlaceholder}
      value={searchQuery}
      onChange={setSearchQuery}
      onSearch={handleSearch}
      consent={componentSearchConsent}
      errorMessage={textErrorMessage}
      disabled={isLoading}
    />
  )

  const WrapperContent = isLoading ? (
    <>
      {Search}
      <LoadingState />
    </>
  ) : !hasItems ? (
    <InitialState text={isPristineRef.current ? textInitialState : textNoItemsFound}>{Search}</InitialState>
  ) : hasError ? (
    Search
  ) : (
    <>
      {Search}
      {itemList?.map((item) => {
        const isCurrentSelected = isSelected(item)
        const isDisabled = isDisabledPredicate != null && isDisabledPredicate(item)

        return (
          <ItemWrapper key={item.id} data-test="store-selector-item">
            <FlexItem display="block" maxWidth="60%">
              <Badge>{item.badge}</Badge>
              <Heading tag="span" scale="level-4">
                {item.header}
              </Heading>
              <Typo tag="div" fontSize="xs" margin="xxs 0 md 0">
                {item.description}
              </Typo>
            </FlexItem>
            <FlexItem display="flex" align="flex-end">
              {componentComplement != null && componentComplement(item)}
              <ActionButton
                actionType={isCurrentSelected ? 'secondary' : 'primary'}
                disabled={isDisabled}
                onClick={() => onSelect(item)}
              >
                {isCurrentSelected ? textSelected : textSelectPickup}
              </ActionButton>
            </FlexItem>
          </ItemWrapper>
        )
      })}
    </>
  )

  return noModal ? (
    <MainWrapper fullWidth={noModal}>{WrapperContent}</MainWrapper>
  ) : (
    <Modal title={textModalTitle} onClose={onModalClose} hideCloseButton={hideCloseButton}>
      <MainWrapper>{WrapperContent}</MainWrapper>
    </Modal>
  )
}
