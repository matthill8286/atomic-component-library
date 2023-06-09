import { boolean, select, text } from '@storybook/addon-knobs'
import { defaultTheme } from '@/styles/sc-vars-default'
import { ThemeColors, ThemeFontFamilies } from '@/types/theme'
import { Heading } from './Heading'
import { TypographyScaleHeadline } from './Heading.interface'
import { HeadingFeatured } from './HeadingFeatured'

// const stories = storiesOf('Design System/Atoms/Typography', module)

export default {
  title: 'Design System/Atoms/Typography',
}

const knobs = ({
  scale = 'level-1',
  tag = 'h1',
  bold = false,
  color = 'grey6',
  margin = '',
  fontFamily = 'default',
  showCursor = false,
}) => ({
  scale: select(
    'Type scale',
    ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'],
    scale,
  ) as TypographyScaleHeadline,
  tag: select('Tag name', ['h1', 'h2', 'h3', 'h4', 'h5', 'strong', 'span'], tag) as keyof JSX.IntrinsicElements,
  bold: boolean('Bold', bold),
  uppercase: boolean('uppercase', false),
  showCursor: boolean('Show Cursor', false),
  color: select('Color', Object.keys(defaultTheme.color), color) as ThemeColors,
  margin: select('margin', ['', 'xl', 'xl 0', 'md xl xxl xl', '0'], margin),
  fontFamily: select('fontFamily', Object.keys(defaultTheme.font.family), fontFamily) as ThemeFontFamilies,
})

export const _Heading = () => {
  const sampleText = text('Example text', `Lorem ipsum dolor`)

  return <Heading {...knobs({})}>{sampleText}</Heading>
}

export const _HeadingFeatured = () => {
  const sampleText = text('Example text', `Featured Text for Teasers`)
  const fixedSize = select('fixed size', ['', 'xl', 'xxxl'], undefined)
  const fixedMdSize = boolean('medium as maximum size', false)
  return (
    <HeadingFeatured tag="h2" fixedSize={fixedSize} fixedMdSize={fixedMdSize} color="secondary">
      {sampleText}
    </HeadingFeatured>
  )
}
