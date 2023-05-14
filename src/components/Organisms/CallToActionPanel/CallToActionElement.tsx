import React from 'react'
import { Button } from '@/components/Atoms/Button'
import { Heading } from '@/components/Atoms/Typography'
import { ShowMore, ShowMoreProps } from '@/components/Atoms/ShowMore'

export type ActionElement = {
  headline?: string
  copyText?: string
  href?: string
  route?: string
  buttonLabel?: string
}

export interface CallToActionElementProps {
  element: ActionElement
  showMore?: ShowMoreProps
  showReadMore: boolean
  richTextCopy: string | React.ReactNode
}

export const CallToActionElement: React.FC<CallToActionElementProps> = ({
  element,
  showMore,
  showReadMore,
  richTextCopy,
}) => {
  return (
    <>
      <Heading scale="level-1" tag="h1" weight="regular" margin="0" padding={undefined}>
        {element?.headline}
      </Heading>
      {showReadMore && showMore ? (
        <ShowMore
          lineHeight={19}
          fontSize={14}
          fontColor="grey5"
          fadeOutBackgroundColor="white"
          labelAlignment="flex-end"
          fadeOutHeight={35}
          numOfLines={showMore?.numOfLines || 4}
          showMoreText={showMore?.showMoreText}
          showLessText={showMore?.showLessText}
        >
          {richTextCopy}
        </ShowMore>
      ) : (
        richTextCopy
      )}
      {element?.buttonLabel && (
        <Button href={element?.href} to={element?.route} actionType="primary" size="md" weight="bold">
          {element?.buttonLabel}
        </Button>
      )}
    </>
  )
}
