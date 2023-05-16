import Slider, { Settings } from 'react-slick'

import { Product, ThemeColors } from '@/types'
import { BadgeType } from '@/components/Atoms/Badge'

export interface SliderItemProps {
  headline?: string
  usageType?: string
  link?: string | null
  metadata?: string | null
  productID?: string
  sortOrder?: number
  title?: string
  url?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Item = SliderItemProps | Product | any
export interface CarouselSettings extends Settings {
  key?: string
}

export interface CarouselProps {
  sliderSettings: CarouselSettings
  items: Item[]
  badges?: BadgeType[]
  whiteDots?: boolean
  brightArrows?: boolean
  boxShadow?: boolean
  hasOverflow?: boolean
  fixedWidth?: boolean
  tileWidth?: number
  hasPadding?: boolean
  renderSlide(entry: Item, index: number): JSX.Element | null
  className?: string
  carouselRef?: (e: Slider) => void
  arrowsSurfaceColor?: ThemeColors
}

export interface StyledArrowProps {
  showArrows: boolean
}
