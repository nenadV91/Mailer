export default theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.2rem 24px',
  },
  title: {
    fontSize: '2rem',
    margin: 0
  },
  right: {
    fontWeight: theme.fonts.weight.light,
    '& strong': {
      fontSize: '1.4rem'
    },
    '& span': {
      marginLeft: 10
    }
  }
})