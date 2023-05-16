import { BadgeType } from '@/components/Atoms/Badge'
import { FeatureListProps } from '@/components/Molecules/FeatureList'

export interface Product {
  __typename?: string
  url: string
  author?: string
  featureLabel?: string
  eventDate?: string
  competencyLabel?: string
  embedVideoURL: string
  niceName?: string
  coverImage?: string
  embedded?: boolean
  creator?: string
  embedVideoLink?: string
  locked?: boolean
  providerId?: number
  screenshotOverride?: string
  name?: string
  typeId?: number
  duration: string
  durationType?: string
  published?: string
  sponsored?: boolean
  language?: string
  mainFeatures?: FeatureListProps[] | null
  id: number
  description: string
  title: string
  image: string
  badges?: (BadgeType | null)[] | null
  restriction?: string
  partOfSession?: string
  hasLiveChat?: boolean
  tileImageURL?: string
  to?: string
}

export interface ResponsiveImageProps {
  src: string
  srcSet?: string
}
