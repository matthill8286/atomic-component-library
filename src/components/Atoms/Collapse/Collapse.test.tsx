import React from 'react'
import { mountWithTheme } from '@/testRenderer'
import { Collapse } from './Collapse'

describe('<Collapse> Atom', () => {
  test('renders correct open state', () => {
    const wrapper = mountWithTheme(<Collapse isOpen>A label</Collapse>)
    expect(wrapper.find(Collapse).prop('isOpen')).toEqual(true)
  })

  test('renders correct collapsed state', () => {
    const wrapper = mountWithTheme(
      <Collapse isOpen={false} collapsedHeight={24}>
        A label
      </Collapse>,
    )
    expect(wrapper.find(Collapse).prop('isOpen')).toEqual(false)
    expect(wrapper.find(Collapse).prop('collapsedHeight')).toEqual(24)
  })
})
