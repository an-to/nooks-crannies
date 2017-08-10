import {
  RECEIVE_BOOKS
} from './index'


export default function (state = false, action) {
  switch (action.type) {
    case CHANGE_STATE:
      return action.isWaiting
    default:
      return state
  }
}