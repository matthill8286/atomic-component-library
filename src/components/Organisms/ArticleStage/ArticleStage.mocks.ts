import { BreadcrumbPath } from '@/components/Molecules/Breadcrumb/Breadcrumb.interface'
import { VerticalPaddingMap } from '@/types/theme'
import { ArticleStageProps } from './ArticleStage.interface'

export const backlink: BreadcrumbPath = {
  name: 'Zurück zu Kontoübersicht',
  link: '',
}

export const breadcrumbPath: BreadcrumbPath[] = [
  {
    name: 'Computer & Büro',
    link: '',
  },
  {
    name: 'Drucker & Scanner',
    link: '',
  },
  {
    name: 'Multifunktionsdrucker',
    link: '',
  },
]

export const height = {
  mobile: 200,
  tablet: 300,
  desktop: 400,
}

export const image = {
  mobile: 'public/images/small.jpg',
  tablet: 'public/images/large.jpg',
}

export const paddingBottom: VerticalPaddingMap = {
  mobile: 'lg',
  tablet: 'xl',
}

export const paddingTop: VerticalPaddingMap = {
  tablet: 'xs',
  desktop: 'md',
}

export const props: ArticleStageProps = {
  articleTitle: 'Die Handy-Reparatur von MediaMarkt',
  breadcrumbPath,
  colors: 'primary',
  headingColor: 'primary',
  height,
  image,
  paddingBottom,
  paddingTop,
  withImage: true,
}
