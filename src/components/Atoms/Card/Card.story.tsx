import { boolean, optionsKnob as options, radios, select, text } from '@storybook/addon-knobs'
import { OptionsKnobOptions } from '@storybook/addon-knobs/dist/components/types'
import * as React from 'react'
import {
  Elevation,
  HorizontalMargin,
  HorizontalPadding,
  Margin,
  Padding,
  Position,
  VerticalMargin,
  VerticalMarginMap,
  VerticalPadding,
  VerticalPaddingMap,
} from '@/types/theme'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { BadgeActionType } from '../Badge/Badge.interface'
import { Heading } from '../Typography'
import { Card } from './CardV2'
import { CardDisplay, CardOverflow, CardProps, Corners, Shape, StyledCardProps, Surface } from './Card.interface'
import Readme from './Card.readme.mdx'

const customMargins: Margin = {
  bottom: 'xxs',
  left: 'sm',
  right: 'md',
  top: 'xl',
}

const responsiveMargins: VerticalMarginMap = {
  mobile: 'xs',
  tablet: 'md',
  desktop: 'xl',
}

const customPaddings: Padding = {
  bottom: 'xxs',
  left: 'sm',
  right: 'md',
  top: 'xl',
}

const responsivePaddings: VerticalPaddingMap = {
  mobile: 'xs',
  tablet: 'md',
  desktop: 'xl',
}

const borders: { [key: string]: Position } = {
  Bottom: 'bottom',
  Left: 'left',
  Right: 'right',
  Top: 'top',
}

const customShapes: Corners<Shape> = {
  bottomLeft: 'sharp',
  bottomRight: 'sharp',
  topLeft: 'rounded-small',
  topRight: 'rounded-small',
}

const shapes: Shape[] = ['rounded-big', 'rounded-small', 'sharp']

const surfaces: Surface[] = ['white', 'grey', 'black', 'primary', 'selected']

const elevations: Elevation[] = [0, 1, 2, 3, 4]

