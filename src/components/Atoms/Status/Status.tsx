import { css, styled } from '@/styles/styled'

export type StatusType = 'white' | 'black' | 'primary'

export interface StatusProps {
  type?: StatusType
  withinIcon?: boolean
}

export const Status = styled.div<StatusProps>`
  ${({ withinIcon, theme }) =>
    withinIcon &&
    css`
      position: absolute;
      margin-left: ${theme.spacing.base.xs};
      margin-top: -${theme.spacing.base.xs};
      z-index: 90;
    `};
  width: ${({ theme }) => theme.spacing.base.sm};
  height: ${({ theme }) => theme.spacing.base.sm};
  background: ${({ theme, type = 'primary' }) => theme.color[type]};
  font-family: ${({ theme }) => theme.font.family.default};
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme, type = 'primary' }) => (type === 'white' ? theme.color.grey6 : theme.color.white)};
  border-radius: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
