import React from 'react'
import { mountWithTheme } from '@/testRenderer'
import { SimpleCarousel } from './SimpleCarousel'
import { pictureEntries } from './SimpleCarousel.data'
import { renderWithPictureComponent } from './SimpleCarousel.story'

describe('SimpleCarousel', () => {
  it('renders correctly', () => {
    const tree = mountWithTheme(
      <SimpleCarousel
        items={pictureEntries}
        renderSlide={renderWithPictureComponent}
        sliderSettings={{
          dots: true,
          infinite: false,
          slidesToScroll: 1,
          slidesToShow: 1,
          speed: 500,
        }}
      />,
    )
    expect(tree).toMatchSnapshot()
  })
})
