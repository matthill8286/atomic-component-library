import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { saiyanTheme } from '@/styles/sc-vars-saiyan'
import { ThemeColors, VerticalPaddingMap } from '@/types/theme'
import { Section } from './Section'

const options = Object.keys(saiyanTheme.color) as ThemeColors[]

const knobs = (): { color: ThemeColors } => {
  return {
    color: select<ThemeColors>('Colors', options, 'primary'),
  }
}

const top: VerticalPaddingMap = {
  tablet: 'xs',
  desktop: 'md',
}

const bottom: VerticalPaddingMap = {
  mobile: 'lg',
  tablet: 'xl',
}

const height = {
  mobile: 350,
  tablet: 100,
  desktop: 400,
}

const bgImage = {
  mobile: '/public/images/featured_backgrounds/03.jpg',
  tablet: '/public/images/featured_backgrounds/01.jpg',
}

storiesOf('Design System/Atoms/Section', module)
  .add('Default', () => {
    return (
      <Section paddingTop={top} paddingBottom={bottom} {...knobs()}>
        Test
      </Section>
    )
  })
  .add('Fixed Height', () => {
    return (
      <Section paddingTop={top} paddingBottom={bottom} height={height} {...knobs()}>
        Test
      </Section>
    )
  })
  .add('with Image', () => {
    return (
      <Section paddingTop={top} image={bgImage} paddingBottom={bottom} height={height} {...knobs()}>
        Test
      </Section>
    )
  })
