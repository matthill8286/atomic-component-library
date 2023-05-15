import { boolean, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Icon } from '@/components/Atoms/Icon'
import { CopyText } from '@/components/Atoms/Typography'
import { saiyanTheme } from '@/styles/sc-vars-saiyan'
import { OtherShare, OtherVideo } from 'atomic-icon-library'
import { ThemeColors, ThemeFontSizes } from '@/types/theme'
import { Link } from './Link'
import { LinkProps, LinkSize } from './Link.interface'
import { OtherEdit } from 'atomic-icon-library'
import { action } from '@storybook/addon-actions'

const scales = ['large', 'small']
const sizes: ThemeFontSizes[] = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']
const targets: string[] = ['_self', '_blank']

const knobs = (): Partial<LinkProps> => {
  return {
    color: select('Color', Object.keys(saiyanTheme.color), 'grey4') as ThemeColors,
    disabled: boolean('Set disabled', false),
    bold: boolean('Bold', false),
    target: select('Target', targets, '_self'),
  }
}

storiesOf('Design System/Atoms/Link', module)
  .add('Link', () => {
    const scale = select('Type scale', scales, 'large') as LinkSize
    const sampleText = text('Example text', `Lorem ipsum dolor`)
    const underline = boolean('Underline', true)

    return (
      <Link {...knobs()} scale={scale} href="#" underline={underline}>
        {sampleText}
      </Link>
    )
  })
  .add('with Icon', () => {
    const scale = select('Type scale', scales, 'large') as LinkSize
    const sampleText = text('Example text', `Lorem ipsum dolor`)
    const iconPositions = ['left', 'right', 'both']
    const iconPosition = select('Icon Position', iconPositions, 'left')
    const iconColor = select('Icon Color', Object.keys(saiyanTheme.color), 'primary') as ThemeColors
    const underline = boolean('Underline', true)

    return (
      <BrowserRouter>
        <Link
          {...knobs()}
          to="/test"
          scale={scale}
          underline={underline}
          {...((iconPosition === 'left' || iconPosition === 'both') && {
            iconLeft: (
              <Icon color={iconColor}>
                <OtherShare height="sm" width="sm" fill={iconColor} />
              </Icon>
            ),
          })}
          {...((iconPosition === 'right' || iconPosition === 'both') && {
            iconRight: (
              <Icon color={iconColor}>
                <OtherEdit height="sm" width="sm" fill={iconColor} />
              </Icon>
            ),
          })}
        >
          {sampleText}
        </Link>
      </BrowserRouter>
    )
  })
  .add('inline Link', () => {
    const sampleText = text('Example text', `Lorem ipsum link`)
    const fontSize = select('Size', sizes, sizes[3])
    const underline = boolean('Underline', true)
    return (
      <CopyText fontSize={fontSize} tag="div">
        <Link {...knobs()} fontSize={fontSize} inline href="/test" underline={underline}>
          {sampleText}
        </Link>
        {' found this useful'}
      </CopyText>
    )
  })
  .add('smooth scroll Anker Link', () => {
    const sampleText = text('Example text', `Lorem ipsum link`)
    const fontSize = select('Size', sizes, sizes[3])
    const scrollOffset = number('ScrollOffset', 0)
    return (
      <div>
        <CopyText fontSize={fontSize} tag="div">
          <Link {...knobs()} fontSize={fontSize} href="#smooth_anker" smooth scrollOffset={scrollOffset}>
            {sampleText}
          </Link>
        </CopyText>
        <div id="smooth_anker" style={{ marginTop: '1500px', marginBottom: '800px' }}>
          Anker Target
        </div>
      </div>
    )
  })
  .add('Link as span', () => {
    const scale = select('Type scale', scales, 'large') as LinkSize
    const sampleText = text('Example text', `Lorem ipsum dolor`)
    const underline = boolean('Underline', true)

    return (
      <Link {...knobs()} scale={scale} href="/test" underline={underline}>
        {sampleText}
      </Link>
    )
  })
  .add('Link as branded', () => {
    const scale = select('Type scale', scales, 'large') as LinkSize
    const sampleText = text('Example text', `Lorem ipsum dolor`)
    const branded = boolean('Branded', true)

    return (
      <Link {...knobs()} underline={false} scale={scale} href="#" branded={branded}>
        {sampleText}
      </Link>
    )
  })

const buttonKnobs = (): Partial<LinkProps> => {
  return {
    color: select('Color', Object.keys(saiyanTheme.color), 'black') as ThemeColors,
    disabled: boolean('Set disabled', false),
    bold: boolean('Bold', false),
    onClick: action('onclick'),
  }
}

storiesOf('Design System/Atoms/Link/Button', module)
  .add('Default', () => {
    const scale = select('Type scale', scales, 'large') as LinkSize
    const sampleText = text('Example text', `Lorem ipsum dolor`)
    const underline = boolean('Underline', true)

    return (
      <Link {...buttonKnobs()} scale={scale} underline={underline}>
        {sampleText}
      </Link>
    )
  })
  .add('With Icon', () => {
    const scale = select('Type scale', scales, 'large') as LinkSize
    const sampleText = text('Example text', `Lorem ipsum dolor`)
    const iconPositions = ['left', 'right', 'both']
    const iconPosition = select('Icon Position', iconPositions, 'left')
    const iconColor = select('Icon Color', Object.keys(saiyanTheme.color), 'primary') as ThemeColors
    const underline = boolean('Underline', true)

    return (
      <Link
        {...buttonKnobs()}
        scale={scale}
        underline={underline}
        {...((iconPosition === 'left' || iconPosition === 'both') && {
          iconLeft: (
            <Icon color={iconColor}>
              <OtherShare height="sm" width="sm" fill={iconColor} />
            </Icon>
          ),
        })}
        {...((iconPosition === 'right' || iconPosition === 'both') && {
          iconRight: (
            <Icon color={iconColor}>
              <OtherEdit height="sm" width="sm" fill={iconColor} />
            </Icon>
          ),
        })}
      >
        {sampleText}
      </Link>
    )
  })
  .add('Inline', () => {
    const sampleText = text('Example text', `Lorem ipsum link`)
    const fontSize = select('Size', sizes, sizes[3])
    const underline = boolean('Underline', true)

    return (
      <CopyText fontSize={fontSize} tag="div">
        {'This is random Text with a '}
        <Link {...buttonKnobs()} fontSize={fontSize} inline underline={underline}>
          {sampleText}
        </Link>
        {' read more...'}
      </CopyText>
    )
  })
