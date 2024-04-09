import { FC, ReactElement, ReactNode, MouseEvent } from 'react'
import { BadgeActionType, BadgeType } from '@/components/Atoms/Badge'
import { Product, Elevation, ThemeColors, ThemeFontSizes } from '@/types'
import { Feature, FeatureListItemProps } from '@/components/Molecules/FeatureList'
import { FlexAlignItemsOptions } from '@/components/Helper'
import { CardNoBorder } from '@/components/Atoms/Card'

export enum ProductTileLayout {
  auto = 'auto',
  listItem = 'listItem',
  gridItem = 'gridItem',
  compact = 'compact',
}

/** ProductTileOrientation `landscape | portrait` use portrait on mobile and landscape on desktop */
export type ProductTileOrientation = 'landscape' | 'portrait' | undefined

/** ProductTileSize  use small on mobile and large on desktop */
export type ProductTileSize = 'auto' | 'large' | 'small'

export type ProductView = 'list' | 'collection' | 'compact' | 'sponsored' | 'disabled'

export type playlistView = 'list' | 'collection' | 'disabled'

export enum ProductStrategy {
  structured = '1',
  timebox = '2',
  none = 'none',
}

export interface SponsoringDetails {
  isSponsored: boolean
  showUppercase: boolean
  label: string
  infoText: string
  title: string
}

export interface CollectionData extends Partial<Product> {
  totalProductDuration: number | undefined
  completionPercentage: number | undefined
  numberOfProducts: number | undefined
  title: string
  pid?: string | undefined
}

export interface ProductTileProps {
  /**  image padding for product images */
  badgeActionType?: BadgeActionType
  badges?: (BadgeType | null)[]
  borderColor?: ThemeColors
  fullHeight?: boolean
  isCompact?: boolean
  expanded?: boolean
  isOpenProduct?: boolean
  eventDate?: string
  isCollection?: boolean
  placeCard?: boolean
  productIndex?: number
  collectionData?: CollectionData
  productSponsoring?: SponsoringDetails | undefined
  productView?: ProductView
  headerFontSize?: string
  strategyType?: ProductStrategy | undefined
  color?: ThemeColors
  elevation?: Elevation
  iconsRight?: boolean
  inView?: boolean
  elevationHover?: Elevation
  noBorder?: CardNoBorder
  headlineLimitLines?: number
  limitContentLines?: number
  roundImages?: boolean
  icon?: ReactElement
  lazyloadLowQuality?: boolean
  orientation?: ProductTileOrientation
  competencyLabel?: string
  size?: ProductTileSize
  fontSize?: ThemeFontSizes
  mainLink?: any
  isDisabled?: boolean
  isMobileView?: boolean
  layout?: ProductTileLayout
  lazyLoad?: boolean
  loading?: boolean
  loadingOperation?: boolean
  locked?: boolean
  showBadges?: boolean
  showLock?: boolean
  showBookmark?: boolean
  showProvider?: boolean
  showFeatured?: boolean
  showLikes?: boolean
  showInteractions?: boolean
  showOptions?: boolean
  showSkills?: boolean
  showImage?: boolean
  showComplete?: boolean
  showProductMeta?: boolean
  showMoreText?: string
  showLessText?: string
  showMoreNumOfLines?: number
  showMoreAlignment?: FlexAlignItemsOptions
  fadeOutColor?: string
  videoFallbackImage?: string
  renderAddToBookmarkButton?: (ProductForBookmarking: {
    id?: number | undefined
    bookmarked?: boolean
    title?: string
    provider?: Provider | undefined
    duration?: string | undefined
    type?: ProductTypeName
    completed?: any
    productIndex?: number
    playlistId?: string | undefined
  }) => JSX.Element | ReactNode
  onHeadingClick?: (e: MouseEvent<HTMLDivElement>) => void
  onOptionsClick?: (e: MouseEvent<HTMLDivElement>) => void
  onClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void
  onPictureClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void
  onLockClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void | undefined
  onCompleteClick?: ((ev: MouseEvent<HTMLElement, MouseEvent>) => void) | undefined
  product: Product | Partial<Product>
  sponsoringDetails?: SponsoringDetails
  withEllipsis?: boolean
  withLQIP?: boolean
  withNativeLoading?: boolean
  children?: ReactNode
}

