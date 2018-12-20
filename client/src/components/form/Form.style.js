export default theme => ({
  root: {
    padding: '1.2rem',
  },
  title: {
    margin: '5px 0',
    fontSize: '1.7rem'
  },
  titleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: theme.borders.light
  },
  timeRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  typeSelect: {
    '&:focus': {
      background: ['transparent', '!important']
    }
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10
  },
  error: {
    fontSize: '0.9rem'
  },
  loader: {
    marginLeft: 15,
    width: 20,
    height: 20
  }
})

