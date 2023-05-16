import React, { useRef } from 'react'
import { ProductTileVariantProps } from '@/components/Organisms/ProductTile/helpers/layout'
import {
  ProductCard,
  ProductFeatured,
  ProductImage,
  ProductTileContent,
  ProductTileMeta,
  ProductSchedule,
  StyledBookmarkPlaceholder,
} from '@/components/Organisms/ProductTile/elements'
import { ProductLocked } from '@/components/Organisms/ProductTile/elements/ProductLocked'
import {
  isPortrait,
  StyledContentContainer,
  StyledDivider,
  StyledHeadingContainer,
  StyledResponsiveContainer,
  StyledTile,
  StyledAdditionalContent,
} from '@/components/Organisms/ProductTile/ProductTile.styled'
import { ProductStrategy, ProductTileLayout, MetaItem } from '@/components/Organisms/ProductTile/ProductTile.interface'
import { getMetaItemList } from '@/components/Organisms/ProductTile/helpers/icons'
import { ProductSponsoring } from '@/components/Organisms/ProductTile/elements/ProductSponsoring'
import { ShowMore } from '@/components/Atoms/ShowMore'
import { CopyText } from '@/components/Atoms/Typography'

const DEFAULT_LINE_LIMIT = 2

export const ProductTileGridItem: React.FC<ProductTileVariantProps> = ({
  badgeActionType = 'prominent',
  productView = 'list',
  strategyType = ProductStrategy.none,
  children,
  color,
  elevation = 0,
  elevationHover = 0,
  isCollection,
  isOpenProduct = false,
  headlineLimitLines = DEFAULT_LINE_LIMIT,
  limitContentLines = DEFAULT_LINE_LIMIT,
  productSponsoring,
  icon,
  mainLink,
  badges,
  competencyLabel,
  showBadges = true,
  showBookmark = true,
  showLock = false,
  showSkills = true,
  showProductMeta = true,
  showProvider = true,
  showFeatured = false,
  isDisabled,
  noBorder,
  lazyloadLowQuality = false,
  layout = ProductTileLayout.gridItem,
  loading = false,
  sponsoringDetails,
  product,
  renderAddToBookmarkButton,
  showMoreText,
  showLessText,
  showMoreNumOfLines,
  showMoreAlignment,
  fadeOutColor,
  lazyLoad,
  roundImages,
  onClick,
  onCompleteClick,
  onPictureClick,
  onHeadingClick,
  onLockClick,
  orientation = 'portrait',
  videoFallbackImage,
  useHistory,
  ...rest
}) => {
  if (!product) {
    return null
  }

  const history = useHistory()
  const ref = useRef(null)

  const { title, image, provider, duration, type, interaction, id } = product

  const metaInputs: MetaItem | any = isCollection
    ? {
        duration: product?.totalProductDuration,
        type: null,
        completedStatus: product?.completionPercentage,
        numberOfProducts: product?.numberOfProducts,
      }
    : isOpenProduct
    ? {
        duration: product?.eventDate,
        type: type?.name,
        completedStatus: null,
        numberOfProducts: null,
      }
    : { duration, type: type?.name, completedStatus: product?.completionPercentage }

  const metaItems = getMetaItemList({ ...metaInputs })
  const useOverride = product?.type?.name === 'Video' && !product?.image

  const imageDimensions =
    orientation === 'portrait'
      ? { height: '200px', width: '100%', minHeight: '200px', maxWidth: '100%' }
      : { height: '300px', width: '100%', minHeight: '300px', maxWidth: '100%' }

  const onTileClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (loading || isDisabled) {
        return null
      }

      if (typeof onClick === 'function') {
        onClick(event)
      }

      if (mainLink) {
        // navigate to mainLink
        if (mainLink.to) return history.push(mainLink.to)
        if (mainLink.href) return (window.location.href = mainLink.href)
      }
    },
    [history, mainLink, onClick],
  )

  const onLockedClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (loading) {
        return null
      }

      if (typeof onLockClick === 'function') {
        onLockClick(event)
      }
    },
    [onLockClick],
  )

  const onTileClickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) =>
    product?.locked ? onLockedClick(event) : onTileClick(event)

  const productMediaChildren = (
    <>
      <StyledBookmarkPlaceholder>
        {showBookmark &&
          renderAddToBookmarkButton &&
          renderAddToBookmarkButton({
            title,
            provider,
            duration,
            type,
            completed: interaction?.completed,
            bookmarked: interaction?.bookmarked,
            id,
          })}
      </StyledBookmarkPlaceholder>
      {showLock && !loading && <ProductLocked color="grey4" locked={product?.locked} />}
    </>
  )

  return (
    <StyledTile ref={ref} orientation={orientation} {...rest}>
      <ProductCard
        elevationHover={elevationHover}
        isDisabled={product?.locked || isDisabled}
        badges={badges}
        noBorder={noBorder}
        borderColor="grey2"
      >
        <StyledResponsiveContainer orientation={orientation} aria-orientation="horizontal">
          <ProductImage
            lazyLoad={lazyLoad}
            loading={!!loading}
            productImage={useOverride ? videoFallbackImage : image}
            rounded={roundImages}
            onPictureClick={onTileClickHandler}
            title={title}
            {...imageDimensions}
          >
            {showFeatured && !loading && (
              <ProductFeatured loading={loading} featuredLabel={product?.featureLabel} color="grey5" />
            )}
            {strategyType === ProductStrategy.timebox && !loading && (
              <ProductSchedule timebox={product?.timebox} color="white" />
            )}
          </ProductImage>
          {isPortrait(orientation) && <StyledDivider color="primary" height="xs" />}
          <StyledContentContainer aria-orientation="horizontal">
            {productMediaChildren}
            {!loading && productSponsoring?.isSponsored && (
              <ProductSponsoring layout="tile" sponsoringDetails={productSponsoring} />
            )}
            <StyledHeadingContainer>
              <ProductTileContent
                loading={!!loading}
                provider={provider?.name ?? undefined}
                isDisabled={isDisabled}
                isCompact={!showProvider}
                description={title}
                onHeadingClick={onTileClickHandler}
                skills={product?.competencies}
                showSkills={showSkills}
                limitContentLines={limitContentLines}
              />
            </StyledHeadingContainer>
            {!isPortrait(orientation) && (
              <StyledAdditionalContent>
                <ShowMore
                  lineHeight={19}
                  fontSize={14}
                  fontColor="grey5"
                  loading={loading}
                  fadeOutBackgroundColor={fadeOutColor}
                  labelAlignment={showMoreAlignment}
                  fadeOutHeight={35}
                  numOfLines={showMoreNumOfLines || 4}
                  showMoreText={showMoreText || 'Show more'}
                  showLessText={showLessText || 'Show less'}
                >
                  {product?.description && (
                    <CopyText tag="p" padding="0" margin="xxs 0" color="grey5" display="flex">
                      {product?.description.replace(/(<([^>]+)>)/gi, '')}
                    </CopyText>
                  )}
                </ShowMore>
              </StyledAdditionalContent>
            )}
            {children}
            {showProductMeta && (
              <ProductTileMeta
                isCompact={isCollection}
                loading={!!loading}
                alignSelf="flex-end"
                isDisabled={isDisabled}
                onClick={onTileClickHandler}
                metaItems={metaItems}
              />
            )}
          </StyledContentContainer>
        </StyledResponsiveContainer>
      </ProductCard>
    </StyledTile>
  )
}
