/* eslint-disable no-console */
import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { StoreSelector } from './StoreSelector'
import { NotificationBox, Availability, ProductAvailabilityState } from '@/index'

function sharedKnobs() {
  return {
    isLoading: boolean('Loading state', false),
    noModal: boolean('Without modal', false),
    textErrorMessage: '',
    textInitialState: 'Please enter your postal code or city, to view markets in your area.',
    textModalTitle: 'Modal title',
    textNoItemsFound: 'No items found',
    textSearchPlaceholder: 'Search...',
    textSelectDelivery: 'SelectDelivery',
    textSelectPickup: 'Seleccionar para recoger',
    textSelected: 'Selected',
    onModalClose: () => undefined,
  }
}

storiesOf('Design System/Organisms/StoreSelector', module)
  .add('- initial', () => (
    <StoreSelector
      {...sharedKnobs()}
      onSearch={(query) => console.log('onSearch', query)}
      onSelect={(model) => console.log('onSelect', model)}
      itemList={[]}
    />
  ))
  .add('- no items found', () => (
    <StoreSelector
      {...sharedKnobs()}
      onSearch={(query) => console.log('onSearch', query)}
      onSelect={(model) => console.log('onSelect', model)}
      itemList={[]}
      initialSearchQuery="Barcelona"
    />
  ))
  .add('- example', () => (
    <StoreSelector
      {...sharedKnobs()}
      onSearch={(query) => console.log('onSearch', query)}
      onSelect={(model) => console.log('onSelect', model)}
      isSelectedPredicate={(item) => item.id === 'clubMarketId'}
      isDisabledPredicate={(item) => item.id === '2'}
      itemList={[
        {
          id: 'clubMarketId',
          badge: '1km',
          header: 'München-Euroindustriepark',
          description: (
            <>
              Centre Comercial Parc Vallés
              <br />
              Avinguda Tèxtil, 47
              <br />
              08223 Terrassa, Barcelona
              <br />
              Lu-Sa: 09:30 - 21:30h,
            </>
          ),
        },
        {
          id: '2',
          badge: '2km',
          header: 'München-Euroindustriepark 2',
          description: 'Damit Sie schneller Ihren nächsten',
        },
        {
          id: '3',
          badge: '33km',
          header: 'München-Euroindustriepark 3',
          description: 'Damit Sie schneller Ihren nächsten',
        },
        {
          id: '4',
          badge: '112km',
          header: 'München-Euroindustriepark 4',
          description: 'Damit Sie schneller Ihren nächsten',
        },
      ]}
    />
  ))
  .add('- complement component', () => (
    <StoreSelector
      {...sharedKnobs()}
      onSearch={(query) => console.log('onSearch', query)}
      onSelect={(model) => console.log('onSelect', model)}
      isSelectedPredicate={(item) => item.id === 'clubMarketId'}
      isDisabledPredicate={(item) => item.id === '2'}
      componentComplement={(item) => (
        <div style={{ marginBottom: '8px' }}>
          <Availability text="Availability text" state={ProductAvailabilityState.AVAILABLE} />
        </div>
      )}
      itemList={[
        {
          id: 'clubMarketId',
          badge: '1km',
          header: 'München-Euroindustriepark',
          description: (
            <>
              Centre Comercial Parc Vallés
              <br />
              Avinguda Tèxtil, 47
              <br />
              08223 Terrassa, Barcelona
              <br />
              Lu-Sa: 09:30 - 21:30h,
            </>
          ),
        },
        {
          id: '2',
          badge: '2km',
          header: 'München-Euroindustriepark 2',
          description: 'Damit Sie schneller Ihren nächsten',
        },
        {
          id: '3',
          badge: '33km',
          header: 'München-Euroindustriepark 3',
          description: 'Damit Sie schneller Ihren nächsten',
        },
        {
          id: '4',
          badge: '112km',
          header: 'München-Euroindustriepark 4',
          description: 'Damit Sie schneller Ihren nächsten',
        },
      ]}
    />
  ))
  .add('- search consent', () => (
    <StoreSelector
      {...sharedKnobs()}
      componentSearchConsent={
        <NotificationBox
          buttonLayout="row"
          buttons={[{ actionBtnLabel: 'Aktivieren', onClick: function noRefCheck() {} }]}
          hasTitleIcon
          title="Damit Sie schneller Ihren nächsten Markt finden, nutzen wir Daten von Google Maps. Um fortzufahren müssen Sie die Komfort-Kategorie aktivieren."
          type="info"
          tooltip={{
            arrowPosition: 'top-left',
            left: 0,
            top: 70,
          }}
        />
      }
      onSearch={(query) => console.log('onSearch', query)}
      onSelect={(model) => console.log('onSelect', model)}
    />
  ))
