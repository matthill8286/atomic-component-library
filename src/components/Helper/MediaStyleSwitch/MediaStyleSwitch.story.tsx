import * as React from 'react'
import { Typo } from '@/components/Atoms/Typography'
import { styled } from '@/styles/styled'
import { MediaStyleSwitch } from './MediaStyleSwitch'

const SmallScreen = styled(Typo)`
  background: springgreen;
  padding: 15px 30px;
`

const MediumScreen = styled(Typo)`
  background: lightseagreen;
  padding: 15px 30px;
`

const LargeScreen = styled(Typo)`
  background: tomato;
  padding: 15px 30px;
`

export default {
  title: 'Design System/Helper/MediaStyleSwitch',
}

export const Default = () => (
  <>
    <MediaStyleSwitch query="maxSm" activeDisplay="block" inactiveDisplay="none">
      <SmallScreen>Small screen</SmallScreen>
    </MediaStyleSwitch>
    <MediaStyleSwitch
      query="@media (min-width: 513px) and (max-width: 1007px)"
      activeDisplay="block"
      inactiveDisplay="none"
    >
      <MediumScreen>Medium screen</MediumScreen>
    </MediaStyleSwitch>
    <MediaStyleSwitch query="lg" activeDisplay="block" inactiveDisplay="none">
      <LargeScreen>Large screen</LargeScreen>
    </MediaStyleSwitch>
  </>
)
