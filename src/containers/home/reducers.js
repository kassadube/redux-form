
import * as ActionTypes from './actionTypes';

export default (state = { isPinging: false }, action) => {
    switch (action.type) {
      case ActionTypes.PING:
        return { isPinging: true };
  
      case ActionTypes.PONG:
        return { isPinging: false };
  
      default:
        return state;
    }
  };