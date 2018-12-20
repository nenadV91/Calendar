import Color from 'color';

export default theme => ({
  date: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 5
  },
  dateItem: {
    flex: 1
  },
  time: {
    marginLeft: 15,
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  timeItem: {
    flex: 1,
  },
  start: {
    marginRight: 10
  },
  end: {
    marginLeft: 10
  },
  clear: {
    fontSize: '16px',
    color: theme.colors.text.light,
    marginLeft: 10,
    cursor: 'pointer'
  },
  empty: {
    paddingBottom: 7,
    paddingTop: 8,
    color: Color(theme.colors.text.light).lighten(0.1).string(),
    display: 'flex',
    alignItems: 'center',
    fontWeight: theme.fonts.weight.light,

    '& svg': {
      marginRight: 10
    }
  },
})