import { action } from '@storybook/addon-actions'
import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Button } from '@/components/Atoms/Button'
import { Heading } from '@/components/Atoms/Typography'
import { SiteMenu } from './SiteMenu'
import { SiteMenuItems } from './SiteMenu.mock'

const containerCSS = {
  height: '80vh',
  backgroundColor: 'silver',
  marginBottom: 30,
}

const itemIds = SiteMenuItems.map((i) => i.itemId)

storiesOf('Design System/Organisms/SiteMenu', module)
  .add('Default', () => (
    <>
      <SiteMenu
        menuItems={SiteMenuItems}
        surfaceColor="white"
        scrollOffset={number('Scroll Offset', 140)}
        onTracking={action('tracking')}
        activeItemId={select('Active Item', ['None', ...itemIds], 'None')}
      />
      {SiteMenuItems.map((item, index) => (
        <div id={item.itemId} style={containerCSS} key={item.title + index}>
          <Heading scale="level-1" margin="sm xs">
            {item.title}
          </Heading>
        </div>
      ))}
    </>
  ))

  .add('Active Item', () => (
    <>
      <SiteMenu
        menuItems={SiteMenuItems}
        scrollOffset={140}
        surfaceColor="white"
        onTracking={action('tracking')}
        activeItemId="ratings"
      />
      {SiteMenuItems.map((item, index) => (
        <div id={item.itemId} style={containerCSS} key={item.title + index}>
          <Heading scale="level-1" margin="sm xs">
            {item.title}
          </Heading>
        </div>
      ))}
    </>
  ))

  .add('With Child Element', () => (
    <>
      <SiteMenu
        menuItems={SiteMenuItems}
        scrollOffset={140}
        surfaceColor="white"
        onTracking={action('tracking')}
        activeItemId="ratings"
      >
        <Button style={{ alignSelf: 'center', whiteSpace: 'nowrap' }} size="sm">
          I do things
        </Button>
      </SiteMenu>
      {SiteMenuItems.map((item, index) => (
        <div id={item.itemId} style={containerCSS} key={item.title + index}>
          <Heading scale="level-1" margin="sm xs">
            {item.title}
          </Heading>
        </div>
      ))}
    </>
  ))
