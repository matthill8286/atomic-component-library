import React, { useState, useEffect } from 'react'
import Rheostat, { PublicState } from 'rheostat'

import 'rheostat/initialize'

import { RangeSliderProps } from './RangeSlider.interface'
import { StyledErrorWrapper, StyledRangeInputs, StyledRangeSliderWrapper } from './RangeSlider.styled'
import { Input, InputState, InputType } from '@/components/Atoms/Input'
import { CopyText } from '@/components/Atoms/Typography'
import { FlexBox } from '@/components/Helper'

const isntMinIncluded = ({ min, currentMin, currentMax }) => {
  return isNaN(currentMin) || currentMin > currentMax || currentMin < min
}

const isntMaxIncluded = ({ max, currentMin, currentMax }) => {
  return isNaN(currentMax) || currentMax < currentMin || currentMax > max
}

const sanitizeValues = ({ min, max, values }) => {
  let currentMin = parseInt(values[0], 10)
  let currentMax = parseInt(values[1], 10)

  if (isntMinIncluded({ min, currentMin, currentMax })) {
    currentMin = min
  }

  if (isntMaxIncluded({ max, currentMin, currentMax })) {
    currentMax = max
  }

  return { min, max, values: [currentMin, currentMax] }
}

export const RangeSlider: React.FC<RangeSliderProps> = (props) => {
  const {
    className = '',
    margin = '',
    padding = '',
    buttonsElevation = 0,
    min = 0,
    max = 0,
    values = [],
    errorMessage,
    unitMasked = '',
    disabled,
    onChange,
    ...rest
  } = props

  const [inputMin, setInputMin] = useState<number | undefined>(values?.[0])
  const [inputMax, setInputMax] = useState<number | undefined>(values?.[1])
  const [showError, setError] = useState(false)

  const mainMask = String(max)
    .split('')
    .map(() => '9')
    .join('')

  const inputMaskProps = {
    mask: `${mainMask} ${unitMasked}`,
    maskChar: ' ',
    formatChars: {
      '9': '[0-9]',
      '*': '[A-Za-z0-9]',
    },
  }

  const handleRheostatChange = (state) => {
    onChange({ ...state, changeMethod: 'slider' })
  }

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target
    const parsedValue = parseInt(value, 10) || undefined

    if (name === 'min') {
      setInputMin(parsedValue)
      if (isntMinIncluded({ min, currentMin: parsedValue, currentMax: values[1] })) {
        setError(true)
      } else {
        setError(false)
      }
    } else if (name === 'max') {
      setInputMax(parsedValue)
      if (isntMaxIncluded({ max, currentMin: values[0], currentMax: parsedValue })) {
        setError(true)
      } else {
        setError(false)
      }
    }
  }

  const onBlurHandler: React.FocusEventHandler<HTMLInputElement> = (event) => {
    const { name } = event.target
    const sanitizedValues = sanitizeValues({ min, max, values: [inputMin, inputMax] })
    if (name === 'min') {
      setInputMin(sanitizedValues.values[0])
      onChange({ ...sanitizedValues, changeMethod: 'text_input' })
    } else if (name === 'max') {
      setInputMax(sanitizedValues.values[1])
      onChange({ ...sanitizedValues, changeMethod: 'text_input' })
    }
    setError(false)
  }

  const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      const sanitizedValues = sanitizeValues({ min, max, values: [inputMin, inputMax] })
      setInputMin(sanitizedValues.values[0])
      setInputMax(sanitizedValues.values[1])
      onChange({ ...sanitizedValues, changeMethod: 'text_input' })
      setError(false)
    }
  }

  const onValuesUpdated = (state: PublicState) => {
    const [currentMin, currentMax] = state.values
    setInputMin(currentMin)
    setInputMax(currentMax)
  }

  const defaultInputProps = {
    state: disabled ? 'disabled' : ('idle' as InputState),
    inputType: 'text' as InputType,
    inputMaskProps,
    onBlur: onBlurHandler,
    onChange: onChangeHandler,
    onKeyDown: onKeyDownHandler,
  }

  // sync props with state
  useEffect(() => {
    const [minValue, maxValue] = values
    if (minValue) {
      setInputMin(minValue)
    }
    if (maxValue) {
      setInputMax(maxValue)
    }
  }, [values])

  return (
    <StyledRangeSliderWrapper
      {...rest}
      className={className}
      margin={margin}
      padding={padding}
      buttonsElevation={buttonsElevation}
    >
      <StyledRangeInputs>
        <FlexBox>
          <Input {...defaultInputProps} inputProps={{ name: 'min', 'aria-label': 'min', id: 'min' }} value={inputMin} />
          <CopyText fontSize="md" margin="md sm">
            -
          </CopyText>
          <Input {...defaultInputProps} inputProps={{ name: 'max', 'aria-label': 'max', id: 'max' }} value={inputMax} />
        </FlexBox>
      </StyledRangeInputs>
      <Rheostat
        min={min}
        max={max}
        values={values}
        onChange={handleRheostatChange}
        onValuesUpdated={onValuesUpdated}
        disabled={disabled}
      />
      <StyledErrorWrapper>{showError && <CopyText color="error">{errorMessage}</CopyText>}</StyledErrorWrapper>
    </StyledRangeSliderWrapper>
  )
}

RangeSlider.displayName = 'RangeSlider'

const areEqual = (prevProps: RangeSliderProps, nextProps: RangeSliderProps) =>
  prevProps.values[0] === nextProps.values[0] &&
  prevProps.values[1] === nextProps.values[1] &&
  prevProps.searchParamsStr === nextProps.searchParamsStr

export const MemoizedRangeSlider = React.memo(RangeSlider, areEqual)
