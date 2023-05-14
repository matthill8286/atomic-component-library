import * as React from 'react'
import { mountWithTheme } from '@/testRenderer'
import { ServiceEntry, ServicePrice, Services, StyledSkeleton } from './Services'
import { ServicesPriceProps, ServicesProps, ServiceType } from './Services.interface'
import { props as servicesProps } from './Services.mocks'

jest.mock('../../../utils/convertPrice')

const addMockMethods = (props: ServicesProps): ServicesProps => {
  return {
    ...props,
    onChange: jest.fn(),
    onIconModalOpen: jest.fn(),
  }
}

describe('<Services />', () => {
  let props: ServicesProps

  beforeEach(() => {
    props = addMockMethods(servicesProps)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('Renders without crashing', () => {
    const wrapper = mountWithTheme(<Services {...props} />)
    expect(wrapper).toHaveLength(1)
  })

  test('Renders a Skeleton if loading', () => {
    const wrapper = mountWithTheme(<Services {...props} loading />)

    expect(wrapper.find(StyledSkeleton)).toHaveLength(1)
    expect(wrapper.find(ServiceEntry)).toHaveLength(0)
    expect(wrapper.isEmptyRender()).toBe(false)
  })

  test('Renders null if no items', () => {
    const wrapper = mountWithTheme(<Services {...props} items={[]} />)
    expect(wrapper.isEmptyRender()).toBe(true)
  })

  test('Renders the correct number of items', () => {
    const wrapper = mountWithTheme(<Services {...props} />)

    expect(wrapper.find('StyledSkeleton')).toHaveLength(0)
    expect(wrapper.isEmptyRender()).toBe(false)
    expect(wrapper.find('ServiceEntry')).toHaveLength(props.items.length)
  })

  describe('<StyledSkeleton />', () => {
    test('Renders without crashing', () => {
      const wrapper = mountWithTheme(<StyledSkeleton />)
      expect(wrapper).toHaveLength(1)
    })
  })

  describe('<ServicePrice />', () => {
    let priceProps: ServicesPriceProps

    beforeEach(() => {
      priceProps = {
        amount: 1,
        currency: '',
        ...props.items[1].price,
        freeLabel: props.freeLabel,
      }
    })

    test('Renders without crashing', () => {
      const wrapper = mountWithTheme(<ServicePrice {...priceProps} />)
      expect(wrapper).toHaveLength(1)
    })
  })

  describe('<ServiceEntry />', () => {
    let entryProps: ServiceType

    beforeEach(() => {
      entryProps = {
        ...props.items[1],
      }
    })

    test('Renders without crashing', () => {
      const wrapper = mountWithTheme(<ServiceEntry {...props} item={entryProps} />)
      expect(wrapper).toHaveLength(1)
    })

    test('Adds a data-test attribute', () => {
      const wrapper = mountWithTheme(<ServiceEntry {...props} item={entryProps} />)
      expect(wrapper.find('[data-test="mms-services-entry"]')).toHaveLength(2)
    })

    test('Renders 1 ServicePrice', () => {
      const wrapper = mountWithTheme(<ServiceEntry {...props} item={entryProps} />)
      expect(wrapper.find('ServicePrice')).toHaveLength(1)
    })
  })
})
