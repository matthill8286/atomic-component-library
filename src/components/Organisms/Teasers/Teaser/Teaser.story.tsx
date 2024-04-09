import { action } from '@storybook/addon-actions'
import { boolean, optionsKnob as options, radios, select, text } from '@storybook/addon-knobs'
import { OptionsKnobOptions } from '@storybook/addon-knobs/dist/components/types'
import * as React from 'react'
import { BadgeActionType, BadgeType } from '@/components/Atoms/Badge/Badge.interface'
import { Icon } from '@/components/Atoms/Icon'
import { Cell, Grid, Row } from '@/components/Helper/Grid'
import { OtherBookmarkOutlined } from 'atomic-icon-library'
import { ThemeColors } from '@/types/theme'
import { TeaserOrientation, TeaserSize } from '../Teasers.interface'
import { Teaser } from './Teaser'
import { TeaserProps } from './Teaser.interface'
import { getTransformedImageVersion } from '@/utils/useGraphCmsImages'

const mockTeaserData: TeaserProps = {
  headline: 'High standards require sensible processes',
  contentText: 'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
  image: getTransformedImageVersion('9mSN32ckQzORsQnMC7Zc'),
  altText: 'Teaser Picture1',
  mainLink: { to: '#', label: 'To the Moon!!' },
}

const mockTeaserData2: TeaserProps = {
  headline: 'saiyan Text!',
  contentText: 'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
  image: getTransformedImageVersion('SdO6Eo51RZucKUK83Um7'),
  altText: 'Teaser Picture2',
  mainLink: { to: '#', label: 'Can we filter??' },
}

const mockTeaserData3: TeaserProps = {
  headline: 'The last nights of Summer',
  contentText: 'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
  mainLink: { to: '#', label: 'Lets get out of here!' },
}

const mockTeaserData4: TeaserProps = {
  headline: 'Simon & Art Garfunkel',
  mainLink: { to: '#', label: 'All wishes come true' },
  linkList: [
    { to: '#', label: 'Sound of Silence' },
    { to: '#', label: 'Homeward Bound' },
    { to: '#', label: 'Crazy nights at Alamo' },
  ],
}

const orientations: { [key: string]: TeaserOrientation } = {
  auto: 'auto',
  portrait: 'portrait',
}

const sizes: { [key: string]: TeaserSize } = {
  auto: 'auto',
  small: 'small',
  large: 'large',
}

const colors: { [key: string]: ThemeColors | undefined } = {
  none: undefined,
  primary: 'primary',
  secondary: 'secondary',
  grey1: 'grey1',
  grey2: 'grey2',
  grey3: 'grey3',
  grey4: 'grey4',
  grey5: 'grey5',
  black: 'black',
  white: 'white',
  success: 'success',
  alert: 'alert',
  error: 'error',
  info: 'info',
  selected: 'selected',
}

const actionTypes: { [key: string]: BadgeActionType } = {
  prominent: 'prominent',
  secondary: 'secondary',
}

const badges: BadgeType[] = [
  {
    id: 0,
    name: 'Sponsored',
    actionType: 'prominent',
  },
  {
    id: 1,
    name: 'Some other label',
  },
  {
    id: 2,
    name: 'A third label',
  },
]

export default {
  title: 'Design System/Organisms/Teasers/Teaser',
}

export const Default = () => {
  const knobs = (): TeaserProps => {
    return {
      headline: text('Headline', mockTeaserData.headline),
      withImagePadding: boolean('with image padding', false),
      contentText: text('Content Text', mockTeaserData.contentText?.toString() || ''),
      image: text('Image', mockTeaserData.image || ''),
      mainLink: {
        to: text('Link To', mockTeaserData.mainLink?.to || ''),
        label: text('Link Label', mockTeaserData.mainLink?.label || ''),
      },
      orientation: radios('Orientation', orientations, orientations[0]),
      badgeActionType: radios('Type', actionTypes, actionTypes[1]),
      size: radios('Size', sizes, sizes[0]),
      loading: boolean('loading', false),
    }
  }

  const withIcon = boolean('with icon', false)

  return (
    <Teaser
      {...knobs()}
      badges={badges}
      icon={
        withIcon ? (
          <Icon>
            <OtherBookmarkOutlined />
          </Icon>
        ) : undefined
      }
      onClick={action('click')}
    />
  )
}

