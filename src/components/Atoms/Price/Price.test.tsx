import * as React from 'react'
import { render, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/sc-vars-default'
import { Price } from './Price'

describe('Price', () => {
  describe('with schema', () => {
    it('should render price field with <meta> tags', async () => {
      render(
        <ThemeProvider theme={defaultTheme}>
          <Price
            renderPriceSchema
            withBackground
            size="small"
            showLoyaltyText={false}
            justify="flex-end"
            amount="2299.95"
            withBranding={false}
          />
        </ThemeProvider>,
      )

      await waitFor(() => {
        expect(document.getElementsByTagName('meta')).toHaveLength(3)
      })
    })
  })

  describe('without Branding', () => {
    it('should render price field with decimal value', () => {
      const { getAllByText } = render(
        <ThemeProvider theme={defaultTheme}>
          <Price
            withBackground
            size="small"
            showLoyaltyText={false}
            justify="flex-end"
            amount="2299.95"
            withBranding={false}
          />
        </ThemeProvider>,
      )
      getAllByText('2299.')
      getAllByText('95')
    })

    it('should render price field with strike price', () => {
      const { getByText } = render(
        <ThemeProvider theme={defaultTheme}>
          <Price
            withBackground
            size="small"
            showLoyaltyText={false}
            justify="flex-end"
            amount="2299.95"
            withBranding={false}
            strikePrice="200"
          />
        </ThemeProvider>,
      )
      getByText(/200/)
    })
  })
  describe('with Branding', () => {
    it('should render price field with decimal value', () => {
      const { getAllByText } = render(
        <ThemeProvider theme={defaultTheme}>
          <Price withBackground size="small" showLoyaltyText={false} justify="flex-end" amount="2299.95" />
        </ThemeProvider>,
      )
      getAllByText('2299.')
      getAllByText('95')
    })
    it('should render price with loyality text', () => {
      const { getAllByText } = render(
        <ThemeProvider theme={defaultTheme}>
          <Price withBackground size="small" showLoyaltyText justify="flex-end" amount="2299.95" withBranding />
        </ThemeProvider>,
      )
      getAllByText('2299.')
      getAllByText('95')
    })

    it('should render price with side info node', () => {
      const { getByText } = render(
        <ThemeProvider theme={defaultTheme}>
          <Price
            withBackground
            size="small"
            showLoyaltyText={false}
            justify="flex-end"
            amount="2299.95"
            withBranding
            sideInfo={<div>{' Side Info'}</div>}
          />
        </ThemeProvider>,
      )
      getByText('Side Info')
    })

    it('should render price with prefix', () => {
      const { getByText } = render(
        <ThemeProvider theme={defaultTheme}>
          <Price
            withBackground
            size="small"
            showLoyaltyText={false}
            justify="flex-end"
            amount="2299.95"
            withBranding
            prefix="from"
          />
        </ThemeProvider>,
      )
      getByText(/from/)
    })

    it('should render price with base price & shipping info', () => {
      const { getByText } = render(
        <ThemeProvider theme={defaultTheme}>
          <Price
            withBackground
            size="small"
            showLoyaltyText={false}
            justify="flex-end"
            amount="2299.95"
            withBranding
            basePrice="(Price per Item = € 52,99)"
            shippingInfo="(Shipping info)"
          />
        </ThemeProvider>,
      )
      getByText(/(Price per Item = € 52,99)/)
      getByText(/Shipping info/)
    })
  })
})
