export interface EmbeddedPlayerProps {
  title?: string | undefined
  width?: string | undefined
  height?: string | undefined
  embedUrl: string
  allowfullscreen?: boolean
  features?: EmbeddedFeatureTypes[]
  sandbox?: string[]
  frameBorder?: string
  maxHeight?: string | number
  minHeight?: string | number
}

type EmbeddedFeatureTypes =
  | 'accelerometer'
  | 'autoplay'
  | 'clipboard-write'
  | 'color'
  | 'controls'
  | 'disablekb'
  | 'gyroscope'
  | 'h1'
  | 'encrypted-media'
  | 'modestbranding'
  | 'picture-in-picture'
  | 'playlist'
  | 'playsinline'
  | 'listType'
  | 'list'
  | 'loop'
  | 'start'
  | 'showinfo'
