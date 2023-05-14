import React from 'react'
import {
  ProductTileLayout,
  ProductTileProps,
  TileSettings,
} from '@/components/Organisms/ProductTile/ProductTile.interface'
import { useLayoutComponent } from '@/components/Organisms/ProductTile/helpers/layout'
import { Reduced } from '@/components/Organisms/ProductTile/ProductTilePresetProps'

const DEFAULT_LINE_LIMIT = 2

export const ProductTile: React.FC<ProductTileProps> = ({
  badges,
  noBorder,
  borderColor,
  fullHeight,
  isCompact = false,
  isMobileView = false,
  expanded,
  fontSize,
  inView,
  strategyType,
  productView = 'list',
  productSponsoring,
  children,
  color,
  elevationHover = 0,
  limitContentLines = DEFAULT_LINE_LIMIT,
  mainLink,
  competencyLabel,
  showBookmark = true,
  showLock = false,
  showFeatured = false,
  showOptions = false,
  showProvider = true,
  showInteractions,
  showMoreText,
  showLessText,
  showLikes,
  showMoreNumOfLines,
  showImage,
  showMoreAlignment,
  fadeOutColor,
  sponsoringDetails,
  renderAddToBookmarkButton,
  loading = false,
  isOpenProduct = false,
  layout = ProductTileLayout.auto,
  orientation = 'portrait',
  product,
  lazyLoad,
  onClick,
  onLockClick,
  onCompleteClick,
  roundImages,
  withLQIP,
  withNativeLoading,
  videoFallbackImage,
}) => {
  const LayoutComponent = useLayoutComponent(layout)

  if (!product && !loading) {
    return null
  }

  const baseTileSettings: TileSettings = {
    loading: loading,
    fontSize: 'xs' || fontSize,
    sponsoringDetails: undefined,
    withEllipsis: true,
    headlineLimitLines: 2,
    showProductMeta: true,
    showBookmark,
    showLock: showLock || false,
    showSkills: true,
  }

  const isCollection = productView === 'collection'
  const tileSettings: { [p: string]: boolean } | TileSettings = isCollection ? { ...Reduced } : { ...baseTileSettings }

  return (
    <LayoutComponent
      elevationHover={elevationHover}
      expanded={expanded}
      fullHeight={fullHeight}
      product={product}
      color={color}
      badges={badges}
      mainLink={mainLink}
      competencyLabel={competencyLabel}
      inView={inView}
      productView={productView}
      strategyType={strategyType}
      isCompact={isCompact}
      isCollection={isCollection}
      isMobileView={isMobileView}
      lazyLoad={lazyLoad}
      loading={loading}
      noBorder={noBorder}
      roundImages={roundImages}
      productSponsoring={productSponsoring}
      borderColor={borderColor}
      limitContentLines={limitContentLines}
      onClick={onClick}
      onCompleteClick={onCompleteClick}
      onLockClick={onLockClick}
      videoFallbackImage={videoFallbackImage}
      showInteractions={showInteractions}
      showFeatured={showFeatured}
      showProvider={showProvider}
      isOpenProduct={isOpenProduct}
      showImage={showImage}
      showLikes={showLikes}
      showMoreText={showMoreText}
      showLessText={showLessText}
      showMoreAlignment={showMoreAlignment}
      showMoreNumOfLines={showMoreNumOfLines}
      fadeOutColor={fadeOutColor}
      renderAddToBookmarkButton={renderAddToBookmarkButton}
      showOptions={showOptions}
      orientation={orientation}
      sponsoringDetails={sponsoringDetails}
      withLQIP={withLQIP}
      withNativeLoading={withNativeLoading}
      {...tileSettings}
    >
      {children}
    </LayoutComponent>
  )
}
