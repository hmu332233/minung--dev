import { types } from '../actions';

const keycodeInitialState = {
  keycode: 0
};

export default function keycode(state = keycodeInitialState, action) {
  switch(action.type) {
    case types.CHANGE_KEYCODE:
      return {
        keycode: action.keycode
      };
      break;
    default:
      return state;
      break;
  }
}