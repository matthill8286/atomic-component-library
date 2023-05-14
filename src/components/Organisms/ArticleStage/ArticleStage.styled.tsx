import { Heading } from '@/components/Atoms/Typography'
import { FlexBox } from '@/components/Helper/FlexBox'
import { Grid } from '@/components/Helper/Grid'
import { css, media, styled } from '@/styles'
import { StyledArticleStageTitleProps, StyledHeadingArticleProps } from './ArticleStage.interface'

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

export const StyledArticleStageTitle = styled.div<StyledArticleStageTitleProps>`
  ${({ theme, withImage, isRoundBorder }) => {
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
      width: 100%;
      z-index: 1;
      border-radius: 0 ${borderRadius1} ${borderRadius1} 0;
      box-shadow: ${withImage ? '8px 0 8px 8px rgba(0, 0, 0, 0.07)' : 'none'};

      ${media.sm} {
        width: calc(100% - 71px);
        border-top-right-radius: ${160 / 25}px;
        border-bottom-right-radius: ${160 / 5}px;
        box-shadow: ${withImage ? '8px 0 8px 8px rgba(0, 0, 0, 0.07)' : 'none'};
      }

      ${media.md} {
        border-radius: ${borderRadius1};
        box-shadow: ${withImage ? '8px 0 8px 8px rgba(0, 0, 0, 0.07)' : 'none'};

        h1 {
          height: inherit;
        }
      }

      ${isRoundBorder
        ? css`
            &:after {
              ${articleStageBackgroundCommonStyles}
              transform: skew(-19.7deg);
              height: 100%;
              right: -50px;
              border-top-right-radius: ${160 / 25}px;
              border-bottom-right-radius: ${160 / 5}px;
              box-shadow: ${withImage ? '8px 0 8px 0 rgba(0, 0, 0, 0.07)' : 'none'};
              background: ${withImage ? theme.color.white : 'transparent'};
            }
          `
        : css`
            &:before {
              ${articleStageBackgroundCommonStyles}
              transform: skew(25deg);
              height: 50%;
              right: -50px;
              background: ${withImage ? theme.color.white : 'transparent'};
            }

            &:after {
              ${articleStageBackgroundCommonStyles}
              transform: skew(-25deg);
              height: 50%;
              top: 50%;
              right: -50px;
              box-shadow: ${withImage ? '8px 8px 8px 0 rgba(0, 0, 0, 0.07)' : 'none'};
              background: ${withImage ? theme.color.white : 'transparent'};
            }
          `}
    `
  }}
`

export const StyledArticleStageGrid = styled(Grid)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 12px;
  width: 100%;

  ${media.maxLg} {
    padding-left: 0;
  }
`

export const StyledArticleStage = styled.div`
  ${({ theme }) => {
    return css`
      padding-bottom: ${theme.spacing.base.xxxl};
      position: relative;
    `
  }}
`

export const StyledHeadingArticle = styled(Heading)<StyledHeadingArticleProps>`
  ${({ theme, breadcrumbPath }) => {
    return css`
      margin: 0;
      font-size: ${theme.font.size.xxxl};

      ${media.sm} {
        font-size: ${theme.font.size.xxxxl};
      }

      ${media.md} {
        margin: 0 0 ${breadcrumbPath ? theme.spacing.base.sm : 0} 0;
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
