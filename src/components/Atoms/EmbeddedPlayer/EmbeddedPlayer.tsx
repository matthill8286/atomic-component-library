import React from 'react'
import { EmbeddedPlayerProps } from './EmbeddedPlayer.interface'
import { StyledRelativeEmbeddedParent } from '@/components/Atoms/EmbeddedPlayer/EmbeddedPlayer.styled'

export const EmbeddedWrapper: React.FC<EmbeddedPlayerProps & { aspect: string }> = ({
  embedUrl,
  aspect = '16/9',
  height,
  width,
  maxHeight,
  minHeight,
  ...props
}) => {
  return (
    <StyledRelativeEmbeddedParent aspect={aspect}>
      <EmbeddedPlayer
        embedUrl={embedUrl}
        height={height}
        width={width}
        maxHeight={maxHeight}
        minHeight={minHeight}
        {...props}
      />
    </StyledRelativeEmbeddedParent>
  )
}

export const EmbeddedPlayer: React.FC<EmbeddedPlayerProps> = ({
  title = '',
  width = '100%',
  height = '100%',
  embedUrl,
  frameBorder = '0',
  sandbox = [],
  features = ['picture-in-picture', 'showinfo=0'],
  allowfullscreen,
  maxHeight = '100%',
  minHeight = '0',
  children,
  ...props
}) => {
  return (
    <>
      <iframe
        title={title}
        width={width}
        height={height}
        src={embedUrl}
        frameBorder={frameBorder}
        allow={features.join()}
        allowFullScreen={allowfullscreen}
        style={{ maxHeight, minHeight }}
        {...props}
      />
      {children}
    </>
  )
}
