import { Breakpoints, ButtonTheme, Container, Spacing } from '@/types/theme'

const defaultSpacing = 8

const breakpoints: Breakpoints = {
  xs: 320,
  sm: 512,
  md: 752,
  lg: 1008,
  xl: 1232,
  xxl: 1472,
  xxxl: 10000,
}

const button: ButtonTheme = {
  size: {
    sm: `${5 * defaultSpacing}px`, // 40px
    md: `${6 * defaultSpacing}px`, // 48px
    lg: `${7 * defaultSpacing}px`, // 56px
  },
  isRound: true,
}

const container: Container = {
  xs: breakpoints.sm,
  sm: breakpoints.sm,
  md: breakpoints.sm,
  lg: breakpoints.md,
  xl: breakpoints.lg,
  xxl: breakpoints.xl,
  xxxl: breakpoints.xxl,
  padding: '20px',
}

const spacing: Spacing = {
  base: {
    xxs: `${0.5 * defaultSpacing}px`, //  4px
    xs: `${defaultSpacing}px`, //     8px
    sm: `${2 * defaultSpacing}px`, //     16px
    md: `${3 * defaultSpacing}px`, //     24px
    lg: `${4 * defaultSpacing}px`, //     32px
    xl: `${5 * defaultSpacing}px`, //     40px
    xxl: `${6 * defaultSpacing}px`, //    48px
    xxxl: `${7 * defaultSpacing}px`, //   56px
    xxxxl: `${8 * defaultSpacing}px`, //  64px
    xxxxxl: `${9 * defaultSpacing}px`, //  66px
  },
  baseMobile: {
    xxs: `${0.5 * defaultSpacing}px`, //  4px
    xs: `${defaultSpacing}px`, //     8px
    sm: `${2 * defaultSpacing}px`, //     16px
    md: `${2 * defaultSpacing}px`, //     16px
    lg: `${3 * defaultSpacing}px`, //     24px
    xl: `${4 * defaultSpacing}px`, //     32px
    xxl: `${4 * defaultSpacing}px`, //    32px
    xxxl: `${5 * defaultSpacing}px`, //   40px
    xxxxl: `${6 * defaultSpacing}px`, //  48px
    xxxxxl: `${7 * defaultSpacing}px`, //  66px
  },
  gap: {
    narrow: `${defaultSpacing}px`, //     8px
    default: `${2 * defaultSpacing}px`, //    16px
    wide: `${2.5 * defaultSpacing}px`, //       20px
    extraWide: `${4 * defaultSpacing}px`, //  32px
  },
}

export { breakpoints, container, spacing, defaultSpacing, button }
