import { Icon } from '@/components/Atoms/Icon'
import { Typo } from '@/components/Atoms/Typography/Typo/Typo'
import { styled } from '@/styles/styled'
import { ListProps, StyledDropdownOptionProps, StyledDropdownProps } from './Dropdown.interface'

export const StyledContainer = styled.div`
  position: relative;
  cursor: pointer;

  & label {
    margin-top: ${({ theme }) => theme.spacing.base.xs};
    line-height: ${({ theme }) => theme.font.lineHeight.xs};
    position: absolute;
    transform-origin: top left;
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, top 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  & [data-label-filled='true'] {
    top: 0;
    font-size: 12px;
    transform-origin: top left;
  }

  & [data-label-filled='false'] {
    top: 16px;
    transform-origin: top left;
  }
`

export const StyledDropdown = styled.div<StyledDropdownProps>`
  width: 100%;
  position: relative;
  display: inline-block;
  margin-top: ${({ theme, hasLabel }) => (hasLabel ? theme.font.lineHeight.sm : 0)};
  height: ${({ theme }) => theme.font.lineHeight.sm};
  line-height: ${({ theme }) => theme.font.lineHeight.sm};

  & span {
    position: absolute;
    left: 0;
  }

  & + hr {
    height: 2px;
    width: 100%;
    margin-top: 2px;
  }
`

export const StyledTypo = styled(Typo)`
  max-width: calc(100% - 16px);
`

export const StyledIcon = styled(Icon)`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
`

export const StyledList = styled.ol<ListProps>`
  ${({ active, isSearchable, theme }) => `
    min-width: 100%;
    max-width: 100%;
    max-height: 320px;
    overflow-y: scroll;
    position: absolute;
    top: ${isSearchable ? `56px` : `32px`};
    z-index: 3;
    list-style: none;
    padding: ${theme.spacing.base.xs} 0;
    margin: 0;
    box-shadow: ${theme.dimension.elevationLevel2};
    background-color: white;
    border-radius: ${theme.dimension.borderRadius1};
    transform: scaleY(0);
    transform: ${active && 'scaleY(1)'};
    transform-origin: 0 0;
    transition: transform ${theme.transition.short} ease;
  `}
`

export const StyledDropdownOption = styled.li<StyledDropdownOptionProps>`
  ${({ isFocused, theme }) => `
    display: block;
    max-width: 100%;
    padding: ${theme.spacing.base.xs} ${theme.spacing.base.sm};
    background: ${theme.color.white};
    hyphens: auto;
    text-align: left;

    &:hover {
      cursor: pointer;
      background: ${theme.color.grey1};
    }

    ${
      isFocused
        ? `
        cursor: pointer;
        background: ${theme.color.grey1};
      `
        : ''
    }
  `}
`

export const StyledSearchableDropdownWrapper = styled.div`
  position: relative;
`

export const StyledFieldWrapper = styled.div<StyledDropdownProps>`
  display: inline-block;
  margin-top: ${({ hasLabel, theme }) => (hasLabel ? theme.spacing.base.md : 0)};
  position: relative;
  width: 100%;
`

export const StyledDropdownSelect = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  display: block;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-family: ${({ theme }) => theme.font.family.default};
  height: ${({ theme }) => theme.spacing.base.md};
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  z-index: 2;
`
