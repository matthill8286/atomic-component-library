import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography'
import { saiyanTheme } from '@/styles/sc-vars-saiyan'
import { OtherUseful } from 'atomic-icon-library'
import { ThemeColors, ThemeFontSizes } from '@/types/theme'
import { Like } from './Like'
import { LikeProps, LikeSize } from './Like.interface'

const scales = ['large', 'small']
const sizes: ThemeFontSizes[] = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']

const knobs = (): Partial<LikeProps> => {
  return {
    color: select('Color', Object.keys(saiyanTheme.color), 'grey4') as ThemeColors,
    disabled: boolean('Set disabled', false),
    bold: boolean('Bold', true),
  }
}

storiesOf('Design System/Atoms/Like', module)
  .add('Like', () => {
    const scale = select('Type scale', scales, 'large') as LikeSize
    const sampleCopy = text('Example copy', `found this useful`)
    const sampleLikes = text('Example likes', `38 `)
    const underline = boolean('Underline', true)

    return (
      <Like {...knobs()} scale={scale} likes={sampleLikes} underline={underline}>
        {sampleCopy}
      </Like>
    )
  })
  .add('with Icon', () => {
    const scale = select('Type scale', scales, 'large') as LikeSize
    const sampleCopy = text('Example copy', `found this useful`)
    const sampleLikes = text('Example likes', `55`)
    const iconPositions = ['left', 'right', 'both']
    const iconPosition = select('Icon Position', iconPositions, 'left')
    const iconColor = select('Icon Color', Object.keys(saiyanTheme.color), 'grey4') as ThemeColors
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
  })
  .add('inline Like no Icon', () => {
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
  })
