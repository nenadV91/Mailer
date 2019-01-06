export default theme => ({
  control: {
    marginBottom: 15
  },
  list: {
    background: 'transparent',
    marginBottom: 15,
    borderBottom: theme.borders.light
  },
  userItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '6px 0'
  },
  switchItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0
  },
  label: {
    ...theme.text.light,
    fontWeight: theme.fonts.weight.light,
    fontSize: '0.75rem'
  },
  value: {
    fontWeight: theme.fonts.weight.light,
    fontSize: '0.9rem'
  },
  closeIcon: {
    fontSize: 18,
    cursor: 'pointer',
    color: theme.colors.text.light,
    transition: 'all 0.2s',

    '&:hover': {
      color: theme.colors.text.body1
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& > span:first-child': {
      color: theme.colors.primary.main,
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      fontWeight: 500
    }
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  spinner: {

  }
})