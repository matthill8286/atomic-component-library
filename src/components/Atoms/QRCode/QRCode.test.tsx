import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { QRCodeGenerator } from './QRCode'
import { ErrorLevel, RenderAs } from './QRCode.interface'

describe('QRCode', () => {
  it('renders for the input with all attributes', () => {
    const tree = renderWithTheme(
      <QRCodeGenerator
        value="9802149999997839"
        renderAs={RenderAs.SVG}
        size={256}
        errorLevel={ErrorLevel.QUARTILE}
        includeMargin
      />,
    )
    expect(tree).toMatchSnapshot()
  })
})
