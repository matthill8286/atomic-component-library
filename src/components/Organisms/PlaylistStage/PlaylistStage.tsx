import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { Link } from '@/components/Atoms/Link'
import { Section } from '@/components/Atoms/Section'
import { CopyText } from '@/components/Atoms/Typography'
import { Breadcrumb } from '@/components/Molecules/Breadcrumb'
import { OtherArrow } from 'atomic-icon-library'
import { ImageMap } from '@/types'
import { isSaiyanTheme } from '@/utils/helper'
import { PlaylistStageProps } from './PlaylistStage.interface'
import {
  StyledProductTileMetaWrapper,
  StyledBacklinkWrapper,
  StyledBreadcrumbWrapper,
  StyledContentWrapper,
  StyledHeadingArticle,
  StyledPlaylistStage,
  StyledPlaylistStageGrid,
  StyledPlaylistStageTitle,
  StyledProgressWrapper,
} from './PlaylistStage.styled'
import { ProductTileMeta } from '@/components/Organisms/ProductTile/elements'
import { getMetaItemList } from '@/components/Organisms/ProductTile/helpers/icons'
import { ProgressBar } from '@/components/Atoms/ProgressBar'

export const PlaylistStage: React.FC<PlaylistStageProps> = ({
  playlist,
  backlink,
  breadcrumbPath,
  colors,
  headingColor = 'selected',
  height,
  paddingBottom,
  paddingTop,
  withImage = true,
  withMetaItems = true,
  homeLink,
  shape,
  ...rest
}) => {
  const { name, image, strategy, totalProductDuration, completionPercentage, numberOfProducts, description } = playlist

  const metaItems = getMetaItemList({
    duration: totalProductDuration,
    type: undefined,
    completedStatus: completionPercentage,
    numberOfProducts,
  })

  const imageMap: ImageMap = {
    mobile: image as string,
    tablet: image,
    desktop: image,
  }

  const PlaylistStageContent = React.useCallback(() => {
    return (
      <StyledPlaylistStageGrid>
        <StyledPlaylistStageTitle withImage={withImage} isSkewedBorder={false} isRoundBorder={!isSaiyanTheme()}>
          <StyledContentWrapper justifyContent="center" flexDirection="column" alignItems="space-between">
            {backlink && (
              <StyledBacklinkWrapper>
                <Icon color="grey6" rotate={90} width="sm">
                  <OtherArrow />
                </Icon>
                <Link href={backlink.link} color="grey6" fontSize="sm" inline>
                  {backlink.name}
                </Link>
              </StyledBacklinkWrapper>
            )}
            <StyledHeadingArticle
              breadcrumbPath={breadcrumbPath}
              color={headingColor}
              fontFamily="default"
              weight="bold"
              fontSize="xl"
              lineHeight="xxl"
              textAlign="center"
              scale="level-2"
              tag="h2"
            >
              {name}
            </StyledHeadingArticle>
            <StyledBreadcrumbWrapper>
              {breadcrumbPath && <Breadcrumb homeLink={homeLink} paths={breadcrumbPath} />}
            </StyledBreadcrumbWrapper>
            {description && (
              <CopyText as="div" margin="sm 0" fontSize="sm" textAlign="center" limitLines={2}>
                {description}
              </CopyText>
            )}
          </StyledContentWrapper>
          {withMetaItems && (
            <>
              <StyledProductTileMetaWrapper justifyContent="center" flexDirection="row">
                <ProductTileMeta inPlaylist justify="center" loading={false} metaItems={metaItems} />
              </StyledProductTileMetaWrapper>
              <StyledProgressWrapper isSmall>
                <ProgressBar value={parseInt(completionPercentage, 0)} small />
              </StyledProgressWrapper>
            </>
          )}
        </StyledPlaylistStageTitle>
      </StyledPlaylistStageGrid>
    )
  }, [name, breadcrumbPath, headingColor, description])

  return (
    <StyledPlaylistStage {...rest}>
      {withImage ? (
        <Section
          color={colors}
          height={height}
          image={imageMap}
          paddingBottom={paddingBottom}
          paddingTop={paddingTop}
          shape={shape}
        >
          <PlaylistStageContent />
        </Section>
      ) : (
        <PlaylistStageContent />
      )}
    </StyledPlaylistStage>
  )
}
