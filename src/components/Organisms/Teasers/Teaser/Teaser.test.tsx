import React from 'react'
import { mountWithThemeAndRouter, renderWithThemeAndRouter } from '@/testRenderer'
import { Teaser } from './Teaser'
import { TeaserProps } from './Teaser.interface'

describe('Teaser', () => {
  const mockTeaserData: TeaserProps = {
    headline: 'High standards require sensible processes',
    contentText:
      'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
    image: 'public/images/teasers/project_teaser_600x450.jpg',
    altText: 'Teaser Picture1',
    mainLink: { to: '#', label: 'To the Moon!!' },
  }

  const mockTeaserData2: TeaserProps = {
    headline: 'saiyan Text!',
    contentText:
      'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
    image: 'public/images/teasers/project_teaser_600x450.jpg',
    altText: 'Teaser Picture2',
    mainLink: { to: '#', label: 'Can we filter??' },
  }

  const mockTeaserData4: TeaserProps = {
    headline: 'Simon & Art Garfunkel',
    mainLink: { to: '#', label: 'All wishes come true' },
    linkList: [
      { to: '#', label: 'Sound of Silence' },
      { to: '#', label: 'Homeward Bound' },
      { to: '#', label: 'Crazy nights at Alamo' },
    ],
  }

  describe('renders correctly', () => {
    it('as default teaser with badges', () => {
      const tree = renderWithThemeAndRouter(
        <Teaser
          headline={mockTeaserData.headline}
          contentText={mockTeaserData.contentText}
          image={mockTeaserData.image}
          altText={mockTeaserData.altText}
          mainLink={mockTeaserData.mainLink}
          orientation={'auto'}
          badges={[
            { id: 0, name: 'Featured' },
            { id: 1, name: 'Live!!!!' },
          ]}
        />
      )
      expect(tree).toMatchSnapshot()
    })

    it('as teaser with nothing but headline', () => {
      const tree = renderWithThemeAndRouter(<Teaser headline={mockTeaserData.headline} />)
      expect(tree).toMatchSnapshot()
    })

    it('as teaser in portrait mode', () => {
      const tree = renderWithThemeAndRouter(
        <Teaser
          headline={mockTeaserData2.headline}
          contentText={mockTeaserData2.contentText}
          image={mockTeaserData2.image}
          altText={mockTeaserData2.altText}
          mainLink={mockTeaserData2.mainLink}
          orientation="portrait"
        />
      )
      expect(tree).toMatchSnapshot()
    })

    it('as teaser without image', () => {
      const tree = renderWithThemeAndRouter(
        <Teaser
          headline={mockTeaserData.headline}
          contentText={mockTeaserData.contentText}
          mainLink={{
            to: mockTeaserData.mainLink?.to || '',
          }}
          orientation="portrait"
        />
      )
      expect(tree).toMatchSnapshot()
    })

    it('as foldable teaser ', () => {
      const tree = renderWithThemeAndRouter(
        <Teaser
          headline={mockTeaserData.headline}
          contentText={mockTeaserData.contentText}
          mainLink={mockTeaserData.mainLink}
          orientation="portrait"
          foldable={'always'}
        />
      )
      expect(tree).toMatchSnapshot()
    })

    it('as teaser with link list', () => {
      const tree = renderWithThemeAndRouter(
        <Teaser
          headline={mockTeaserData4.headline}
          mainLink={mockTeaserData4.mainLink}
          linkList={mockTeaserData4.linkList}
          orientation="portrait"
          foldable={'mobile'}
        />
      )
      expect(tree).toMatchSnapshot()
    })

    it('with custom headline tag', () => {
      const tree = renderWithThemeAndRouter(
        <Teaser headline={mockTeaserData.headline} headlineTag={'span'} />
      )

      expect(tree).toMatchSnapshot()
    })
  })

  describe('event handling', () => {
    it('triggers click handler', () => {
      const clickHandler = jest.fn()

      const tree = mountWithThemeAndRouter(
        <Teaser
          headline={mockTeaserData4.headline}
          mainLink={mockTeaserData4.mainLink}
          linkList={mockTeaserData4.linkList}
          orientation="portrait"
          foldable={'mobile'}
          onClick={clickHandler}
        />
      )
      tree.simulate('click')

      expect(clickHandler).toHaveBeenCalled()
    })
  })
})
