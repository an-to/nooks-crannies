import {
  RECEIVE_BOOKS
} from './index'
const initialState = [
  {
    author: 'H G Wells',
    title: 'War of the Worlds',
    genre: 'Science-Fiction'
  }
]

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return action.books
    default:
      return state
  }
}
