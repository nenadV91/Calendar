import Color from 'color';

export default theme => ({
  root: {
    padding: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  title: {
    margin: '5px 0',
    fontSize: '1.7rem'
  },
  list: {
    flex: 1,
  },
  titleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: theme.borders.light
  },
  loading: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  empty: {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    '& svg': {
      fontSize: '3rem',
      fill: Color(theme.colors.text.light).lighten(0.25).string(),
    },

    '& h3': {
      fontSize: '1.2rem',
      margin: '10px 0',
      color: Color(theme.colors.text.light).darken(0.2).string(),
    },

    '& p': {
      maxWidth: 250,
      textAlign: 'center',
      margin: '5px 0',
      color: Color(theme.colors.text.light).lighten(0.2).string()
    }
  },
  timeFilter: {
    '&:focus': {
      background: ['transparent', '!important']
    }
  },
  timeInterval: {
    color: theme.colors.text.light,
    fontSize: '0.9rem',

    '& span:last-child': {
      marginLeft: 5
    }
  }
})