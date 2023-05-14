import { BreadcrumbPath } from '@/components/Molecules/Breadcrumb/Breadcrumb.interface'
import { HeightMap, ImageMap, ThemeColors, VerticalPaddingMap } from '@/types/theme'
import { Shape, Corners } from '@/components/Atoms/Card/Card.interface'

export interface StyledHeadingArticleProps {
  breadcrumbPath?: BreadcrumbPath[]
  homeLink?: string
  backlink?: BreadcrumbPath
}

export interface PlaylistProps {
  pid: string
  name?: string
  image?: string | undefined
  description?: string
  strategy: string
  totalProductDuration: string
  completionPercentage: string
  numberOfProducts: string
}

export interface PlaylistStageProps extends StyledHeadingArticleProps {
  playlist: PlaylistProps
  colors: ThemeColors
  headingColor?: ThemeColors
  height?: HeightMap
  image?: ImageMap
  paddingBottom?: VerticalPaddingMap
  paddingTop?: VerticalPaddingMap
  withImage?: boolean
  withMetaItems?: boolean
  shape?: Shape | Corners<Shape>
}

export interface StyledPlaylistStageTitleProps {
  withImage?: boolean
  isRoundBorder: boolean
  isSkewedBorder: boolean
}
