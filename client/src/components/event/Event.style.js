// import Color from 'color';

export default theme => {
  const colors = {
    task: theme.colors.primary.main,
    reminder: theme.colors.blue.main,
    birthday: theme.colors.green.main
  }
  
  const event = color => ({
    fontSize: '30px',
    color: color
  })

  return {
    main: {
      padding: '1.2rem',
      display: 'flex',
      flexDirection: 'column',
      flex: '1'
    },
    title: {
      fontSize: '1.7rem',
      margin: '10px 0'
    },
    description: {
      margin: '10px 0'
    },
    task: event(colors.task),
    reminder: event(colors.reminder),
    birthday: event(colors.birthday),
    header: {
      ...theme.text.title,
      padding: '2rem 1.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: theme.borders.light
    },
    haderInfo: {
      display: 'flex',
      alignItems: 'center'
    },
    headerInfoText: {
      marginLeft: 15
    },
    date: {
      fontSize: '1.2rem'
    },
    type: {
      textTransform: 'capitalize',
      marginBottom: 5
    },
    time: {
      fontSize: '1rem',
      marginTop: 5,
      color: theme.colors.text.light
    },
    info: {
      borderTop: theme.borders.light,
      marginTop: 'auto'
    },
    infoTitle: {
      ...theme.text.strong1,
      margin: '10px 0'
    },
    infoItem: {
      fontSize: '0.9rem',

      '& > span:first-child': {
        color: theme.colors.text.light
      }
    },
    editButtons: {
      marginTop: 15,

      '& button:first-child': {
        marginRight: 15
      }
    }
  }
}