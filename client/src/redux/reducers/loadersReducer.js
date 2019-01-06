import {
  CLIENT_ADD_REQUESTED,
  CLIENT_ADD_SUCCEEDED,
  CLIENT_ADD_FAILED,
  CLIENTS_GET_SUCCEEDED,
  CLIENTS_GET_FAILED,
  EMAIL_SEND_REQUESTED,
  EMAIL_SEND_SUCCEEDED,
  EMAIL_SEND_FAILED
} from 'redux/types';


const initial = {
  addClient: false,
  initial: true,
  emailForm: false
}




export default (state = initial, action) => {
  switch(action.type) {
    case CLIENT_ADD_REQUESTED:
      return {
        ...state,
        addClient: true
      }


    case CLIENT_ADD_SUCCEEDED: 
      return {
        ...state,
        addClient: false
      }
    

    case CLIENT_ADD_FAILED:
      return {
        ...state,
        addClient: false
      }
  

    case EMAIL_SEND_REQUESTED:
      return {
        ...state,
        emailForm: true
      }


    case EMAIL_SEND_SUCCEEDED: 
      return {
        ...state,
        emailForm: false
      }
    

    case EMAIL_SEND_FAILED:
      return {
        ...state,
        emailForm: false
      }


    case CLIENTS_GET_SUCCEEDED:
      return {
        ...state,
        initial: false
      }


    case CLIENTS_GET_FAILED:
      return {
        ...state,
        initial: false
      }

    default:
      return state
  }
}