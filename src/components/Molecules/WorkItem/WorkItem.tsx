import React, { memo } from 'react'
import { CopyText, Heading, HeadingFeatured } from '@/components/Atoms/Typography'
import { Button } from '@/components/Atoms/Button'
import { Card } from '@/components/Atoms/Card'
import { Spacer } from '@/components/Atoms/Spacer'

export interface WorkItemProps {
  intro: string
  title: string
  description: string
  workText: string
  buttonLabel: string
  buttonLink: string
}

export const WorkItem = memo(({ intro, title, description, workText, buttonLabel, buttonLink }: WorkItemProps) => (
  <Card elevation={0} padding="sm" center={false} noBorder="none">
    <Card elevation={0} padding={{ left: 'md' }} noBorder="none">
      <CopyText weight="semibold" color="black" padding="0">
        {intro}
      </CopyText>
      <Spacer size="xs" />
      <HeadingFeatured color="black" margin="0">
        {title}
      </HeadingFeatured>
      <Spacer size="xs" />
      <CopyText weight="bold" fontSize="lg" color="black">
        {description}
      </CopyText>
      <Spacer size="xs" />
      <CopyText weight="semibold" color="black">
        {workText}
      </CopyText>
      <Spacer size="xs" />
    </Card>
    <Button actionType="ghost" isFlat color="black" weight="bold" to={buttonLink} size="sm">
      {buttonLabel}
    </Button>
  </Card>
))
