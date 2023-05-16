// Saiyan Theme config
import {
  Body,
  Color,
  Dimension,
  Font,
  Footer,
  Header,
  HeadingTheme,
  HeroTheme,
  Polished,
  Theme,
  PriceConfig,
  Transition,
} from '@/types/theme'
import { breakpoints, button, container, defaultSpacing, spacing } from './sc-vars-global'

const name = 'Default'

const color: Color = {
  primary: '#00C8DC', // Buttons, Dividers, Secondary Button text
  secondary: '#0b1f38',
  grey1: '#FAFAFA',
  grey2: '#E5E5E5', // Dropdown active / hover, // Borders
  grey3: '#CCCCCC',
  grey4: '#999999', // Body text
  grey5: '#666666', // Product card provider, onboardinng button text, links, navigation text +  buttons
  grey6: '#333333', // Heading text, Product card [ description, meta ]
  black: '#000000',
  white: '#FFFFFF',
  success: '#55e1a7',
  alert: '#f1a153',
  error: '#e24c4c',
  info: '#009fe3',
  selected: '#4bcade',
  textColor: '#999999',
  clear: 'transparent',
}

const body: Body = {
  background: color.grey1,
}

const polished: Polished = {
  inactive: 0.4,
  darken: 0.04,
}

const header: Header = {
  background: 'white',
  topBar: 'white',
  color: 'grey3',
  statusType: 'white',
  height: '80px',
  padding: 'xs xxxl',
}

const footer: Footer = {
  background: 'white',
  statusType: 'white',
  height: '80px',
  color: 'grey3',
  padding: 'xs xxxl',
}

const heading: HeadingTheme = {
  featured: {
    textTransform: 'none',
    fontPadding: '0',
    fontSize: '75px',
    lineHeight: {
      xl: '80px',
      md: '70px',
      xs: '58px',
    },
  },
}

const font: Font = {
  family: {
    default: 'OswaldLight, Arial, sans-serif',
    featured: 'OswaldBold, Arial, sans-serif',
    meta: 'OswaldStencilBold, Arial, sans-serif',
    branded: 'MMHeadline, Arial, sans-serif',
    price: 'MMPrice, sans-serif',
  },
  spacing: {
    base: '0.4px',
    half: '0.2px',
  },
  size: {
    xxxs: '10px',
    xxs: '12px', // Product Card Tag (competency), Product Card Badge (Playlist)
    xs: '14px', //  Small body text, Product card [  provider | meta ]
    sm: '16px', // Body text, header links
    md: '18px', // H5
    lg: '22px', // H4, Product card description
    xl: '26px', // H3, Playlist Card description
    xxl: '30px', // H2,
    xxxl: '34px', // H1
    xxxxl: '40px',
    xxxxxl: '48px',
  },
  lineHeight: {
    xxxs: `16px`,
    xxs: `16px`,
    xs: `20px`,
    sm: `24px`,
    md: `28px`, // 24 -> 28
    lg: `32px`, // 28 -> 32
    xl: `40px`,
    xxl: `44px`,
    xxxl: `44px`,
    xxxxl: `44px`,
    xxxxxl: '48px',
  },
  weight: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  textTransform: 'initial',
  superscript: {
    size: {
      xxxs: '8px',
      xxs: '9px',
      xs: '11px',
      sm: '12px',
      md: '14px',
      lg: '15px',
      xl: '18px',
      xxl: '21px',
      xxxl: '24px',
      xxxxl: '36px',
      xxxxxl: '40px',
    },
    top: {
      xxxs: '-1px',
      xxs: '-1px',
      xs: '-2px',
      sm: '-3px',
      md: '-3px',
      lg: '-3px',
      xl: '-3px',
      xxl: '-4px',
      xxxl: '-7px',
      xxxxl: '-8px',
      xxxxxl: '-9px',
    },
  },
}

const hero: HeroTheme = {
  size: {
    sm: '300px',
    md: '350px',
    lg: '400px',
  },
  color: 'primary',
  family: 'featured',
  intro: {
    font: {
      size: font.size.sm,
      height: '21px',
      weight: 'bold',
    },
    background: 'rgba(5, 5, 5, 0.4)',
    textTransform: 'uppercase',
  },
  copy: {
    font: {
      size: '55px',
      height: '55px',
      weight: 'bold',
    },
    background: 'rgba(0, 0, 0, 0.2)',
  },
}

