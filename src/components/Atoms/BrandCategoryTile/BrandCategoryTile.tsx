import React, { FC } from 'react'
import { css, styled, media } from '@/styles'
import { Link } from '@/components/Atoms/Link'

export interface BrandCategoryTileProps {
  category: {
    categoryUrl: string | null
    categoryTitle: string | null
    categoryImage: {
      url: string | null
      alt: string | null
    } | null
  } | null
}

const ImageWrapper = styled.div(
  ({ theme }) => css`
    border-radius: ${theme.name === 'MediaMarkt' ? '50%' : '0%'};
    background: ${theme.name === 'MediaMarkt' ? theme.color.grey2 : theme.color.white};
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
    transition-property: border-color, box-shadow, transform;
  `,
)

const StyledLink = styled(Link)`
  flex-direction: column;
  align-items: center;
  width: auto;
  ${media.tablet} {
    &:hover {
      ${ImageWrapper} {
        transform: translateY(-1px);
        box-shadow: ${({ theme }) => theme.dimension.elevationLevel2};
        border-color: rgba(0, 0, 0, 0);
      }
    }
  }
`

const BrandImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`

const Title = styled.div(
  ({ theme }) => css`
    margin-top: ${theme.spacing.base.sm};
    font-family: ${theme.font.family.default};
    font-size: ${theme.font.size.sm};
    line-height: ${theme.font.lineHeight.sm};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
)

export const BrandCategoryTile: FC<BrandCategoryTileProps> = ({ category }) => {
  if (!category) {
    return null
  }

  return (
    <StyledLink to={category.categoryUrl as string} underline={false}>
      <ImageWrapper>
        {category.categoryImage?.url && (
          <BrandImage src={category.categoryImage?.url || ''} alt={category.categoryImage?.alt || ''} />
        )}
      </ImageWrapper>
      <Title>{category.categoryTitle}</Title>
    </StyledLink>
  )
}
