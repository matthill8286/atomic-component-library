import { shallow } from 'enzyme'
import React from 'react'
import { ProductsTable } from '@/components/Organisms/ProductsTable'
import { tableContentDataMock, tableHeadingDataMock } from './ProductsTable.mock'
import { ProductsTableDesktop } from './ProductsTableDesktop'
import { ProductsTableMobile } from './ProductsTableMobile'

describe('<PDPSpecialTable />', () => {
  const props = {
    tableHeading: tableHeadingDataMock,
    tableContent: tableContentDataMock,
    a2cButtonText: 'In den Warenkorb',
    addToBasket: jest.fn(),
    getProductUrl: jest.fn(),
    getImageUrl: jest.fn(),
  }

  it('renders Desktop table', () => {
    const component = shallow(<ProductsTable {...props} />)
    const desktopTable = component.find(ProductsTableDesktop)
    expect(desktopTable).toHaveLength(1)
  })

  it('renders Mobile table', () => {
    Object.defineProperty(window, 'innerWidth', { value: 320 })
    const component = shallow(<ProductsTable {...props} />)
    const mobileTable = component.find(ProductsTableMobile)
    expect(mobileTable).toHaveLength(1)
    Object.defineProperty(window, 'innerWidth', { value: 1024 })
  })
})
