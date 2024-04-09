import * as React from 'react'
import { TabItem } from '@/components/Molecules/TabBar/TabItem'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { SiteMenu } from './SiteMenu'
import { SiteMenuItems } from './SiteMenu.mock'

describe('SiteMenu', () => {
  it('matches snapshot', () => {
    const tree = renderWithTheme(<SiteMenu menuItems={SiteMenuItems} />)
    expect(tree).toMatchSnapshot()
  })
  it('renders correct', () => {
    const comp = mountWithTheme(<SiteMenu menuItems={SiteMenuItems} />)
    const rows = comp.find(TabItem)
    expect(rows).toHaveLength(SiteMenuItems.length)
    expect(comp).toMatchSnapshot()
  })

  it('renders nothing when undefined', () => {
    const comp = mountWithTheme(<SiteMenu menuItems={undefined} />)
    const menu = comp.find(SiteMenu)
    expect(menu.children().exists()).toBeFalsy()
    expect(comp).toMatchSnapshot()
  })

  it('renders nothing when empty features', () => {
    const comp = mountWithTheme(<SiteMenu menuItems={[]} />)
    const menu = comp.find(SiteMenu)
    expect(menu.children().exists()).toBeFalsy()
    expect(comp).toMatchSnapshot()
  })
})
