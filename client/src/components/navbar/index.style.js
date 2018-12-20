export default theme => ({
  root: {
    background: 'white',
    boxShadow: theme.shadow.navbar,
    position: 'relative',
    zIndex: 9999,
  },
  toolbar: {
    minHeight: theme.sizes.navbar.height
  },
  toggle: {
    marginRight: 10
  },
  menu: {
    marginLeft: 'auto'
  },
  img: {
    width: 35,
    verticalAlign: 'top'
  }
})