const dimension: Dimension = {
  borderWidth: '1px',
  borderRadius0: '0',
  borderRadius1: '4px',
  borderRadius2: '8px',
  borderRadius3: '12px',
  borderRadius4: '16px',
  borderRadius5: '20px',
  borderRadius6: '25px',
  borderRadius7: '40px',
  borderRadius8: '60px',
  elevationLevel1: '0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.06), 0 1px 3px 0 rgba(0,0,0,0.10)',
  elevationLevel2: '0 3px 4px 0 rgba(0,0,0,0.07), 0 3px 3px -2px rgba(0,0,0,0.06), 0 1px 8px 0 rgba(0,0,0,0.10)',
  elevationLevel3: '0 8px 10px 1px rgba(0,0,0,0.07), 0 3px 14px 2px rgba(0,0,0,0.06), 0 5px 5px -3px rgba(0,0,0,0.10)',
  elevationLevel4:
    '0 24px 38px 3px rgba(0,0,0,0.07), 0 9px 46px 8px rgba(0,0,0,0.06), 0 11px 15px -7px rgba(0,0,0,0.10)',
}

const transition: Transition = {
  short: '0.15s',
  medium: '0.25s',
  long: '0.33s',
  defaultEasing: 'ease-in-out',
}

const price: PriceConfig = {
  default: color.grey1,
  invert: color.grey1,
  shadow:
    '0 0 1em transparent, 0 -0.04em 0 #fff, 0.04em 0 0 #fff, 0 0.04em 0 #fff, -0.034em -0.024em 0 #fff, -0.03em -0.04em 0 #fff, -0.01em -0.04em 0 #fff, 0.052em -0.04em 0 #fff, 0.04em -0.04em 0 #fff, 0.02em -0.04em 0 #fff, 0.047em -0.025em 0 #fff, -0.045em 0.016em 0 #fff, -0.039em 0.038em 0 #fff, -0.052em 0.04em 0 #fff, -0.042em 0.04em 0 #fff, 0.031em 0.028em 0 #fff, 0.029em 0.04em 0 #fff, rgba(0,0,0,.2) 0.05em 0 0.05em, rgba(0,0,0,.2) 0 0.05em 0.05em, rgba(0,0,0,.2) 0.05em 0.05em 0.05em',
  shadowInvert: 0,
  prefix: {
    shadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
  },
  branded: {
    color: {
      default: color.black,
      invert: color.black,
    },
    size: {
      small: 'xxl',
      large: 'xxxxxl',
      responsive: 'responsive',
    },
    prefixSize: {
      small: 'lg',
      large: 'xxl',
      responsive: 'responsive',
    },
    letterSpacing: {
      small: '1px',
      large: '2px',
    },
    lineHeight: {
      small: 'lg',
      large: 'xxxxxl',
    },
    flexWrapper: {
      padding: {
        small: '0px 6px 0px 0px',
        large: '0px 6px 0px 0px',
        responsive: '0px 6px 0px 0px',
      },
    },
    prefix: {
      lineHeight: {
        small: '35px',
        large: '26px',
      },
      fontSize: {
        small: '14px',
        large: '28px',
      },
    },
    whole: {
      lineHeight: {
        small: '44px',
        large: '44px',
      },
      fontSize: {
        small: '28px',
        large: '48px',
      },
    },
    decimal: {
      lineHeight: {
        small: '40px',
        large: '38px',
      },
      fontSize: {
        small: '12px',
        large: '24px',
      },
      top: {
        small: '-4px',
        large: '-7px',
      },
    },
  },
  regular: {
    color: {
      default: color.black,
      invert: color.white,
    },
    size: {
      small: 'sm',
      large: 'lg',
      responsive: 'responsive',
    },
    prefixSize: {
      small: 'lg',
      large: 'xxl',
      responsive: 'responsive',
    },
    lineHeight: {
      small: 'xs',
      large: 'md',
    },
    energyEfficiency: {
      marginTop: {
        small: '7px',
        large: '1px',
      },
    },
  },
  strikeInfo: {
    color: color.grey4,
    height: {
      small: '20px',
      large: '28px',
    },
    superPrice: {
      fontSize: {
        small: '14px',
        large: '18px',
      },
      left: {
        small: '-3px',
        large: '-2px',
      },
    },
    priceWrapper: {
      paddingBottom: {
        small: '4px',
        large: '4px',
      },
      bottom: {
        small: '-4px',
        large: '4px',
      },
      right: {
        small: '-6px',
        large: '-7px',
      },
    },
  },
  strikePrice: {
    sup: {
      small: '12px',
      large: '15px',
    },
    span: {
      small: '18px',
      large: '24px',
    },
  },
}

export const defaultTheme: Theme = {
  name,
  button,
  breakpoints,
  color,
  body,
  container,
  header,
  footer,
  price,
  hero,
  heading,
  defaultSpacing,
  spacing,
  dimension,
  font,
  transition,
  polished,
}
