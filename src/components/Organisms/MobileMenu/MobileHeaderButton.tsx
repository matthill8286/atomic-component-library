import { styled } from '@/styles'
import { Button } from '@/components/Atoms/Button'

export const MobileHeaderButton = styled(Button)`
  :active {
    outline: none;
  }
  background: transparent;
  border-color: ${({ theme }) => theme.color.white};
  margin-right: ${({ theme }) => theme.spacing.base.xs};
`
