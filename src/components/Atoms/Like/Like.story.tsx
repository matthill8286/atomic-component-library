import { boolean, select, text } from '@storybook/addon-knobs'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography'
import { defaultTheme } from '@/styles/sc-vars-default'
import { OtherUseful } from 'atomic-icon-library'
import { ThemeColors, ThemeFontSizes } from '@/types/theme'
import { Like } from './Like'
import { LikeProps, LikeSize } from './Like.interface'
import React from 'react'

const scales = ['large', 'small']
const sizes: ThemeFontSizes[] = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']

const knobs = (): Partial<LikeProps> => {
  return {
    color: select('Color', Object.keys(defaultTheme.color), 'grey4') as ThemeColors,
    disabled: boolean('Set disabled', false),
    bold: boolean('Bold', true),
  }
}

export default {
  title: 'Design System/Atoms/Like',
}

export const _Like = () => {
  const scale = select('Type scale', scales, 'large') as LikeSize
  const sampleCopy = text('Example copy', `found this useful`)
  const sampleLikes = text('Example likes', `38 `)
  const underline = boolean('Underline', true)

  return (
    <Like {...knobs()} scale={scale} likes={sampleLikes} underline={underline}>
      {sampleCopy}
    </Like>
  )
}

export const WithIcon = () => {
  const scale = select('Type scale', scales, 'large') as LikeSize
  const sampleCopy = text('Example copy', `found this useful`)
  const sampleLikes = text('Example likes', `55`)
  const iconPositions = ['left', 'right', 'both']
  const iconPosition = select('Icon Position', iconPositions, 'left')
  const iconColor = select('Icon Color', Object.keys(defaultTheme.color), 'grey4') as ThemeColors
  const underline = boolean('Underline', true)

  return (
    <Like
      {...knobs()}
      scale={scale}
      underline={underline}
      likes={sampleLikes}
      {...((iconPosition === 'left' || iconPosition === 'both') && {
        iconLeft: (
          <Icon color={iconColor}>
            <OtherUseful />
          </Icon>
        ),
      })}
      {...((iconPosition === 'right' || iconPosition === 'both') && {
        iconRight: (
          <Icon color={iconColor}>
            <OtherUseful />
          </Icon>
        ),
      })}
    >
      {sampleCopy}
    </Like>
  )
}

WithIcon.story = {
  name: 'with Icon',
}

export const InlineLikeNoIcon = () => {
  const sampleCopy = text('Example copy', `Lorem ipsum Like`)
  const fontSize = select('Size', sizes, sizes[3])
  const underline = boolean('Underline', true)
  return (
    <CopyText fontSize={fontSize} tag="div">
      <Like {...knobs()} fontSize={fontSize} inline underline={underline}>
        {sampleCopy}
      </Like>
      {' extended copy'}
    </CopyText>
  )
}

InlineLikeNoIcon.story = {
  name: 'inline Like no Icon',
}
