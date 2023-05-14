import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { ArticleStage } from './ArticleStage'
import { ArticleStageProps } from './ArticleStage.interface'
import { backlink, props } from './ArticleStage.mocks'

const knobs = (): Partial<ArticleStageProps> => {
  return {
    articleTitle: text('Article Title', props.articleTitle),
    subText: text('Subtext', ''),
  }
}

storiesOf('Design System/Organisms/Article Stage', module)
  .add('Default', () => {
    return <ArticleStage {...props} {...knobs()} />
  })
  .add('Without Image', () => {
    return <ArticleStage {...props} {...knobs()} withImage={false} />
  })
  .add('Without Breadcrumbs', () => {
    return <ArticleStage {...props} {...knobs()} breadcrumbPath={undefined} />
  })
  .add('With Backlink', () => {
    return <ArticleStage {...props} {...knobs()} breadcrumbPath={undefined} backlink={backlink} />
  })
  .add('Different Headline Colour', () => {
    return <ArticleStage {...props} {...knobs()} headingColor="black" />
  })
