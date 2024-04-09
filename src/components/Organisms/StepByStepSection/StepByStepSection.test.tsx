import * as React from 'react'
import { alternateTheme } from '@/index'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { StepByStepSection } from './index'
import { ColorStyle } from './StepByStepSection.types'

const currentUrl = window.location.href
const mockUrl = 'https://en.wikipedia.org/wiki/Bremen'
const mockAnchor = '#anchor'
const headline = 'Town Musicians of Bremen.'
const copyText =
  'In the story, a donkey, a dog, a cat, and a rooster leave their homes and set out together.'
const maxAmountOfSteps = 6

const mockTwoFields = [
  {
    stepText: 'they see a lighted cottage...',
    stepLinkText: 'On the way to Bremen',
    stepLink: mockUrl,
  },
  {
    stepText: 'they look inside and see four robbers',
    stepLinkText: 'Enjoying their ill-gotten gains',
    stepLink: mockUrl,
  },
]

const mockSevenFields = [
  {
    stepText: 'They decide to go to Bremen and become musicians there',
    stepLinkText: 'Read more',
    stepLink: `${currentUrl + mockAnchor}`,
  },
  {
    stepText: 'On the way they see a lighted cottage with four robbers in it.',
    stepLinkText: 'Read more',
    stepLink: mockUrl,
  },
  {
    stepText: "Standing on each other's backs, they scare the robbers away",
    stepLinkText: 'Read more',
    stepLink: mockUrl,
  },
  {
    stepText: 'The animals take possession of the house',
    stepLinkText: 'Read more',
    stepLink: mockUrl,
  },
  {
    stepText: 'A robber returns to check, and runs again from these "beasts"',
    stepLinkText: 'Read more',
    stepLink: mockUrl,
  },
  {
    stepText: 'With the robbers gone, the animals live happily ever after',
    stepLinkText: 'Read more',
    stepLink: mockUrl,
  },
  {
    stepText: 'This step should never be shown',
    stepLinkText: 'Read more',
    stepLink: 'https://en.wikipedia.org/wiki/Town_Musicians_of_Bremen',
  },
]

describe('StepByStepSection', () => {
  describe('renders correctly with different style options', () => {
    it('renders correctly with MediaMarkt primary styling', () => {
      const section = renderWithTheme(
        <StepByStepSection
          background={ColorStyle.PRIMARY}
          headline={headline}
          copyText={copyText}
          fields={mockTwoFields}
        />
      )

      expect(section).toMatchSnapshot()
    })

    it('renders correctly with MediaMarkt grey styling', () => {
      const section = renderWithTheme(
        <StepByStepSection
          background={ColorStyle.GREY}
          headline={headline}
          copyText={copyText}
          fields={mockTwoFields}
        />
      )
      expect(section).toMatchSnapshot()
    })

    it('renders correctly with Saturn primary styling', () => {
      const section = renderWithTheme(
        <StepByStepSection
          background={ColorStyle.PRIMARY}
          headline={headline}
          copyText={copyText}
          fields={mockTwoFields}
        />,
        alternateTheme
      )
      expect(section).toMatchSnapshot()
    })
    it('renders correctly with Saturn grey styling', () => {
      const section = renderWithTheme(
        <StepByStepSection
          background={ColorStyle.GREY}
          headline={headline}
          copyText={copyText}
          fields={mockTwoFields}
        />,
        alternateTheme
      )
      expect(section).toMatchSnapshot()
    })
  })

  describe('StepByStepSection:Steps', () => {
    const component = mountWithTheme(
      <StepByStepSection
        background={ColorStyle.GREY}
        headline={headline}
        copyText={copyText}
        fields={mockSevenFields}
      />
    )

    const flexbox = component
      .find('FlexBox')
      .find('div')
      .first()

    const steps = flexbox.find('StepElementstyled__StyledStepContainer')

    it('renders right max. amount of steps', () => {
      expect(steps.length).toEqual(maxAmountOfSteps)
    })

    it('renders right max. amount of connection lines', () => {
      const lines = flexbox.find('StepElementstyled__StyledConnectionLine')
      const expectedlineAmount = maxAmountOfSteps - 1

      expect(lines.length).toEqual(expectedlineAmount)
    })

    it('renders icon index and color correctly', () => {
      const secondStepIconProps = steps
        .find('IndexIcon')
        .at(1)
        .props()
      const expectedProps = { content: '02', color: 'black' }

      expect(secondStepIconProps).toEqual(expectedProps)
    })

    it('renders text correctly', () => {
      const firstStepText = steps
        .find('CopyText')
        .first()
        .find('p')
        .text()

      expect(firstStepText).toEqual(mockSevenFields[0].stepText)
    })

    it('renders link correctly', () => {
      const firstStepLink = steps.at(1).find('a')
      const receivedResult = { text: firstStepLink.text(), link: firstStepLink.props().href }
      const expectedResult = {
        text: mockSevenFields[1].stepLinkText,
        link: mockSevenFields[1].stepLink,
      }

      expect(receivedResult).toEqual(expectedResult)
    })

    beforeEach(() => {
      const useStateSpied = jest.spyOn(React, 'useState')
      const useEffectSpied = jest.spyOn(React, 'useEffect')
      const setURLFn = jest.fn()

      useStateSpied.mockReturnValue(['https://en.wikipedia.org/wiki/Bremen', setURLFn])
      useEffectSpied.mockImplementation(cb => cb())
    })

    it('converts link with anchor correctly', () => {
      const firstStepLink = steps.first().find('a')

      const receivedLink = firstStepLink.props().href
      expect(receivedLink).toEqual(mockAnchor)
    })
  })
})
