import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { SkeletonBlockItem } from '@/components/Atoms/Skeleton'
import { CopyText } from '@/components/Atoms/Typography'
import { FlexBox, FlexItem } from '@/components/Helper/FlexBox'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { breakpoints, styled } from '@/styles'
import { ProductTileMetaProps } from '../ProductTile.interface'

const StyledFlexBox = styled(FlexBox)<{
  isDisabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => any
}>`
  ${({ isDisabled }) => `
    ${
      isDisabled
        ? `
        -ms-filter: grayscale(100%);
        filter: grayscale(100%);
        opacity: 0.4;
        pointer-events: none;
      `
        : ''
    }
  `};
`
const StyledFlexItem = styled(FlexItem)<{
  isFirstChild?: boolean
  isLastChild?: boolean
  isCompact?: boolean
}>`
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

  padding: 0 2px;

  ${({ isCompact }) => `${isCompact && `padding: 0`}`}

  ${({ isFirstChild }) => `
    ${isFirstChild &&
      `
        padding-left: 0;
        margin-left: 0;
      `}
  `};
`

export const ProductTileMeta: React.FC<ProductTileMetaProps> = ({
  metaItems,
  loading,
  isDisabled,
  inPlaylist = false,
  justify,
  alignSelf,
  isCompact,
  onClick,
}) => {
  if (!metaItems) {
    return null
  }

  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const isMobile = currentBreakpoint < breakpoints.sm
  const showCompact = metaItems.length >= 2

  if (loading) {
    return (
      <StyledFlexBox isDisabled={isDisabled}>
        <SkeletonBlockItem height="20px" width="60%" />
      </StyledFlexBox>
    )
  }

  return (
    <StyledFlexBox
      justifyContent={justify || 'flex-start'}
      alignContent="center"
      flexDirection={isMobile && inPlaylist ? 'column' : 'row'}
      flexWrap={showCompact ? 'wrap' : 'nowrap'}
      isDisabled={isDisabled}
      onClick={onClick}>
      {metaItems.map(({ icon, text }, index) => (
        <StyledFlexItem
          key={index}
          padding={!isMobile}
          isCompact={isCompact}
          alignSelf={alignSelf || (isMobile && inPlaylist) ? 'center' : 'flex-start'}
          isFirstChild={index === 0}
          isLastChild={index === metaItems?.length}>
          <FlexBox>
            <FlexItem alignSelf="center">
              <Icon width={16} height={16} color="grey5">
                {icon}
              </Icon>
            </FlexItem>
            <FlexItem>
              <CopyText
                margin={isMobile ? '0 10px' : '0 5px 0'}
                fontSize="sm"
                color="grey5"
                tag="span">
                {text}
              </CopyText>
            </FlexItem>
          </FlexBox>
        </StyledFlexItem>
      ))}
    </StyledFlexBox>
  )
}
