import {
  SET_FILTER
} from 'redux/types';

const initial = {
  source: "",
  contacted: "",
  rating: "",
  field: "",
  date_added: ""
}

export default (state = initial, action) => {
  switch(action.type) {
    case SET_FILTER:
      return {
        ...state, 
        ...action.payload
      }


    default:
      return state
  }
}