export interface StyledResponsiveContainerProps {
  orientation: ProductTileOrientation
  loading?: boolean
  isSmall?: boolean
}
export interface StyledDivider {
  height?: string
}

export interface StyledTileProps {
  orientation: ProductTileOrientation
}

export interface ContentTextProps {
  contentText?: string
  loading: boolean
  isDisabled?: boolean
  limitContentLines?: number
}

export interface TileSettings {
  showProductMeta?: boolean
  sponsoringDetails?: undefined
  showLock?: boolean
  showSkills?: boolean
  withEllipsis: boolean
  headlineLimitLines: number
  fontSize?: string
  loading: boolean | undefined
  showBookmark?: boolean | undefined
  showFeatured?: boolean | undefined
}

export interface MediaProps {
  ProductMediaWrapper: FC<any>
  children?: ReactNode
  isCompact?: boolean
  lazyLoad?: boolean
  loading?: boolean
  maxWidth?: string
  minWidth?: string
  minHeight?: string
  height?: string
  width?: string
  hasBottomMargin?: boolean
  hasSideMargin?: boolean
  unsupportedMedia?: boolean
  orientation: ProductTileOrientation
  onMediaClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void
  productImage?: string | null
  videoFallbackImage?: string
  mediaType?: string
  isDisabled?: boolean
  title?: string | null
}

export interface EmbeddedMedia {
  embedUrl: string
  canBeEmbedded: boolean
}

export interface ProductInteractions {
  bookmarked: boolean
  completed: boolean
  shared: boolean
  available: boolean
}

export interface ProductHeadingProps {
  headline: string
  headlineLimitLines?: number
  isSmall?: boolean
  loading: boolean
}

export interface StyledMediaProps {
  isSmall?: boolean
  imageHeight?: string
  isDisabled?: boolean
  hasBottomMargin?: boolean
  hasSideMargin?: boolean
  orientation: ProductTileOrientation
}

export interface StyledContentContainerProps {
  isSmall?: boolean
  hasIcon?: boolean
}

export type Provider = {
  __typename: string
  id: number
  name: string
  logoUrl?: string
}

export type Type = {
  __typename?: string
  id?: number
  name?: string
}

export type Interaction = {
  __typename: string
  launched: boolean
  bookmarked: boolean
  completed: Completed
}

type Completed = {
  status: boolean
  rating: string
  locked: boolean
}

export type Timebox = {
  __typename?: string
  start?: string
  end?: string
}

export interface ProductTileProduct {
  __typename?: string
  provider: Provider
  interaction: Interaction
  timebox?: Timebox
  url: string
  author?: string
  embedVideoURL: string
  niceName?: string
  coverImage?: string
  competency?: string
  completed?: boolean
  embedUrl?: boolean
  creator?: string
  embedVideoLink?: string
  locked?: boolean
  providerId?: number
  screenshotOverride?: string
  name?: string
  type?: { __typename: string; name: ProductTypeName; id: number }
  typeId?: number
  duration?: string
  durationType?: string
  published?: string
  sponsored?: boolean
  language?: string
  mainFeatures?: Feature[] | null
  competencies?: (Skills | null)[]
  id: number
  description: string
  title: string
  image: string | undefined
  badges?: (BadgeType | null)[] | null
  restriction?: string
  partOfSession?: string
}

export interface Skills {
  id?: number
  text?: string
  __typename?: string
}

export type MetaItem = {
  numberOfProducts?: string | undefined
  completedStatus?: string | undefined
  duration?: string
  type?: ProductTypeName
}

export type MetaPayload = {
  icon?: JSX.Element
  text?: Type['name'] | string
}

export interface ProductTileMetaProps {
  metaItems?: MetaPayload[]
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  alignSelf?: FlexAlignItemsOptions
  loading: boolean
  inPlaylist?: boolean
  isDisabled?: boolean
  isCompact?: boolean
  onClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => any
}

export type ProductTypeName = 'Video' | 'Article' | 'Podcast' | 'Online course' | 'Playlist' | 'Live' | 'Sponsored'

export type ProductTypeVariants = 'Video' | 'Article' | 'Podcast' | 'Online course' | 'Playlist'
