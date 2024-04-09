import { action } from '@storybook/addon-actions'
import * as React from 'react'
import { CookieLayer } from './CookieLayer'

const mockCookieLayerLabels = {
  headline: 'Willkommen auf mediamarkt.de!',
  infoText: `Um Ihnen ein angenehmes Online-Erlebnis zu ermöglichen,
  setzen wir auf unserer Webseite Cookies ein. Durch das Weitersurfen auf mediamarkt.de
  erklären Sie sich mit der Verwendung von Cookies einverstanden. Detaillierte Informationen
  und wie Sie der Verwendung von Cookies jederzeit widersprechen können,
  finden Sie in unseren Datenschutzhinweisen „<a href='#'>Cookies, Webanalyse-Dienste und Social Media“.</a>`,
  button: 'Einverstanden',
}

export default {
  title: 'Design System/Organisms/Cookie Layer',
}

export const Default = () => (
  <CookieLayer
    headline={mockCookieLayerLabels.headline}
    infoText={mockCookieLayerLabels.infoText}
    button={mockCookieLayerLabels.button}
    onCookieLayerAgree={action('Agreed')}
  />
)
