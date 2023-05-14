import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Label } from './Label'
import Readme from './Label.readme.md'

const stories = storiesOf('Design System/Atoms/Label', module)
const options = { info: Readme }

stories.add('Default', () => <Label htmlFor="field-1">A label</Label>, options)
