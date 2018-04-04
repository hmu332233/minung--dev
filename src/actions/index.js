export const types = {
  CHANGE_KEYCODE: 'CHANGE_KEYCODE'
}

export function change_keycode(keycode) {
  return {
    type: types.CHANGE_KEYCODE,
    keycode: keycode
  }
}