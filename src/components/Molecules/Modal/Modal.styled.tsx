import { Icon } from '@/components/Atoms/Icon'
import { media } from '@/styles/media'
import { styled } from '@/styles/styled'
import { StyledModalHeaderProps, StyledModalInnerWrapperProps } from './Modal.interface'
import { rgba } from 'polished'
import {
  fadingIn,
  fadingOut,
  falling,
  newspaper,
  shaking,
  slideFromBottom,
  slideFromRight,
  superScaled,
} from '@/styles'

export const ModalWrapper = styled.div`
  z-index: 201;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  overflow-y: auto;
`

export const StyledModalBackground = styled.div<{ isWhite: boolean }>`
  position: fixed;
  position: sticky;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, isWhite }) => (isWhite ? theme.color.white : rgba(0, 0, 0, 0.7))};

  ${media.sm} {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
`

const modalWrapperPositions = {
  top: {
    top: 0,
  },
  center: {
    top: 0,
    height: '100%',
  },
  bottom: {
    bottom: 0,
  },
  confirm: {
    bottom: 0,
    height: 'auto',
  },
}

const modalWrapperPositionsMd = {
  top: {
    top: '48px',
    transform: 'translate(-50%)',
  },
  center: {
    top: '25%',
    transform: 'translate(-50%)',
  },
  bottom: {
    bottom: 0,
    transform: 'translate(-50%, 0)',
  },
  confirm: {
    top: '25%',
    transform: 'translate(-50%)',
    bottom: 'auto',
  },
}

const modalWrapperBottomMargins = (position, theme) => {
  return {
    top: theme.spacing.base.xxxxl,
    center: theme.spacing.base.xxxxl,
    bottom: 0,
  }[position]
}

export const StyledModalInnerWrapper = styled.div<StyledModalInnerWrapperProps>`
  background: ${({ contentBgColor, theme }) => (contentBgColor ? contentBgColor : theme.color.white)};
  border-radius: ${({ theme }) => theme.dimension.borderRadius0};
  box-sizing: border-box;
  z-index: 101;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow-y: ${({ withScrollableContent }) => (withScrollableContent ? 'auto' : 'hidden')};
  position: absolute;
  ${({ position }) => modalWrapperPositions[position]}

  ${media.sm} {
    ${({ position }) => modalWrapperPositionsMd[position]}
    margin-bottom: ${({ theme, position }) => modalWrapperBottomMargins(position, theme)};
    left: 50%;
    display: block;
    padding: ${({ theme, paddingSize }) =>
      ({
        md: `${theme.spacing.base.lg} ${theme.spacing.base.md}`,
        lg: `${theme.spacing.base.xl} ${theme.spacing.base.xxxxxl}`,
      }[paddingSize])};
    border-radius: ${({ theme }) => theme.dimension.borderRadius1};
    height: ${({ withScrollableContent }) => (withScrollableContent ? 'calc(100% - 100px)' : 'auto')};
    max-width: ${({ size }) =>
      size === 'sm' ? `440px` : size === 'md' ? `560px` : size === 'lg' ? `756px` : size === 'xl' && `1104px`};
  }

  ${({ animation }) => [
    animation === 'fadeIn' && fadingIn,
    animation === 'fadeOut' && fadingOut,
    animation === 'shake' && shaking,
    animation === 'falling' && falling,
    animation === 'newspaper' && newspaper,
    animation === 'superScaled' && superScaled,
    animation === 'slideFromRight' && slideFromRight,
    animation === 'slideFromBottom' && slideFromBottom,
  ]}
`

export const StyledModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  & img {
    max-width: 100%;
  }
`

export const StyledModalDesktopWrapper = styled.div`
  padding: ${({ theme }) => `0 ${theme.spacing.base.sm} ${theme.spacing.base.sm} ${theme.spacing.base.sm}`};
  max-width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  ${media.sm} {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding: 0;
  }
`

export const StyledModalHeader = styled.div<StyledModalHeaderProps>`
  display: flex;
  justify-content: ${({ hasTitle }) => (`${hasTitle}` ? 'center' : 'flex-start')};
  padding: ${({ theme }) => `${theme.spacing.base.sm}`};

  ${({ hasTitle, theme }) => !hasTitle && `min-height: ${theme.spacing.base.md}`};
  ${media.sm} {
    ${({ hasTitle, theme }) => `padding: 0 0 ${hasTitle ? theme.spacing.base.sm : 0} 0`};
    ${({ hasTitle }) => !hasTitle && `min-height: 0`};
  }
`

export const StyledIcon = styled(Icon)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  padding: 0;
  z-index: 1;
  outline: none;
  background: none;
  border: none;
`

export const StlyedLeftContent = styled.div`
  flex: 1;
`
