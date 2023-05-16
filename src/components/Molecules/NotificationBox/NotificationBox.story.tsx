import { action } from '@storybook/addon-actions'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ButtonActionType } from '@/components/Atoms/Button'
import { NotificationBox } from './NotificationBox'
import {
  AnimationType,
  ArrowPosition,
  ButtonLayout,
  NotificationBoxProps,
  NotificationBoxType,
  NotificationButton,
  NotificationContentSort,
  TooltipData,
} from './NotificationBox.interface'

const animation: AnimationType[] = ['fadeIn', 'fadeOut', 'shake']
const arrowPosition: ArrowPosition[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
const types: NotificationBoxType[] = ['alert', 'error', 'info', 'success', 'hot']
const buttonLayout: ButtonLayout[] = ['column', 'row']
const actionButtonTypes: ButtonActionType[] = ['ghost', 'primary', 'prominent', 'secondary', 'inverted', 'outlined']

const knobs = (): NotificationBoxProps => {
  return {
    body: text(
      'Body',
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
    ),
    hasTitleIcon: boolean('Icon', true),
    isClosable: boolean('Closable', true),
    title: text('Title', 'This is the result of your last action!'),
    type: select('Type', types, types[1]),
    animation: select('Animation', animation, undefined),
    buttonLayout: select('Button Layout', buttonLayout, buttonLayout[0]),
  }
}
const buttonKnobs = (): NotificationButton =>
  ({
    actionBtnLabel: text('Button Label', 'Lets do it...'),
    onClick: action('click'),
  } as NotificationButton)

const tooltipKnobs = (): TooltipData => {
  return {
    arrowleft: number('Arrow left', 0),
    arrowPosition: select('Arrow Position', arrowPosition, arrowPosition[0]),
    left: number('Left', 40),
    top: number('Top', 40),
  }
}

export default {
  title: 'Design System/Molecules/Notification Box',
}

export const Default = () => <NotificationBox {...knobs()} buttons={[{ ...buttonKnobs() }]} />
export const DefaultNoButton = () => <NotificationBox {...knobs()} />

DefaultNoButton.story = {
  name: 'Default, no button',
}

export const TitleOnly = () => <NotificationBox {...knobs()} body="" isClosable={false} />

TitleOnly.story = {
  name: 'Title only',
}

export const BodyOnly = () => <NotificationBox {...knobs()} title="" isClosable={false} />

BodyOnly.story = {
  name: 'Body only',
}

export const TitleAndButton = () => (
  <NotificationBox {...knobs()} buttons={[{ actionBtnLabel: 'Self Destruct', onClick: action('onClick') }]} body="" />
)

TitleAndButton.story = {
  name: 'Title and button',
}

export const AsToolTip = () => (
  <NotificationBox
    {...knobs()}
    buttons={[{ actionBtnLabel: 'Self Destruct', onClick: action('onClick') }]}
    body=""
    tooltip={{ ...tooltipKnobs() }}
  />
)

AsToolTip.story = {
  name: 'As ToolTip',
}

export const WithTwoButtons = () => (
  <NotificationBox
    {...knobs()}
    buttons={[
      {
        actionBtnLabel: 'Button One',
        actionType: select('Button Type #1', actionButtonTypes, 'secondary'),
        onClick: action('onClick'),
      },
      {
        actionBtnLabel: 'Button Two',
        actionType: select('Button Type #2', actionButtonTypes, 'primary'),
        href: 'https://www.mediamarkt.de',
        target: '_blank',
      },
    ]}
    tooltip={{ ...tooltipKnobs() }}
  />
)

WithTwoButtons.story = {
  name: 'With two buttons',
}

export const WithLinks = () => (
  <BrowserRouter>
    <NotificationBox
      {...knobs()}
      links={[
        { label: 'Link One', to: 'https://mediamarkt.com/' },
        { label: 'Link Two', onClick: () => {} },
      ]}
      tooltip={{ ...tooltipKnobs() }}
    />
  </BrowserRouter>
)

WithLinks.story = {
  name: 'With links',
}

export const WithLinksAndButtons = () => (
  <BrowserRouter>
    <NotificationBox
      {...knobs()}
      buttons={[
        {
          actionBtnLabel: 'Button',
          actionType: select('Button Type #1', actionButtonTypes, 'secondary'),
          onClick: action('onClick'),
        },
      ]}
      links={[
        {
          label: 'Link',
          to: 'https://mediamarkt.com/',
          target: '_blank',
          decorationColor: 'primary',
          bold: true,
          iconLeft: null,
          inline: false,
          fontSize: 'sm',
        },
      ]}
      sort={select(
        'Sort',
        [NotificationContentSort.LinksButtons, NotificationContentSort.ButtonsLinks],
        NotificationContentSort.ButtonsLinks,
      )}
      alignLinks="center"
      tooltip={{ ...tooltipKnobs() }}
    />
  </BrowserRouter>
)

WithLinksAndButtons.story = {
  name: 'With links and buttons',
}
