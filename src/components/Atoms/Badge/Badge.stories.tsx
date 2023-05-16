// @ts-nocheck
import { number, radios } from '@storybook/addon-knobs'
import * as React from 'react'
import { styled } from '@/styles/styled'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { Badge } from './Badge'
import { BadgeActionType, BadgeProps } from './Badge.interface'

const actionTypes: { [key: string]: BadgeActionType } = {
  Prominent: 'prominent',
  Secondary: 'secondary',
  Disabled: 'disabled',
}

const badges = [
  {
    id: 0,
    name: 'Featured',
  },
  {
    id: 1,
    name: 'Structured',
  },
  {
    id: 2,
    name: 'Sponsored',
  },
  {
    id: 3,
    name: 'Hot Hot Hot',
  },
  {
    id: 4,
    name: 'Last one',
    actionType: 'secondary',
  },
]

export const StyledLineMaxWidthContainer = styled.div`
  background: lightgrey;
  padding-top: 8px;
  padding-bottom: 8px;
`

const knobs = (): BadgeProps => {
  return {
    actionType: radios('Type', actionTypes, actionTypes.Prominent),
  }
}

export default {
  title: 'Design System/Atoms/Badge',
  excludeStories: ['StyledLineMaxWidthContainer'],
}

export const Default = () => {
  return (
    <StorybookWrapper>
      <Badge badges={badges.slice(0, 1)} {...knobs()} />
    </StorybookWrapper>
  )
}

export const WithTwoBadges = () => {
  return (
    <StorybookWrapper>
      <Badge badges={badges.slice(0, 2)} {...knobs()} />
    </StorybookWrapper>
  )
}

WithTwoBadges.story = {
  name: 'with two badges',
}

export const WithTwoActionTypes = () => {
  return (
    <StorybookWrapper>
      <Badge badges={badges.slice(3, 5)} {...knobs()} />
    </StorybookWrapper>
  )
}

WithTwoActionTypes.story = {
  name: 'with two action types',
}

export const BadgeLine = () => {
  const maxWidth = number('Maximum width of container', 600)

  const knobs = (): BadgeProps => {
    return {
      actionType: radios('Type', actionTypes, actionTypes.Prominent),
    }
  }
  return (
    <StorybookWrapper>
      <StyledLineMaxWidthContainer style={{ maxWidth }}>
        <Badge badges={badges} isBadgeLine {...knobs()} />
      </StyledLineMaxWidthContainer>
    </StorybookWrapper>
  )
}

BadgeLine.story = {
  name: 'BadgeLine',
}
