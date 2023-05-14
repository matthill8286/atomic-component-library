import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { Link } from '@/components/Atoms/Link'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { IndexIcon } from '../IndexIcon/IndexIcon'
import { StyledConnectionLine, StyledLineContainer, StyledStepContainer, StyledStepContent } from './StepElement.styled'
import { StepByStepFieldProps } from './StepElement.types'
import { OtherArrow } from '@matthill8286/atomic-icon-library'

export const StepElement: React.FC<StepByStepFieldProps> = ({
  index,
  amountOfSteps,
  smoothScroll,
  textColor,
  stepText,
  stepLinkText,
  stepLink,
}) => {
  const formattedIndex = (index + 1).toString().padStart(2, '0')
  const hasLink = stepLinkText && stepLink?.length > 0
  const isLastStep = index === amountOfSteps - 1

  return (
    <React.Fragment key={`StepElement_${index}`}>
      <StyledStepContainer amount={amountOfSteps}>
        <IndexIcon content={formattedIndex} color={textColor} />
        <StyledStepContent>
          <CopyText bold color={textColor} fontSize="md" limitLines={2} tag="p">
            {stepText}
          </CopyText>
          {hasLink && (
            <Link
              color={textColor}
              iconLeft={
                <Icon color={textColor}>
                  <OtherArrow />
                </Icon>
              }
              underline
              scale="small"
              smooth={smoothScroll}
              href={stepLink}
            >
              {stepLinkText}
            </Link>
          )}
        </StyledStepContent>
      </StyledStepContainer>
      {!isLastStep && (
        <StyledLineContainer index={index} amount={amountOfSteps}>
          <StyledConnectionLine color={textColor} amount={amountOfSteps} />
        </StyledLineContainer>
      )}
    </React.Fragment>
  )
}
