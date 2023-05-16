import React, { MutableRefObject, ReactElement, Ref } from 'react'

interface SourceProps {
  src: string
  type: string
}

export interface VideoPlayerViewer {
  onStart: (callback: () => void) => void
  loadUrl: (productId: string) => void
  play: () => void
  stop: () => void
}

export interface VideoPlayerProps {
  title?: string
  unsupportedMedia?: boolean
  context?: boolean
  allowfullscreen?: boolean
  maxHeight?: string | number
  rounded?: boolean
  url: string
  loop?: boolean
  videoId?: string
  controls?: boolean
  loading?: boolean
  volume?: number
  muted?: boolean
  videoRef?: MutableRefObject<Ref<HTMLDivElement>>
  playbackRate?: number
  width?: string | undefined
  height?: string | undefined
  progressInterval?: number
  playsinline?: boolean
  playing?: boolean
  playIcon?: ReactElement
  previewTabIndex?: number
  pip?: boolean
  stopOnUnmount?: boolean
  light?: boolean | string
  fallback?: ReactElement
  children?: React.ReactNode
  onStart?: (callback: () => void) => void
  onPlay?: (event: React.MouseEvent<HTMLDivElement>) => void
  onPause?: (event: React.MouseEvent<HTMLDivElement>) => void
  onEnded?: (event: React.MouseEvent<HTMLDivElement>) => void
  onDuration?: (event: React.MouseEvent<HTMLDivElement>) => void
  onClickPreview?: (event: React.MouseEvent<HTMLDivElement>) => void
  onError?: (error: any, data?: any, hlsInstance?: any, hlsGlobal?: any) => void
  onProgress?: (state: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }) => void
}
