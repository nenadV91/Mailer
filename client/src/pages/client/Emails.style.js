export default theme => ({
  root: {
    padding: '0.5rem 24px 1.2rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: `calc(${theme.sizes.sidebar.width + 24}px)`,

    '@media (max-width: 992px)': {
      paddingLeft: 24
    }
  },
  notFound: {
    marginLeft: theme.sizes.sidebar.width,
  },
  empty: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyText: {
    fontSize: '1.4rem',
    fontWeight: theme.fonts.weight.light
  },
  table: {
    border: 'none'
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 2
  },
  icon: {
    fontSize: 12
  }
})