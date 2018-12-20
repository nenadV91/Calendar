import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  primary: {
    main: '#6A72FF',
    light: '#8796fd'
  },
  blue: {
    main: '#618bf1',
    light: '#90c7ff'
  },
  green: {
    main: '#23c0fa',
    light: '#6ce8e6'
  },
  text: {
    body1: '#5f5e5e',
    body2: '#828282',
    light: '#acacac',
    strong: '#111111'
  },
  borders: {
    // calendar: '#ececec'
    calendar: '#dcdcdc'
  }
}

const sizes = {
  navbar: {
    height: 48
  },
  fullHeight: `calc(100vh - 48px)`
}

const background = {
  input: 'rgba(245, 245, 245, 0.72)'
}

const fonts = {
  family: {
    main: "'Open Sans', sans-serif",
    alt: "'Roboto', sans-serif"
  },
  weight: {
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
  event: [
    '0 5px 10px 0 rgba(0,0,0,0.12)',
    '0 1px 15px 0 rgba(0,0,0,0.08)',
    '0 3px 5px -1px rgba(0,0,0,0.2)'
  ],
  sidebar: [
    '0px 4px 5px -5px rgba(0, 0, 0, 0.2)',
    '0px 2px 10px 5px rgba(0, 0, 0, 0.04)'
  ],
  search: '2px -2px 7px rgba(33,38,44,.07)',
  button: '0 .2rem 1rem rgba(0,0,0,.15)!important',
  content: '0 1px 6px 0 rgba(0,0,0,0.2)',
  menu: '0px 2px 7px 0 rgba(33, 38, 44, 0.15)'
}

const borders = {
  light: '1px solid rgba(0, 0, 0, .1)'
}

const theme = createMuiTheme({
  colors, 
  fonts, 
  text, 
  borders, 
  shadow,
  background,
  sizes,
  palette: {
    primary: {
      main: '#6A72FF'
    },
    background: {
      default: '#f8f8f8'
    }
  },
  typography: {
    useNextVariants: true,
  },
  sidebar: {
    width: 300
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: background.input,
      },
      disabled: {
        backgroundColor: [background.input, '!important']
      },
      input: {
        padding: '0.65rem 1rem'
      },
      underline: {
        '&:before, &:hover': {
          borderBottom: ['none', '!important']
        }
      }
    },
    MuiInputBase: {
      input: {
        color: colors.text.body1,
        lineHeight: 1.45
      }
    },
    MuiPaper: {
      elevation8: {
        boxShadow: shadow.menu
      }
    },
    MuiSelect: {
      selectMenu: {
        padding: '0.4rem 1rem',
        paddingRight: 30
      }
    },

  }
});


export default theme;

