export default theme => ({
  root: {
    padding: '0.5rem 24px 1.2rem',
    width: '100%',
    paddingLeft: `calc(${theme.sizes.sidebar.width + 24}px)`,

    '@media (max-width: 992px)': {
      paddingLeft: 24
    }
  },
  table: {
    border: 'none'
  },
  icon: {
    fontSize: 14,
    cursor: 'pointer',
    color: theme.colors.primary.main,
    transition: 'all 0.2s ease-in',
  },
  options: {
    color: theme.colors.primary.main
  },
  itemIcon: {
    marginRight: 5,

    '& svg': {
      fontSize: 16
    }
  },
  iconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    margin: '0 auto',
    padding: 0,
    width: 34,
    height: 34,
    boxShadow: theme.shadow.card,
    transition: 'all 0.2s ease-in',

    '&:hover': {
      boxShadow: theme.shadow.button,
      background: 'white'
    }
  },
  text: {
    ...theme.text.body1,
  }
})