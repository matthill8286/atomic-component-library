import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { CallToActionPanel, CallToActionPanelProps } from './CallToActionPanel'
import { newProductMocks } from '@/components/Organisms/ProductTile/elements/mockProduct'
import { SimpleCallToAction } from '@/components/Organisms/CallToActionPanel/SimpleCallToAction'
import { CopyText } from '@/components/Atoms/Typography'

const imageUrls = {
  normal: 'https://media.graphcms.com/resize=fit:crop,height:280,width:450/tbT0Znk2RJmb3d6RtCLm',
  small: 'https://media.graphcms.com/resize=fit:crop,height:150,width:300/tbT0Znk2RJmb3d6RtCLm',
  big: 'https://media.graphcms.com/resize=fit:crop,height:300,width:600/tbT0Znk2RJmb3d6RtCLm',
}

const defaultKnobs = (): CallToActionPanelProps => {
  const showReadMore = boolean('Show Read More', true)

  return {
    showReadMore,
    showMore: {
      lineHeight: 18,
      numOfLines: 5,
      showMoreText: 'Show More',
      showLessText: 'Show Less',
      labelAlignment: 'flex-end',
    },
    element: {
      headline: text('Headline', 'What we offer health care professionals'),
      buttonLabel: text('Button label', 'Clicking'),
    },
    richTextCopy: text(
      'Copy text',
      'The European Society for Paediatric Gastroenterology Hepatology and Nutrition (ESPGHAN) is a multi-professional organisation whose aim is to promote the health of children with special attention to the gastrointestinal tract, liver and nutritional status, through knowledge creation, the dissemination of science based information, the promotion of best practice in the delivery of care and the provision of high quality education for paediatric gastroenterology, hepatology and nutrition professionals in Europe and beyond.',
    ),
    product: newProductMocks[0],
    alignment: select('Alignment', ['right', 'left'], 'left'),
  }
}

const image = {
  alt: 'this is the alt text',
  url: imageUrls.normal,
  mobileSmall: {
    url: imageUrls.small,
  },
  mobileBig: {
    url: imageUrls.big,
  },
}

storiesOf('Design System/Organisms/CallToActionPanel', module)
  .add('Default Image', () => {
    return <CallToActionPanel {...defaultKnobs()} image={image} />
  })
  .add('Simple CTA', () => {
    return (
      <SimpleCallToAction {...defaultKnobs()} image={image}>
        <CopyText>
          The European Society for Paediatric Gastroenterology Hepatology and Nutrition (ESPGHAN) is a
          multi-professional organisation whose aim is to promote the health of children with special attention to the
          gastrointestinal tract, liver and nutritional status, through knowledge creation, the dissemination of science
          based information, the promotion of best practice in the delivery of care and the provision of high quality
          education for paediatric gastroenterology, hepatology and nutrition professionals in Europe and beyond.
        </CopyText>
      </SimpleCallToAction>
    )
  })
  .add('With Product', () => {
    return <CallToActionPanel showFeatured svg={undefined} image={undefined} {...defaultKnobs()} />
  })
  .add('2 alternate rows', () => {
    return (
      <>
        <SimpleCallToAction {...defaultKnobs()} image={image} alignment="left">
          <CopyText>
            The European Society for Paediatric Gastroenterology Hepatology and Nutrition (ESPGHAN) is a
            multi-professional organisation whose aim is to promote the health of children with special attention to the
            gastrointestinal tract, liver and nutritional status, through knowledge creation, the dissemination of
            science based information, the promotion of best practice in the delivery of care and the provision of high
            quality education for paediatric gastroenterology, hepatology and nutrition professionals in Europe and
            beyond.
          </CopyText>
        </SimpleCallToAction>
        <SimpleCallToAction {...defaultKnobs()} image={image} alignment="right">
          <CopyText>
            The European Society for Paediatric Gastroenterology Hepatology and Nutrition (ESPGHAN) is a
            multi-professional organisation whose aim is to promote the health of children with special attention to the
            gastrointestinal tract, liver and nutritional status, through knowledge creation, the dissemination of
            science based information, the promotion of best practice in the delivery of care and the provision of high
            quality education for paediatric gastroenterology, hepatology and nutrition professionals in Europe and
            beyond.
          </CopyText>
        </SimpleCallToAction>
      </>
    )
  })
  .add('passing element', () => {
    return (
      <>
        <CallToActionPanel
          {...defaultKnobs()}
          alignment="right"
          image={image}
          richTextCopy={
            <p>
              testing <b>this</b>
            </p>
          }
        />
      </>
    )
  })
