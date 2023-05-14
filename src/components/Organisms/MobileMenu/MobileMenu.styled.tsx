import { styled, media } from '@/styles'
import { ActionLink } from '@/components/Molecules/ActionLink'

export const StyledBackground = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const StyledNavWrapper = styled.div`
  display: flex;
  padding: 20px 10px;
  margin-top: 15px;
  margin-right: 15px;
  justify-content: flex-end;
  align-items: center;
`

export const StyledMenu = styled.ul<{ submenuShow?: boolean }>`
  position: absolute;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  list-style-type: none;
  transition-property: all;
  overflow-y: scroll;
  padding-bottom: 100px;
  max-height: 100vh;
`

export const StyledList = styled.li`
  width: 100%;
  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.color.grey2};
  a {
    display: flex;
    color: ${({ color, theme }) => color ?? theme.color.grey5};
  }

  :last-child {
    border-bottom: 1px solid ${({ theme }) => theme.color.grey2};
  }
`

export const StyledIconsMenu = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${media.maxSm} {
    bottom: 5px;
  }
`

export const StyledIconsList = styled.li`
  padding: ${({ theme }) => theme.spacing.base.sm};
`

export const StyledLink = styled.a`
  &&& {
    color: ${({ theme }) => theme.color.black};
  }
`

export const StyledActionLink = styled(ActionLink)<{ isSubItem?: boolean }>`
  padding: ${(props) => (props.isSubItem ? '20px 30px' : '20px')};
  width: 100%;
`
