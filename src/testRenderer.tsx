import { mount, ReactWrapper } from 'enzyme'
import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { saiyanTheme } from '@/styles/sc-vars-saiyan'
import { Theme } from '@/types'

export function renderWithTheme<C extends React.Component, P = C['props'], S = C['state']>(
  tree: React.ReactElement<P>,
  theme = saiyanTheme,
) {
  return renderer.create(<ThemeProvider theme={theme}>{tree}</ThemeProvider>).toJSON()
}

export function renderWithThemeAndRouter(tree: React.ReactElement, theme: Theme = saiyanTheme) {
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
  return mount(<ThemeProvider theme={saiyanTheme}>{tree}</ThemeProvider>)
}

export function mountWithThemeAndRouter<C extends React.Component, P = C['props'], S = C['state']>(
  tree: React.ReactElement<P>,
): ReactWrapper<P, S, C> {
  return mount(
    <ThemeProvider theme={saiyanTheme}>
      <Router>{tree}</Router>
    </ThemeProvider>,
  )
}
