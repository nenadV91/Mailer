export default theme => ({
  list: {
    background: 'transparent',
    marginBottom: 15,
    paddingTop: 60
    // borderBottom: theme.borders.light
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    ...theme.text.light,
    fontWeight: theme.fonts.weight.light,
    fontSize: '0.75rem'
  },
  value: {
    fontWeight: theme.fonts.weight.light,
    fontSize: '1rem'
  },
  controls: {
    display: 'flex',
    marginTop: 10,

    '& button': {
      marginRight: 10,

      '& a': {
        fontSize: '0.7rem',
        color: 'rgba(0, 0, 0, 0.87)'
      }
    }
  }
})