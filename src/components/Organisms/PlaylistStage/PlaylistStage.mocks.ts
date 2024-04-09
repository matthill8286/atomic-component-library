import { BreadcrumbPath } from '@/components/Molecules/Breadcrumb/Breadcrumb.interface'
import { VerticalPaddingMap } from '@/types/theme'
import { PlaylistStageProps, PlaylistProps } from './PlaylistStage.interface'
import { getTransformedImageVersion } from '@/utils/useGraphCmsImages'

export const backlink: BreadcrumbPath = {
  name: "Let's Go home",
  link: '/home',
}

export const breadcrumbPath: BreadcrumbPath[] = [
  {
    name: 'Playlist',
    link: '/',
  },
  {
    name: 'Collections',
    link: '/',
  },
]

export const height = {
  mobile: 200,
  tablet: 260,
  desktop: 300,
}

export const image = {
  mobile: getTransformedImageVersion('1FfvDDFERwWh35wkpNky'),
  tablet: getTransformedImageVersion('zdkfrHcOQQmNekeIxjve'),
}

export const paddingBottom: VerticalPaddingMap = {
  mobile: 'xs',
  tablet: 'xs',
}

export const paddingTop: VerticalPaddingMap = {
  tablet: 'xs',
  desktop: 'xs',
}

export const PlaylistMock: PlaylistProps = {
  pid: '628ce219-0158-4eb0-b864-61c59eff0f70',
  name: 'Conflict Management',
  image: 'getTransformedImageVersion(FtMfGctDTKGIYVzDm5dL)',
  strategy: 'none',
  totalProductDuration: '1 day 15 hours 31 minutes',
  completionPercentage: '75% completed',
  numberOfProducts: '12 products',
  description: 'This is the Conflict Management playlist',
}

export const props: PlaylistStageProps = {
  playlist: PlaylistMock,
  breadcrumbPath: undefined,
  colors: 'primary',
  headingColor: 'grey6',
  height: height,
  paddingBottom,
  paddingTop,
  withImage: true,
  withMetaItems: false,
  shape: 'rounded-big',
}
