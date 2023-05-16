/* eslint-disable prettier/prettier */
import each from 'jest-each'
import { getTimeDiff } from './getTimeDiff'

const START_DATE = new Date(2019, 0, 0, 0, 0, 0)

each`
  start         | end                                                                             | expected
  ${START_DATE} | ${new Date(2018, 0)}                                               | ${{
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}}
  ${START_DATE} | ${START_DATE}                                                                   | ${{
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}}
  ${START_DATE} | ${new Date(2019, 0, 0, 0, 0, 1)}      | ${{ days: 0, hours: 0, minutes: 0, seconds: 1 }}
  ${START_DATE} | ${new Date(2019, 0, 0, 0, 1, 0)}      | ${{ days: 0, hours: 0, minutes: 1, seconds: 0 }}
  ${START_DATE} | ${new Date(2019, 0, 0, 1, 0, 0)}      | ${{ days: 0, hours: 1, minutes: 0, seconds: 0 }}
  ${START_DATE} | ${new Date(2019, 0, 1, 0, 0, 0)}      | ${{ days: 1, hours: 0, minutes: 0, seconds: 0 }}
  ${START_DATE} | ${new Date(2020, 0, 0, 0, 0, 0)}      | ${{ days: 365, hours: 0, minutes: 0, seconds: 0 }}
  ${START_DATE} | ${new Date(2019, 11, 30, 23, 59, 59)} | ${{ days: 364, hours: 23, minutes: 59, seconds: 59 }}
`.test(`should return $expected for start: $start and end: $end`, ({ start, end, expected }) => {
  expect(getTimeDiff(start, end)).toEqual(expected)
})
