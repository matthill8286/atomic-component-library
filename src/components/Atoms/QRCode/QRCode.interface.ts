import { saiyanTheme } from '@/styles/sc-vars-saiyan'

export type ThemeColors = keyof typeof saiyanTheme.color & string

export enum RenderAs {
  CANVAS = 'canvas',
  SVG = 'svg',
}

/** QR code error correction levels */
export enum ErrorLevel {
  /** L - 7% of codewords can be restored */
  LOW = 'L',
  /** M - 15% of codewords can be restored */
  MEDIUM = 'M',
  /** Q - 25% of codewords can be restored */
  QUARTILE = 'Q',
  /** H - 35% of codewords can be restored */
  HIGH = 'H',
}

export interface QRCodeProps {
  value: string
  renderAs?: RenderAs
  size?: number
  errorLevel?: ErrorLevel
  includeMargin?: boolean
}
