import { number, radios } from '@storybook/addon-knobs'
import { LoadingIndicator, LoadingIndicatorColor, LoadingIndicatorProps } from './LoadingIndicator'

const loadingIndicatorColor: { [key: string]: LoadingIndicatorColor } = {
  white: 'white',
  black: 'black',
  primary: 'primary',
}

const knobs = (): LoadingIndicatorProps => {
  return {
    isVisible: true,
    color: radios('Color', loadingIndicatorColor, loadingIndicatorColor.primary),
    size: number('Size', 50),
  }
}

export default {
  title: 'Design System/Atoms/LoadingIndicator',
}

export const Default = () => <LoadingIndicator {...knobs()} />
