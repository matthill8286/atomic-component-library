import { Button } from '@/components/Atoms/Button'
import { CopyText, InfoText } from '@/components/Atoms/Typography'
import { styled } from '@/styles/styled'

interface StyledElementProps {
  isActive: boolean
  isClickable: boolean
}

interface StyledPaginationProps {
  variant: 'progress' | 'dots' | 'pages'
}

export const StyledInfoText = styled(InfoText)`
  display: block;
  text-align: center;
`

export const StyledMoreButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.base.md};
`

export const StyledPaginationWrapper = styled.div<StyledPaginationProps>`
  display: ${({ variant }) => (variant === 'progress' ? 'block' : 'flex')};
`

export const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`

export const StyledCopyText = styled(CopyText)<StyledElementProps>`
  padding: 0 12px 0 12px;
  text-align: center;
  border-bottom: ${({ isActive }) => (isActive ? `4px solid black` : '4px solid transparent')};
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'initial')};
`

export const StyledBullet = styled.span<StyledElementProps>`
  height: ${({ theme }) => theme.defaultSpacing}px;
  width: ${({ theme }) => theme.defaultSpacing}px;
  background-color: ${({ theme, isActive }) => (isActive && theme.color.black) || theme.color.white};
  border: ${({ theme }) => `1px solid ${theme.color.black}`};
  border-radius: 50%;
  display: inline-block;
  margin: ${({ theme }) => theme.defaultSpacing}px;
  :hover {
    background-color: ${({ theme }) => theme.color.black};
    cursor: pointer;
  }
`

export const StyledPagesWrapper = styled.div`
  display: flex;
  padding: 0 8px 0 8px;
`
