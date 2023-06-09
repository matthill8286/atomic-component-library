import { boolean } from '@storybook/addon-knobs'
import React from 'react'
import { styled } from '@/styles/styled'
import { Spacer } from '../Spacer'
import { Typo } from '../Typography'
import info from './Skeleton.readme.mdx'
import { SkeletonBlockItem } from './SkeletonBlockItem'
import { SkeletonInlineItem } from './SkeletonInlineItem'

const exampleHeadline = 'Lorem Ipsum'
const exampleSubline = 'Some are shunning pleasure to work at a home'

const StyledExampleWrapper = styled.div`
  display: flex;
`

const StyledExampleBoxWrapper = styled.div`
  margin-right: 16px;
`

const StyledExampleBox = styled.div`
  height: 150px;
  width: 200px;
  background: blue;
`

export default {
  title: 'Design System/Atoms/Skeleton',
}

export const InlineItem = () => {
  return (
    <>
      <SkeletonInlineItem length={20} />
      <SkeletonInlineItem text="Lorem Ipsum dolor sit amet" fontSize="lg" newLine margin="xxs 0" />
    </>
  )
}

InlineItem.story = {
  parameters: { info },
}

export const InlineItemAnimated = () => {
  return (
    <>
      <SkeletonInlineItem animated length={20} />
      <SkeletonInlineItem animated text="Lorem Ipsum dolor sit amet" fontSize="lg" newLine margin="xxs 0" />
    </>
  )
}

InlineItemAnimated.story = {
  parameters: { info },
}

export const BlockItem = () => {
  return (
    <>
      <SkeletonBlockItem height="50px" />
      <Spacer size="xxs" />
      <SkeletonBlockItem height="300px" width="400px" />
    </>
  )
}

BlockItem.story = {
  parameters: { info },
}

export const BlockItemAnimated = () => {
  return (
    <>
      <SkeletonBlockItem animated height="50px" />
      <Spacer size="xxs" />
      <SkeletonBlockItem animated height="300px" width="400px" />
    </>
  )
}

BlockItemAnimated.story = {
  parameters: { info },
}

export const ConditionalExample = () => {
  const loading = boolean('Loading', false)

  return (
    <StyledExampleWrapper>
      <StyledExampleBoxWrapper>
        {loading ? <SkeletonBlockItem height="150px" width="200px" /> : <StyledExampleBox />}
      </StyledExampleBoxWrapper>
    </StyledExampleWrapper>
  )
}

ConditionalExample.story = {
  parameters: { info },
}

export const ConditionalExampleAnimated = () => {
  const loading = boolean('Loading', false)

  return (
    <StyledExampleWrapper>
      <StyledExampleBoxWrapper>
        {loading ? <SkeletonBlockItem animated height="150px" width="200px" /> : <StyledExampleBox />}
      </StyledExampleBoxWrapper>
    </StyledExampleWrapper>
  )
}

ConditionalExampleAnimated.story = {
  parameters: { info },
}
