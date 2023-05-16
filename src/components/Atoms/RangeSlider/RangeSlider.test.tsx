import React from 'react'
import { shallow } from 'enzyme'
import { RangeSlider } from './RangeSlider'
import { RangeSliderProps } from './RangeSlider.interface'

describe('RangeSlider', () => {
  const props: RangeSliderProps = {
    className: '',
    margin: '',
    padding: '',
    buttonsElevation: 0,
    min: 0,
    max: 0,
    values: [],
    errorMessage: 'oh oh',
    unit: '',
    unitMasked: '$',
    onChange: () => {},
  }

  it('renders correctly', () => {
    const wrapper = shallow(<RangeSlider {...props} />)
    expect(wrapper).toBeDefined()
  })
})
