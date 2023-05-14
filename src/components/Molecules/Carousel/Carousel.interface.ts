import { Settings } from 'react-slick'
import { BadgeType } from '@/components/Atoms/Badge/Badge.interface'
import { Product } from '@/types/product'

interface SliderItem {
  headline?: string
  usageType?: string
  videoID?: string
  link?: string | null
  metadata?: string | null
  productID?: string
  sortOrder?: number
  url?: string
}

type Item = SliderItem | Product

export interface CarouselProps {
  className?: string
  sliderSettings: Settings
  items: Item[]
  badges?: BadgeType[]
  whiteDots?: boolean
  hasThumbnails?: boolean
  boxShadow?: boolean
  hasOverflow?: boolean
  hasPadding?: boolean
  fullHeight?: boolean
  renderSlide(entry: Item, index: number, isThumbnails?: boolean): React.ReactNode
}
