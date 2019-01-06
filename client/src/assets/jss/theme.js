import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  primary: {
    main: '#3472fa',
    dark1: '#6852d1',
    light1: '#9f8bfc'
  },
  secondary: {
    main: '#ffffff'
  },
  text: {
    body1: '#5f5e5e',
    body2: '#828282',
    light: '#acacac',
    strong: '#111111'
  },
  background: {
    default: '#fafbfc'
  },
  red: {
    main: '#f14c5d'
  },
  green: {
    main: '#4bbd63'
  },
  gray: {
    main: '#97aec7'
  }
}

const sizes = {
  sidebar: {
    width: 400
  },
  navbar: {
    height: 48
  },
  fullHeight: `calc(100vh - 48px)`
}

const fonts = {
  family: {
    main: "'Roboto', sans-serif",
    alt: "'Montserrat', sans-serif",
  },
  weight: {
    xlight: 200,
    light: 300,
    normal: 400,
    strong: 600
  }
}

const text = {
  strong1: {
    color: colors.text.strong,
    fontWeight: fonts.weight.strong,
  },
  strong2: {
    color: colors.text.strong,
    fontSize: '0.8rem'
  },
  body1: {
    color: colors.text.body1,
    fontSize: '1.1rem'
  },
  body2: {
    color: colors.text.body2,
    fontWeight: fonts.weight.light,
    fontSize: '1.1rem',
  },
  light: {
    color: colors.text.light,
    fontSize: '0.8rem'
  },
  link: {
    color: colors.primary.main,
    fontWeight: fonts.weight.normal,
    fontSize: '0.9rem'
  },
  title: {
    fontFamily: fonts.family.alt,
    fontWeight: fonts.weight.light
  }
}

const shadow = {
  navbar: '0 1px 7px 0 rgba(33,38,44,.07)',
  card: '0 1px 3px 0 rgba(0,0,0,0.1)',
  search: '2px -2px 7px rgba(33,38,44,.07)',
  button: '0 .2rem 1rem rgba(0,0,0,.15)!important'
}

const borders = {
  light: '1px solid rgba(0, 0, 0, 0.075)'
}

const theme = createMuiTheme({
  colors, 
  fonts, 
  text, 
  borders, 
  shadow,
  sizes,
  palette: {
    primary: {
      main: colors.primary.main
    },
    secondary: {
      main: colors.secondary.main
    },
    background: {
      default: colors.background.default
    }
  },
  typography: {
    useNextVariants: true,
  },
  sidebar: {
    width: sizes.sidebar.width
  },
  overrides: {
    MuiTab: {
      root: {
        minWidth: "100px !important"
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: borders.light
        },
        '&:hover:before': {
          borderBottom: ['1px solid rgba(0, 0, 0, 0.35)', '!important']
        },
        '&:after': {
          borderBottom: [`1px solid ${colors.primary.main}`, '!important']
        },
      }
    },
    MuiListSubheader: {
      root: {
        color: colors.primary.main,
        textTransform: 'uppercase'
      }
    },
    MuiSelect: {
      selectMenu: {
        ...text.light,
        fontSize: '0.9rem'
      },
      select: {
        '&:focus': {
          backgroundColor: 'initial'
        }
      }
    },
    MuiPaper: {
      elevation8: {
        boxShadow: shadow.card
      },
      elevation1: {
        boxShadow: 'none',
        // borderBottom: borders.light
      }
    },
    MuiExpansionPanel: {
      root: {
        '&:before': {
          backgroundColor: 'none'
        },
        borderBottom: borders.light
      }
    },
    MuiMenuItem: {
      root: {
        ...text.body1,
        height: 18
      }
    },
    MuiButton: {
      sizeSmall: {
        fontSize: '0.7rem'
      }
    },
    MuiFormLabel: {
      root: {
        color: 'black'
      }
    }
  }
});


export default theme;

