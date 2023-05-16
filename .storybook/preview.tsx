import * as React from 'react'
import { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/styles'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
