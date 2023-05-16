import { findNextOption } from './findNextOption'

describe('<SearchableDropdown /> findNextOption()', () => {
  const options = [
    { id: '1', label: 'BMW', category: 'cars' },
    { id: '2', label: 'Audi', category: 'cars' },
    { id: '3', label: 'Mercedes', category: 'cars' },
    { id: '4', label: 'Porsche', category: 'cars' },
  ]

  it('Returns correct option for the direction if no focused option', () => {
    expect(findNextOption(options, null, 'ArrowUp')).toEqual(options[options.length - 1])
    expect(findNextOption(options, null, 'ArrowDown')).toEqual(options[0])
  })

  it('Returns correct option for "ArrowUp"', () => {
    expect(findNextOption(options, options[2], 'ArrowUp')).toEqual(options[1])
    expect(findNextOption(options, options[0], 'ArrowUp')).toEqual(options[3]) // Loop back to end
  })

  it('Returns correct option for "ArrowDown"', () => {
    expect(findNextOption(options, options[2], 'ArrowDown')).toEqual(options[3])
    expect(findNextOption(options, options[3], 'ArrowDown')).toEqual(options[0]) // Loop back to start
  })
})
