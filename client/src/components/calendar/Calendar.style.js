import Color from 'color';

export default theme => {
  const colors = {
    task: theme.colors.primary.main,
    reminder: theme.colors.blue.main,
    birthday: theme.colors.green.main
  }

  const bg = color => Color(color).alpha(0.25).string();
  const selected = color => Color(color).alpha(0.6).string();

  const event = color => ({
    background: bg(color),
    borderTop: [`3px solid ${color}`, '!important'],
    color: '#2c2c2c85',

    '&.rbc-selected': {
      background: selected(color)
    }
  })

  return {
    root: {
      '& .rbc-time-content': {
        overflowX: 'hidden'
      }
    },
    event: {
      border: ['none', '!important'],
      transition: 'all 0.2s ease',
      borderRadius: 2,

      '&:hover': {
        boxShadow: theme.shadow.event
      },

      '&.rbc-selected': {
        boxShadow: theme.shadow.event
      },

      '& .rbc-event-label': {
        fontSize: '0.7rem'
      },
      '& .rbc-event-content': {
        '& > div': {
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    },
    task: event(colors.task),
    reminder: event(colors.reminder),
    birthday: event(colors.birthday),
    eventTitle: {
      fontSize: '0.9rem'
    },
    weekDay: {
      color: theme.colors.text.light,

      '&:hover': {
        color: theme.colors.primary.main
      },

      '& > :first-child': {
        fontSize: '2.4rem'
      }
    },
    eventDate: {
      fontSize: '0.6rem'
    }
  }
}