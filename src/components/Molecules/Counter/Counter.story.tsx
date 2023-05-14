import { boolean, color, date, number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Counter } from './Counter'
import { CounterItem } from './CounterItem'
import { CounterWithTimer } from './CounterWithTimer'

const counterKnobs = () => ({
  maxDaysRange: number('Max Days Range', 14),
  maxSize: select('Max Size', ['lg', 'sm'], 'lg'),
  colors: {
    fill: color('Circle Fill Color', '#00000000'),
    fontColor: color('Font Color', '#272422'),
    circleColor: color('Circle Color', '#cfcbca'),
    progressColor: color('Progress Color', '#df0000'),
  },
  outline: boolean('Outline', false),
  backgroundColor: color('Background Color', '#fff'),
  lastDayShowSecondsHideDays: boolean('Hide Days And Show Seconds On Last Day', true),
})

storiesOf('Design System/Molecules/Counter', module)
  .add('Counter With Timer', () => {
    const toDate = date('To', new Date(new Date().getTime() + (86400 * 11 + 6) * 1000))
    const setToUTCToUndefined = boolean('Loading (set "toUTC" to undefined)', false)
    const props = {
      ...counterKnobs(),
      showSeconds: boolean('Show seconds', true),
    }
    return (
      <div style={{ background: props.backgroundColor }}>
        <CounterWithTimer toUTC={setToUTCToUndefined ? undefined : new Date(toDate).toUTCString()} {...props} />
      </div>
    )
  })
  .add('Counter Hides Days and Shows Seconds', () => {
    const toDate = date('To', new Date(new Date().getTime() + (86400 + 3) * 1000))
    const props = {
      ...counterKnobs(),
      showSeconds: boolean('Show seconds', false),
    }
    return (
      <div style={{ background: props.backgroundColor }}>
        <CounterWithTimer toUTC={new Date(toDate).toUTCString()} {...props} />
      </div>
    )
  })
  .add('Counter', () => {
    const days = number('Days', 12)
    const hours = number('Hours', 2)
    const minutes = number('Minutes', 11)
    const seconds = number('Seconds', 59)
    const { maxSize, colors, outline, backgroundColor, maxDaysRange } = counterKnobs()
    const loading = boolean('Loading', false)
    return (
      <div style={{ background: backgroundColor }}>
        <Counter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          showSeconds
          maxSize={maxSize}
          colors={colors}
          outline={outline}
          maxDaysRange={maxDaysRange}
          loading={loading}
        />
      </div>
    )
  })
  .add('Counter Item', () => {
    const centerValue = number('Center Value', 15)
    const size = select('Size', ['lg', 'sm'], 'lg')
    const fontColor = color('Font Color', '#272422')
    const circleColor = color('Circle Color', '#cfcbca')
    const progressColor = color('Progress Color', '#df0000')
    const outline = boolean('Outline', false)
    const backgroundColor = color('Background Color', '#fff')
    const loading = boolean('Loading', false)
    return (
      <div style={{ background: backgroundColor }}>
        <CounterItem
          label={'Minuten'}
          centerValue={centerValue}
          maxValue={60}
          size={size}
          colors={{ fontColor, circleColor, progressColor }}
          outline={outline}
          loading={loading}
        />
      </div>
    )
  })
