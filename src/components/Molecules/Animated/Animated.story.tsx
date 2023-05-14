import { action } from '@storybook/addon-actions'
import { boolean, color, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React, { useReducer, useState } from 'react'
import { Linear } from './Linear'
import { Round } from './Round'

const initialState = { current: 0 }
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      if (state.current >= action.amount - 1) {
        return { current: 0 }
      }
      return { current: state.current + 1 }
    case 'decrement':
      if (state.current <= 0) {
        return { current: action.amount - 1 }
      }
      return { current: state.current - 1 }
    default:
      return { current: action.value }
  }
}

storiesOf('Design System/Molecules/Pagination/Animated', module)
  .add('Row (Example)', () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const amount = number('Amount', 8)
    const springLoading = boolean('Spring Load', true)
    const dotColor = color('Color', '#918e8c')
    const backgroundColor = color('Background Color', '#cfcbca')

    return (
      <>
        <div>
          <button onClick={() => dispatch({ type: 'decrement', amount })}>Prev</button>
        </div>
        <div style={{ margin: '16px 0' }}>
          {[...Array(amount)].map((e, i) => (
            <Round
              key={i}
              margin={'0 3px'}
              index={i}
              current={state.current}
              springLoading={springLoading}
              color={dotColor}
              onClick={(dot) => {
                action('Dot Clicked')(dot)
                dispatch({ type: 'set', value: i })
              }}
            />
          ))}
        </div>
        <div style={{ margin: '16px 0' }}>
          <div style={{ display: 'flex' }}>
            {[...Array(amount)].map((e, i) => (
              <Linear
                key={i}
                margin={'0 3px'}
                index={i}
                lineStroke={5}
                current={state.current}
                color={dotColor}
                backgroundColor={backgroundColor}
                onClick={(dot) => {
                  action('Linear Clicked')(dot)
                  dispatch({ type: 'set', value: i })
                }}
              />
            ))}
          </div>
        </div>
        <div>
          <button onClick={() => dispatch({ type: 'increment', amount })}>Next</button>
        </div>
      </>
    )
  })
  .add('Individual', () => {
    const [on, toggle] = useState(true)
    const timeOptions = {
      range: true,
      min: 1000,
      max: 10000,
      step: 1000,
    }
    const widthOptions = {
      range: true,
      min: 20,
      max: 50,
      step: 1,
    }
    const lineStrokeOptions = {
      range: true,
      min: 1,
      max: 16,
      step: 1,
    }

    const dotDifferenceOptions = {
      range: true,
      min: 1,
      max: 30,
      step: 1,
    }

    const props = {
      index: 1,
      duration: number('Duration (ms)', 4000, timeOptions),
      width: number('Width', 24, widthOptions),
      lineStroke: number('Line Stroke', 1, lineStrokeOptions),
      dotDifference: number('Dot Difference', 8, dotDifferenceOptions),
      selected: boolean('Selected', false),
      springLoading: boolean('Spring Load', false),
      onClick: action('Dot clicked'),
    }

    return (
      <>
        <button style={{ margin: ' 0 0 24px' }} onClick={() => toggle((prev) => !prev)}>
          Rerender
        </button>
        <div>{on && <Round {...props} />}</div>
      </>
    )
  })
  .add('Linear', () => {
    const [on, toggle] = useState(true)
    const timeOptions = {
      range: true,
      min: 1000,
      max: 10000,
      step: 1000,
    }
    const widthOptions = {
      range: true,
      min: 20,
      max: 500,
      step: 10,
    }
    const lineStrokeOptions = {
      range: true,
      min: 1,
      max: 16,
      step: 1,
    }
    const props = {
      index: 1,
      duration: number('Duration (ms)', 4000, timeOptions),
      width: number('Width', 35, widthOptions),
      lineStroke: number('Line Stroke', 10, lineStrokeOptions),
      selected: boolean('Selected', false),
      onClick: action('Dot clicked'),
      color: 'red',
      backgroundColor: 'grey',
      margin: '16px',
    }

    return (
      <>
        <button style={{ margin: ' 0 0 24px' }} onClick={() => toggle((prev) => !prev)}>
          Rerender
        </button>
        <div>{on && <Linear {...props} />}</div>
      </>
    )
  })
