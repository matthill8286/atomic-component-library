import * as React from 'react'
import { EmbeddedPlayer } from './EmbeddedPlayer'
import { text, boolean } from '@storybook/addon-knobs'
import { StyledRelativeEmbeddedParent } from './EmbeddedPlayer.styled'
import { EmbeddedPlayerProps } from './EmbeddedPlayer.interface'

const youtubeUrl = 'https://www.youtube.com/embed/UFatVn1hP3o'

const soundCloudUrl =
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/169176142&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
const embedPdf = 'public/pdf/the_wrong_box.pdf'

const spotify = 'https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3'

export const vimeo = 'https://player.vimeo.com/video/66140585?color=ffffff&title=0&byline=0&portrait=0'

const applePodcasts =
  'https://embed.podcasts.apple.com/us/podcast/equity-monday-electric-car-boom-tech-regulation-some/id1215439780?i=1000509116446'

const castBox = 'https://castbox.fm/app/castbox/player/id2827072?v=8.22.11&autoplay=0'

const height = text('height', '400px')
const width = text('width', '600px')

const allowfullscreen = boolean('allowfullscreen', true)

const EmbeddedWrapper: React.FC<EmbeddedPlayerProps & { aspect: string }> = ({
  embedUrl,
  aspect,
  height,
  width,
  maxHeight,
  ...props
}) => {
  return (
    <StyledRelativeEmbeddedParent aspect={aspect} maxHeight={maxHeight}>
      <EmbeddedPlayer embedUrl={embedUrl} height={height} width={width} maxHeight={maxHeight} {...props} />
    </StyledRelativeEmbeddedParent>
  )
}

export default {
  title: 'Design System/Atoms/EmbeddedPlayer',
  excludeStories: ['vimeo'],
}

export const YoutubePlayerDefault = () => <EmbeddedPlayer embedUrl="https://www.youtube.com/embed/UFatVn1hP3o" />

YoutubePlayerDefault.story = {
  name: 'YoutubePlayer default',
}

export const EmbeddedPlayerWithCustomFeatures = () => (
  <EmbeddedPlayer embedUrl={youtubeUrl} height={height} width={width} allowfullscreen={allowfullscreen} />
)

EmbeddedPlayerWithCustomFeatures.story = {
  name: 'EmbeddedPlayer with custom features',
}

export const EmbeddedPlayerWithCustomWrapper = () => (
  <EmbeddedWrapper embedUrl={youtubeUrl} aspect="16/9" height="100%" width={width} allowfullscreen={allowfullscreen} />
)

EmbeddedPlayerWithCustomWrapper.story = {
  name: 'EmbeddedPlayer with custom wrapper',
}

export const EmbeddedPlayerWithLocalPdf = () => (
  <EmbeddedWrapper embedUrl={embedPdf} aspect="4/3" height="100%" width="100%" allowfullscreen={allowfullscreen} />
)

EmbeddedPlayerWithLocalPdf.story = {
  name: 'EmbeddedPlayer with local PDF',
}

export const EmbeddedPlayerWithSoundCloud = () => (
  <EmbeddedWrapper embedUrl={soundCloudUrl} aspect="16/9" maxHeight="100px" width="100%" features={['autoplay']} />
)

EmbeddedPlayerWithSoundCloud.story = {
  name: 'EmbeddedPlayer with SoundCloud',
}

export const EmbeddedPlayerWithSpotifyAlbum = () => (
  <EmbeddedWrapper embedUrl={spotify} aspect="16/9" maxHeight="300px" width="100%" features={['autoplay']} />
)

EmbeddedPlayerWithSpotifyAlbum.story = {
  name: 'EmbeddedPlayer with Spotify Album',
}

export const EmbeddedPlayerWithPocast = () => (
  <EmbeddedWrapper embedUrl={castBox} aspect="16/9" maxHeight="300px" width="100%" features={['autoplay']} />
)

EmbeddedPlayerWithPocast.story = {
  name: 'EmbeddedPlayer with Pocast',
}

export const EmbeddedPlayerWithApplePocasts = () => (
  <EmbeddedWrapper
    embedUrl={applePodcasts}
    aspect="16/9"
    maxHeight="300px"
    width="100%"
    features={['autoplay', 'encrypted-media']}
  />
)

EmbeddedPlayerWithApplePocasts.story = {
  name: 'EmbeddedPlayer with Apple Pocasts',
}
