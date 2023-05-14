import React from 'react'
import {
  OtherArticle,
  OtherVideoThin,
  OtherPodcast,
  OtherVideo,
  OtherSignIn,
  OtherUserAdd,
  OtherAsset,
  OtherAssetTime,
  OtherPercentage,
} from '@matthill8286/atomic-icon-library'
import { ProductTypeName, ProductTypeVariants, MetaItem, MetaPayload } from '@/components/Organisms/ProductTile'

export type ProductTileVariantProps = ProductTypeVariants
type ProductTileVariant = React.ReactElement<ProductTileVariantProps>

export enum ProductTileIcons {
  Video = 'Video',
  Article = 'Article',
  Podcast = 'Podcast',
  Online = 'Online course',
  Playlist = 'Playlist',
  Webinar = 'Webinar',
}

const icons: Record<ProductTileIcons, ProductTileVariant> = {
  [ProductTileIcons.Video]: <OtherVideo />,
  [ProductTileIcons.Article]: <OtherArticle />,
  [ProductTileIcons.Podcast]: <OtherPodcast />,
  [ProductTileIcons.Online]: <OtherSignIn />,
  [ProductTileIcons.Playlist]: <OtherUserAdd />,
  [ProductTileIcons.Webinar]: <OtherVideoThin />,
}

const getIconByTypeName = (typeName: ProductTypeName): JSX.Element => {
  const iconsComponent = icons[typeName]
  if (!iconsComponent) {
    return <OtherArticle />
  }

  return icons[typeName]
}

export const getMetaItemList = ({ duration, type, completedStatus, numberOfProducts }: MetaItem) => {
  const payload: MetaPayload[] = []

  if (type) {
    payload.push({
      text: type,
      icon: getIconByTypeName(type),
    })
  }

  if (numberOfProducts) {
    payload.push({
      text: numberOfProducts,
      icon: <OtherAsset />,
    })
  }

  if (duration) {
    payload.push({
      text: `${duration}`,
      icon: <OtherAssetTime />,
    })
  }

  if (completedStatus) {
    payload.push({
      text: completedStatus,
      icon: <OtherPercentage />,
    })
  }

  return payload
}
