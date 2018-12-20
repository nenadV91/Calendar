export default theme => {
  let colors = {
    task: theme.colors.primary.main,
    reminder: theme.colors.blue.main,
    birthday: theme.colors.green.main
  }

  return {
    root: {
      padding: '1.2rem'
    },
    title: {
      fontSize: '0.9rem',
      margin: '10px 0'
    },
    checkbox: {
      padding: '6px 12px'
    },
    taskColor: {
      color: [colors.task, '!important']
    },
    reminderColor: {
      color: [colors.reminder, '!important']
    },
    birthdayColor: {
      color: [colors.birthday, '!important']
    }
  }
}