import {combineReducers} from 'redux';
import clientsReducer from './clientsReducer';
import filtersReducer from './filtersReducer';
import dialogReducer from './dialogReducer';
import loadersReducer from './loadersReducer';
import selectedReducer from './selectedReducer';
import sidebarReducer from './sidebarReducer';


export default combineReducers({
  clients: clientsReducer,
  filters: filtersReducer,
  dialog: dialogReducer,
  loaders: loadersReducer,
  selected: selectedReducer,
  sidebar: sidebarReducer
});