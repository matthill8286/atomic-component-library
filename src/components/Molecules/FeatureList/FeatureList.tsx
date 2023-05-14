import React from 'react'
import { SkeletonInlineItem } from '@/components/Atoms/Skeleton'
import { Typo } from '@/components/Atoms/Typography'
import { styled } from '@/styles/styled'
import { FeatureListItemProps, FeatureListProps } from './FeatureList.interface'

const StyledUl = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`

const StyledLi = styled.li`
  padding-bottom: ${({ theme }) => theme.spacing.base.xs};
`

const FeatureListItem: React.FC<FeatureListItemProps> = ({ name, value, unit }) => (
  <StyledLi>
    <Typo tag="div" color="grey4" fontSize="xxs" limitLines={1}>
      {name}
    </Typo>
    <Typo tag="div" color="black" fontSize="xs" weight="semibold" limitLines={1}>
      {unit ? `${value} ${unit}` : value}
    </Typo>
  </StyledLi>
)

const FeatureListLoadingItem: React.FC = () => (
  <StyledLi>
    <SkeletonInlineItem fontSize="xxs" minLength={10} length={30} />
    <SkeletonInlineItem fontSize="xs" minLength={5} length={15} newLine />
  </StyledLi>
)

export const FeatureList: React.FC<FeatureListProps> = ({ features = [], showCount = 4, loading = false }) => {
  if (loading) {
    return (
      <StyledUl>
        {[...Array(showCount)].map((_feature, index) => (
          <FeatureListLoadingItem key={index} />
        ))}
      </StyledUl>
    )
  }

  if (!features?.length) {
    return null
  }

  const items = features.slice(0, showCount)

  return (
    <StyledUl data-test="feature-list">
      {items.map((feature, index) => (
        <FeatureListItem key={index} name={feature.name} value={feature.value} unit={feature.unit} />
      ))}
    </StyledUl>
  )
}

FeatureList.displayName = 'FeatureList'
