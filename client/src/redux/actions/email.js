import {
  EMAIL_SEND_REQUESTED,
  EMAIL_SEND_SUCCEEDED,
  EMAIL_SEND_FAILED,

} from 'redux/types';
import axios from 'axios';


export const sendEmail = (data) => {
  return async dispatch => {
    dispatch({type: EMAIL_SEND_REQUESTED})

    try {
      const res = await axios.post('/email', data);
      dispatch({type: EMAIL_SEND_SUCCEEDED, payload: res.data})
      return res.data;
    } catch(error) {
      dispatch({type: EMAIL_SEND_FAILED})
      throw new Error(error.response.data.message)
    }
  }
}
