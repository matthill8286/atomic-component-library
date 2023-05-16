import QRCode from 'qrcode.react'
import * as React from 'react'
import { ThemeColors } from '@/types/theme'
import { ErrorLevel, QRCodeProps, RenderAs } from './QRCode.interface'

const bgColor: ThemeColors = 'white'
const fgColor: ThemeColors = 'black'

export const QRCodeGenerator: React.FC<QRCodeProps> = ({
  value,
  renderAs = RenderAs.SVG,
  size = 128,
  errorLevel = ErrorLevel.LOW,
  includeMargin = false,
}) => {
  return (
    <QRCode
      value={value}
      renderAs={renderAs}
      size={size}
      bgColor={bgColor}
      fgColor={fgColor}
      level={errorLevel}
      includeMargin={includeMargin}
    />
  )
}
