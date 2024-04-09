import { text } from '@storybook/addon-knobs'
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

export default {
  title: 'Design System/Organisms/Article Stage',
}

export const Default = () => {
  return <ArticleStage {...props} {...knobs()} />
}

export const WithoutImage = () => {
  return <ArticleStage {...props} {...knobs()} withImage={false} />
}

export const WithoutBreadcrumbs = () => {
  return <ArticleStage {...props} {...knobs()} breadcrumbPath={undefined} />
}

export const WithBacklink = () => {
  return <ArticleStage {...props} {...knobs()} breadcrumbPath={undefined} backlink={backlink} />
}

export const DifferentHeadlineColour = () => {
  return <ArticleStage {...props} {...knobs()} headingColor="black" />
}
