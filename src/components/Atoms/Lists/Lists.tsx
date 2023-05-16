import React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { media } from '@/styles/media'
import { styled } from '@/styles/styled'
import { ThemeColors } from '@/types'

interface StyledListsProps {
  icon?: boolean
  ordered?: boolean
  withMargin?: boolean
  color?: ThemeColors
}

export interface ListsProps extends React.HTMLProps<HTMLElement> {
  icon?: boolean
  ordered?: boolean
  children: React.ReactNode
  withMargin?: boolean
  color?: ThemeColors
}

const StyledList = styled.ul<StyledListsProps>`
  margin: ${({ theme, withMargin }) => (withMargin ? `${theme.spacing.base.xs} 0 ${theme.spacing.base.md}` : '0')};
  padding: ${({ theme, icon }) => (icon ? '0' : `0 0 0 ${theme.spacing.base.sm}`)};
  font-size: ${({ theme }) => theme.font.size.xs};

  ${({ icon }) => icon && 'list-style-type: none;'}
  ${({ theme, color }) => color && `color: ${theme.color[color]};`}

  ${media.md} {
    font-size: ${({ theme }) => theme.font.size.sm};

    ${Icon} {
      top: 0;
    }
  }

  & li {
    margin: 0;
    padding: 0;
    margin-bottom: ${({ theme }) => theme.spacing.base.xs};

    & p:first-child {
      margin-top: 0;
    }

    & p:last-child {
      margin-bottom: 0;
    }
  }

  ${Icon} {
    float: left;
    position: relative;
    top: -2px;
    margin-right: ${({ theme }) => theme.spacing.base.xs};
  }
`

export const Lists: React.FC<ListsProps> = (props) => {
  const { ordered = false, icon = false, withMargin = false, children, className, color } = props
  return (
    <StyledList as={ordered ? 'ol' : 'ul'} icon={icon} withMargin={withMargin} className={className} color={color}>
      {children}
    </StyledList>
  )
}
