import React from 'react'
import { Button } from '@/components/Atoms/Button'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography'
import { css, styled } from '@/styles/styled'
import { OtherClear } from 'atomic-icon-library'
import { FilterBorderColor, FilterProps, FilterType } from './Filter.interface'

const filterBorderByType: FilterBorderColor = {
  default: 'grey3',
  selected: 'selected',
  active: 'grey2',
}

const filterBorderOnHoverByType: FilterBorderColor = {
  default: 'grey5',
  selected: 'selected',
  active: 'grey2',
}

const StyledFilter = styled.div<{ type: FilterType }>(({ theme, type }) => {
  const color = filterBorderByType[type]
  const colorOnHover = filterBorderOnHoverByType[type]

  return css`
    border-style: solid;
    border-color: ${theme.color[color]};
    border-width: 1px;
    border-radius: ${theme.dimension.borderRadius1};
    display: inline-block;
    font-weight: ${type === 'selected' ? 'bold' : 'normal'};
    background-color: ${type === 'active' ? theme.color.grey1 : 'transparent'};
    box-shadow: ${type === 'selected'
      ? `inset 0 0 0 1px ${theme.color[color]}, ${theme.dimension.elevationLevel2}`
      : '0 0'};

    :hover {
      border-color: ${theme.color[colorOnHover]};
      ${type === 'active' ? 'box-shadow: none;' : ''};
    }
  `
})

const StyledFilterButton = styled(Button)<{ filterType: FilterType; onClick: () => void }>`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.color.grey5};
  background: none;
  border: none;
  font-family: inherit;
  padding: ${({ theme }) => `12px ${theme.spacing.base.sm}`};
  text-align: left;
  ${({ filterType }) => filterType === 'active' && 'cursor: default'};

  :hover {
    text-decoration: none;
  }
  ${Icon} {
    padding-right: 0;
  }
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

export const Filter: React.FC<FilterProps> = ({ type, label, onClick, onClear, ...rest }) => {
  const handleOnClear = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    if (onClear) onClear(ev)
  }

  return (
    <StyledFilter type={type} {...rest}>
      <StyledFilterButton actionType="ghost" filterType={type} onClick={onClick}>
        <CopyText fontSize="sm" margin="0" weight={type === 'default' ? 'regular' : 'semibold'}>
          {label}
        </CopyText>
        {type === 'active' && (
          <StyledIcon width={24} height={24} onClick={handleOnClear}>
            <OtherClear />
          </StyledIcon>
        )}
      </StyledFilterButton>
    </StyledFilter>
  )
}
