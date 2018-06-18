import { types } from '../actions';

const keycodeInitialState = {
  keycode: 0,
  keyName: 'a'
};

export default function keycode(state = keycodeInitialState, action) {
  switch(action.type) {
    case types.CHANGE_KEYCODE:
      return Object.assign({}, state, {
        keycode: action.keycode
      });
        
      break;
    case types.CHANGE_KEY:
      return Object.assign({}, state, {
        keyName: action.keyName
      });
      break;
    default:
      return state;
      break;
  }
}