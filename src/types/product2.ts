import { BadgeType } from '@/components/Atoms/Badge/Badge.interface'
import { BreadcrumbPath } from '@/components/Molecules/Breadcrumb/Breadcrumb.interface'
import { Feature } from '@/components/Molecules/FeatureList/FeatureList.interface'

export type OfferType = 'warranty' | 'service'

export interface Asset {
  usageType?: string
  metadata?: string
  link?: string
  pixelboxxId?: string
  sortOrder?: number
}

export interface Ratings {
  ratingSummary?: {
    ratingCount: number
    ratingAverage: number
  }
}

interface Product2TileEnergyEfficiencyLabel {
  mediaType: string | null
  resource: string | null
}

export interface EnergyEfficiencyInterface {
  class: any
  color?: string
  dataSheet?: Product2TileEnergyEfficiencyLabel | null
  label?: Product2TileEnergyEfficiencyLabel | null
  isLegacyEEL: boolean | null
}

export interface Promotion extends BadgeType {
  id: string
  code?: string
  type?: string
  message: string
}

export interface AvailabilityInterface {
  shipping?: {
    shippingCosts: string
    shippingCostsLabel: string
  } | null
  deliveryInformation?: string | null
  outletId?: string | null
  type?: string | null
  cluster?: string | null
  deliverMinTime?: number | null
  deliverMaxTime?: number | null
  // eslint-disable-next-line camelcase
  min_time?: number
  // eslint-disable-next-line camelcase
  max_time?: number
  // eslint-disable-next-line camelcase
  outlet_id?: string
  // eslint-disable-next-line camelcase
  store_name?: string
  storeName?: string | null
  quantity?: number | null
}

export interface ShippingCostProps {
  cost: string
  label: string
  freeShipping?: boolean
}
export interface BasePriceProps {
  calculationFactor: number
  info: string
}

export interface Promotions {
  id: string
  effect: string | null
}

export interface PricePromotions {
  promotions: Promotions[]
  price: number
  segment: string | null
}

export interface PriceType {
  currency?: string
  sign?: string | null
  price: number | string
  strikePrice: string | false
  unitPrice?: string | null
  strikePriceType: string | null
  strikePriceLabel: string | null // @TODO: [SAB-3683] change strikePriceLabel to strikePricePrefix
  strikePriceTooltip?: string
  promotions?: PricePromotions[] | null
}

export interface PriceAvailability {
  price: PriceType
  online: AvailabilityInterface
  market: AvailabilityInterface
}

export interface FeatureInterface extends Feature {
  sortOrder?: number
  unit?: string | null
  carID?: string | null
}

export enum AvailabilityTypeEnum {
  IN_WAREHOUSE = 'IN_WAREHOUSE',
  IN_STORE = 'IN_STORE',
  LONG_TAIL = 'LONG_TAIL',
  NONE = 'NONE',
}

// Todo: get from generate gql schema
interface AvailabilityObject {
  availabilityType: AvailabilityTypeEnum
  quantity: number
  earliest: Date
  latest: Date
}

interface Availability {
  delivery: AvailabilityObject
  pickup?: AvailabilityObject
}

export interface ResponsiveImageProps2 {
  src: string
  srcSet?: string
}

export interface Product2 {
  title: string
  articleId?: string
  description?: string
  ean?: string
  url?: string
  tax?: number
  energyEfficiency?: EnergyEfficiencyInterface
  assets: Asset[]
  promotions: Promotion[]
  manufacturer?: string
  mainFeatures: FeatureInterface[]
  productImage?: string
  manufacturerImage?: string
  featureAssetImage?: ResponsiveImageProps2
  ratings?: Ratings
  price?: PriceAvailability | null
  seoUrl?: string
  isBlacklisted?: boolean
  breadcrumbs?: BreadcrumbPath[]
  onlineReleasedAt?: Date
  availability?: Availability
  shipping?: ShippingCostProps | null
  showPriceLoyaltyText?: boolean
  badges?: BadgeType[]
}
