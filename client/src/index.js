import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import * as serviceWorker from './serviceWorker';
import 'react-table/react-table.css'
import 'assets/css/style.css';
import Root from 'components/Root';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers';


const store = createStore(
  reducers, {}, 
  applyMiddleware(reduxThunk)
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
