export default theme => ({
  root: {
    background: 'white',
    boxShadow: theme.shadow.navbar,
    zIndex: 9999
  },
  menu: {
    marginLeft: 'auto'
  },
  button: {
    marginLeft: 10,
    padding: '5px 15px',
    fontSize: '0.7rem'
  },
  logo: {
    fontSize: '1.1rem',
    fontWeight: theme.fonts.weight.normal
  },
  toggleSidebar: {
    '@media (min-width: 992px)': {
      display: 'none'
    }
  }
})