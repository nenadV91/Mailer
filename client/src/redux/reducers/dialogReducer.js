import {
  OPEN_DIALOG,
  CLOSE_DIALOG
} from 'redux/types';

const initial = false

export default (state = initial, action) => {
  switch(action.type) {
    case OPEN_DIALOG:
      return true;

    case CLOSE_DIALOG:
      return false;

    default:
      return state
  }
}