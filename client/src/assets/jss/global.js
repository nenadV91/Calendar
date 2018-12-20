export default theme => ({
  "@global": {
    body: {
      ...theme.text.body1
    },
    'h1, h2, h3': {
      ...theme.text.title
    },
    a: {
      ...theme.text.link,

      '&:hover': {
        color: theme.colors.primary.main,
      }
    },
    '.app': {
      overflowX: 'hidden'
    },
    [`.rbc-time-view,
    .rbc-timeslot-group,
    .rbc-time-content > * + * > *,
    .rbc-time-header.rbc-overflowing,
    .rbc-time-header-content,
    .rbc-header,
    .rbc-header + .rbc-header,
    .rbc-day-bg + .rbc-day-bg`]
    : {
      borderColor: [theme.colors.borders.calendar, '!important']
    },
    '.rbc-time-content': {
      borderTop: `1px solid ${theme.colors.borders.calendar}`
    },
    '.rbc-time-header.rbc-overflowing': {
      borderLeft: '1px solid transparent !important',
    },
    '.rbc-today': {
      backgroundColor: 'rgba(0,0,0,0.03)'
    },
    '.rbc-timeslot-group': {
      alignItems: 'center',
      justifyContent: 'center'
    },
    '.rbc-time-slot': {
      '&:first-child': {
        alignItems: 'center',
        display: 'flex',
        flex: 1
      },
      '&:last-child': {
        flex: 0
      }
    },
    '.rbc-label': {
      fontSize: '0.65rem',
      color: theme.colors.text.light
    },
    '.rbc-time-view .rbc-allday-cell': {
      height: 'auto'
    },
    '.rbc-header.rbc-today div': {
      color: theme.colors.primary.main
    },
    '.rbc-time-view': {
      borderLeft: ['none', '!important'],
      borderRight: ['none', '!important']
    },
    '.rbc-toolbar': {
      padding: '0px 10px'
    },
    '.rbc-toolbar button': {
      background: '#fcfcfc',
      color: theme.colors.text.body1,
      borderColor: '#ededed',
      outline: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',

      '&:hover, &:focus, &:active, &.rbc-active, &:active:hover, &.rbc-active:hover, &.rbc-active:focus': {
        background: 'white',
        borderColor: '#ececec',
        boxShadow: '-2px 1px 7px rgba(0, 0, 0, 0.06)',
        color: theme.colors.primary.main
      }
    }
  }
})