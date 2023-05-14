import { storiesOf } from '@storybook/react'
import React from 'react'
import { BrandCategoryTile, BrandCategoryTileProps } from './BrandCategoryTile'

const category: BrandCategoryTileProps['category'] = {
  categoryTitle: 'Staubsauger',
  categoryUrl: 'brand/miele/category/staubsauger',
  categoryImage: {
    alt: 'Miele brand page Staubsauger category test image',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCZndhq0eK5wBD8iopmQ4yeMPbpsAMJJV2g&usqp=CAU',
  },
}

const categoryWithoutImage = {
  ...category,
  categoryImage: null,
}

storiesOf('Design System/Atoms/Brand Category Tile', module)
  .add('default', () => {
    return <BrandCategoryTile category={category} />
  })
  .add('without image', () => {
    return <BrandCategoryTile category={categoryWithoutImage} />
  })
