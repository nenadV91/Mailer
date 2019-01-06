import {
  TOGGLE_SIDEBAR
} from 'redux/types';


const initial = false;


export default (state = initial, action) => {
  switch(action.type) {
    case TOGGLE_SIDEBAR:
      return !state;


    default:
      return state
  }
}