import React from 'react'
import { animated, config, useSpring } from 'react-spring'
import { css, styled } from '@/styles/styled'

const StyledCircle = styled.circle`
  -moz-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  -o-transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  cursor: pointer;
`

interface CircleProps {
  hoverColor: string
}

const StyledUnactive = styled(StyledCircle)`
  &:hover {
    fill: ${({ hoverColor }: CircleProps) => hoverColor};
  }
`

interface IconProps {
  dotMargin?: string
}

const StyledIcon = styled.svg`
  ${({ dotMargin }: IconProps) =>
    dotMargin &&
    css`
      margin: ${dotMargin};
    `}
`

const AnimatedIcon = animated(StyledIcon)
const AnimatedCircle = animated(StyledCircle)

interface RoundProps {
  index: number
  current?: number
  duration?: number
  width?: number
  lineStroke?: number
  dotDifference?: number
  selected?: boolean
  color?: string
  margin?: string
  springLoading?: boolean
  onClick: ({ index }: { index: number }) => void
  withAnimation?: boolean
}

export const Round = ({
  index,
  current = -1,
  duration = 4000,
  width = 24,
  lineStroke = 1,
  dotDifference = 8,
  selected = false,
  color = 'grey',
  margin,
  springLoading = true,
  onClick,
  withAnimation = false,
}: RoundProps) => {
  const active = selected || index === current

  const dotWidth = width / 2 - dotDifference

  const fullRadius = width / 2
  const radius = width / 2 - lineStroke / 2
  const circumference = radius * 2 * Math.PI

  const { strokeOffset } = useSpring({
    config: { duration },
    from: { strokeOffset: 0 },
    strokeOffset: withAnimation ? 100 : 0,
    reset: active,
  })

  const { rotation } = useSpring({
    config: springLoading ? config.molasses : { duration },
    from: { rotation: -90 },
    rotation: withAnimation ? 270 : -90,
    reset: active,
  })

  return (
    <AnimatedIcon height={width} width={width} key={index} onClick={onClick} dotMargin={margin}>
      {active && (
        <AnimatedCircle
          r={radius}
          cx={fullRadius}
          cy={fullRadius}
          strokeWidth={lineStroke}
          stroke={color}
          fill={'transparent'}
          transform={rotation.interpolate((x: any) => `rotate(${x})`)}
          strokeLinecap={'round'}
          strokeDashoffset={strokeOffset.interpolate((x: any) => circumference - (x / 100) * circumference)}
          strokeDasharray={`${circumference} ${circumference}`}
        />
      )}
      <StyledUnactive
        hoverColor={color}
        r={dotWidth}
        fill={active ? color : 'transparent'}
        cx={fullRadius}
        cy={fullRadius}
        strokeWidth={lineStroke}
        stroke={color}
        strokeDasharray={0}
      />
    </AnimatedIcon>
  )
}
