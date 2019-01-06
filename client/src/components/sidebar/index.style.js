export default theme => ({
  root: {
    width: `${theme.sidebar.width}px`,
    transition: 'all 0.2s ease-in',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    marginTop: theme.sizes.navbar.height,
    zIndex: 2,
    maxWidth: '100%',

    '@media (max-width: 992px)': {
      transform: `translateX(-${theme.sidebar.width}px)`
    }
  },
  paper: {
    position: 'relative',
    backgroundColor: 'white',
    // boxShadow: theme.shadow.navbar,
    borderRight: theme.borders.light,
    width: '100%',
    maxWidth: '100%',
    overflowX: 'hidden'
  },
  hide: {
    transform: `translateX(-${theme.sidebar.width}px)`
  },
  show: {
    transform: `translateX(0px)`
  }
})