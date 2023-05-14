import { storiesOf } from '@storybook/react'
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

storiesOf('Design System/Atoms/EmbeddedPlayer', module)
  .add('YoutubePlayer default', () => <EmbeddedPlayer embedUrl="https://www.youtube.com/embed/UFatVn1hP3o" />)
  .add('EmbeddedPlayer with custom features', () => (
    <EmbeddedPlayer embedUrl={youtubeUrl} height={height} width={width} allowfullscreen={allowfullscreen} />
  ))
  .add('EmbeddedPlayer with custom wrapper', () => (
    <EmbeddedWrapper
      embedUrl={youtubeUrl}
      aspect="16/9"
      height="100%"
      width={width}
      allowfullscreen={allowfullscreen}
    />
  ))
  .add('EmbeddedPlayer with local PDF', () => (
    <EmbeddedWrapper embedUrl={embedPdf} aspect="4/3" height="100%" width="100%" allowfullscreen={allowfullscreen} />
  ))
  .add('EmbeddedPlayer with SoundCloud', () => (
    <EmbeddedWrapper embedUrl={soundCloudUrl} aspect="16/9" maxHeight="100px" width="100%" features={['autoplay']} />
  ))
  .add('EmbeddedPlayer with Spotify Album', () => (
    <EmbeddedWrapper embedUrl={spotify} aspect="16/9" maxHeight="300px" width="100%" features={['autoplay']} />
  ))
  .add('EmbeddedPlayer with Pocast', () => (
    <EmbeddedWrapper embedUrl={castBox} aspect="16/9" maxHeight="300px" width="100%" features={['autoplay']} />
  ))
  .add('EmbeddedPlayer with Apple Pocasts', () => (
    <EmbeddedWrapper
      embedUrl={applePodcasts}
      aspect="16/9"
      maxHeight="300px"
      width="100%"
      features={['autoplay', 'encrypted-media']}
    />
  ))
