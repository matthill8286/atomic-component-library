import each from 'jest-each'
import { getNewQuantity } from '@/components/Molecules/AmountPicker/helpers/getNewQuantity'

describe('getNewQuantity(...)', () => {
  each`
  quantity  | buttontype  | expected  | max    | min
  ${5}      | ${'plus'}   | ${6}      | ${10} | ${1}
  ${5}      | ${'minus'}  | ${4}      | ${10} | ${1}
  ${1}      | ${'minus'}  | ${1}      | ${10} | ${1}
  ${0}      | ${'minus'}  | ${1}      | ${10} | ${1}
  ${10}     | ${'plus'}   | ${10}     | ${10} | ${1}
  ${11}     | ${'plus'}   | ${10}     | ${10} | ${1}
`.test(
    'should return $expected for quantity $quantity, buttonType $buttontype, min $min, max $max',
    ({ buttontype, expected, max, min, quantity }) => {
      expect(getNewQuantity(buttontype, quantity, min, max)).toEqual(expected)
    },
  )
})
