export default props => ({
  root: {
    width: `${props.sidebar.width}px`,
    boxShadow: props.shadow.sidebar,
    transition: 'all 0.3s',
    position: 'absolute',
    zIndex: 1,
    height: '100%',
  },
  paper: {
    borderRight: "none",
    position: 'relative'
  },
  hide: {
    transform: `translateX(-${props.sidebar.width}px)`
  },
  calendar: {
    '&.rc-calendar': {
      width: '100%',
      boxShadow: 'none',
      border: '1px solid #e6e6e6',
      borderRight: 'none',
      borderLeft: 'none'
    },
    '& .rc-calendar-header': {
      borderBottom: '1px solid #e6e6e6'
    },
    '& .rc-calendar-footer': {
      borderTop: '1px solid #e6e6e6'
    }
  }
})