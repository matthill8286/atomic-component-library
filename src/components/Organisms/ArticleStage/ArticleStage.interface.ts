import { BreadcrumbPath } from '@/components/Molecules/Breadcrumb/Breadcrumb.interface'
import { TranslatedTextType } from '@/types'
import { HeightMap, ImageMap, ThemeColors, VerticalPaddingMap } from '@/types/theme'

export interface StyledHeadingArticleProps {
  breadcrumbPath?: BreadcrumbPath[]
  homeLink?: string
  backlink?: BreadcrumbPath
}

export interface ArticleStageProps extends StyledHeadingArticleProps {
  articleTitle: TranslatedTextType
  subText?: TranslatedTextType
  colors: ThemeColors
  headingColor?: ThemeColors
  textColor?: ThemeColors
  subTextColor?: ThemeColors
  height?: HeightMap
  image?: ImageMap
  paddingBottom?: VerticalPaddingMap
  paddingTop?: VerticalPaddingMap
  withImage?: boolean
}

export interface StyledArticleStageTitleProps {
  withImage?: boolean
  isRoundBorder: boolean
}
