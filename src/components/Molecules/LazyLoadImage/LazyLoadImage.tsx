import 'intersection-observer' // polyfill
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { NativeLazyLoadOptions, Picture } from '@/components/Atoms/Picture'
import { LazyLoadImageProps } from './LazyLoadImage.interface'
import { StyledLazyImageWrapper } from './LazyLoadImage.styled'
import { useNativeLazyLoading } from './useNativeLazyLoading'

export const LazyLoadImage: React.FC<LazyLoadImageProps> = ({
  threshold = 0,
  lazyLoad = true,
  rootMargin = '0px',
  withLQIP = false,
  withNativeLoading = false,
  ...props
}) => {
  const { src, lowResSrc, srcSm, lowResSrcSm, srcMd, lowResSrcMd, srcLg, lowResSrcLg, width, height, children } = props
  if (!lazyLoad) {
    return <Picture {...props}>{children}</Picture>
  }
  const supportsLazyLoading = withNativeLoading && useNativeLazyLoading()
  // intersection observer hook that delivers the inView boolean
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: rootMargin,
  })
  return (
    <StyledLazyImageWrapper ref={!supportsLazyLoading ? ref : undefined} width={width} height={height}>
      {!withLQIP && (inView || supportsLazyLoading) ? (
        <Picture
          {...props}
          src={src}
          srcSm={srcSm}
          srcMd={srcMd}
          srcLg={srcLg}
          loading={supportsLazyLoading ? NativeLazyLoadOptions.Lazy : NativeLazyLoadOptions.Eager}
        >
          {children}
        </Picture>
      ) : null}
      {withLQIP && (
        <Picture
          {...props}
          src={inView ? src : lowResSrc}
          srcSm={inView ? srcSm : lowResSrcSm}
          srcMd={inView ? srcMd : lowResSrcMd}
          srcLg={inView ? srcLg : lowResSrcLg}
        >
          {children}
        </Picture>
      )}
    </StyledLazyImageWrapper>
  )
}
