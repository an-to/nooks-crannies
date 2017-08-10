import {
  RECEIVE_BOOKS
} from './index'

export default function (state=[], action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return action.books
    default: 
      return state
  }
}