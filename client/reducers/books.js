import {
  RECEIVE_BOOKS
} from './index'
const initialState = [
  {
    author:"HG Wells",
    title:"War of the worlds",
    genre:"Sci-Fi"
  }
]

export default function (state=initialState, action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return action.books
    default:
      return state
  }
}
