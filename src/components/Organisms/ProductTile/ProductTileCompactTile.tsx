import React from 'react'
import { ProductTileVariantProps } from '@/components/Organisms/ProductTile/helpers/layout'
import { useHistory } from 'react-router-dom'
import { NativeLazyLoadOptions } from '@/components/Atoms/Picture'
import { Card } from '@/components/Atoms/Card'
import {
  ProductTileCompact as CompactProductTile,
  ProductTileCompactElement,
} from '@/components/Organisms/ProductTileCompact'
import { IconButton } from '@/components/Atoms/Button'
import { Icon } from '@/components/Atoms/Icon'
import { OtherBookmarkActive, OtherCheckmarkCircle } from '@matthill8286/atomic-icon-library'

export const ProductTileCompactTile: React.FC<ProductTileVariantProps> = ({
  competencyLabel,
  placeCard = false,
  showImage = true,
  showInteractions = true,
  loading = false,
  isDisabled,
  product,
  mainLink,
  onClick,
  onLockClick,
}) => {
  if (!product || !Object.keys(product).length) {
    return null
  }

  const history = useHistory()

  const { title, image, provider, duration, competencies, type, interaction, id } = product

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

  const item = (
    <CompactProductTile
      loading={loading}
      showImage={showImage}
      productImage={image}
      title={title}
      onClick={onTileClickHandler}
      lazyLoadImage={NativeLazyLoadOptions.Eager}
    >
      <ProductTileCompactElement
        title={product?.title}
        provider={provider?.name}
        competency={competencies?.[0]?.text || competencyLabel}
        type={product?.type?.name}
        description={product?.description}
        loading={loading}
        showInteractions={showInteractions}
        iconsComponent={
          <>
            {interaction?.bookmarked && (
              <IconButton isFlat actionType="ghost">
                <Icon width={20} height={20} color="grey5">
                  <OtherBookmarkActive height="sm" width="sm" fill="grey2" />
                </Icon>
              </IconButton>
            )}
            {interaction?.completed.status && (
              <IconButton isFlat actionType="ghost">
                <Icon width={20} height={20} color="grey5">
                  <OtherCheckmarkCircle />
                </Icon>
              </IconButton>
            )}
          </>
        }
      />
    </CompactProductTile>
  )

  return (
    <>
      {placeCard ? (
        <Card elevation={0} noBorder={[]} padding="xs" shape="rounded-xl" surface="white">
          {item}
        </Card>
      ) : (
        item
      )}
    </>
  )
}
