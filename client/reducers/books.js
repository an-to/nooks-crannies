import {
  RECEIVE_BOOKS
} from './index'
const initialState = [{
    id: 1,
    title: "Solaris",
    author_id: 1,
    genre_id: 1,
    first_name: "Stanislaw",
    last_name: "Lem",
    genre: "Science Fiction"
  },
  {
    id: 2,
    title: "Every Day is for the Thief",
    author_id: 2,
    genre_id: 2,
    first_name: "Teju",
    last_name: "Cole",
    genre: "Novel"
  },
  {
    id: 3,
    title: "Fifty Shades of Grey",
    author_id: 3,
    genre_id: 3,
    first_name: "E L",
    last_name: "James",
    genre: "Provocative Romance"
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