import { Heading } from '@/components/Atoms/Typography'
import { FlexBox } from '@/components/Helper/FlexBox'
import { Grid } from '@/components/Helper/Grid'
import { css, media, styled } from '@/styles'
import { StyledHeadingArticleProps, StyledPlaylistStageTitleProps } from './PlaylistStage.interface'

const articleStageBackgroundCommonStyles = css`
  content: ' ';
  display: none;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: -1;

  ${media.sm} {
    display: block;
  }
`

export const StyledProgressWrapper = styled.div<{ isSmall?: boolean }>`
  position: absolute;
  bottom: ${({ isSmall }) =>
    isSmall ? '-4px' : '-8px'}; // this is minus the height of the progress so it truly is at the bottom
  left: 0;
  right: 0;
`

export const StyledPlaylistStageTitle = styled.div<StyledPlaylistStageTitleProps>`
  ${({ theme, withImage, isRoundBorder, isSkewedBorder }) => {
    const { color, dimension, spacing } = theme
    const { borderRadius1 } = dimension
    const { selected, white } = color
    const { md } = spacing.base

    return css`
      background-color: ${withImage ? white : 'transparent'};
      box-sizing: border-box;
      color: ${selected};
      padding: ${withImage ? md : 0};
      position: relative;
      max-width: 780px;
      margin: 0 auto;
      z-index: 1;
      border-radius: 0 ${borderRadius1} ${borderRadius1} 0;
      box-shadow: ${withImage ? '8px 0 8px 8px rgba(0, 0, 0, 0.07);' : 'none'};

      ${media.sm} {
        width: calc(100% - 71px);
        border-top-right-radius: ${160 / 25}px;
        border-bottom-right-radius: ${160 / 5}px;
        box-shadow: ${withImage ? '8px 0 8px 8px rgba(0, 0, 0, 0.07);' : 'none'};
      }

      ${media.md} {
        border-radius: ${borderRadius1};
        box-shadow: ${withImage ? '8px 0 8px 8px rgba(0, 0, 0, 0.07);' : 'none'};

        h1 {
          height: inherit;
        }
      }

      ${isRoundBorder &&
      css`
        &:after {
          ${articleStageBackgroundCommonStyles}
          transform: skew(-19.7deg);
          height: 100%;
          right: -50px;
          border-top-right-radius: ${160 / 25}px;
          border-bottom-right-radius: ${160 / 5}px;
          box-shadow: ${withImage ? '8px 0 8px 0 rgba(0, 0, 0, 0.07);' : 'none'};
          background: ${white};
        }
      `}

      ${isSkewedBorder &&
      css`
        &:before {
          ${articleStageBackgroundCommonStyles}
          transform: skew(25deg);
          height: 50%;
          right: -50px;
          background: ${withImage ? white : 'transparent'};
        }

        &:after {
          ${articleStageBackgroundCommonStyles}
          transform: skew(-25deg);
          height: 50%;
          top: 50%;
          right: -50px;
          box-shadow: ${withImage ? '8px 8px 8px 0 rgba(0, 0, 0, 0.07)' : 'none'};
          background: ${withImage ? white : 'transparent'};
        }
      `}
    `
  }}
`

export const StyledPlaylistStageGrid = styled(Grid)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -46px;
`

export const StyledPlaylistStage = styled.div`
  ${({ theme }) => {
    return css`
      margin-bottom: ${theme.spacing.base.xxxl};
      position: relative;
    `
  }}
`

export const StyledHeadingArticle = styled(Heading)<StyledHeadingArticleProps>`
  ${({ theme, breadcrumbPath }) => {
    return css`
      margin: 0;
      font-size: ${theme.font.size.xl};

      ${media.md} {
        margin: 0 0 ${breadcrumbPath ? theme.spacing.base.sm : 0} 0;
        font-size: ${theme.font.size.lg};
        line-height: ${theme.spacing.base.lg};
      }

      ${media.mobile} {
        margin: 0 0 ${breadcrumbPath ? theme.spacing.base.xs : 0} 0;
        font-size: ${theme.font.size.sm};
        line-height: ${theme.spacing.base.md};
      }
    `
  }}
`

export const StyledBreadcrumbWrapper = styled.div`
  display: none;

  ${media.md} {
    display: block;
  }
`

export const StyledBacklinkWrapper = styled(FlexBox)`
  display: flex;
  margin: 0 0 8px;

  & > *:not(:first-child) {
    margin: 0 4px;
  }
`

export const StyledProductTileMetaWrapper = styled(FlexBox)`
  margin: 0 auto;
  ${media.maxSm} {
    margin: 0 auto;
  }
`

export const StyledContentWrapper = styled(FlexBox)`
  max-width: 80%;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing.base.lg};
  padding-right: ${({ theme }) => theme.spacing.base.lg};

  ${media.maxMd} {
    margin: ${({ theme }) => theme.spacing.base.xs} auto;
    padding: 0;
    width: 100%;
  }
`
