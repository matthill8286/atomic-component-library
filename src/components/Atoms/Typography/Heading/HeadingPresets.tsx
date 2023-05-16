import { TypoProps } from '../Typo/Typo.interface'
import { TypographyScaleHeadline } from './Heading.interface'

export const HeadingPresets: { [key in TypographyScaleHeadline]: TypoProps } = {
  'level-1': {
    tag: 'h1',
    lineHeight: 'xl',
    weight: 'bold',
    fontSize: 'xxxl',
  },
  'level-2': {
    tag: 'h2',
    lineHeight: 'md',
    weight: 'regular',
    fontSize: 'xxl',
  },
  'level-3': {
    tag: 'h3',
    lineHeight: 'md',
    weight: 'regular',
    fontSize: 'xl',
  },
  'level-4': {
    tag: 'h4',
    margin: 'xs 0',
    lineHeight: 'sm',
    weight: 'regular',
    fontSize: 'lg',
  },
  'level-5': {
    tag: 'h5',
    margin: 'md 0 xs 0',
    lineHeight: 'xs',
    weight: 'regular',
    spacing: 'half',
    fontSize: 'md',
  },
}
