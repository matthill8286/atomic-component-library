import { BadgeType } from '@/components/Atoms/Badge'
import {
  ProductTypeName,
  Skills,
  Interaction,
  Provider,
  Timebox,
  CollectionData,
} from '@/components/Organisms/ProductTile'
import { FeatureListProps } from '@/components/Molecules/FeatureList'

export type ProductType = { __typename: string; name: ProductTypeName; id: number }

export interface Product {
  numberOfProducts?: CollectionData['numberOfProducts']
  completionPercentage?: CollectionData['completionPercentage']
  totalProductDuration?: CollectionData['totalProductDuration']
  __typename?: string
  provider: Provider
  interaction: Interaction
  timebox?: Timebox
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
  type: ProductType
  typeId?: number
  duration: string
  durationType?: string
  published?: string
  sponsored?: boolean
  language?: string
  mainFeatures?: FeatureListProps[] | null
  competencies?: (Skills | null)[]
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
