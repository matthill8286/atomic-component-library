import * as React from 'react'

import { FlexItem } from '@/components/Helper/FlexBox'
import { TimelineProps, TimelineItem } from './Timeline.interface'
import {
  StyledIconTextWrapper,
  StyledItem,
  StyledItemContentWrapper,
  StyledItemHeading,
  StyledHeading,
  StyledTimeWrapper,
  StyledCopyText,
} from './Timeline.styled'

export const Timeline: React.FC<TimelineProps> = ({ headline, items }) => {
  return (
    <StyledTimeWrapper>
      {headline && (
        <StyledHeading tag="h1" scale="level-4" bold>
          {headline}
        </StyledHeading>
      )}
      <div>
        {items.map((item: TimelineItem, index) => {
          return (
            <StyledItem key={index}>
              <FlexItem>
                <StyledIconTextWrapper>{item.icon}</StyledIconTextWrapper>
                <span />
              </FlexItem>
              <FlexItem>
                <StyledItemContentWrapper>
                  {item.title && (
                    <StyledItemHeading tag="h1" scale="level-5" bold>
                      {item.title}
                    </StyledItemHeading>
                  )}
                  <StyledCopyText fontSize="sm" tag="p">
                    {item.description}
                  </StyledCopyText>
                </StyledItemContentWrapper>
              </FlexItem>
            </StyledItem>
          )
        })}
      </div>
    </StyledTimeWrapper>
  )
}
