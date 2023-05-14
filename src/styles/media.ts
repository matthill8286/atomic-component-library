import { breakpoints } from './sc-vars-global'
/**
 * How to use:
 * import { styled } from '@/styles/styled'
 * import media from 'path-to-media-file'
 *  const StyledComponent = styled.div`
 *    display: none;
 *     ${media.lg} {
 *       display: block;
 *     }`
 */

const customMediaQuery = (breakpoint: number, isMaxWidth?: boolean | undefined) => {
  const widthPrefix = isMaxWidth ? 'max' : 'min'
  return `@media (${widthPrefix}-width: ${breakpoint}px)`
}

const { xs, sm, md, lg, xl, xxl } = breakpoints

export const media = {
  xxl: customMediaQuery(xxl),
  xl: customMediaQuery(xl),
  lg: customMediaQuery(lg),
  md: customMediaQuery(md),
  sm: customMediaQuery(sm),
  xs: customMediaQuery(xs),
  maxXxl: customMediaQuery(xxl, true),
  maxXl: customMediaQuery(xl, true),
  maxLg: customMediaQuery(lg, true),
  maxMd: customMediaQuery(md, true),
  maxSm: customMediaQuery(sm, true),
  mobile: customMediaQuery(sm, true),
  tablet: customMediaQuery(sm),
  desktop: customMediaQuery(lg),
  ie11: ` @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none)`,
}

export type MediaType = keyof typeof media
