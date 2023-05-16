import React from 'react'
import { ErrorBox } from '@/components/Molecules/ErrorBox'
import { renderWithTheme } from '@/testRenderer'

describe('Loading Error', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <ErrorBox
        title="Oops, something went wrong"
        subtitle="Something went wrong. Please try again later."
        buttonLabel="Try again"
      />,
    )
    expect(tree).toMatchSnapshot()
  })
})
