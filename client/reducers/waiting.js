import {
  CHANGE_WAITING
} from './index'


export default function (state = false, action) {
  switch (action.type) {
    case CHANGE_WAITING:
      return action.isWaiting
    default:
      return state
  }
}