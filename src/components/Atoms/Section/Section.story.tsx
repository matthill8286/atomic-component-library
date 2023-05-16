import { select } from '@storybook/addon-knobs'
import { defaultTheme } from '@/styles/sc-vars-default'
import { ThemeColors, VerticalPaddingMap } from '@/types/theme'
import { Section } from './Section'

const options = Object.keys(defaultTheme.color) as ThemeColors[]

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

export default {
  title: 'Design System/Atoms/Section',
}

export const Default = () => {
  return (
    <Section paddingTop={top} paddingBottom={bottom} {...knobs()}>
      Test
    </Section>
  )
}

export const FixedHeight = () => {
  return (
    <Section paddingTop={top} paddingBottom={bottom} height={height} {...knobs()}>
      Test
    </Section>
  )
}

export const WithImage = () => {
  return (
    <Section paddingTop={top} image={bgImage} paddingBottom={bottom} height={height} {...knobs()}>
      Test
    </Section>
  )
}

WithImage.story = {
  name: 'with Image',
}
