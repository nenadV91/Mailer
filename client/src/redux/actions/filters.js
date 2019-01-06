import {
  SET_FILTER
} from 'redux/types';


export const setFilter = (filter) => {
  return {type: SET_FILTER, payload: filter}
}