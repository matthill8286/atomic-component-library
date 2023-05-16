import { mount, ReactWrapper } from 'enzyme'
import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/sc-vars-default'
import { Theme } from '@/types'

export function renderWithTheme<C extends React.Component, P = C['props'], S = C['state']>(
  tree: React.ReactElement<P>,
  theme = defaultTheme,
) {
  return renderer.create(<ThemeProvider theme={theme}>{tree}</ThemeProvider>).toJSON()
}

export function renderWithThemeAndRouter(tree: React.ReactElement, theme: Theme = defaultTheme) {
  return renderer
    .create(
      <ThemeProvider theme={theme}>
        <Router>{tree}</Router>
      </ThemeProvider>,
    )
    .toJSON()
}

export function renderWithRouter(tree: React.ReactElement) {
  return renderer.create(<Router>{tree}</Router>).toJSON()
}

export function mountWithTheme<C extends React.Component, P = C['props'], S = C['state']>(
  tree: React.ReactElement<P>,
): ReactWrapper<P, S, C> {
  return mount(<ThemeProvider theme={defaultTheme}>{tree}</ThemeProvider>)
}

export function mountWithThemeAndRouter<C extends React.Component, P = C['props'], S = C['state']>(
  tree: React.ReactElement<P>,
): ReactWrapper<P, S, C> {
  return mount(
    <ThemeProvider theme={defaultTheme}>
      <Router>{tree}</Router>
    </ThemeProvider>,
  )
}
