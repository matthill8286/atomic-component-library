import { text } from '@storybook/addon-knobs'
import * as React from 'react'
import { ErrorBox } from '@/components/Molecules/ErrorBox'

const knobs = () => ({
  title: text('title', 'Oops'),
  subtitle: text('subtitle', 'Something went wrong'),
  buttonLabel: text('button label', 'Try again'),
})

export default {
  title: 'Design System/Molecules/ErrorBox',
}

export const Default = () => <ErrorBox {...knobs()} />
