import { CopyText, Heading } from '@/components/Atoms/Typography'
import { styled } from '@/styles/styled'

export const BoxHeading = styled(Heading)`
  margin: ${({ theme }) => theme.spacing.base.xxs} 0;
`
export const InfoHost = styled.div`
  margin-left: ${({ theme }) => theme.spacing.base.md};
`

export const BoxSubtitle = styled(CopyText)`
  margin-top: ${({ theme }) => theme.spacing.base.xs};
  margin-bottom: ${({ theme }) => theme.spacing.base.sm};
  color: ${({ theme }) => theme.color.grey4};
`
