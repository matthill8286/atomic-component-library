import React from 'react'
import { animated, useSpring } from 'react-spring'
import { styled } from '@/styles/styled'

interface LineProps {
  lineWidth?: number
  lineHeight?: number
  lineMargin?: number
  backgroundColor?: string
  hoverColor: string
}

const StyledOuterLine = styled.div`
  cursor: pointer;
  border-radius: ${({ lineHeight }: LineProps) => (lineHeight ? `${lineHeight / 2}px` : '4px')};
  overflow: hidden;
  width: ${({ lineWidth }: LineProps) => (lineWidth ? `${lineWidth}px` : '50px')};
  margin: ${({ lineMargin }: LineProps) => lineMargin && lineMargin};
  height: ${({ lineHeight }: LineProps) => (lineHeight ? `${lineHeight}px` : '8px')};
  background-color: ${({ backgroundColor }: LineProps) => (backgroundColor ? backgroundColor : 'grey')};

  &:hover {
    background-color: ${({ hoverColor }: LineProps) => hoverColor};
  }
`

const StyledInnerLine = styled.div`
  height: ${({ lineHeight }: LineProps) => (lineHeight ? `${lineHeight}px` : '8px')};
  background-color: ${({ backgroundColor }: LineProps) => backgroundColor ?? 'black'};
`

const AnimatedOuterLine = animated(StyledOuterLine)
const AnimatedInnerLine = animated(StyledInnerLine)

interface DotsProps {
  index: number
  current?: number
  duration?: number
  width?: number
  lineStroke?: number
  selected?: boolean
  color?: string
  backgroundColor?: string
  margin?: string
  onClick: ({ index }: { index: number }) => void
}

export const Linear = ({
  index,
  current = -1,
  duration = 4000,
  width = 35,
  lineStroke = 1,
  selected = false,
  color = '#918e8c',
  backgroundColor = '#cfcbca',
  margin,
  onClick,
}: DotsProps) => {
  const active = selected || index === current

  const { lineWidth } = useSpring({
    config: { duration },
    from: { lineWidth: 0 },
    lineWidth: 100,
    reset: active,
  })

  return (
    <AnimatedOuterLine
      hoverColor={color}
      onClick={onClick}
      lineWidth={width}
      lineHeight={lineStroke}
      backgroundColor={backgroundColor}
      lineMargin={margin}
    >
      {active && (
        <AnimatedInnerLine
          style={{ width: lineWidth.interpolate((x) => `${x}%`) }}
          lineHeight={lineStroke}
          backgroundColor={color}
        />
      )}
    </AnimatedOuterLine>
  )
}
