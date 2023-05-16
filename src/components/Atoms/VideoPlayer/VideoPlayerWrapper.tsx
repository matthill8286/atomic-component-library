import React from 'react'
import { SkeletonBlockItem } from '@/components/Atoms/Skeleton'
import { VideoPlayerProps } from '@/components/Atoms/VideoPlayer/VideoPlayer.interface'
import { EmbeddedWrapper } from '@/components/Atoms/EmbeddedPlayer'
import { VideoPlayerCore } from '@/components/Atoms/VideoPlayer/VideoPlayerCore'

export const VideoPlayerWrapper: React.FC<VideoPlayerProps> = ({
  title = 'core video player',
  unsupportedMedia,
  context = 'page',
  videoId = 'player-core',
  width = '100%',
  height = '100%',
  url,
  pip = false,
  controls = true,
  light = false,
  loop = false,
  loading,
  playbackRate = 1,
  playing,
  volume = 0.6,
  muted = false,
  allowfullscreen = false,
  rounded = false,
  stopOnUnmount = true,
  maxHeight,
  onStart,
  onPause,
  onPlay,
  onError,
  onEnded,
  onProgress,
  onDuration,
  children,
  ...props
}) => {
  if (loading) {
    return <SkeletonBlockItem height="350px" />
  }

  if (unsupportedMedia) {
    return (
      <EmbeddedWrapper
        height={height}
        aspect="16/9"
        width={width}
        embedUrl={url}
        title={title}
        allowfullscreen={false}
      />
    )
  }

  return (
    <VideoPlayerCore
      videoId={videoId}
      width={width}
      height={height}
      url={url}
      pip={pip}
      playing={playing}
      controls={controls}
      rounded={rounded ?? undefined}
      light={light}
      loop={loop}
      playbackRate={playbackRate}
      volume={volume}
      muted={muted}
      onStart={onStart}
      onPlay={onPlay}
      onPause={onPause}
      onProgress={onProgress}
      onError={onError}
      onDuration={onDuration}
    />
  )
}
