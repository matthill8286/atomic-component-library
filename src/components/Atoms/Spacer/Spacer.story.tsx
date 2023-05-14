import { storiesOf } from '@storybook/react'
import React from 'react'
import { FlexBox } from '@/components/Helper/FlexBox'
import { styled } from '@/styles/styled'
import { Spacer } from './Spacer'
import Readme from './Spacer.readme.md'

const StyledBlock = styled.div`
  height: 20px;
  width: 100%;
  background: red;
  float: left;
`

const StyledVerticalBlock = styled.div`
  height: 100px;
  width: 20px;
  background: red;
  float: left;
`

storiesOf('Design System/Atoms/Spacer', module)
  .add(
    'Default',
    () => (
      <>
        <StyledBlock />
        <Spacer size={'md'} />
        <StyledBlock />
        <Spacer size={'xxxl'} />
        <StyledBlock />
      </>
    ),
    {
      info: Readme,
    },
  )
  .add(
    'Vertical',
    () => (
      <FlexBox flexDirection="row">
        <StyledVerticalBlock />
        <Spacer direction="vertical" size={'md'} />
        <StyledVerticalBlock />
        <Spacer direction="vertical" size={'xxxl'} />
        <StyledVerticalBlock />
      </FlexBox>
    ),
    {
      info: Readme,
    },
  )
