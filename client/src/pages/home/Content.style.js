export default theme => ({
  root: {
    transition: 'all 0.2s ease-in',
    background: theme.palette.background.default,
    minHeight: theme.sizes.fullHeight,
    padding: '10px 0',
    position: 'relative',
    display: 'flex',
    zIndex: 3,
    flex: 1,
    width: "100%",
    whiteSpace: 'nowrap',
    boxShadow: theme.shadow.navbar
  },
  isOpen: {
    marginLeft: theme.sidebar.width
  },
  calendar: {
    height: `calc(100vh - ${theme.sizes.navbar.height + 4}px)`,
    paddingRight: [0, '!important'],
    paddingBottom: [0, '!important']
  },
  paper: {
    padding: [0, '!important']
  },
  fab: {
    position: 'fixed',
    bottom: 30,
    right: 30
  },
  link: {
    color: 'white'
  }
})