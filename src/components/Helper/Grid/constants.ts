import { defaultTheme } from '@/styles/sc-vars-default'

const columnWidth = 9 * defaultTheme.defaultSpacing
const gutterWidth = {
  xs: 2 * defaultTheme.defaultSpacing,
  sm: 2 * defaultTheme.defaultSpacing,
  md: 3 * defaultTheme.defaultSpacing,
  lg: 3 * defaultTheme.defaultSpacing,
  xl: 3 * defaultTheme.defaultSpacing,
}

const gridMargins = {
  xs: 2 * defaultTheme.defaultSpacing,
  sm: 3 * defaultTheme.defaultSpacing,
  md: 4 * defaultTheme.defaultSpacing,
  lg: 6 * defaultTheme.defaultSpacing,
  xl: 8 * defaultTheme.defaultSpacing,
}

const fixedColumnValues = {
  xs: {
    totalWidth: 4 * columnWidth + 3 * gutterWidth.xs + 2 * gridMargins.xs,
  },
  sm: {
    totalWidth: 8 * columnWidth + 7 * gutterWidth.sm + 2 * gridMargins.sm,
  },
  md: {
    totalWidth: 8 * columnWidth + 7 * gutterWidth.md + 2 * gridMargins.md,
  },
  lg: {
    totalWidth: 12 * columnWidth + 11 * gutterWidth.lg + 2 * gridMargins.lg,
  },
  xl: {
    totalWidth: 12 * columnWidth + 11 * gutterWidth.xl + 2 * gridMargins.xl,
  },
}

export { fixedColumnValues, gridMargins, gutterWidth }
