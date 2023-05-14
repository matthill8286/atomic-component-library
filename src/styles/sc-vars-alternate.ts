// Alternate Theme config
import {
  Body,
  ButtonTheme,
  Color,
  Dimension,
  Font,
  Footer,
  Header,
  HeadingTheme,
  PriceConfig,
  HeroTheme,
  Polished,
  Theme,
  Transition,
} from '@/types/theme'
import { breakpoints, button as buttonGlobal, container, defaultSpacing, spacing } from './sc-vars-global'

const name = 'Alternate'

const color: Color = {
  primary: '#EF7C00',
  secondary: '#121723',
  grey1: '#F2F3F4',
  grey2: '#C9CCCD',
  grey3: '#8B8F91',
  grey4: '#454647',
  grey5: '#242424',
  grey6: '#666666',
  black: '#000',
  white: '#fff',
  success: '#30885f',
  alert: '#ffbe00',
  error: '#b43135',
  info: '#5741d9',
  selected: '#eb680b',
  textColor: '#454647',
  clear: 'transparent',
}

const body: Body = {
  background: color.grey1,
}

const polished: Polished = {
  inactive: 0.4,
  darken: 0.04,
}

const button: ButtonTheme = {
  ...buttonGlobal,
  isRound: false,
}

const header: Header = {
  background: 'grey5',
  topBar: 'grey4',
  color: 'white',
  statusType: 'white',
  height: '80px',
  padding: 'xs xxxl',
}

const footer: Footer = {
  background: 'grey5',
  statusType: 'white',
  color: 'white',
  height: '80px',
  padding: 'xs xxxl',
}

const heading: HeadingTheme = {
  featured: {
    textTransform: 'uppercase',
    fontPadding: '8px',
    fontSize: '75px',
    lineHeight: {
      xl: '48px',
      md: '40px',
      xs: '32px',
    },
  },
}

const font: Font = {
  family: {
    default: 'Raleway, Arial, sans-serif',
    featured: 'RalewayBlack, Arial, sans-serif',
    meta: 'RalewayLight, Arial, sans-serif',
    branded: 'MMHeadline, Arial, sans-serif',
    price: 'MMPrice, sans-serif',
  },
  spacing: {
    base: '0.4px',
    half: '0.2px',
  },
  size: {
    xxxs: '10px',
    xxs: '12px',
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '22px',
    xl: '26px',
    xxl: '32px',
    xxxl: '50px',
    xxxxl: '60px',
    xxxxxl: '70px',
  },
  lineHeight: {
    xxxs: '16px',
    xxs: '16px',
    xs: '20px',
    sm: '24px',
    md: '28px', // from 24 to 28
    lg: '32px', // from 28 to 32
    xl: '40px',
    xxl: '52px',
    xxxl: '70px',
    xxxxl: '80px',
    xxxxxl: '90px',
  },
  weight: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  textTransform: 'uppercase',
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
      xxxxl: '30px',
      xxxxxl: '32px',
    },
    top: {
      xxxs: '0px',
      xxs: '-1px',
      xs: '-2px',
      sm: '-3px',
      md: '-3px',
      lg: '-3px',
      xl: '-4px',
      xxl: '-4px',
      xxxl: '-6px',
      xxxxl: '-7px',
      xxxxxl: '-8px',
    },
  },
}

const hero: HeroTheme = {
  size: {
    sm: '300px',
    md: '350px',
    lg: '400px',
  },
  color: 'white',
  family: 'featured',
  intro: {
    font: {
      size: font.size.md,
      height: '21px',
      weight: 'regular',
    },
    textTransform: 'uppercase',
    background: 'rgba(5, 5, 5, 0.8)',
  },
  copy: {
    font: {
      size: '35px',
      height: '50px',
      weight: 'bold',
    },
    background: 'rgba(5, 5, 5, 0.1)',
  },
}

const dimension: Dimension = {
  borderWidth: '1px',
  borderRadius0: '0',
  borderRadius1: '0',
  borderRadius2: '0',
  borderRadius3: '0',
  borderRadius4: '0',
  borderRadius5: '0',
  borderRadius6: '0',
  borderRadius7: '0',
  borderRadius8: '0',
  elevationLevel1: '0 1px 1px 0 rgba(0,0,0,0.10)',
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

export const alternateTheme: Theme = {
  name,
  button,
  breakpoints,
  color,
  body,
  container,
  header,
  footer,
  hero,
  heading,
  price,
  defaultSpacing,
  spacing,
  dimension,
  font,
  transition,
  polished,
}
