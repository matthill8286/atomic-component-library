import { PictureProps } from '@/components/Atoms/Picture'

export interface LazyLoadImageProps extends PictureProps {
  lazyLoad?: boolean
  threshold?: number
  rootMargin?: string
  withLQIP?: boolean
  withNativeLoading?: boolean
  lowResSrc?: string
  lowResSrcSm?: string
  lowResSrcMd?: string
  lowResSrcLg?: string
  children?: React.ReactNode
}
