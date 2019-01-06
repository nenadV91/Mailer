import React, { Component } from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import App from 'components/App';
import theme from 'assets/jss/theme';

class Root extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <MuiThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default Root
