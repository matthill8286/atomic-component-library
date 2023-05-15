import { withState } from '@dump247/storybook-state'
import { boolean, radios, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { styled } from '@/styles'
import { OtherArticle, OtherBookmarkActive, OtherBookmarkOutlined } from '@matthill8286/atomic-icon-library'
import { Icon } from '../Icon'
import { Status } from '../Status'
import { Typo } from '../Typography'
import { Button } from './Button'
import { ButtonActionType, ButtonProps, ButtonSize } from './Button.interface'
import Readme from './Button.readme.md'

const StyledButtonGroupContainer = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: row;
`

const StyledButtonGroup = styled('div')`
  flex: 1;
`

const actionTypes: { [key: string]: ButtonActionType } = {
  ghost: 'ghost',
  primary: 'primary',
  prominent: 'prominent',
  secondary: 'secondary',
  inverted: 'inverted',
  outlined: 'outlined',
  lightBorder: 'lightBorder',
  darkBorder: 'darkBorder',
}

const sizes: { [key: string]: ButtonSize } = { lg: 'lg', md: 'md', sm: 'sm' }

const knobs = (): ButtonProps => {
  return {
    actionType: radios('Type', actionTypes, actionTypes.prominent),
    children: text('Content', 'Button'),
    size: radios('Size', sizes, sizes.md),
    isLoading: boolean('Loading', false),
    isFlat: boolean('Flattened', false),
    elevated: boolean('Elevated', false),
    weight: text('Font weight', 'bold'),
  }
}

const knobsWithCheckmark = () => {
  return {
    ...knobs(),
    showCheckmark: boolean('Loading Complete', false),
  }
}

storiesOf('Design System/Atoms/Button', module)
  .add(
    'Default',
    () => {
      return <Button {...knobsWithCheckmark()} />
    },
    {
      info: Readme,
    },
  )
  .add(
    'Disabled',
    () => {
      return <Button {...knobs()} disabled />
    },
    {
      info: Readme,
    },
  )
  .add(
    'Full width',
    () => {
      return <Button {...knobsWithCheckmark()} fullWidth />
    },
    {
      info: Readme,
    },
  )
  .add(
    'Anchor',
    () => {
      return <Button href="#" {...knobs()} />
    },
    {
      info: Readme,
    },
  )
  .add(
    'Router link',
    () => {
      return <Button to="#" {...knobs()} />
    },
    {
      info: Readme,
    },
  )
  .add(
    'Round',
    () => {
      return (
        <Button round size={'lg'} {...knobs()}>
          NO
        </Button>
      )
    },
    {
      info: Readme,
    },
  )
  .add(
    'Curved',
    () => {
      return (
        <Button curved size={'lg'} {...knobsWithCheckmark()}>
          Button text
        </Button>
      )
    },
    {
      info: Readme,
    },
  )
  .add(
    'Squared',
    () => {
      return (
        <Button squared size={'lg'} {...knobs()}>
          YES
        </Button>
      )
    },
    {
      info: Readme,
    },
  )
  .add('with Icon', () => {
    return (
      <>
        <Button {...knobs()}>
          <Icon width={16} height={16}>
            <OtherBookmarkActive />
          </Icon>
          Icon on left side
        </Button>
        &nbsp;
        <Button {...knobs()}>
          Icon on right side
          <Icon color="white" width={24} height={24}>
            <OtherArticle fill="white" />
          </Icon>
        </Button>
        &nbsp;
        <Button {...knobs()} squared>
          <Icon width={16} height={16}>
            <OtherBookmarkActive />
          </Icon>
        </Button>
        &nbsp;
        <Button {...knobs()} round>
          <Icon width={16} height={16}>
            <OtherBookmarkOutlined />
          </Icon>
        </Button>
      </>
    )
  })
  .add(
    'Bookmark ',
    withState({ isAddedToBookmark: false }, (store) => {
      return store.state.isAddedToBookmark ? (
        <Button to="#" actionType={'primary'}>
          <Icon width={16} height={16}>
            <OtherBookmarkActive />
          </Icon>
          Added to Bookmark
        </Button>
      ) : (
        <Button
          actionType={'secondary'}
          onClick={() => store.set({ isAddedToBookmark: !store.state.isAddedToBookmark })}
        >
          <Icon width={16} height={16}>
            <OtherBookmarkActive />
          </Icon>
          Add to Bookmark
        </Button>
      )
    }),
  )
  .add('Bookmark Full Width', () => {
    return (
      <Button actionType={'primary'} size="lg" fullWidth>
        <Icon width={16} height={16}>
          <OtherBookmarkActive />
        </Icon>
        Bookmark
      </Button>
    )
  })
  .add('with Status', () => {
    return (
      <>
        <Button round>
          <Icon width={16} height={16}>
            <OtherBookmarkOutlined />
          </Icon>
          <Status type="black">1</Status>
        </Button>
        &nbsp;
        <Button>
          Checkmark Status
          <Icon width={16} height={16}>
            <OtherArticle />
          </Icon>
          <Status type="white">1</Status>
        </Button>
      </>
    )
  })
  .add('with 3 Button Group', () => {
    return (
      <StyledButtonGroupContainer>
        <StyledButtonGroup>
          <Button fullWidth actionType="ghost">
            <Typo fontSize="sm" tag="span" color="grey5">
              Test
            </Typo>
          </Button>
        </StyledButtonGroup>
        <StyledButtonGroup>
          <Button fullWidth actionType="ghost">
            Test
          </Button>
        </StyledButtonGroup>
        <StyledButtonGroup>
          <Button fullWidth actionType="ghost">
            Test
          </Button>
        </StyledButtonGroup>
      </StyledButtonGroupContainer>
    )
  })
