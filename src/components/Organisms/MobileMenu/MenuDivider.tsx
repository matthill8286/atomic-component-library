import { styled } from '@/styles'
import { Divider } from '@/components/Atoms/Divider'

const MenuDivider = styled(Divider).attrs(() => ({
  color: 'grey2',
}))`
  margin: ${({ theme }) => `${theme.spacing.base.sm} 0`};
`

export { MenuDivider }
