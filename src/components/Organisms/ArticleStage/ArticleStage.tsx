import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { Link } from '@/components/Atoms/Link'
import { Section } from '@/components/Atoms/Section'
import { Grid, Row, Cell, Offset } from '@/components/Helper/Grid'
import { CopyText } from '@/components/Atoms/Typography'
import { Breadcrumb } from '@/components/Molecules/Breadcrumb'
import { OtherArrow } from 'atomic-icon-library'
import { isAlternateTheme } from '@/utils/helper'
import { ArticleStageProps } from './ArticleStage.interface'
import {
  StyledArticleStage,
  StyledArticleStageGrid,
  StyledArticleStageTitle,
  StyledBacklinkWrapper,
  StyledBreadcrumbWrapper,
  StyledHeadingArticle,
} from './ArticleStage.styled'

export const ArticleStage: React.FC<ArticleStageProps> = ({
  articleTitle,
  subText,
  backlink,
  breadcrumbPath,
  colors,
  headingColor = 'selected',
  textColor = 'black',
  subTextColor = 'grey5',
  height,
  image,
  paddingBottom,
  paddingTop,
  withImage,
  homeLink,
  ...rest
}) => {
  const ArticleStageContent = React.useCallback(() => {
    return (
      <StyledArticleStageTitle withImage={withImage} isRoundBorder={isAlternateTheme()}>
        {backlink && (
          <StyledBacklinkWrapper>
            <Icon color={textColor} rotate={180} width="sm">
              <OtherArrow />
            </Icon>
            <Link href={backlink.link} color={textColor} fontSize="sm">
              {backlink.name}
            </Link>
          </StyledBacklinkWrapper>
        )}
        <StyledHeadingArticle
          breadcrumbPath={breadcrumbPath}
          color={headingColor}
          fontFamily="featured"
          fontSize="xxxl"
          scale="level-1"
          tag="h1"
        >
          {articleTitle}
        </StyledHeadingArticle>
        <StyledBreadcrumbWrapper>
          {breadcrumbPath && (
            <Breadcrumb
              homeLink={homeLink}
              paths={breadcrumbPath}
              textColor={textColor}
              linkColor={subTextColor}
              iconColor={textColor}
              decorationColor={colors}
            />
          )}
        </StyledBreadcrumbWrapper>
        {subText && (
          <CopyText margin="sm 0 0 0" fontSize="md" color={subTextColor}>
            {subText}
          </CopyText>
        )}
      </StyledArticleStageTitle>
    )
  }, [articleTitle, breadcrumbPath, headingColor, subText])

  return (
    <StyledArticleStage {...rest}>
      {withImage ? (
        <Section color={colors} height={height} image={image} paddingBottom={paddingBottom} paddingTop={paddingTop}>
          <StyledArticleStageGrid>
            <ArticleStageContent />
          </StyledArticleStageGrid>
        </Section>
      ) : (
        <Grid>
          <Row noMargin>
            <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
            <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
              <ArticleStageContent />
            </Cell>
          </Row>
        </Grid>
      )}
    </StyledArticleStage>
  )
}
