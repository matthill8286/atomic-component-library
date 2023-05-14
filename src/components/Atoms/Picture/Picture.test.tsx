import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Picture } from './Picture'

const IMAGE_URL =
  'https://learn.saiyan.com/hubfs/magpie%20client%20images%20and%20files/Procter%20and%20Gamble/instead%20of%20coming%20soon.png'

describe('Picture', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Picture src={IMAGE_URL} alt="Lorem ipsum" />)
    expect(tree).toMatchSnapshot()
  })
})
