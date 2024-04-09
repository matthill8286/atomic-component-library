import React, { useEffect, useState } from 'react'

import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { Cell, Grid, Heading, Offset, Row, Spacer } from '@/index'
import { StepElement } from './elements/StepElement/StepElement'
import { StepByStepField } from './elements/StepElement/StepElement.types'
import { StyledContentBlock, StyledFlexBox, StyledSection } from './StepByStepSection.styled'
import { ColorStyle, StepByStepProps } from './StepByStepSection.types'

const useSmoothScrollingFix = () => {
  const [currentUrl, setCurrentUrl] = useState<string | undefined>()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    location && setCurrentUrl(location.origin + location.pathname)
  }, [])

  return (link: string): string | undefined => {
    const isAnchorOnSamePage = link && link.includes('#') && currentUrl === link.split('#')[0]
    if (currentUrl && isAnchorOnSamePage) {
      return `#${link.split('#')[1]}`
    }
  }
}

export const StepByStepSection: React.FC<StepByStepProps> = ({
  background,
  headline,
  copyText,
  fields,
  anchorId,
}) => {
  const textColor = background === ColorStyle.GREY ? 'black' : 'white'
  const checkForAnchor = useSmoothScrollingFix()

  const renderSteps = (fields: StepByStepField[]) => {
    const limitedFields = fields.slice(0, 6)
    return limitedFields.map((field, index: number) => {
      const { stepText, stepLink, stepLinkText } = field
      return (
        <StepElement
          key={`StepElement_${index}_${stepText}`}
          index={index}
          amountOfSteps={limitedFields.length}
          smoothScroll={!!checkForAnchor(stepLink)}
          textColor={textColor}
          stepText={stepText}
          stepLinkText={stepLinkText}
          stepLink={checkForAnchor(stepLink) ?? stepLink}
        />
      )
    })
  }

  return (
    <StyledSection colorStyle={background} id={anchorId || undefined}>
      <Grid>
        <Row noMargin>
          <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
          <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
            <StyledContentBlock>
              {headline && (
                <Heading
                  aria-label={headline}
                  bold
                  color={textColor}
                  fontFamily="default"
                  margin="0"
                  scale="level-2"
                  tag="h2">
                  {headline}
                </Heading>
              )}
              <CopyText color={textColor} fontSize="sm" limitLines={0} tag="p">
                {copyText}
              </CopyText>
              <Spacer size="xl" />
              <StyledFlexBox>{renderSteps(fields)}</StyledFlexBox>
            </StyledContentBlock>
          </Cell>
        </Row>
      </Grid>
    </StyledSection>
  )
}
