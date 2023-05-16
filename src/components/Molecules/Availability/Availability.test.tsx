import * as React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Availability } from './Availability'
import { ProductAvailabilityState } from '@/types'

describe('Availability', () => {
  const statusContent = 'Available'
  // disabled tests due to failing deployment build
  xit('Should render status time cluster', () => {
    const tree = renderWithTheme(
      <Availability state={ProductAvailabilityState.TIME_CLUSTER}>{statusContent}</Availability>,
    )
    expect(tree).toMatchSnapshot()
  })
  xit('Should render price', () => {
    const tree = renderWithTheme(<Availability price="100">{statusContent}</Availability>)
    expect(tree).toMatchSnapshot()
  })
  xit('Should render subtext', () => {
    const tree = renderWithTheme(
      <Availability subtext="Calculated with Standard Delivery">{statusContent}</Availability>,
    )
    expect(tree).toMatchSnapshot()
  })
  xit('Should render text', () => {
    const tree = renderWithTheme(
      <Availability text="Delivery to your address in 1-3 working days">{statusContent}</Availability>,
    )
    expect(tree).toMatchSnapshot()
  })
})
