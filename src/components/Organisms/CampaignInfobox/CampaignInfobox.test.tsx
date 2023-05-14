import React from 'react'
import { renderWithThemeAndRouter } from '@/testRenderer'
import { CampaignInfobox, CampaignInfoboxProps } from './CampaignInfobox'

describe('CampaignInfobox', () => {
  const mockCampaignInfoboxData: CampaignInfoboxProps = {
    text: 'Jetzt gratis liefern lassen ab einem Warenkorbwert von 100€.',
    imgUrl: 'public/images/teasers/versandkostenfrei.jpeg',
    link: { to: '#' },
  }
  it('renders correctly', () => {
    const tree = renderWithThemeAndRouter(<CampaignInfobox {...mockCampaignInfoboxData} />)
    expect(tree).toMatchSnapshot()
  })
})
