import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { StoreSelector } from './StoreSelector'
// eslint-disable-next-line prettier/prettier
import type { StoreSelectorProps } from './StoreSelector.types'

describe('<StoreSelector />', () => {
  const props: StoreSelectorProps = {
    onSearch: jest.fn(),
    onSelect: jest.fn(),
    textErrorMessage: '',
    textInitialState: 'initial message',
    textModalTitle: 'modal title',
    textNoItemsFound: 'no items found',
    textSearchPlaceholder: 'search',
    textSelectDelivery: 'delivery selected',
    textSelected: 'selected',
    textSelectPickup: 'pickup',
  }

  it('renders correct', () => {
    const tree = renderWithTheme(<StoreSelector {...props} />)
    expect(tree).toMatchSnapshot()
  })

  it('Should render without crashing', () => {
    const component = mountWithTheme(<StoreSelector {...props} />)
    expect(component.find(StoreSelector)).toHaveLength(1)
  })

  describe('isLoading property:', () => {
    it('Should render initial state if !isLoading', () => {
      const component = mountWithTheme(<StoreSelector {...props} isLoading={false} />)
      const paragraph = component.find('p')
      expect(paragraph).toHaveLength(1)
      expect(paragraph.text()).toEqual('initial message')
    })

    it('Should not render initial state if isLoading', () => {
      const component = mountWithTheme(<StoreSelector {...props} isLoading />)
      expect(component.find('p')).toHaveLength(0)
    })

    it('Should render loading skeleton if isLoading', () => {
      const component = mountWithTheme(<StoreSelector {...props} isLoading />)
      expect(component.find('div[data-test="store-selector-loading-state"]')).toHaveLength(2)
    })

    it('Should not render loading skeleton if !isLoading', () => {
      const component = mountWithTheme(<StoreSelector {...props} isLoading={false} />)
      expect(component.find('div[data-test="store-selector-loading-state"]')).toHaveLength(0)
    })

    it('Should render items if !isLoading and itemList.length > 0', () => {
      const component = mountWithTheme(
        <StoreSelector
          {...props}
          itemList={[
            {
              id: '1',
              badge: '1km',
              header: 'Header',
              description: 'description',
            },
          ]}
        />
      )
      expect(component.find('div[data-test="store-selector-item"]')).toHaveLength(1)
    })

    it('Should not render items if isLoading is true', () => {
      const component = mountWithTheme(
        <StoreSelector
          {...props}
          isLoading
          itemList={[
            {
              id: '1',
              badge: '1km',
              header: 'Header',
              description: 'description',
            },
          ]}
        />
      )
      expect(component.find('div[data-test="store-selector-item"]')).toHaveLength(0)
    })
  })

  describe('initialSearchQuery property:', () => {
    it('Should render textInitialState text when query is present, results are empty and pristine is true', () => {
      const component = mountWithTheme(
        <StoreSelector {...props} itemList={[]} initialSearchQuery="Barcelona" />
      )
      const paragraph = component.find('p')
      expect(component.find('div[data-test="store-selector-item"]')).toHaveLength(0)
      expect(paragraph).toHaveLength(1)
      expect(paragraph.text()).toEqual('initial message')
    })
  })

  describe('textErrorMessage property:', () => {
    it('Should render error message when error is given', () => {
      const component = mountWithTheme(<StoreSelector {...props} textErrorMessage="ERROR-MSG" />)
      const errorSpan = component.find('span[data-test="mms-market-search-field-error"]')
      expect(errorSpan).toHaveLength(1)
      expect(errorSpan.text()).toEqual('ERROR-MSG')
    })
  })
})
