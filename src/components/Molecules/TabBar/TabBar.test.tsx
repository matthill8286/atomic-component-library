import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { TabBar } from './TabBar'
import { Tab } from './TabBar.interface'
import { TabItem } from './TabItem'

export const tabs: Tab[] = [
  { id: 'tab1', label: 'Preferences' },
  { id: 'tab2', label: 'Goals' },
  { id: 'tab3', label: 'Photo' },
  { id: 'tab4', label: 'Label 4' },
]

describe('TabBar', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<TabBar tabGroupName="first" tabs={tabs} />)
    expect(tree).toMatchSnapshot()
  })

  it('render 4 tabs', () => {
    const component = mountWithTheme(<TabBar tabGroupName="first" tabs={tabs} />)
    const selected = component.find(TabItem)
    expect(selected).toHaveLength(4)
  })

  it('render with a selected tab', () => {
    const tree = renderWithTheme(<TabBar tabGroupName="first" tabs={tabs} selected="tab1" />)
    expect(tree).toMatchSnapshot()
  })

  it('triggers onChange event', () => {
    // scrollIntoView is not implemented in jsdom
    window.HTMLElement.prototype.scrollIntoView = jest.fn()

    const onChange = jest.fn()
    const comp = mountWithTheme(<TabBar tabGroupName="first" tabs={tabs} onChange={onChange} />)
    const first = comp.find(TabItem).first()
    first.simulate('click')
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('should not trigger onChange event when user clicks a disabled Tag', () => {
    // scrollIntoView is not implemented in jsdom
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
    const twoTabs: Tab[] = [
      { id: 'tab1', label: 'Preferences', isDisabled: true },
      { id: 'tab2', label: 'Goals' },
    ]

    const onChange = jest.fn()
    const comp = mountWithTheme(<TabBar tabGroupName="first" tabs={twoTabs} onChange={onChange} />)
    const first = comp.find(TabItem).first()
    first.simulate('click')
    expect(onChange).toHaveBeenCalledTimes(0)
  })
})

describe('TabItem', () => {
  it('renders basic', () => {
    const comp = renderWithTheme(<TabItem id="1" label="Preferences" tabGroupName="first" onClick={jest.fn()} />)
    expect(comp).toMatchSnapshot()
  })

  it('render the label', () => {
    const comp = mountWithTheme(<TabItem id="1" label="Preferences" tabGroupName="first" onClick={jest.fn()} />)
    expect(comp.text()).toEqual('Preferences')
  })

  it('render with a selected tab', () => {
    const comp = renderWithTheme(
      <TabItem id="1" label="Preferences" tabGroupName="first" onClick={jest.fn()} isSelected />,
    )
    expect(comp).toMatchSnapshot()
  })

  it('render with a disabled tab', () => {
    const onClick = jest.fn()
    const comp = mountWithTheme(
      <TabItem id="1" label="Preferences" tabGroupName="first" onClick={onClick} isDisabled />,
    )
    expect(comp).toMatchSnapshot()
    comp.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(0)
  })

  it('triggers onClick event', () => {
    const onClick = jest.fn()
    const comp = mountWithTheme(<TabItem id="1" label="Preferences" tabGroupName="first" onClick={onClick} />)
    comp.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
