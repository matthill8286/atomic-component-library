import { Icon } from '@/components/Atoms/Icon'
import { CopyText, Heading, Typo } from '@/components/Atoms/Typography'
import { media } from '@/styles/media'
import { getBoxDimension } from '@/styles/sc-shared-functions'
import { css, styled } from '@/styles/styled'
import {
  StyledAccordionEntryProps,
  StyledEntryContentProps,
  StyledLabelProps,
  StyledLabelTextProps,
} from './Accordion.interface'

export const StyledAccordionEntry = styled.section<StyledAccordionEntryProps>(
  ({ noBorder, theme }) => `
  ${
    !noBorder
      ? `border-top: ${theme.dimension.borderWidth} solid ${theme.name === 'Alternate' ? '#8B8F91' : theme.color.grey2}`
      : ''
  }
`,
)

export const StyledLabel = styled.div<StyledLabelProps>(
  ({ padding, theme, withIconsOnRight, isLarge }) => ` 
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: ${theme.font.family.default};
    padding: ${isLarge ? theme.spacing.base.md : theme.spacing.base.sm} 0;
    ${withIconsOnRight ? 'flex-direction: row-reverse; justify-content: space-between;' : ''}
    ${padding ? `padding: ${getBoxDimension(theme, padding) || 0};` : ''}
    ${media.maxSm} {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
`,
)

export const StyledLabelHeading = styled(Typo)<StyledLabelTextProps>`
  word-break: break-word;
  max-height: ${({ theme }) => css`
    calc(${theme.spacing.base.md} * 4)
  `};
  -webkit-line-clamp: 4;
`

export const StyledIcon = styled(Icon)`
  svg {
    transition: ${({ theme }) => `transform ${theme.transition.medium} ${theme.transition.defaultEasing}`};
  }
`

export const StyledEntryContent = styled(CopyText)<StyledEntryContentProps>(
  ({ padding, theme, isLarge }) => ` 
    padding: ${isLarge ? theme.spacing.base.md : theme.spacing.base.sm};
    ${padding ? `padding: ${getBoxDimension(theme, padding) || 0};` : ''}
    font-weight: ${({ theme }) => theme.font.weight.regular}
`,
)
