import React from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { EnergyEfficiencyInterface } from '@/types'
import { Section } from '@/components/Atoms/Section'
import { Price } from './Price'

type PriceSize = 'small' | 'large' | 'responsive'

const options: { [key: string]: PriceSize } = {
  Large: 'large',
  Small: 'small',
  Responsive: 'responsive',
}

const knobs = () => {
  return {
    withBranding: true,
    showLoyaltyText: boolean('With Loyalty Text', false),
    amount: text('Amount', '2299.95'),
    justify: select('justify', ['space-between', 'flex-start', 'flex-end'], 'flex-end'),
    size: select('Sizes', options, 'large'),
    shippingInfo: text('Shipping info', 'inkl. MwSt. zzgl. Versand'),
    prefix: text('Prefix', 'ab'),
  }
}

const strikePriceKnobs = (strikePricePrefix?: string) => {
  return {
    ...knobs(),
    strikePrice: text('Strike price amount', '1299.84'),
    strikePricePrefix: text('Strike price prefix', strikePricePrefix || 'UVP'),
    strikePriceRight: boolean('Strike price right', false), // todo refactor to allow only for unbranded
    unbrandedLayout: select('Layout (only if unbranded)', ['column', 'row'], 'row'),
  }
}

const basePriceKnobs = () => {
  return {
    ...knobs(),
    ...strikePriceKnobs(),
    basePrice: text('Base price', '(Preis pro Stück = € 52,99)'),
  }
}

const discountKnobs = () => {
  return {
    ...knobs(),
    ...strikePriceKnobs(),
    basePrice: text('Base price', '(Preis pro Stück = € 52,99)'),
    discountValue: text('Discount value', '-35%'),
  }
}

const colors = {
  A: 'rgb(0, 150, 64)',
  B: 'rgb(82,174,50)',
  C: 'rgb(200,212,0)',
  D: 'rgb(255,237,0)',
  E: 'rgb(251,186,0)',
  F: 'rgb(236,102,8)',
  G: 'rgb(227,6,19)',
}

const computeEnergyEfficiency = (eeClass, isLegacyEEL) => {
  return {
    class: eeClass,
    color: colors[eeClass],
    isLegacyEEL,
  }
}

const eelKnobs = () => {
  return {
    ...discountKnobs(),
    energyEfficiency: computeEnergyEfficiency('A', false) as EnergyEfficiencyInterface,
  }
}

const withSideInfo = () => {
  return {
    ...eelKnobs(),
    sideInfo: <div>{' Side Info'}</div>,
  }
}

const bgknob = () => {
  return {
    color: select('Background', { White: 'white', Primary: 'primary' }, 'white'),
  }
}

export default {
  title: 'Design System/Atoms/Price',
}

export const _Price = () => (
  <Section {...bgknob()} paddingTop={{ mobile: 'md' }} paddingBottom={{ mobile: 'md' }}>
    <Price {...knobs()} withBackground={bgknob().color !== 'white'} />
  </Section>
)

export const WithStrikePrice = () => (
  <Section {...bgknob()} paddingTop={{ mobile: 'md' }} paddingBottom={{ mobile: 'md' }}>
    <Price {...strikePriceKnobs()} withBackground={bgknob().color !== 'white'} />
  </Section>
)

WithStrikePrice.story = {
  name: 'With strike price',
}

export const WithStrikePriceAndTooltip = () => (
  <Section {...bgknob()} paddingTop={{ mobile: 'md' }} paddingBottom={{ mobile: 'md' }}>
    <Price {...strikePriceKnobs('lorem ipsum')} withBackground={bgknob().color !== 'white'} />
  </Section>
)

WithStrikePriceAndTooltip.story = {
  name: 'With strike price and tooltip',
}

export const WithBasePrice = () => (
  <Section {...bgknob()} paddingTop={{ mobile: 'md' }} paddingBottom={{ mobile: 'md' }}>
    <Price {...basePriceKnobs()} withBackground={bgknob().color !== 'white'} />
  </Section>
)

WithBasePrice.story = {
  name: 'With base price',
}

export const WithDiscount = () => (
  <Section {...bgknob()} paddingTop={{ mobile: 'md' }} paddingBottom={{ mobile: 'md' }}>
    <Price {...discountKnobs()} withBackground={bgknob().color !== 'white'} />
  </Section>
)

WithDiscount.story = {
  name: 'With discount',
}

export const WithDiscountLeftAligned = () => (
  <Section {...bgknob()} paddingTop={{ mobile: 'md' }} paddingBottom={{ mobile: 'md' }}>
    <Price {...discountKnobs()} justify={'flex-start'} withBackground={bgknob().color !== 'white'} />
  </Section>
)

WithDiscountLeftAligned.story = {
  name: 'With discount | left aligned',
}

export const WithEel = () => (
  <Section {...bgknob()} paddingTop={{ mobile: 'md' }} paddingBottom={{ mobile: 'md' }}>
    <Price {...eelKnobs()} justify="space-between" withBackground={bgknob().color !== 'white'} />
  </Section>
)

WithEel.story = {
  name: 'With eel',
}

export const WithEelWithSideInfo = () => (
  <Section {...bgknob()} paddingTop={{ mobile: 'md' }} paddingBottom={{ mobile: 'md' }}>
    <Price {...withSideInfo()} justify="space-between" withBackground={bgknob().color !== 'white'} />
  </Section>
)

WithEelWithSideInfo.story = {
  name: 'With eel with sideInfo',
}

export const UnbrandedPrice = () => (
  <Section {...bgknob()} paddingTop={{ mobile: 'md' }} paddingBottom={{ mobile: 'md' }}>
    <Price {...knobs()} withBranding={false} withBackground={bgknob().color !== 'white'} />
  </Section>
)

export const UnbrandedPriceWithDiscount = () => (
  <Section {...bgknob()} paddingTop={{ mobile: 'md' }} paddingBottom={{ mobile: 'md' }}>
    <Price
      {...discountKnobs()}
      withBranding={false}
      justify="space-between"
      withBackground={bgknob().color !== 'white'}
    />
  </Section>
)

UnbrandedPriceWithDiscount.story = {
  name: 'Unbranded Price - with discount',
}
