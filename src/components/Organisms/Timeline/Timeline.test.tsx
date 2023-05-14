import * as React from 'react'
import { shallow } from 'enzyme'

import { Timeline } from './index'
import { props } from './Timeline.mocks'
import { StyledHeading, StyledItem, StyledIconTextWrapper, StyledItemHeading, StyledCopyText } from './Timeline.styled'

describe('<Timeline />', () => {
  test('Should render without crashing', () => {
    const wrapper = shallow(<Timeline {...props} />)
    expect(wrapper).toBeDefined()
    expect(wrapper).toHaveLength(1)
  })

  test('Should NOT render a Heading if !props.headline', () => {
    const wrapper = shallow(<Timeline {...props} headline={undefined} />)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(StyledHeading)).toHaveLength(0)
  })

  test('Should render a Heading if props.headline', () => {
    const wrapper = shallow(<Timeline {...props} />)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(StyledHeading)).toHaveLength(1)
  })

  test('Should render the correct number of items', () => {
    const wrapper = shallow(<Timeline {...props} />)
    expect(wrapper.find(StyledItem)).toHaveLength(props.items.length)
  })

  test('Items contain the correct content', () => {
    const wrapper = shallow(<Timeline {...props} />)
    const item = wrapper.find(StyledItem).first()
    expect(item).toHaveLength(1)
    expect(item.find(StyledIconTextWrapper)).toHaveLength(1)
    expect(item.find(StyledItemHeading)).toHaveLength(1)
    expect(item.find(StyledCopyText)).toHaveLength(1)
  })
})
