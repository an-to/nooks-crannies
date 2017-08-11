import request from 'superagent'

import {
  RECEIVE_BOOKS
} from './index'

export const receiveBooks = (books) => {
  console.log('getbooks result', books)
  return {
    type: RECEIVE_BOOKS,
    books
  }
}

export function getBooks() {
  console.log('getbooks')
  return (dispatch) => {
    request
      .get('api/books')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        console.log('res', res)
        let books = res.body
        dispatch(receiveBooks(books))
      })
  }
}
