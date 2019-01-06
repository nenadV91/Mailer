import {
  CLIENT_SELECT,
  CLIENT_UNSELECT
} from 'redux/types';


const initial = null;


export default (state = initial, action) => {
  switch(action.type) {
    case CLIENT_SELECT:
      return action.payload;


    case CLIENT_UNSELECT:
      return null;


    default:
      return state
  }
}