export const TeasersInAGrid = () => (
  <Grid>
    <Row>
      <Cell>
        <Teaser
          headline={mockTeaserData.headline}
          contentText={mockTeaserData.contentText}
          image={mockTeaserData.image}
          mainLink={mockTeaserData.mainLink}
          orientation="portrait"
        />
      </Cell>
      <Cell>
        <Teaser
          headline={mockTeaserData2.headline}
          contentText={mockTeaserData2.contentText}
          image={mockTeaserData2.image}
          mainLink={mockTeaserData2.mainLink}
          orientation="portrait"
        />
      </Cell>
      <Cell>
        <Teaser
          headline={mockTeaserData3.headline}
          contentText={mockTeaserData3.contentText}
          mainLink={{ to: mockTeaserData3.mainLink?.to || '' }}
          orientation="portrait"
        />
      </Cell>
    </Row>
  </Grid>
)

TeasersInAGrid.story = {
  name: 'teasers in a grid',
}

export const TeasersWithoutImage = () => {
  const loading = boolean('Loading', false)
  const o = radios(
    'Link Variants',
    {
      Link: 'withLink',
      'Link and LinkText': 'withLinkAndText',
      'without Link': 'withoutLink',
    },
    'withLink',
  )

  const color = select('Color', colors, colors[0])
  const decorationColor = select('Decoration Color', colors, colors[0])

  return (
    <Grid>
      <Row>
        <Cell>
          <Teaser
            headline={mockTeaserData.headline}
            contentText={mockTeaserData.contentText}
            mainLink={
              o.includes('withLink')
                ? {
                    to: mockTeaserData.mainLink?.to || '',
                    label: o === 'withLinkAndText' ? mockTeaserData.mainLink?.label : undefined,
                  }
                : undefined
            }
            orientation="portrait"
            color={color}
            decorationColor={decorationColor}
            loading={loading}
          />
        </Cell>
        <Cell>
          <Teaser
            headline={mockTeaserData.headline}
            contentText={mockTeaserData.contentText}
            loading={loading}
            mainLink={
              o.includes('withLink')
                ? {
                    to: mockTeaserData.mainLink?.to || '',
                    label: o === 'withLinkAndText' ? mockTeaserData.mainLink?.label : undefined,
                  }
                : undefined
            }
            orientation="portrait"
            color={color}
            decorationColor={decorationColor}
            icon={
              <Icon>
                <OtherBookmarkOutlined />
              </Icon>
            }
          />
        </Cell>
        <Cell>
          <Teaser
            headline={mockTeaserData3.headline}
            contentText={mockTeaserData3.contentText}
            loading={loading}
            mainLink={
              o.includes('withLink')
                ? {
                    to: mockTeaserData.mainLink?.to || '',
                    label: o === 'withLinkAndText' ? mockTeaserData.mainLink?.label : undefined,
                  }
                : undefined
            }
            color={color}
            decorationColor={decorationColor}
            orientation="portrait"
          />
        </Cell>
      </Row>
    </Grid>
  )
}

TeasersWithoutImage.story = {
  name: 'teasers without image',
}

export const TeasersFoldable = () => {
  const optionsObj: OptionsKnobOptions = {
    display: 'radio',
  }

  const o = options(
    'Foldable',
    {
      Always: 'always',
      'Mobile only': 'mobile',
      Never: 'never',
    },
    'always',
    optionsObj,
  )

  return (
    <>
      <Teaser
        headline={mockTeaserData.headline}
        contentText={mockTeaserData.contentText}
        mainLink={mockTeaserData.mainLink}
        orientation="portrait"
        foldable={o}
      />
      <div style={{ height: 20 }} />
      <Teaser
        headline={'Without main link'}
        contentText={mockTeaserData.contentText}
        orientation="portrait"
        foldable={o}
      />
    </>
  )
}

TeasersFoldable.story = {
  name: 'teasers foldable',
}

export const TeasersWithLinkList = () => {
  return (
    <>
      <Teaser
        headline={mockTeaserData4.headline}
        mainLink={mockTeaserData4.mainLink}
        linkList={mockTeaserData4.linkList}
        orientation="portrait"
        foldable={'always'}
      />
    </>
  )
}

TeasersWithLinkList.story = {
  name: 'teasers with link list',
}

export const TeasersWithChildren = () => {
  return (
    <>
      <Teaser
        headline={mockTeaserData4.headline}
        mainLink={mockTeaserData4.mainLink}
        linkList={mockTeaserData4.linkList}
        orientation="portrait"
        foldable={'always'}
      >
        <p> this is a children paragraph </p>
      </Teaser>
    </>
  )
}

TeasersWithChildren.story = {
  name: 'teasers with children',
}
