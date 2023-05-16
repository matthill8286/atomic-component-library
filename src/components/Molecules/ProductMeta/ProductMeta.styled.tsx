import { Button } from '@/components/Atoms/Button'
import { FlexBox } from '@/components/Helper/FlexBox'
import { CopyText, Icon } from '@/index'
import { styled } from '@/styles/styled'

const IconButton = styled(Button)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-content: center;
  ${Icon} {
    padding: ${({ theme }) => theme.spacing.base.xs};
  }
`

export const LaunchButton = styled(IconButton)`
  margin-bottom: ${({ theme }) => theme.spacing.base.sm};
`

export const CompleteButton = styled(IconButton)`
  margin-bottom: ${({ theme }) => theme.spacing.base.sm};
  color: ${({ theme }) => theme.color.primary};
`

export const IconsWrapper = styled(FlexBox)`
  margin-bottom: ${({ theme }) => theme.spacing.base.md};
`

export const CompetencyText = styled(CopyText)`
  margin-top: ${({ theme }) => theme.spacing.base.md};
`

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 40em;
  padding-bottom: 51%;
  position: relative;
  left: 0;
  top: 0;
  border: none;
  z-index: 2;
  margin-top: 10%;
`
