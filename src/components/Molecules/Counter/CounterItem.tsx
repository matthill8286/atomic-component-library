import React, { useEffect, useState } from 'react'
import { Typo } from '@/components/Atoms/Typography'
import { styled } from '@/styles/styled'
import { useInterval } from '@/utils/useInterval'
import { CounterItemColors, CounterSize } from './Counter.interface'

const STROKE_WIDTH_LG = 8
const STROKE_WIDTH_SM = 4
const OUTLINE_OFFSET = 4

const MAX_RADIUS_LG = 164
const MAX_RADIUS_SM = 96
const MIN_RADIUS_SM = 85

const COUNTER_VALUE_FONT_SIZE_LG = '80px'
const COUNTER_VALUE_FONT_SIZE_SM = '32px'

const COUTER_VALUE_OFFSET_TOP_LG = '60%'
const COUTER_VALUE_OFFSET_TOP_SM = '51%'

const COUTER_LABEL_OFFSET_TOP_LG = '-55px'
const COUTER_LABEL_OFFSET_TOP_SM = '-48px'

const StyledCounterItem = styled.div<{ size: CounterSize }>(
  ({ size }) => `
  max-height: ${size === 'sm' ? MAX_RADIUS_SM : MAX_RADIUS_LG}px;
  min-height: ${MIN_RADIUS_SM}px;
  max-width: ${size === 'sm' ? MAX_RADIUS_SM : MAX_RADIUS_LG}px;
  min-width: ${MIN_RADIUS_SM}px;
`,
)

const StyledBgCircle = styled.circle<{ color?: string }>(
  ({ color, theme }) => `
  stroke: ${color || theme.color.grey2};
`,
)

const StyledProgressCircle = styled.circle<{ color?: string }>(
  ({ color, theme }) => `
  stroke: ${color || theme.color.primary};
`,
)

const StyledCounterValue = styled.text<{ size: CounterSize; color?: string }>(
  ({ color, size, theme }) => `
  font-weight: bold;
  font-family: ${theme.font.family.featured};
  fill: ${color || theme.color.grey5};
  font-size: ${size === 'sm' ? COUNTER_VALUE_FONT_SIZE_SM : COUNTER_VALUE_FONT_SIZE_LG};
`,
)

const StyledCounterLabelWrapper = styled.div<{ size: CounterSize; color?: string }>(
  ({ color, size, theme }) => `
  position: relative;
  text-align: center;
  top: ${size === 'sm' ? COUTER_LABEL_OFFSET_TOP_SM : COUTER_LABEL_OFFSET_TOP_LG};
  span {
    color: ${color || theme.color.grey4};
    font-size: ${size === 'sm' ? theme.font.size.xxs : theme.font.size.xs};
  }
`,
)

interface CounterItemProps {
  maxValue: number
  label: string
  centerValue: number
  size?: CounterSize
  colors?: CounterItemColors
  outline?: boolean
  loading?: boolean
}

export const CounterItem: React.FC<CounterItemProps> = ({
  maxValue,
  label,
  centerValue,
  size = 'lg',
  colors = {},
  outline = false,
  loading = false,
}): JSX.Element => {
  const [percentage, setPercentage] = useState(0)
  const [counter, setCounter] = useState(0)
  const { fill, fontColor, circleColor, progressColor } = colors
  const centerRadius = size === 'sm' ? MAX_RADIUS_SM / 2 : MAX_RADIUS_LG / 2
  const strokeWidth = size === 'sm' ? STROKE_WIDTH_SM : STROKE_WIDTH_LG
  const innerRadiusRegular = centerRadius - strokeWidth / 2
  const innerRadiusOutline = outline ? innerRadiusRegular - OUTLINE_OFFSET : innerRadiusRegular
  const perimeter = Math.PI * innerRadiusOutline * 2
  const strokeDashOffset = Math.round(((100 - Math.min(percentage, 98)) / 100) * perimeter)

  const initProgress = () => {
    return () => {
      if (loading) {
        setPercentage(!percentage ? 100 : 0)
        setCounter(counter + 1)
      } else {
        setPercentage((100 / maxValue) * centerValue)
      }
    }
  }
  useEffect(initProgress(), [])
  useEffect(() => {
    if (!loading) {
      setPercentage((100 / maxValue) * centerValue)
    }
  }, [centerValue, loading])

  useInterval(() => {
    if (loading) {
      setPercentage(!percentage ? 100 : 0)
      setCounter(counter + 1)
    }
  }, 1000)
  return (
    <StyledCounterItem size={size}>
      <svg
        height="100%"
        width="100%"
        viewBox={`${-strokeWidth / 2} ${-strokeWidth / 2} ${centerRadius * 2} ${centerRadius * 2}`}
      >
        <StyledBgCircle
          cx={innerRadiusRegular}
          cy={innerRadiusRegular}
          r={innerRadiusOutline}
          strokeWidth={strokeWidth + (outline ? OUTLINE_OFFSET * 2 : 0)}
          fill={fill ? fill : 'none'}
          color={circleColor}
        />
        <StyledProgressCircle
          transform={`rotate(${(loading ? (percentage ? 360 * counter : (counter + 1) * 360) : 360 * counter) + 270} ${
            outline ? innerRadiusOutline + OUTLINE_OFFSET : innerRadiusOutline
          } ${outline ? innerRadiusOutline + OUTLINE_OFFSET : innerRadiusOutline})`}
          cx={outline ? innerRadiusOutline + OUTLINE_OFFSET : innerRadiusOutline}
          cy={outline ? innerRadiusOutline + OUTLINE_OFFSET : innerRadiusOutline}
          r={innerRadiusOutline}
          strokeDasharray={perimeter}
          strokeWidth={strokeWidth + 0.5}
          strokeDashoffset={strokeDashOffset}
          strokeLinecap="round"
          fill="none"
          color={progressColor}
          style={{
            transition: `stroke-dashoffset 1s ease-out${loading ? ', transform 1s linear' : ''}`,
          }}
        />
        {!loading && (
          <StyledCounterValue
            x="50%"
            y={size === 'sm' ? COUTER_VALUE_OFFSET_TOP_SM : COUTER_VALUE_OFFSET_TOP_LG}
            dx={-strokeWidth / 2}
            textAnchor="middle"
            size={size}
            color={fontColor}
          >
            {centerValue < 10 ? '0' : ''}
            {centerValue}
          </StyledCounterValue>
        )}
      </svg>
      {!loading && (
        <StyledCounterLabelWrapper color={fontColor} size={size}>
          <Typo>{label}</Typo>
        </StyledCounterLabelWrapper>
      )}
    </StyledCounterItem>
  )
}
