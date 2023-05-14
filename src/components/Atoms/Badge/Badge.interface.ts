export type BadgeActionType = 'prominent' | 'secondary' | 'inverted' | 'disabled'

export interface BadgeType {
  id?: number | string
  name: string
  actionType?: BadgeActionType
}

export interface BadgeProps {
  actionType?: BadgeActionType
  isFirst?: boolean
  isBadgeLine?: boolean
  badges: (BadgeType | null)[]
  className?: string
}

export interface StyledBadgeProps {
  actionType?: BadgeActionType
  isFirst?: boolean
  isBadgeLine?: boolean
  className?: string
}
