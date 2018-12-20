import Color from 'color';

export default theme => {

  return {
    root: {

    },
    groupTitle: {
      textTransform: 'capitalize',
      margin: '10px 0',
      fontWeight: theme.fonts.weight.light,
      fontSize: '0.95rem'
    },
    events: {

    },
    event: {
      display: 'flex',
      minHeight: 50,
      background: theme.palette.background.default,
      marginBottom: 5,
      transition: 'all 0.2s',
      cursor: 'pointer',

      '&:hover': {
        background: Color(theme.palette.background.default).darken(0.05).string(),
        boxShadow: theme.shadow.navbar
      }
    },
    iconWrapper: {
      width: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      flex: 1
    },
    left: {

    },
    title: {
      margin: 0,
      fontSize: '0.8rem'
    },
    date: {
      fontSize: '0.8rem',
      color: theme.colors.text.light
    },
    icon: {
      '& svg': {
        verticalAlign: 'top'
      },
      '& .task-icon': {
        color: theme.colors.primary.main
      },
      '& .reminder-icon': {
        color: theme.colors.blue.main
      },
      '& .birthday-icon': {
        color: theme.colors.green.main
      }
    }
  }
}