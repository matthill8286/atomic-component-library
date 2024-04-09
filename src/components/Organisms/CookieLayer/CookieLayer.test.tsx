import * as React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { CookieLayer } from './CookieLayer'

describe('Button', () => {
  const headline = 'Willkommen auf mediamarkt.de!'
  const copyText = `Um Ihnen ein angenehmes Online-Erlebnis zu ermöglichen,
  setzen wir auf unserer Webseite Cookies ein. Durch das Weitersurfen auf mediamarkt.de
  erklären Sie sich mit der Verwendung von Cookies einverstanden. Detaillierte Informationen
  und wie Sie der Verwendung von Cookies jederzeit widersprechen können,
  finden Sie in unseren Datenschutzhinweisen „Cookies, Webanalyse-Dienste und Social Media“.`
  const button = 'Einverstanden'
  const onClick = jest.fn()

  it('Should render cookie layer wrapper', () => {
    const tree = renderWithTheme(
      <CookieLayer button={button} headline={headline} infoText={copyText} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('Should be clickable', () => {
    const tree = mountWithTheme(
      <CookieLayer
        button={button}
        headline={headline}
        infoText={copyText}
        onCookieLayerAgree={onClick}
      />
    )
    tree.find('button').simulate('click')
    expect(onClick.mock.calls.length).toEqual(1)
  })
})
