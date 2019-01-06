export default theme => ({
  root: {
    width: '100%',
    minHeight: '100%',
    paddingLeft: `calc(${theme.sizes.sidebar.width + 24}px)`,

    '@media (max-width: 992px)': {
      paddingLeft: 24
    }
  }
})