import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { newProductStructuredMocks } from '@/components/Organisms/ProductTile/elements/mockProduct'
import { OtherCalendar, OtherLiveLabel } from 'atomic-icon-library'
import { Tag } from '@/components/Atoms/Tag'
import { ProductSchedule } from './ProductSchedule'

describe('ProductSchedule', () => {
  it.skip('renders correct snapshot with product data', () => {
    const props = {
      timebox: {
        start: newProductStructuredMocks[0]?.timebox?.start,
        end: newProductStructuredMocks[0]?.timebox?.end,
      },
      color: 'white',
    }
    const wrapper = renderWithTheme(<ProductSchedule {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Displays the Calendar icon', () => {
    const props = {
      timebox: {
        start: '2022-07-04T10:10:30Z',
        end: '2023-10-04T10:10:30Z',
      },
      color: 'white',
    }
    const wrapper = mountWithTheme(<ProductSchedule {...props} />)
    expect(wrapper.find(OtherCalendar)).toHaveLength(1)
  })

  it('Displays the Calendar icon when product has no end time', () => {
    const props = {
      timebox: {
        start: '2022-07-04T10:10:30Z',
        end: null,
      },
      color: 'white',
    }
    const wrapper = mountWithTheme(<ProductSchedule {...props} />)
    expect(wrapper.find(OtherCalendar)).toHaveLength(1)
  })

  it('Displays the Tag component', () => {
    const props = {
      timebox: {
        start: '2022-07-04T10:10:30Z',
        end: '2023-10-04T10:10:30Z',
      },
      color: 'white',
    }
    const wrapper = mountWithTheme(<ProductSchedule {...props} />)
    expect(wrapper.find(Tag)).toHaveLength(1)
  })

  it('Displays the Live icon', () => {
    const props = {
      timebox: {
        start: '2021-07-04T10:10:30Z',
        end: '2023-10-04T10:10:30Z',
      },
      color: 'white',
    }
    const wrapper = mountWithTheme(<ProductSchedule {...props} />)
    expect(wrapper.find(OtherLiveLabel)).toHaveLength(1)
  })

  it('Displays the Live icon when product has no end time', () => {
    const props = {
      timebox: {
        start: '2021-07-04T10:10:30Z',
        end: null,
      },
      color: 'white',
    }
    const wrapper = mountWithTheme(<ProductSchedule {...props} />)
    expect(wrapper.find(OtherLiveLabel)).toHaveLength(1)
  })
})
