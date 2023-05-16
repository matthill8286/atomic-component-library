import React, { MutableRefObject, ReactElement, Ref, useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { SkeletonBlockItem, SkeletonInlineItem } from '@/components/Atoms/Skeleton'
import { VideoPlayerProps, VideoPlayerViewer } from '@/components/Atoms/VideoPlayer/VideoPlayer.interface'
import { StyledVideoPlayer, StyledVideoWrapper } from '@/components/Atoms/VideoPlayer/VideoPlayer.styled'

export const VideoPlayerCore: React.FC<VideoPlayerProps> = ({
  title = 'core video player',
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

  const containerRef = useRef<HTMLDivElement>(null)
  const [videoViewer, setVideoViewer] = useState<VideoPlayerViewer | null>(null)
  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  const [loaded, setLoaded] = useState(false)

  const id = `video-player-container-${videoId}`

  const _onStart = useCallback((cb) => onStart?.(cb), [])

  const _onEnded = useCallback((event) => onEnded?.(event), [])

  const _onPlay = useCallback((event) => onPlay?.(event), [])

  const _onDuration = useCallback((event) => onDuration?.(event), [])

  const _onPause = useCallback((event) => onPause?.(event), [])

  const _onProgress = useCallback((state) => {
    onProgress?.(state)
  }, [])

  const _onError = useCallback((event) => onError?.(event), [])

  useEffect(() => {
    videoViewer?.onStart(() => {
      if (!loaded) {
        setLoaded(true)
      }
    })
  }, [videoViewer])

  useEffect(() => {
    if (
      document.fullscreenElement !== null &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (document.fullscreenElement === true ||
        (document.fullscreenElement as HTMLVideoElement)?.canPlayType !== undefined)
    ) {
      return
    }
    if (loaded && !inView) {
      videoViewer?.stop()
    }
  }, [inView])

  return (
    <StyledVideoWrapper aspect="16/9" ref={containerRef}>
      <StyledVideoPlayer
        id={id}
        width={width}
        ref={videoViewer}
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
        onStart={_onStart}
        onPlay={_onPlay}
        onPause={_onPause}
        onProgress={_onProgress}
        onError={_onError}
        onDuration={_onDuration}
      />
      <div id={id} ref={ref} />
    </StyledVideoWrapper>
  )
}
