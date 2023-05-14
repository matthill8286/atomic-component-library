import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { styled } from '@/styles/styled'
import { Spacer } from '../Spacer'
import { Typo } from '../Typography'
import info from './Skeleton.readme.md'
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

storiesOf('Design System/Atoms/Skeleton', module)
  .add(
    'Inline Item',
    () => {
      return (
        <>
          <SkeletonInlineItem length={20} />
          <SkeletonInlineItem text="Lorem Ipsum dolor sit amet" fontSize="lg" newLine margin="xxs 0" />
        </>
      )
    },
    { info },
  )
  .add(
    'Inline Item Animated',
    () => {
      return (
        <>
          <SkeletonInlineItem animated length={20} />
          <SkeletonInlineItem animated text="Lorem Ipsum dolor sit amet" fontSize="lg" newLine margin="xxs 0" />
        </>
      )
    },
    { info },
  )
  .add(
    'Block Item',
    () => {
      return (
        <>
          <SkeletonBlockItem height="50px" />
          <Spacer size="xxs" />
          <SkeletonBlockItem height="300px" width="400px" />
        </>
      )
    },
    { info },
  )
  .add(
    'Block Item Animated',
    () => {
      return (
        <>
          <SkeletonBlockItem animated height="50px" />
          <Spacer size="xxs" />
          <SkeletonBlockItem animated height="300px" width="400px" />
        </>
      )
    },
    { info },
  )

  .add(
    'Conditional Example',
    () => {
      const loading = boolean('Loading', false)

      return (
        <StyledExampleWrapper>
          <StyledExampleBoxWrapper>
            {loading ? <SkeletonBlockItem height="150px" width="200px" /> : <StyledExampleBox />}
          </StyledExampleBoxWrapper>
        </StyledExampleWrapper>
      )
    },
    { info },
  )
  .add(
    'Conditional Example Animated',
    () => {
      const loading = boolean('Loading', false)

      return (
        <StyledExampleWrapper>
          <StyledExampleBoxWrapper>
            {loading ? <SkeletonBlockItem animated height="150px" width="200px" /> : <StyledExampleBox />}
          </StyledExampleBoxWrapper>
        </StyledExampleWrapper>
      )
    },
    { info },
  )
