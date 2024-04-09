/* eslint-disable */
import React from 'react'
import { mountWithTheme } from '@/testRenderer'
import { Address, MarketType } from '../MarketSelectorModal.interface'
import { AddressAndPhone } from './AddressAndPhone'
import { MarketInfo } from './MarketInfo'
import { MarketInfoProps, SaveSelectedMarketProps } from './MarketInfo.interface'
import {
  StyledButton,
  StyledDistanceBadge,
  StyledMarketInfo,
  StyledMarketInfoHeaderRow,
} from './MarketInfo.styled'
import { ProductAvailabilityState } from '@/types'

const address: Address = {
  city: 'bla',
  phone: '',
  street: 'foo',
  street_number: 'bar',
  zip_code: '1234',
}

export const market: MarketType = {
  address,
  availability: {
    state: ProductAvailabilityState.AVAILABLE,
    text: '',
  },
  distance: 'foo',
  market_id: '1',
  name: 'bar',
  wcs_market_id: '',
}

describe('<Marketinfo />', () => {
  const props: MarketInfoProps = {
    buttonSelectPickup: 'SelectPickup',
    buttonSelected: 'Selected',
    closeModal: jest.fn(),
    market,
    saveSelectedMarket: jest.fn(),
    isSelected: false,
  }

  test('Should render without crashing', () => {
    const component = mountWithTheme(<MarketInfo {...props} />)
    expect(component.find(StyledMarketInfo)).toHaveLength(1)
  })

  test('Renders the container', () => {
    const { market_id: _marketId, ...m } = market

    const component = mountWithTheme(<MarketInfo {...props} market={m} />)
    expect(component.find(StyledMarketInfoHeaderRow)).toHaveLength(0)
  })

  test('renders empty if empty market_id is supplied', () => {
    const component = mountWithTheme(<MarketInfo {...props} />)
    expect(component.find(StyledMarketInfo)).toHaveLength(1)
  })

  describe('<AddressAndPhone />', () => {
    test('Renders AddressAndPhone properly', () => {
      const addressComponent = mountWithTheme(<AddressAndPhone market={market} />)
      expect(addressComponent.find(AddressAndPhone)).toHaveLength(1)
    })

    test('Renders no AddressAndPhone if there is no address in the market info', () => {
      const addresslessMarket: MarketType = { ...market }
      delete addresslessMarket.address

      const wrapper = mountWithTheme(<AddressAndPhone market={addresslessMarket} />)
      const addressComponent = wrapper.find(AddressAndPhone)
      expect(addressComponent.children()).toHaveLength(0)
    })
  })

  describe('market.distance property:', () => {
    test('Is rendered if set', () => {
      const component = mountWithTheme(<MarketInfo {...props} />)
      expect(component.find(StyledDistanceBadge)).toHaveLength(1)
    })

    test('Not rendered if empty', () => {
      const distancelessMarket = { ...market, distance: '' }
      const component = mountWithTheme(<MarketInfo {...props} market={distancelessMarket} />)
      expect(component.find(StyledDistanceBadge)).toHaveLength(0)
    })
  })

  describe('<Button>:', () => {
    test('Calls saveSelectedMarket()', () => {
      const mockSaveSelectedMarket = jest.fn()
      const expectedCallObj: SaveSelectedMarketProps = {
        marketId: market.market_id! /* eslint-disable-line @typescript-eslint/no-non-null-assertion */,
        wcsMarketId: market.wcs_market_id,
        name: market.name,
        availability: market.availability,
      }
      const component = mountWithTheme(
        <MarketInfo {...props} saveSelectedMarket={mockSaveSelectedMarket} />
      )
      const button = component.find('Button')
      expect(button).toHaveLength(1)
      button.simulate('click')
      expect(button.props().disabled).toBeFalsy()
      expect(mockSaveSelectedMarket).toBeCalled()
      expect(mockSaveSelectedMarket).toBeCalledWith(expectedCallObj)
    })

    test('Should not call saveSelectedMarket() when availabity is NOT_AVAILABLE', () => {
      const mockSaveSelectedMarket = jest.fn()
      const newProps: MarketInfoProps = {
        buttonSelectPickup: 'SelectPickup',
        buttonSelected: 'Selected',
        closeModal: jest.fn(),
        market: {
          ...market,
          availability: {
            state: ProductAvailabilityState.NOT_AVAILABLE,
            text: '',
          },
        },
        saveSelectedMarket: jest.fn(),
        isSelected: false,
      }
      const component = mountWithTheme(
        <MarketInfo {...newProps} saveSelectedMarket={mockSaveSelectedMarket} />
      )
      const button = component.find(StyledButton)
      expect(button).toHaveLength(1)
      button.simulate('click')
      expect(button.props().disabled).toBeTruthy()
      expect(mockSaveSelectedMarket).toBeCalledTimes(0)
    })

    test('Text is buttonSelectPickup if selectedMarketId !== marketId', () => {
      const component = mountWithTheme(<MarketInfo {...props} />)
      const button = component.find(StyledButton)
      expect(button).toHaveLength(1)
      expect(button.text()).toBe(props.buttonSelectPickup)
    })

    test('Text is buttonSelected if selectedMarketId === marketId', () => {
      const component = mountWithTheme(<MarketInfo {...props} isSelected />)
      const button = component.find(StyledButton)
      expect(button).toHaveLength(1)
      expect(button.text()).toBe(props.buttonSelected)
    })

    test('Is secondary if selectedMarketId === marketId', () => {
      const component = mountWithTheme(<MarketInfo {...props} isSelected />)
      const button = component.find(StyledButton)
      expect(button).toHaveLength(1)
      const buttonProps = JSON.parse(JSON.stringify(button.props()))
      expect(buttonProps.actionType).toEqual('secondary')
    })

    test('Is primary if selectedMarketId !== marketId', () => {
      const component = mountWithTheme(<MarketInfo {...props} />)
      const button = component.find(StyledButton)
      expect(button).toHaveLength(1)
      const buttonProps = JSON.parse(JSON.stringify(button.props()))
      expect(buttonProps.actionType).toEqual('primary')
    })
  })
})
