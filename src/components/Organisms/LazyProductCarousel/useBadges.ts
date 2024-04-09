import { BadgeType } from '@/components/Atoms/Badge'
import { ProductWrapperProps } from './LazyProductCarousel.interface'

const isBadgeType = (badge: BadgeType | null): badge is BadgeType => typeof badge !== null

export const useBadges = ({
  product,
  playlistView,
  showBadges = true,
}: Pick<ProductWrapperProps, 'product' | 'showBadges' | 'playlistView'>): BadgeType[] => {
  const badges =
    (playlistView === 'collection' &&
      product?.__typename &&
      ([{ name: product?.__typename, actionType: 'prominent' }] as BadgeType[]).filter(
        isBadgeType
      )) ||
    []

  if (showBadges) {
    return badges
  }
  return []
}