const paddings: VerticalPadding[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']
const margins: VerticalMargin[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']

const optionsObj: OptionsKnobOptions = {
  display: 'check',
}

const displays: CardDisplay[] = ['flex', 'block']

const actionTypes: { [key: string]: BadgeActionType } = {
  Prominent: 'prominent',
  Secondary: 'secondary',
}

const overflow: { [key: string]: CardOverflow | undefined } = {
  none: 'none',
  hidden: 'hidden',
  undefined: undefined,
}

const featuredProductImages = [
  { image: 'public/images/logos/flower-logoa.jpg' },
  { image: 'public/images/logos/tree-logoa.jpg' },
]

export default {
  title: 'Design System/Atoms/Card',
}

export const Default = () => {
  const knobs = {
    children: text('Content', 'Here stands the card content'),
    center: boolean('Center', false),
    elevation: select('Elevation', elevations, 0),
    elevationHover: select('Elevation on Hover', elevations, 1),
    overflow: select('Overflow', overflow, 'hidden'),
    padding: select('Padding', paddings, 'xxs'),
    margin: select('Margin', margins, 'xxs'),
    shape: select('Shape', shapes, 'rounded-big'),
    surface: select('Surface', surfaces, 'white'),
  }
  return <Card {...knobs} />
}

Default.story = {
  parameters: {
    info: Readme,
  },
}

export const CustomShape = () => {
  const knobs = {
    noBorder: options('Remove border', borders, [], optionsObj),
    children: text('Content', 'Here stands the card content'),
    elevation: select('Elevation', elevations, 0),
    elevationHover: select('Elevation on Hover', elevations, 0),
    padding: select('Padding', paddings, 'xxs'),
    shape: {
      bottomLeft: select('shape|bottomLeft', shapes, customShapes.bottomLeft),
      bottomRight: select('shape|bottomRight', shapes, customShapes.bottomRight),
      topLeft: select('shape|topLeft', shapes, customShapes.topLeft),
      topRight: select('shape|topRight', shapes, customShapes.topRight),
    },
    surface: select('Surface', surfaces, 'white'),
    display: select('Display', displays, 'block'),
  }
  return <Card {...knobs} />
}

CustomShape.story = {
  parameters: {
    info: Readme,
  },
}

export const CustomPadding = () => {
  const horizontalPaddings: HorizontalPadding[] = ['xs', 'sm', 'md', 'lg', 'xl']
  const knobs = {
    noBorder: options('Remove border', borders, [], optionsObj),
    children: text('Content', 'Here stands the card content'),
    elevation: select('Elevation', elevations, 1),
    elevationHover: select('Elevation on Hover', elevations, 2),
    shape: select('Shape', shapes, 'sharp'),
    surface: select('Surface', surfaces, 'white'),
    padding: {
      top: select('padding|paddingTop', paddings, customPaddings.top),
      bottom: select('padding|paddingBottom', paddings, customPaddings.bottom),
      left: select('padding|paddingLeft', horizontalPaddings, customPaddings.left),
      right: select('padding|paddingRight', horizontalPaddings, customPaddings.right),
    },
    display: select('Display', displays, 'block'),
  }
  return <Card {...{ ...knobs }} />
}

CustomPadding.story = {
  parameters: {
    info: Readme,
  },
}

export const ResponsivePadding = () => {
  const paddingOverrides: { [k: string]: HorizontalPadding | VerticalPadding | undefined } = {
    top: boolean('override top', false) ? select('padding top', paddings, customPaddings.top) : undefined,
    bottom: boolean('override bottom', false) ? select('padding bottom', paddings, customPaddings.bottom) : undefined,
  }

  const isLeftPadding = boolean('override left', false)
  if (isLeftPadding) {
    paddingOverrides.left = select('padding left', paddings, customPaddings.left)
  }

  const isRightPadding = boolean('override right', false)
  if (isRightPadding) {
    paddingOverrides.right = select('padding right', paddings, customPaddings.right)
  }

  const horizontalPaddings: HorizontalPadding[] = ['xs', 'sm', 'md', 'lg', 'xl']
  const knobs: CardProps = {
    children: 'Here stands the card content',
    elevation: 1,
    padding: {
      mobile: select('padding mobile', paddings, responsivePaddings.mobile),
      tablet: select('padding tablet', paddings, responsivePaddings.tablet),
      desktop: select('padding desktop', horizontalPaddings, responsivePaddings.desktop),
      ...paddingOverrides,
    },
  }
  return <Card {...{ ...knobs }} />
}

ResponsivePadding.story = {
  parameters: {
    info: Readme,
  },
}

export const CustomMargin = () => {
  const horizontalMargins: HorizontalMargin[] = ['xs', 'sm', 'md', 'lg', 'xl']
  const knobs = {
    noBorder: options('Remove border', borders, [], optionsObj),
    children: text('Content', 'Here stands the card content'),
    elevation: select('Elevation', elevations, 1),
    elevationHover: select('Elevation on Hover', elevations, 2),
    shape: select('Shape', shapes, 'sharp'),
    surface: select('Surface', surfaces, 'white'),
    padding: select('Padding', paddings, 'md'),
    margin: {
      top: select('margin|marginTop', margins, customMargins.top),
      bottom: select('margin|marginBottom', margins, customMargins.bottom),
      left: select('margin|marginLeft', horizontalMargins, customMargins.left),
      right: select('margin|marginRight', horizontalMargins, customMargins.right),
    },
    display: select('Display', displays, 'block'),
  }
  return <Card {...{ ...knobs }} />
}

CustomMargin.story = {
  parameters: {
    info: Readme,
  },
}

export const ResponsiveMargin = () => {
  const marginOverrides: { [k: string]: HorizontalMargin | VerticalMargin | undefined } = {
    top: boolean('override top', false) ? select('margin top', margins, customMargins.top) : undefined,
    bottom: boolean('override bottom', false) ? select('margin bottom', margins, customMargins.bottom) : undefined,
  }

  const isLeftMargin = boolean('override left', false)
  if (isLeftMargin) {
    marginOverrides.left = select('margin left', margins, customMargins.left)
  }

  const isRightMargin = boolean('override right', false)
  if (isRightMargin) {
    marginOverrides.right = select('margin right', margins, customMargins.right)
  }

  const horizontalMargins: HorizontalMargin[] = ['xs', 'sm', 'md', 'lg', 'xl']
  const knobs: CardProps = {
    children: 'Here stands the card content',
    elevation: 1,
    margin: {
      mobile: select('margin mobile', margins, responsiveMargins.mobile),
      tablet: select('margin tablet', margins, responsiveMargins.tablet),
      desktop: select('margin desktop', horizontalMargins, responsiveMargins.desktop),
      ...marginOverrides,
    },
  }
  return <Card {...{ ...knobs }} />
}

ResponsiveMargin.story = {
  parameters: {
    info: Readme,
  },
}

export const WithBadgesAndProductImages = () => {
  const badges = [
    { id: 1, name: 'Live' },
    { id: 1, name: 'Sponsored', badgeActionType: 'primary' },
  ]
  const withFeaturedProducts = boolean('With Featured Products', true)

  const knobs = (): StyledCardProps => {
    return {
      elevation: select('Elevation', elevations, 1),
      elevationHover: select('Elevation on Hover', elevations, 2),
      overflow: select('Overflow', overflow, 'hidden'),
      padding: 'lg',
      badgeActionType: radios('Type', actionTypes, actionTypes.Prominent),
      borderWidth: 0,
      children: (
        <Heading
          scale="level-1"
          tag="h1"
          color="primary"
          lineHeight="xl"
          fontFamily="featured"
          weight="regular"
          fontSize="xxl"
          spacing="base"
        >
          That&apos;s an awesome content!
        </Heading>
      ),
    }
  }
  const paddingForContent: Padding = {
    top: 'xl',
    bottom: 'xl',
    left: 'xl',
    right: 'xl',
  }

  return (
    <StorybookWrapper>
      <Card
        {...knobs()}
        badges={badges}
        padding={paddingForContent}
        featuredProductImages={withFeaturedProducts ? featuredProductImages : undefined}
      />
    </StorybookWrapper>
  )
}

WithBadgesAndProductImages.story = {
  name: 'With badges and product images',

  parameters: {
    info: Readme,
  },
}

export const Accessible = () => {
  const knobs = {
    children: text('Content', 'Here stands the card content'),
    center: boolean('Center', false),
    elevation: select('Elevation', elevations, 0),
    elevationHover: select('Elevation on Hover', elevations, 1),
    overflow: select('Overflow', overflow, 'hidden'),
    padding: select('Padding', paddings, 'xxs'),
    margin: select('Margin', margins, 'xxs'),
    shape: select('Shape', shapes, 'rounded-big'),
    surface: select('Surface', surfaces, 'white'),
  }
  // eslint-disable-line no-alert
  return <Card {...knobs} onClick={() => alert('CLICK')} ariaLabel="Click me..." />
}

Accessible.story = {
  parameters: {
    info: Readme,
  },
}
