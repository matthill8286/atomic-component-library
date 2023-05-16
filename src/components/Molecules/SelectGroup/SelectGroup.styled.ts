import { StyledDivider } from '@/components/Atoms/Card/Card.styled'
import { css, styled } from '@/styles/styled'
import { SelectGroupItemContainerProps } from './SelectGroup.interface'

export const SelectGroupItemContainer = styled.div<SelectGroupItemContainerProps>`
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:hover {
    z-index: 2;
  }

  ${({ margin }) => margin && `margin: ${margin}`};

  ${({ surface }) =>
    surface === 'selected' &&
    css`
      cursor: default;
      z-index: 3;
    `}

  ${({ showDivider }) =>
    showDivider &&
    css`
      &:last-child {
        ${StyledDivider} {
          display: none;
        }
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
    `}
`
