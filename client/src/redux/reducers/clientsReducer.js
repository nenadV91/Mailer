import {
  CLIENTS_GET_SUCCEEDED,
  CLIENT_ADD_SUCCEEDED,
  CLIENT_REMOVE,
  CLIENT_UPDATE,
  EMAIL_SEND_SUCCEEDED
} from 'redux/types';

const initial = []

export default (state = initial, action) => {
  switch(action.type) {
    case CLIENTS_GET_SUCCEEDED:
      return action.payload;


    case CLIENT_REMOVE:
      return state.filter(({id}) => {
        return id !== action.payload
      })


    case CLIENT_ADD_SUCCEEDED:
      return [
        action.payload, 
        ...state
      ]

    
    case EMAIL_SEND_SUCCEEDED:
      const index = state.findIndex(({id}) => {
        return id === action.payload.id
      });
      
      if(index !== -1) return [
        action.payload,
        ...state.slice(0, index), 
        ...state.slice(index + 1)
      ]

      else return [
        action.payload, 
        ...state
      ]



    case CLIENT_UPDATE:
      return state.map(client => {
        if(client.id === action.payload.id) return action.payload;
        else return client
      })


    default:
      return state
  }
}