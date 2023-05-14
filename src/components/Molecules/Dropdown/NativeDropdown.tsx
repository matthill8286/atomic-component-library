import React from 'react'
import { Icon, RotationValues } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography/CopyText'
import { media } from '@/styles'
import { css, styled } from '@/styles/styled'
import { OtherArrow } from '@matthill8286/atomic-icon-library'

export interface NativeDropdownProps {
  className?: string
  children?: HTMLOptionElement[] | React.ReactElement<HTMLOptionElement>[]
  margin?: string
  padding?: string
  icon?: React.ReactElement
  iconMobile?: React.ReactElement
  iconRotate?: RotationValues
  iconMobileRotate?: RotationValues
  noBorder?: boolean
  withBgColor?: boolean
  value: string
  ariaLabel?: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

interface StyledIconProps {
  hasMobileIcon?: boolean
  withBgColor?: boolean
}

const StyledLabel = styled(CopyText)<{ noBorder: boolean }>`
  ${({ theme, noBorder }) => css`
    position: relative;
    display: grid;
    width: calc(100% - ${theme.spacing.base.md});
    height: ${theme.spacing.base.xxl};
    padding: 0 12px;
    ${!noBorder && `border: 2px solid ${theme.color.grey5};`}
    border-radius: ${theme.dimension.borderRadius1};

    ${media.mobile} {
      width: ${theme.spacing.base.lg};
      height: ${theme.spacing.base.lg};
      padding: 0;
      display: flex;
    }
  `}
`

const StyledSelect = styled.select`
  ${({ theme }) => css`
    appearance: none;
    border: none;
    display: block;
    overflow: hidden;
    outline: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
    width: 100%;
    height: ${theme.spacing.base.xxl};
    padding: ${theme.spacing.base.xs} ${theme.spacing.base.md} ${theme.spacing.base.xs} 0;
    z-index: 1;
    color: ${theme.color.black};

    ${media.mobile} {
      width: 100%;
      height: ${theme.spacing.base.xxl};
      padding: 0;
      color: transparent;
    }
  `}
`

const IconCss = css`
  position: absolute;
  z-index: 0;
`

const StyledIcon = styled(Icon)<StyledIconProps>`
  ${IconCss}
  background-color: ${({ theme, withBgColor }) => (withBgColor ? theme.color.white : 'transparent')};
  right: 14px;
  top: 14px;

  ${media.mobile} {
    right: 6px;
    top: 0;
    align-items: center;
    ${({ hasMobileIcon }) => hasMobileIcon && 'display: none;'}
    height: 100%;
  }
`

const StyledMobileIcon = styled(Icon)<StyledIconProps>`
  ${IconCss}
  background-color: ${({ theme, withBgColor }) => (withBgColor ? theme.color.white : 'transparent')};
  top: 0;
  display: none;

  ${media.mobile} {
    display: block;
  }
`

export const NativeDropdown: React.FC<NativeDropdownProps> = (props) => {
  const {
    className,
    children,
    icon,
    iconMobile,
    iconRotate = 90,
    iconMobileRotate = 90,
    noBorder = false,
    withBgColor = true,
    margin,
    padding,
    onChange,
    value,
    ariaLabel,
  } = props
  return (
    <StyledLabel
      className={className}
      margin={margin}
      padding={padding}
      fontSize="sm"
      lineHeight="sm"
      noBorder={noBorder}
      tag="label"
    >
      <StyledSelect aria-label={ariaLabel} value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <StyledIcon rotate={iconRotate} withBgColor={withBgColor} width={20} height={20} hasMobileIcon={!!iconMobile}>
        {icon ? icon : <OtherArrow />}
      </StyledIcon>
      {iconMobile && (
        <StyledMobileIcon rotate={iconMobileRotate} withBgColor={withBgColor} width={20} height={20}>
          {iconMobile}
        </StyledMobileIcon>
      )}
    </StyledLabel>
  )
}

NativeDropdown.displayName = 'NativeDropdown'
