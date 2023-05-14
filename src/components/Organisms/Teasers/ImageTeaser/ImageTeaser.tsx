import React from 'react'
import { Card } from '@/components/Atoms/Card'
import { Picture } from '@/components/Atoms/Picture'
import { ImageTeaserFCProps } from './ImageTeaser.interface'

export const ImageTeaser: React.FC<ImageTeaserFCProps> = ({
  badges,
  badgeActionType,
  elevation = 0,
  elevationHover = 4,
  finalImages,
}) => {
  return (
    <Card
      elevation={elevation}
      elevationHover={elevationHover}
      shape="rounded-small"
      display="flex"
      fullHeight
      badges={badges}
      badgeActionType={badgeActionType}
    >
      <Picture
        src={finalImages[0]}
        srcLg={finalImages[1]}
        srcMd={finalImages[2]}
        srcSm={finalImages[3]}
        objectFit="cover"
        height="100%"
        width="100%"
      />
    </Card>
  )
}
