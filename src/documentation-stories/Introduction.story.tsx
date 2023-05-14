import { storiesOf } from '@storybook/react'
import React from 'react'
import Readme from '../../README.md'
import ScRules from '../../SCRULES.md'

storiesOf('General/Introduction', module)
  .add('Readme', () => <div />, {
    info: Readme,
  })
  .add('SC Rules', () => <div />, {
    info: ScRules,
  })
