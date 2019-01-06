export default theme => ({
  formControl: {
    marginTop: 5,
    marginBottom: 15
  },
  label: {
    ...theme.text.light,
    textTransform: 'uppercase',
    fontWeight: theme.fonts.weight.normal
  },
  slider: {
    padding: '22px 0px',
    width: '100%',
    marginTop: 15,
    paddingLeft: 8
  },
  track: {
    height: 1,
    backgroundColor: 'black',
    opacity: 0.1
  },
  group: {
    margin: '10px 0'
  },
  radioGroup: {
    marginTop: 20
  },
  radio: {
    '& span:last-child': {
      fontSize: '0.84rem'
    },

    '& svg': {
      fontSize: 16
    },

    '& > span': {
      marginLeft: 6,
      padding: 6
    }
  },
  checked: {
    '& + span': {
      color: theme.colors.primary.main
    }
  },
  ratingLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    transform: 'scale(1)',
    fontSize: '0.75rem',
    paddingRight: 8,

    '& span:last-child': {
      color: 'rgba(0, 0, 0, 0.54)'
    }
  },
  textField: {
    padding: '2px 4px',
  },
  formPaper: {
    // boxShadow: theme.shadow.card,
    boxShadow: 'none',
    backgroundColor: 'transparent',
    borderBottom: theme.borders.light,
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    color: theme.colors.text.light,
    fontSize: 20,

    '&:first-child': {
      marginRight: 10
    },

    '&:last-child': {
      cursor: 'pointer'
    }
  },
  listItem: {
    backgroundColor: 'transparent',
    // marginBottom: 15,
    flexDirection: 'column',
    paddingBottom: 5
    // borderBottom: theme.borders.light
  },
  list: {
    paddingTop: 0
  }
})