import * as React from 'react'
import { BadgeProps } from './Badge.interface'
import { StyledBadgeLineWrapper, StyledBadgeWrapper, StyledOverflow, StyledTypo } from './Badge.styled'

export const Badge: React.FC<BadgeProps> = ({ actionType = 'inverted', badges, isBadgeLine, className }) => {
  return (
    <StyledBadgeLineWrapper isBadgeLine className={className}>
      {badges &&
        badges.map((badge, i) => {
          if (!badge) {
            return null
          }
          return (
            <StyledBadgeWrapper
              key={`badge-${badge.name}-${i}`}
              actionType={badge.actionType || actionType}
              isFirst={i === 0}
              isBadgeLine={isBadgeLine}
            >
              <StyledTypo weight="regular" fontSize={'xxs'} margin="0" actionType={badge.actionType || actionType}>
                <StyledOverflow>{badge.name}</StyledOverflow>
              </StyledTypo>
            </StyledBadgeWrapper>
          )
        })}
    </StyledBadgeLineWrapper>
  )
}
