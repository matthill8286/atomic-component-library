import { Icon } from '@/components/Atoms/Icon'
import { Link } from '@/components/Atoms/Link'
import { skeleton } from '@/styles/animation'
import { media } from '@/styles/media'
import { margin, padding } from '@/styles/sc-shared-functions'
import { css, styled } from '@/styles/styled'
import { StyledBreadcrumbProps, StyledLiProps } from './Breadcrumb.interface'

export const StyledBreadcrumb = styled.div<StyledBreadcrumbProps>`
  ${margin}
  ${padding}

  text-indent: ${({ isLoading }) => isLoading && '-9999px'};
  ${({ isLoading }) => isLoading && skeleton}

  min-height: ${({ theme }) => theme.font.lineHeight.sm};
`

export const StyledUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

export const StyledLi = styled.li<StyledLiProps>`
  display: inline-block;
  ${({ isLastButOne }) =>
    !isLastButOne
      ? css`
          display: none;
          ${media.md} {
            display: inline-block;
          }
        `
      : css`
          ${Icon} {
            & > svg {
              transform: rotate(180deg);
            }
          }
          ${media.md} {
            ${Icon} {
              & > svg {
                transform: rotate(0deg);
              }
            }
          }
        `}
`

export const StyledHomeLink = styled(Link)`
  ${Icon} {
    & > svg {
      position: relative;
      ${({ theme }) => css`
        top: ${theme.spacing.base.xxs};
        height: ${theme.spacing.base.sm};
        width: ${theme.spacing.base.sm};
      `}
    }
  }

  :hover {
    ${Icon} {
      & > svg {
        :hover {
          fill: ${({ theme }) => theme.color.grey4};
        }
      }
    }
  }
`
