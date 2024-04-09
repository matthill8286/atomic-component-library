import { radios, text } from '@storybook/addon-knobs'
import * as React from 'react'
import { CampaignInfobox } from './CampaignInfobox'

export default {
  title: 'Design System/Organisms/CampaignInfobox',
}

export const _CampaignInfobox = () => {
  const sampleText = text(
    'Example text',
    `Jetzt gratis liefern lassen ab einem Warenkorbwert von 100€. Für mehr Informationen hier klicken.`,
  )
  const productImages: { [key: string]: string } = {
    none: '',
    Example1: 'public/images/teasers/product01.png',
    Example2: 'public/images/teasers/product02.png',
    Example3: 'public/images/teasers/versandkostenfrei.jpeg',
    Example4:
      'https://assets.mmsrg.com/is/166325/12975367df8e182e57044734f5165e190/c3/-/a2e1581609c914b0da60e8278c5aa062b?version=0&x=600&y=450&format=png&app=im&papp=quant(quality=55)',
  }
  const sampleImages = radios('Image', productImages, productImages['Example3'])

  return <CampaignInfobox text={sampleText} imgUrl={sampleImages} />
}

_CampaignInfobox.story = {
  name: 'CampaignInfobox',
}
