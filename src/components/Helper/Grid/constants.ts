import { saiyanTheme } from '@/styles/sc-vars-saiyan'

const columnWidth = 9 * saiyanTheme.defaultSpacing
const gutterWidth = {
  xs: 2 * saiyanTheme.defaultSpacing,
  sm: 2 * saiyanTheme.defaultSpacing,
  md: 3 * saiyanTheme.defaultSpacing,
  lg: 3 * saiyanTheme.defaultSpacing,
  xl: 3 * saiyanTheme.defaultSpacing,
}

const gridMargins = {
  xs: 2 * saiyanTheme.defaultSpacing,
  sm: 3 * saiyanTheme.defaultSpacing,
  md: 4 * saiyanTheme.defaultSpacing,
  lg: 6 * saiyanTheme.defaultSpacing,
  xl: 8 * saiyanTheme.defaultSpacing,
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
