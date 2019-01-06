export default theme => ({
  "@global": {
    body: {
      ...theme.text.body1
    },
    'h1, h2, h3': {
      fontFamily: theme.fonts.family.alt,
      fontWeight: theme.fonts.weight.light,
    },
    a: {
      ...theme.text.link,
      textDecoration: 'none',

      '&:hover': {
        color: theme.colors.primary.main,
      }
    },
    '.text-center': {
      textAlign: 'center'
    },
    '.text-green': {
      color: theme.colors.green.main
    },
    '.text-red': {
      color:  theme.colors.red.main
    },
    '.text-small': {
      fontSize: '0.8rem'
    },
    '.not-defined': {
      padding: '1.2rem 24px',
      flexDirection: 'column',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '.not-defined div:first-child': {
      fontWeight: 300,
      fontSize:' 1.4rem'
    },
    '.not-defined div:last-child': {
      fontWeight: 300,
      marginTop: 10,
      textAlign: 'center',
      maxWidth: 200,
      color: 'hsl(0, 0%, 80.9%)'
    },
    '.ReactTable .rt-th, .ReactTable .rt-td': {
      padding: '10px 5px',
      color: theme.colors.text.body1,
      fontSize: '0.9rem'
    },
    '.ReactTable .rt-td': {
      display: 'flex',
      alignItems: 'center',

      '& .text-center': {
        flex: 1,
        textAlign: 'center'
      }
    },
    '.rt-tr-group': {
      transition: 'all 0.2s ease-in',

      '&:hover': {
        // background: 'white'
      }
    },
    '.ReactTable .rt-thead.-header': {
      boxShadow: theme.shadow.navbar
    },
    '.ReactTable .rt-thead .rt-th, .ReactTable .rt-thead .rt-td': {
      padding: '10px 5px'
    },
    '.rt-th:focus, .rt-th:active': {
      outline: 'none',
      boxShadow: 'none'
    },
    '.ReactTable .rt-thead .rt-th.-sort-asc, .ReactTable .rt-thead .rt-td.-sort-asc': {
      boxShadow: `inset 0 3px 0 0 ${theme.colors.primary.main}`
    },
    '.ReactTable .rt-thead .rt-th.-sort-desc, .ReactTable .rt-thead .rt-td.-sort-desc': {
      boxShadow: `inset 0 -3px 0 0 ${theme.colors.primary.main}`
    }
  },
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  layout: {
    display: 'flex',
    flex: 1,
    overflowX: 'hidden'
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  rootContent: {
    marginTop: theme.sizes.navbar.height,
    flex: 1,
    display: 'flex'
  }
})