import React, { useState } from 'react'
import {
  StyledInputRange,
  StyledInputRangeBubble,
  StyledInputRangeBubbleContainer,
  StyledInputRangeBubblePosition,
  StyledInputRangeBubbleTypo,
  StyledInputRangeContainer,
  StyledInputRangeMarkLine,
  StyledInputRangeMarks,
  StyledInputRangeMarkTypo,
  StyledInputRangeThumb,
} from './InputRange.styled'

export type InputRangeProps = Pick<JSX.IntrinsicElements['input'], 'name' | 'step' | 'min' | 'max' | 'value'> & {
  markAmount?: number
  allowMoreThanMax?: boolean
  withBubble?: boolean
  showMarks?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const InputRange: React.FC<InputRangeProps> = (props) => {
  const {
    name = 'input-range',
    step = '0.1',
    markAmount = 0,
    min = '0',
    max = '1',
    value = '1',
    allowMoreThanMax = false,
    withBubble = true,
    showMarks = false,
    onChange,
  } = props

  const [isSliding, setIsSliding] = useState(false)
  const percentage = ((+value - +min) * 100) / (+max - +min)

  const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(ev)
    }
  }

  const calcIntervalLabel = (interval: number): number => Math.round(interval * ((+max - +min) / markAmount) + +min)

  return (
    <StyledInputRangeContainer>
      {withBubble && (
        <StyledInputRangeBubbleContainer>
          <StyledInputRangeBubblePosition style={{ left: `${percentage}%` }}>
            <StyledInputRangeBubble isSliding={isSliding}>
              <StyledInputRangeBubbleTypo
                color="primary"
                fontFamily="default"
                limitLines={1}
                tag="span"
                weight="regular"
              >
                {Math.round(parseFloat(value as string) * 10)}
              </StyledInputRangeBubbleTypo>
            </StyledInputRangeBubble>
          </StyledInputRangeBubblePosition>
        </StyledInputRangeBubbleContainer>
      )}
      <StyledInputRangeThumb style={{ left: `${percentage}%` }} />
      <StyledInputRange
        type="range"
        name={name}
        list={name}
        step={step}
        min={min}
        max={max}
        value={value}
        onMouseDown={() => setIsSliding(true)}
        onTouchStart={() => setIsSliding(true)}
        onMouseUp={() => setIsSliding(false)}
        onTouchEnd={() => setIsSliding(false)}
        onChange={onChangeHandler}
      />
      {showMarks && markAmount > 0 && (
        <StyledInputRangeMarks>
          {Array.from({ length: markAmount + 1 }, (_, interval) => (
            <StyledInputRangeMarkLine
              key={interval}
              index={interval}
              markAmount={markAmount}
              left={((calcIntervalLabel(interval) - +min) * 100) / (+max - +min)}
            >
              <StyledInputRangeMarkTypo weight="semibold" fontSize="lg" limitLines={1}>
                {calcIntervalLabel(interval)} {allowMoreThanMax && interval === markAmount && '+'}
              </StyledInputRangeMarkTypo>
            </StyledInputRangeMarkLine>
          ))}
        </StyledInputRangeMarks>
      )}
    </StyledInputRangeContainer>
  )
}
