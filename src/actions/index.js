export const types = {
  CHANGE_KEYCODE: 'CHANGE_KEYCODE',
  CHANGE_KEY: 'CHANGE_KEY'
}

export function change_keycode(keycode) {
  return {
    type: types.CHANGE_KEYCODE,
    keycode: keycode
  }
}

export function change_key(keyName) {
  return {
    type: types.CHANGE_KEY,
    keyName: keyName
  }
}