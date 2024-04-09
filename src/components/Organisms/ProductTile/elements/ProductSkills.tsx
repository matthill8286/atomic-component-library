import React from 'react'
import { Tag } from '@/components/Atoms/Tag'
import { css, styled } from '@/styles/styled'
import { ThemeColors } from '@/types'
import { Skills } from '../ProductTile.interface'

export interface ProductSkill {
  competencyLabel?: string
  showSkills?: boolean
  skills?: (Skills | null)[]
  loading: boolean
  onSkillsClick?: (
    e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<React.ReactElement>
  ) => void
  color?: ThemeColors
}

const StyledProductSkill = styled.div(
  ({ theme }) => css`
    display: inline-flex;
    justify-content: flex-end;
  `
)

export const ProductSkills: React.FC<ProductSkill> = ({
  competencyLabel,
  skills,
  onSkillsClick,
  color = 'grey5',
  loading,
}) => {
  if (!skills || !skills.length || loading) {
    return null
  }

  const text = `${skills.length} ${
    skills.length === 1 ? competencyLabel || 'skill' : `${competencyLabel || 'skill'}s`
  } `

  return (
    <StyledProductSkill>
      <Tag weight="bold" padding={{ left: 'lg', right: 'lg' }} text={text} color={color} />
    </StyledProductSkill>
  )
}
