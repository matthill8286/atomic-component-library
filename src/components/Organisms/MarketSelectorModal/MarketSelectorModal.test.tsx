import React from 'react'
import { LoadingIndicator } from '@/components/Atoms/LoadingIndicator'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { MarketEntries } from './MarketEntries'
import { MarketInfo } from './MarketInfo'
import { MarketSelectorModal, StyledContentWrapper } from './MarketSelectorModal'
import { MarketSelectorModalProps } from './MarketSelectorModal.interface'
import { market, SharedProps } from './MarketSelectorModal.mock'
import { SelectionView, SelectionViewProps } from './SelectionView'

const DefaultProps: MarketSelectorModalProps = {
  ...SharedProps,
  closeModal: jest.fn(),
  saveSelectedMarket: jest.fn(),
}

describe('<MarketSelectorModal />', () => {
  const props: MarketSelectorModalProps = {
    ...DefaultProps,
    clubMarketId: '',
    nearbyMarkets: [],
    selectedMarket: market,
  }

  it('renders correct', () => {
    const tree = renderWithTheme(<MarketSelectorModal {...DefaultProps} />)
    expect(tree).toMatchSnapshot()
  })

  test('Should render withput crashing', () => {
    const component = mountWithTheme(<MarketSelectorModal {...props} />)
    expect(component.find(MarketSelectorModal)).toHaveLength(1)
  })

  test('Renders the container', () => {
    const component = mountWithTheme(<MarketSelectorModal {...props} />)
    expect(component.find(StyledContentWrapper)).toHaveLength(1)
  })

  describe('marketsLoading property:', () => {
    describe('<SelectionView />', () => {
      test('Should render if !marketsLoading', () => {
        const component = mountWithTheme(<MarketSelectorModal {...props} marketsLoading={false} />)
        expect(component.find(SelectionView)).toHaveLength(1)
      })

      test('Should not render if marketsLoading', () => {
        const component = mountWithTheme(<MarketSelectorModal {...props} marketsLoading />)
        expect(component.find(SelectionView)).toHaveLength(0)
      })
    })

    describe('<LoadingIndicator />', () => {
      test('Should render if marketsLoading', () => {
        const component = mountWithTheme(<MarketSelectorModal {...props} marketsLoading />)
        expect(component.find(LoadingIndicator)).toHaveLength(1)
      })

      test('Should not render if !marketsLoading', () => {
        const component = mountWithTheme(<MarketSelectorModal {...props} marketsLoading={false} />)
        expect(component.find(LoadingIndicator)).toHaveLength(0)
      })
    })

    describe('<MarketEntries />', () => {
      test('Should render if !marketsLoading and nearbyMarkets.length > 1', () => {
        const component = mountWithTheme(
          <MarketSelectorModal {...props} marketsLoading={false} nearbyMarkets={[{ ...market }]} />,
        )
        expect(component.find(MarketEntries)).toHaveLength(1)
      })
      test('Should not render if marketsLoading', () => {
        const component = mountWithTheme(
          <MarketSelectorModal {...props} marketsLoading nearbyMarkets={[{ ...market }]} />,
        )
        expect(component.find(MarketEntries)).toHaveLength(0)
      })
    })
  })

  describe('SelectionView():', () => {
    const ssmProps: SelectionViewProps = {
      searchField: <input />,
      modalDescription: 'No results',
    }

    test('Should render without crashing', () => {
      const component = mountWithTheme(<SelectionView {...ssmProps} />)
      expect(component.find(SelectionView)).toHaveLength(1)
      expect(component.find('input')).toHaveLength(1)
    })
  })

  describe('MarketEntries():', () => {
    test('Should render without crashing', () => {
      const component = mountWithTheme(<MarketEntries {...props} />)
      expect(component).toHaveLength(1)
    })

    test('Should not render any MarketInfo if no nearbyMarkets', () => {
      const component = mountWithTheme(<MarketEntries {...props} />)
      expect(component.find(MarketInfo)).toHaveLength(0)
    })

    test('Should render MarketInfo if nearbyMarkets', () => {
      const component = mountWithTheme(<MarketEntries {...props} nearbyMarkets={[{ ...market }]} />)
      expect(component.find(MarketInfo)).toHaveLength(1)
    })
  })
})
