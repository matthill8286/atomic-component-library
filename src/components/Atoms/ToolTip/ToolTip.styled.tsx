import { styled } from '@/styles/styled'
import { StyledToolTipContentProps, StyledToolTipProps } from './ToolTip.interface'

export const StyledToolTipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`

export const StyledToolTipContent = styled.div<StyledToolTipContentProps>`
  background: ${({ theme, primary }) => (primary ? theme.color.grey4 : theme.color.white)};
  padding: 10px 0;
  border-radius: ${({ theme }) => theme.dimension.borderRadius2};
`

export const StyledToolTip = styled.div<StyledToolTipProps>`
  border-radius: ${({ theme }) => theme.dimension.borderRadius2};
  box-sizing: border-box;
  display: inline-block;
  position: absolute;
  margin-top: 20px;
  padding: 0 ${({ theme }) => theme.spacing.base.xs};
  z-index: 10;
  left: 50%;
  width: 120px;
  transform: translateX(-50%);
  background: ${({ theme, primary }) => (primary ? theme.color.grey4 : theme.color.white)};
  box-shadow: ${({ theme }) => theme.dimension.elevationLevel2};

  &::before {
    content: '';
    box-shadow: ${({ theme }) => theme.dimension.elevationLevel2};
    background: ${({ theme, primary }) => (primary ? theme.color.grey4 : theme.color.white)};
    display: block;
    position: absolute;
    width: 14px;
    top: -7px;
    z-index: -1;
    left: 50%;
    margin-left: -7px;
    height: 14px;
    transform: rotate(45deg);
  }
`
