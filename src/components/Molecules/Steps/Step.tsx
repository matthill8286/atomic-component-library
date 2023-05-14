import React, { FC } from 'react'
import { Typo } from '@/components/Atoms/Typography'
import { media } from '@/styles/media'
import { styled } from '@/styles/styled'
import { ThemeColors } from '@/types/theme'
import { StepIcon } from './StepIcon'
import { ElementPosition, StepIconProps, StepPrivateProps, StepPublicProps } from './Steps.interface'

const StepRoot = styled.div<{ pointer: boolean }>`
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
  flex: 1;
  position: relative;
  padding: 0 ${({ theme }) => theme.defaultSpacing}px;
`

const StepLabelRoot = styled.span<{ elementPosition: ElementPosition }>`
  flex-direction: column;
  display: flex;
  align-items: center;

  ${({ elementPosition }) => elementPosition === 'first' && 'align-items: flex-start;'}
  ${({ elementPosition }) => elementPosition === 'last' && 'align-items: flex-end;'}
`

const StepDescription = styled(Typo)`
  ${media.maxMd} {
    display: none;
  }
`
export const Step: FC<StepPublicProps & StepPrivateProps> = (props) => {
  const {
    color = 'primary',
    elementPosition = 'default',
    active = false,
    completed = false,
    stepIndex = 0,
    title = '',
    description = '',
    icon,
    connector,
    onClick,
    variant = 'prominent',
    ...other
  } = props

  const stepIconProps: StepIconProps = {
    active,
    completed,
    color,
    variant,
    customIcon: icon,
  }

  const textColor: ThemeColors = active || completed ? color : 'grey2'

  return (
    <StepRoot {...other} pointer={!!onClick} onClick={() => onClick && onClick(stepIndex)}>
      {connector}
      {variant != 'uniform' ? (
        <StepLabelRoot elementPosition={elementPosition}>
          {title && (
            <Typo tag="span" color={textColor} weight={active || completed ? 'semibold' : 'regular'}>
              {title}
            </Typo>
          )}
          {description && (
            <StepDescription tag="span" color={textColor}>
              {description}
            </StepDescription>
          )}
          <StepIcon {...stepIconProps} />
        </StepLabelRoot>
      ) : (
        <StepIcon {...stepIconProps} />
      )}
    </StepRoot>
  )
}

Step.displayName = 'Step'
