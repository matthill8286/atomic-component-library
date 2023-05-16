export type PictureObjectFit = 'none' | 'contain' | 'cover' | 'fill' | 'scale-down'

export interface PictureProps {
  width?: string
  height?: string
  src?: string | null
  srcLg?: string | null
  srcMd?: string | null
  srcSm?: string | null
  alt?: string | null
  objectFit?: PictureObjectFit
  rounded?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  disabled?: boolean
  loading?: NativeLazyLoadType
  children?: React.ReactNode
}

export enum NativeLazyLoadOptions {
  Eager = 'eager',
  Lazy = 'lazy',
}

export type NativeLazyLoadType = NativeLazyLoadOptions | undefined

export interface StyledPictureProps {
  width?: string
  height?: string
  imageMaxHeight?: string
  imageMaxWidth?: string
  objectFit?: PictureObjectFit
  rounded?: boolean
  disabled?: boolean
}
