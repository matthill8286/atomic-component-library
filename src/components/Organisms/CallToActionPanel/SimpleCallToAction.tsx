import React from 'react'
import { LazyLoadImage } from '@/components/Molecules/LazyLoadImage'
import { CallToActionElement } from '@/components/Organisms/CallToActionPanel/CallToActionElement'
import {
  CallToActionPanelProps,
  StyledCtaImageColumn,
  StyledCtaRow,
  StyledCtaTextColumn,
} from '@/components/Organisms/CallToActionPanel/CallToActionPanel'

function getGraphCmsImageParams(imageUrl) {
  return imageUrl ? `${imageUrl}&blur=400&px=8` : undefined
}

export const SimpleCallToAction: React.FC<Pick<
  CallToActionPanelProps,
  'image' | 'alignment' | 'element' | 'richTextCopy'
>> = ({ children, image, alignment, element, richTextCopy, ...props }) => {
  return (
    <StyledCtaRow>
      <StyledCtaImageColumn alignment={alignment} order={alignment === 'right' ? 1 : -1}>
        {image ? (
          <LazyLoadImage
            {...props}
            withLQIP={false}
            src={image.url}
            lowResSrc={getGraphCmsImageParams(image.url)}
            srcSm={image?.mobile?.url}
            lowResSrcSm={getGraphCmsImageParams(image?.mobile?.url)}
            srcMd={image?.tablet?.url}
            lowResSrcMd={getGraphCmsImageParams(image?.tablet?.url)}
            alt={image.alt}
            rounded
          />
        ) : null}
      </StyledCtaImageColumn>
      <StyledCtaTextColumn alignment={alignment}>{children}</StyledCtaTextColumn>
    </StyledCtaRow>
  )
}
