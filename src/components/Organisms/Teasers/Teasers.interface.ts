export interface TeaserLink {
  to?: string
  label?: string
  href?: string
  isLinkBlank?: boolean
}

/** TeaserOrientation `auto` use portrait on mobile and landscape on desktop */
export type TeaserOrientation = 'auto' | 'portrait'
/** TeaserSize `auto` use small on mobile and large on desktop */
export type TeaserSize = 'auto' | 'large' | 'small'
