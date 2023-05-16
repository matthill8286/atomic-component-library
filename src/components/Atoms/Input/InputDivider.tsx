import { Color } from 'csstype'
import React, { FC } from 'react'
import { Divider } from '@/components/Atoms/Divider'
import { styled } from '@/styles/styled'
import { DividerProps } from '../Divider/Divider.interface'

const StyledDivider = styled(Divider)<{ color: Color }>`
  height: 2px;
  width: 100%;
  margin-bottom: 0;
  color: ${({ theme, color }) => theme.color[color]};
  margin-top: ${({ theme }) => theme.spacing.base.xxs};
`

export const InputDivider: FC<DividerProps> = (props) => {
  return <StyledDivider {...props} />
}
