import React, { FC, useEffect, useRef, useState } from 'react'
import { Icon, SkeletonBlockItem } from '@/index'
import { ShowMoreProps } from './ShowMore.interface'
import { ContentWrapper, FadeOutOverlay, FlexItem, LabelWrapper, Wrapper } from './ShowMore.styled'
import { OtherArrow } from '@matthill8286/atomic-icon-library'

export const ShowMore: FC<ShowMoreProps> = ({
  lineHeight,
  numOfLines,
  children,
  labelAlignment = 'flex-start',
  labelNoLineHeight = false,
  showMoreText,
  showLessText,
  noShowLess = false,
  fadeOutHeight,
  fadeOutBackgroundColor,
  fontSize = 16,
  fontColor,
  fontWeight,
  padding,
  loading,
}) => {
  const [isCollapsed, setCollapsed] = useState(true)
  const [isLargerContent, setLargerContent] = useState(false)
  const content = useRef<HTMLDivElement>(null)
  const displayLabel = isCollapsed || !noShowLess
  const toggleCollapse = () => setCollapsed(!isCollapsed)
  const visibleHeight = numOfLines * lineHeight
  useEffect(() => {
    if (visibleHeight < Number(content.current?.scrollHeight)) {
      setLargerContent(true)
    }
  }, [visibleHeight])

  if (loading) {
    return <SkeletonBlockItem width="80%" height="auto" />
  }

  return (
    <>
      <Wrapper visibleHeight={visibleHeight} isCollapsed={isCollapsed}>
        <ContentWrapper ref={content}>{children}</ContentWrapper>
        {isLargerContent && isCollapsed && (
          <FadeOutOverlay
            fadeOutHeight={Math.min(fadeOutHeight || 0, visibleHeight)}
            fadeOutBackgroundColor={fadeOutBackgroundColor}
          />
        )}
      </Wrapper>
      {isLargerContent && displayLabel && (
        <LabelWrapper
          labelAlignment={labelAlignment}
          fontSize={fontSize}
          fontColor={fontColor}
          fontWeight={fontWeight}
          onClick={toggleCollapse}
          padding={padding}
          lineHeight={labelNoLineHeight ? 0 : lineHeight}
        >
          <FlexItem>
            {isCollapsed ? showMoreText : showLessText}
            <Icon rotate={isCollapsed ? 90 : -90} height={fontSize} width={fontSize} alignSelf="center">
              <OtherArrow />
            </Icon>
          </FlexItem>
        </LabelWrapper>
      )}
    </>
  )
}
