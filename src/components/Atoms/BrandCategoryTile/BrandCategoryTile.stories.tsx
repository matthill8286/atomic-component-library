import { BrandCategoryTile, BrandCategoryTileProps } from './BrandCategoryTile'
import React from 'react'

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

export default {
  title: 'Design System/Atoms/Brand Category Tile',
}

export const Default = () => {
  return <BrandCategoryTile category={category} />
}

Default.story = {
  name: 'default',
}

export const WithoutImage = () => {
  return <BrandCategoryTile category={categoryWithoutImage} />
}

WithoutImage.story = {
  name: 'without image',
}
