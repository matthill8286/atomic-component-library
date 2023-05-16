import { Meta, Story } from '@storybook/react'
import { VideoPlayerCore } from '@/components/Atoms/VideoPlayer/VideoPlayerCore'
import { VideoPlayerProps } from '@/components/Atoms/VideoPlayer/VideoPlayer.interface'

const videoOptions = {
  Youtube: 'https://www.youtube.com/embed/-BdbiZcNBXg',
  Vimeo: 'https://player.vimeo.com/video/400223292',
  VimeoAlt: 'https://player.vimeo.com/video/66140585?color=ffffff&title=0&byline=0&portrait=0',
  TED: 'https://embed.ted.com/talks/kate_lister_an_honest_history_of_an_ancient_and_nasty_word',
  Live: 'https://vimeo.com/event/428541',
}

export default {
  title: 'Design System/Atoms/VideoPlayer',
  component: VideoPlayerCore,
} as Meta

const Template: Story<VideoPlayerProps> = (args: VideoPlayerProps) => <VideoPlayerCore {...args} />

export const Default = Template.bind({})

Default.args = {
  loading: false,
  volume: 0.2,
  muted: false,
  loop: false,
  playbackRate: 1,
  controls: true,
  pip: false,
}

Default.argTypes = {
  url: {
    control: {
      type: 'select',
      options: Object.values(videoOptions),
    },
    defaultValue: Object.values(videoOptions)[1],
  },
  onStart: {
    action: 'started',
  },
  onPlay: {
    action: 'playing',
  },
  onPause: {
    action: 'we have paused',
  },
  onProgress: {
    action: 'progress made',
  },
  onClickPreview: {
    action: 'we clicked the preview',
  },
  onEnded: {
    action: "It's ended",
  },
}
