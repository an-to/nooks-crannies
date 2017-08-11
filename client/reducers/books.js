import {
  RECEIVE_BOOKS
} from '../actions/index'
const initialState = [
  {
      id: 2,
      title: "Every Day is for the Thief",
      author_id: 2,
      genre_id: 2,
      first_name: "Teju",
      last_name: "Cole",
      genre: "Novel"
    }
]

export default function (state = [], action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return [...action.books]
    default:
      return state
  }
}
